import React, { Component } from "react";
import Select from "react-select";
import {Redirect} from 'react-router-dom'
import {columnOptions} from '../Columns'



var columns = []
const countOptions = [
    {value: '1000', label: '1000'},
    {value: '2500', label: '2500'},
    {value: '5000', label: '5000'},
    {value: '10000', label: '10000'},
    {value: 'All', label: 'All'},
];


class Edit extends Component {
    state = {
        selectedColumns: [],
        pathname: null,
        selectedCount: {value: '1000', label: '1000'},
    };



    setColumns = selectedColumns => {
        this.setState({selectedColumns},
            function() {
            }); 
    }
    setCount = selectedCount => { 
        this.setState({selectedCount})
    };

    componentDidMount() {
        var {table} = this.props.match.params;
        columns = columnOptions[table]
        this.setState({selectedColumns: columnOptions[table].slice(0,10), pathname: '/RMS/Incident/'+table})
    }
    handleSubmit = () => {
        this.setState({redirected: true})
    }

    render() {
        return(
            <div className="main">
                {this.state.redirected ? <Redirect to={{pathname: this.state.pathname, state: {columns: this.state.selectedColumns, top:this.state.selectedCount}}}/> : null}
                <div className="card filterTypeCards dateCard">
                    <div className="card-body">
                        <div className="col-12 dateFilters">
                        <label className="col-12 col-form-label" style={{fontSize: 13}}>
                            Columns
                        </label>
                            <div>
                                <Select 
                                value={this.state.selectedColumns} 
                                onChange={this.setColumns} 
                                options={columns} 
                                isMulti={true}
                                />
                            </div>
                        </div>
                        <label className="col-12 col-form-label" style={{fontSize: 13}}>
                            Number of Incidents
                        </label>
                        <div>
                            <Select 
                            value={this.state.selectedCount} 
                            onChange={this.setCount} 
                            options={countOptions} 
                            />
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
export default Edit;