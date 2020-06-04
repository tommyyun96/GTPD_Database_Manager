import React, { Fragment, Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PerfectScrollbar from 'react-perfect-scrollbar'
import cx from 'classnames'

import Nav from './Nav'

export default class SideBar extends Component {
    render() {
        return (
            <Fragment>
                {/*<div className="sidebar-mobile-overlay" onClick={this.toggleMobileSidebar} />*/}
                <ReactCSSTransitionGroup
                    component="div"
                    className="app-sidebar"  //
                    transitionName="SidebarAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    {/*<HeaderLogo />*/}
                    <PerfectScrollbar>
                        <div className="app-sidebar__inner">
                            <Nav />
                        </div>
                    </PerfectScrollbar>
                    <div
                        className={"app-sidebar-bg"}
                        >
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}