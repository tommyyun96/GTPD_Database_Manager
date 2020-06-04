import React, { Component } from "react";
import {MDBDataTable} from 'mdbreact'
import {Link} from 'react-router-dom'


export default class Data extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            crimeData: {
                coulumns: [],
                rows: []
            }
        }
    }

    
    populateData = function (data) {
        var columns = [
            {value: 'IncidentNumber', field:'Incident Number', label: 'Incident Number', width: 100},
            {value: 'Offense', field:'Offense', label: 'Offense', width: 200},
            {value: 'Location', field:'Location', label: 'Location', width: 250},
            {value: 'Location Landmark', field:'Location Landmark', label: 'Landmark', width: 200},
            {value: 'From', field:'From', label: 'From Date/Time', width: 100},
            {value: 'To', field:'To', label: 'To Date/Time', width: 100},
            {value: 'Average Day', field:'Average Day', label: 'Avg Day', width: 100},
            {value: 'Average Time', field:'Average Time', label: 'Avg Time', width: 100},
            {value: 'Occurred Shift', field:'Occurred Shift', label: 'Occurred Shift', width: 100},
            {value: 'Case Status', field:'Case Status', label: 'Status', width: 50},
            {value: 'Department', field:'Department', label: 'Dept', width: 50},
        ]
        
        if(this.props.location.state) {
            columns = this.props.location.state.columns
            columns.unshift({value: 'IncidentNumber', field:'Incident Number', label: 'Incident Number', width: 100})
            console.log(columns)
        }
        var rows = [];
        

        //for every incident, populate a blank row with the column data
        for(var i = 0; i < data.length; i++) {
            var row = {}
            row['IncidentNumber'] = data[i]['IncidentNumber']
            
            for(var j = 1; j < columns.length; j++) {
                if(data[i][columns[j].value] == null){ 
                    row[columns[j].value] = '-'
                } else {
                    row[columns[j].value] = data[i][columns[j].value].toString()
                }
            }
            rows.push(row)
        }

        this.setState({
            no_history: false,
            wrong_query: false,
            crimeData: {
                columns: columns,
                rows: rows
            }
        })
    }
    

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('/RMSIncident')
            .then(results => {
                results.json().then(data => {
                    this.populateData(data)
            })})
            .catch(err => console.error(err))
    }

    render() {
        return(
            <div className="card"  style={{fontSize: 12}}>
                <div className="row">
                    <div className="col-12">
                        <button style={{marginLeft:'20px', marginTop:'20px', fontSize:'120%'}}className="btn btn-lg btn-primary"> <a style={{color:'white'}}href="/CustomColumn/RMSIncidentData">Change Columns</a></button>
                    </div>
                </div>
                <div className="card-body">
                    <MDBDataTable 
                        scrollX
                        striped
                        bordered
                        hover
                        entries={20}
                        data={this.state.crimeData}
                    />
                </div>
            </div>
        )
    }
}