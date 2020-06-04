import React, { Component } from "react";
import Select from "react-select";


const RMSIncidentcolumns = [
    /*DEFAULT*/
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
    /*OPTIONAL*/
    {value: 'Unit', field: 'Unit', label: 'Unit', width: 50},
    {value: 'Offenders', field: 'Offenders', label: 'Offenders', width: 200},
    {value: 'Victims', field: 'Victims', label: 'Victims', width: 100},
    {value: 'Property', field: 'Property', label: 'Property', width: 200},
    {value: 'Officer Name', field: 'Officer', label: 'Officer', width: 200},
    {value: 'Report Date', field: 'Report Date', label: 'Report Date', width: 200},
    {value: 'ViolationCode', field: 'ViolationCode', label: 'Violation Code', width: 100},
];
var columns = []


class CustomColumn extends Component {
    state = {
        selectedColumns: [],
    };



    setCustom = selectedCustom => {
        this.setState({selectedCustom},
            function() {
            }); 
    }
    setColumns = selectedColumns => {
        this.setState({selectedColumns},
            function() {
            }); 
    }

    componentDidMount() {
        var {data} = this.props.match.params;
        if(data === 'RMSIncidentData') {
            columns = RMSIncidentcolumns
            console.log(RMSIncidentcolumns.slice(0,2))
            this.setState({selectedColumns: RMSIncidentcolumns.slice(0,7)})
        }
    }

    render() {
        return(
            <div className="main">
                <div className="card filterTypeCards dateCard">
                    <h4 className="card-header">Custom Columns</h4>
                    <div className="card-body">
                        <div className="col-12 dateFilters">
                            Test
                            <div>
                                <Select 
                                value={this.state.selectedColumns} 
                                onChange={this.setColumns} 
                                options={columns} 
                                isMulti={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CustomColumn;