import React, {Component, Fragment} from 'react';
import MetisMenu from 'react-metismenu';

import {TableNav, ProgramNav} from './NavItems';

export default class Nav extends Component {

    state = {};

    render() {
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
                <h5 className="app-sidebar__heading">Tables</h5>
                <MetisMenu style={{display: 'inline'}} content={TableNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="fas fa-chevron-down"/>
                <h5 className="app-sidebar__heading">Programs</h5>
                <MetisMenu content={ProgramNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                
            </Fragment>
        );
    }
}