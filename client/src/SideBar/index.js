import React, { Fragment, Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PerfectScrollbar from 'react-perfect-scrollbar'
import cx from 'classnames'



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
                            {/*<Nav />*/}
                            <h5 className="app-sidebar__heading">PRO VERSION</h5>
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
                            <h5 className="app-sidebar__heading">Menu</h5>
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