import React, { Component } from "react";
import {MDBDataTable} from 'mdbreact'
import {columnOptions} from '../Columns'


export default class Data extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            crimeData: {
                coulumns: [],
                rows: []
            },
            tableName: null,
            columns: null,
            top: null,
        }
    }

    
    populateData = function (data) {
        var rows = [];
        var columns = this.state.columns

        

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
        var {table} = this.props.match.params;
        if(this.props.location.state) {
            this.setState({
                columns: this.props.location.state.columns, 
                tableName: table,
                top: this.props.location.state.top
            },
                function(){
                    this.getData()
                })
        } else {
            this.setState({columns: columnOptions[table], tableName: table}, 
                function() {
                    this.getData()
                })
        }
    }

    getData() {
        fetch('/get-incident-data',
                {
                    headers:{'Content-Type' : 'application/json'},
                    method: 'post',
                    body: JSON.stringify(this.state)
                }
            )
            .then(function(response) {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                return response
            })
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
                        <button style={{marginLeft:'20px', marginTop:'20px', fontSize:'120%'}}className="btn btn-lg btn-primary"> 
                            <a style={{color:'white'}}href={"/RMS/Incident/EditView/"+this.state.tableName}>Edit View</a>
                        </button>
                    </div>
                </div>
                <div className="card-body"style={{marginBottom:30, fontSize: 12}}>
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