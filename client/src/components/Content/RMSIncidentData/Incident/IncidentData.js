import React, { Component } from "react";
import {MDBDataTable} from 'mdbreact'
import {IncidentColumns} from '../Columns'



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
        var columns = IncidentColumns
        
        if(this.props.location.state) {
            columns = this.props.location.state.columns
        }
        var rows = [];

        

        //for every incident, populate a blank row with the column data
        for(var i = 0; i < data.length; i++) {
            var row = {}
            
            for(var j = 0; j < columns.length; j++) {
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
                <div className="card-body"style={{marginBottom:30, fontSize: 12}}>
                {/* <MDBTable autoWidth striped scrollX entries={20}>
                    <MDBTableHead columns={this.state.crimeData.columns} />
                    <MDBTableBody rows={this.state.crimeData.rows} />
                </MDBTable> */}
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