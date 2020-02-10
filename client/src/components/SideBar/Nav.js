import React, {Component, Fragment} from 'react';
import MetisMenu from 'react-metismenu';

import {ViewNav, TableNav, ProgramNav} from './NavItems';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {view: ViewNav, table: [], program: ProgramNav}
    }

    async componentWillMount() {
        this.state = {view: ViewNav, table: TableNav, program: ProgramNav};
        /*
        fetch('/selected_tables')
            .then(results => {
                results.json().then(data => {
                    this.setState({table: this.parse_table_list(data)});
                })
            })
            .catch(err => console.log(err));*/
        const response = await fetch('/selected_tables');
        const data = await response.json();
        this.setState({table: this.parse_table_list(data)});
        console.log('ddd;')
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

                {/*
                <h5 className="app-sidebar__heading">GTPD DB Manager</h5>
                <div className="metismenu vertical-nav-menu">
                    <ul className="metismenu-container">
                        <li className="metismenu-item">
                            <a className="metismenu-link" href="https://dashboardpack.com/theme-details/architectui-dashboard-react-pro" target="_blank">
                                <i className="metismenu-icon pe-7s-diamond"></i>
                                Upgrade to PRO
                            </a>
                        </li>
                    </ul>
                </div>
                */}
                <h5 className="app-sidebar__heading">Views</h5>
                <MetisMenu content={this.state.view} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                <h5 className="app-sidebar__heading">Tables</h5>
                <MetisMenu content={this.state.table} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                <h5 className="app-sidebar__heading">Programs</h5>
                <MetisMenu content={this.state.program} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                
            </Fragment>
        );
    }
}