import React, {Component, Fragment} from 'react';
import MetisMenu from 'react-metismenu';
import './Style.css'

import {ViewNav, TableNav, ProgramNav, CANav, RMSNav, ArchiveNav} from './NavItems';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: ViewNav, 
            program: ProgramNav, 
            tableLoaded: false,
            CALoaded: false,
            CA: CANav,
            RMS: RMSNav,
            Archive: ArchiveNav,

        }
        
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
                            to: '/tables/'+database[0]+'/'+table,
                        }
                    )
                })
            })
        }))
    }

    render() {
        return (
            <Fragment>
                <h5 className="app-sidebar__heading">RMS</h5>
                <MetisMenu content={this.state.RMS} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                
                <h5 className="app-sidebar__heading">Crime Analytics</h5>
                <MetisMenu content={this.state.CA} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                
                <h5 className="app-sidebar__heading">Programs</h5>
                <MetisMenu content={this.state.program} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                
                <h5 className="app-sidebar__heading">Archive</h5>
                <MetisMenu content={this.state.Archive} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                
            </Fragment>
        );
    }
}