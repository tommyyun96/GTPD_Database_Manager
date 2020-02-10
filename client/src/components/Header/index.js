import React, { Fragment, Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="app-title">
                    GT Police Department
                </div>
                <div className="app-header__inner">
                    CrimeAnalytics (Admin)
                </div>
            </div>
        )
    }
}

export default Header