// Modules for Microsoft sql server connection.
const sql = require("mssql");
var config = require('./db_config')
const read = require('read')
const { exec } = require('child_process')


// Contains methods for generating common query.
const query_factory = require("./query_factory");

// Ensure mutual exclusive operation on sql server.
//  * every query must have a timeout to avoid deadlock
const { Mutex } = require('async-mutex');
const db_mutex = new Mutex();

// Common api for querying
function db_query(query_string, next) {
    db_mutex.acquire().then((release) => {
        const conn = new sql.ConnectionPool(config)
        conn.connect().then((conn) => {
            conn.query(query_string).then((result) => {
                /* Below comment is duplicate of result preprocessing code in DirectQuery.js.  
                 * Thinking of a way to get that preprocessing done within the router */
                /*
                var data = result.recordset.
                data.forEach(element => {
                    Object.keys(element).forEach(key => {
                        if(element[key] == null)    element[key]='-'
                        else if(element[key] == true) element[key]='true'
                        else if(element[key] == false)    element[key]='false'
                    });
                });*/
                next(null, result.recordset);
                release();
            }).catch(error => {
                next(error, null);
                release();
            });
        }).catch(error => {
            next(error, null);
            release();
        });
    });
}

// Router
function add_router(app) {
    app.get('/showall', function (req, res) {
        queryString = query_factory.showall();
        db_query(queryString, (err, result) => {
            if (!err) res.send(result);
            else res.status(400).send(err);
        });
    });
}


/* Gets username and password from stdin.
 * Passes to callback (configured connection, null) if configuration succeeded, or (null, error reason) otherwise. */
config_db = async (next) => {
    var error_reason = null;
    var conn;

    username_resolver = new Promise(async (res, err) => {
        read({ prompt: 'GT username: ' }, (err, result, def) => {
            res(result)
        })
    })
    username = await username_resolver

    password_resolver = new Promise(async (res, err) => {
        read({ prompt: 'Password: ', silent: true, replace: '*' }, (err, result, def) => {
            res(result)
        })
    })
    password = await password_resolver

    config.user = username;
    config.password = password;

    db_connector = new Promise(async (res, err) => {
        conn = new sql.ConnectionPool(config)
        conn.connect().then((conn) => {
            res(true)
        }).catch(error => {
            error_reason = error
            res(false)
        })
    })
    success = await db_connector

    if (!success) conn = null;

    next(conn, error_reason);
};

module.exports = function (app) {
    // Use recursion to repeatedly retry database configuration attmpt.
    db_connection_check = () => {
        config_db((conn, error_reason) => {
            if (conn) {
                console.log('\x1b[34m', "[Server] Database configuration successful!\n");
                add_router(app);
                console.log('\x1b[0m', "[Server] Now attaching router...\n")
                console.log('[Server] Router successfully attached.\n');
                console.log("[Client] Now starting the client");
                client = exec('npm run client')
                client.stdout.on('data', (data) => { console.log('[Client] : ' + data) });
            }
            else {
                console.log('\x1b[31m', "[Server] Database configuration failed!\n" + error_reason + '\n');
                console.log('\x1b[0m', "[Server] Retrying database configuration\n")
                db_connection_check()
            }
        })
    }

    // Validate username and password. Then, attach router
    db_connection_check()
}