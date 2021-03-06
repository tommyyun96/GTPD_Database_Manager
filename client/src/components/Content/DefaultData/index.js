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