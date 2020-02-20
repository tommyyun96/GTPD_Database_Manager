import React, {Component, Fragment} from 'react';
import MetisMenu from 'react-metismenu';

import {ViewNav, TableNav, ProgramNav} from './NavItems';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {view: ViewNav, program: ProgramNav, tableLoaded: false}
        
        fetch('/selected_tables')
            .then(results => {
                results.json().then(data => {
                    this.setState({tableLoaded: true, table: this.parse_table_list(data)});
            })})
            .catch(err => console.error(err))
    }
    
    parse_table_list (data) {
        return (data.map((database) => {
            return ({                                       
                icon: 'fas fa-table',
                label: database[0],
                content: database[1].map((table)=>{
                    return(
                        {
                            label: table,
                            to: '/tables/'+database[0]+'/'+table
                        }
                    )
                })
            })
        }))
    }

    render() {
        console.log(this.state.table);
        return (
            <Fragment>
                <h5 className="app-sidebar__heading">Views</h5>
                <MetisMenu content={this.state.view} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                
                <h5 className="app-sidebar__heading">Tables</h5>
                {this.state.tableLoaded ?
                    <MetisMenu content={this.state.table} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                : <i class="spinner fas fa-spinner fa-spin"></i>}
                <h5 className="app-sidebar__heading">Programs</h5>
                <MetisMenu content={this.state.program} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                
            </Fragment>
        );
    }
}