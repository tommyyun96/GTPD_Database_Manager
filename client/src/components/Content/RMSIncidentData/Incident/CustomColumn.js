import React, { Component } from "react";
import Select from "react-select";
import {Redirect} from 'react-router-dom'
import {tblIncident} from '../Columns'



var columns = []


class CustomColumn extends Component {
    state = {
        selectedColumns: [],
        pathname: null,
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
            columns = tblIncident
            this.setState({selectedColumns: tblIncident.slice(0,7)})
            this.setState({pathname: '/RMS/Incident/Incident'})
        }
    }
    handleSubmit = () => {
        this.setState({redirected: true})
    }

    render() {
        return(
            <div className="main">
                {this.state.redirected ? <Redirect to={{pathname: this.state.pathname, state: {columns: this.state.selectedColumns}}}/> : null}
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
                    <div className="searchButton">
                        <button onClick={this.handleSubmit} className="btn btn-primary" >Search</button>
                    </div>
                    
                </div>
                        
            </div>
        )
    }
}
export default CustomColumn;