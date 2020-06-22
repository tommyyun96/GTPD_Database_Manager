import React, { Fragment, Component } from 'react'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import APDUpload from '../components/Content/APD/Upload'
import Data from '../components/Content/DefaultData/Data'
import IncidentData from '../components/Content/RMSIncidentData/Incident/IncidentData'
import EditView from '../components/Content/RMSIncidentData/Incident/EditView'
import { Switch, Route } from 'react-router-dom'

class MainLayout extends Component {
    
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="app-main">
                    <SideBar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                                <Switch>
                                    <Route exact path="/">
                                        <Data />
                                    </Route>
                                    <Route exact path="/RMS/Incident/:table" component={IncidentData}/>
                                    <Route exact path="/RMS/Incident/EditView/:table" component={EditView}/>
                                    <Route exact path="/progs/Import_APD" component={APDUpload}/>
                                    <Route exact path="/edit">
                                        {/*<TableEditablePage />*/}   {/*Actually, this won't work since we need to buy license.*/}
                                    </Route>    
                                </Switch>
                        </div>
                        <div className="overlay"/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MainLayout