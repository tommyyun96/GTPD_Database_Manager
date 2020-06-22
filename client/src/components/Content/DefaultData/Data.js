import React, { Component } from "react";
import {incident_datatable_feeds} from '../CommonLibrary.js'
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
        /* Need to preprocess query result before */
        var datatable_feeds = incident_datatable_feeds(data)
        for(var i = 0; i < datatable_feeds['rows'].length; i++) {
            var incidentNumber = datatable_feeds['rows'][i]['Incident Number']
            var link = "./full-report/"+incidentNumber
            datatable_feeds['rows'][i]['Incident Number'] = incidentNumber
        }
        this.setState({
            no_history: false,
            wrong_query: false,
            crimeData: {
                columns: datatable_feeds['columns'],
                rows: datatable_feeds['rows']
            }
        })
    }
    

    componentDidMount() {
        this.getData();

    }

    getData() {
        fetch('/showall')
            .then(results => {
                results.json().then(data => {
                    this.populateData(data)
            })})
            .catch(err => console.error(err))
        fetch('/getColumns')
            .then(results => {
                results.json().then(data => {
                    this.makeColumns(data)
            })})
            .catch(err => console.error(err))
        fetch('/getTables')
            .then(results => {
                results.json().then(data => {
                    this.makeTables(data)
            })})
            .catch(err => console.error(err))
    }

    makeColumns(data) {
        var columns = Object.keys(data[0])
        var script = ''
        for(var i = 0; i<columns.length; i++) {
            script += "{value:'"+columns[i]+"', field:'"+columns[i]+"', label:'"+columns[i]+"', width:200},\n"
        }
        console.log(script)
    }
    makeTables(data) {
        var script = ''
        for(var i = 0; i<data.length; i++) {
            script += "{label:'"+data[i]['TABLE_NAME']+"', to:'/RMS/Incident/"+data[i]['TABLE_NAME']+"'},\n"
        }
        // console.log(script)
    }

    render() {
        return(
            <div className="card"  style={{fontSize: 12}}>
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