import React, { Fragment, Component } from 'react'
import SideBar from '../SideBar'

class MainLayout extends Component {
    render() {
        return (
            <Fragment>
                {/*<AppHeader />*/}
                <div className="app-main">
                    <SideBar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            Main Content here.
                        </div>
                        {/*<AppFooter />*/}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MainLayout