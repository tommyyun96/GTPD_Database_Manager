var incident_keys = [
    'Incident Number', 
    'Report Date', 
    'Time', 
    'Description', 
    'Street',
    'Location Name', 
    'Offender Name', 
    'Officer Name', 
    'Department', 
]
var incident_columns = new Array(incident_keys.length)
for(var i=0;i<incident_keys.length;i++)
{
    incident_columns[i] = {label: incident_keys[i], field: incident_keys[i], width: 100, sort: 'asc'}
}

module.exports.incident_datatable_feeds = function(data)
{
    console.log(data)
    data.forEach(element => {
        incident_keys.forEach(key => {
            if(element[key] == null)    element[key]='-'
            else if(element[key] === true) element[key]='true'
            else if(element[key] === false)    element[key]='false'
        });
    });

    return {'rows': data, 'columns': incident_columns}
}