import React, { Fragment, Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PerfectScrollbar from 'react-perfect-scrollbar'
import cx from 'classnames'

import Nav from './Nav'

export default class SideBar extends Component {
    render() {
        let {
            backgroundColor,
            enableBackgroundImage,
            enableSidebarShadow,
            backgroundImage,
            backgroundImageOpacity,
        } = this.props;

        return (
            <Fragment>
                {/*<div className="sidebar-mobile-overlay" onClick={this.toggleMobileSidebar} />*/}
                <ReactCSSTransitionGroup
                    component="div"
                    className="app-sidebar bg-royal sidebar-text-light sidebar-shadow"
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
                        className={cx("app-sidebar-bg", backgroundImageOpacity)}
                        style={{
                            backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
                        }}>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}