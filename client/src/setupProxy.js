const setupProxy = require("http-proxy-middleware");

/*
module.exports = function(app) {
    app.use(
        setupProxy(["/api"], {
              target: "http://localhost:5001",
            headers: { Connection: "keep-alive" }
        })
    );
};
*/

module.exports = function(app) {
    app.use(
        '/api',
        setupProxy({
            target: 'http://localhost:8482',
            changeOrigin: true
        })
    )
}