import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

class MainLayout extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="app-main">
                    <SideBar />
                    {/*<div className="app-main__outer">
                        <div className="app-main__inner">
                            Main Content here.
                        </div>
                        <AppFooter />
                    </div>*/}
                </div>
            </Fragment>
        )
    }
}

export default MainLayout