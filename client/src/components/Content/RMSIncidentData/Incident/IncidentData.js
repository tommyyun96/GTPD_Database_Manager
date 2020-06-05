import React, { Component } from "react";
import {MDBDataTable, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact'
import {Link} from 'react-router-dom'


export default class Data extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            crimeData: {
                coulumns: [],
                rows: []
            }
        }
    }

    
    populateData = function (data) {
        var columns = [
            {value: 'IncidentNumber', field:'IncidentNumber', label: 'IncidentNumber', width:200},
            {value: 'SynchronizeTimeStamp', field:'SynchronizeTimeStamp', label: 'SynchronizeTimeStamp', width:200},
            {value: 'PriorTimeStamp', field:'PriorTimeStamp', label: 'PriorTimeStamp', width:200},
            {value: 'DateCreated', field:'DateCreated', label: 'DateCreated', width:200},
            {value: 'TimeCreated', field:'TimeCreated', label: 'TimeCreated', width:200},
            {value: 'CreatedBy', field:'CreatedBy', label: 'CreatedBy', width:200},
            {value: 'CreatedBySSN', field:'CreatedBySSN', label: 'CreatedBySSN', width:200},
            {value: 'CreatedSource', field:'CreatedSource', label: 'CreatedSource', width:200},
            {value: 'LastUpdatedDate', field:'LastUpdatedDate', label: 'LastUpdatedDate', width:200},
            {value: 'LastUpdatedTime', field:'LastUpdatedTime', label: 'LastUpdatedTime', width:200},
            {value: 'LastUpdatedBy', field:'LastUpdatedBy', label: 'LastUpdatedBy', width:200},
            {value: 'LastUpdatedBySSN', field:'LastUpdatedBySSN', label: 'LastUpdatedBySSN', width:200},
            {value: 'ReportDate', field:'ReportDate', label: 'ReportDate', width:200},
            {value: 'ReportTime', field:'ReportTime', label: 'ReportTime', width:200},
            {value: 'DateIncidentEnded', field:'DateIncidentEnded', label: 'DateIncidentEnded', width:200},
            {value: 'TimeIncidentEnded', field:'TimeIncidentEnded', label: 'TimeIncidentEnded', width:200},
            {value: 'IncidentDate', field:'IncidentDate', label: 'IncidentDate', width:200},
            {value: 'IncidentTime', field:'IncidentTime', label: 'IncidentTime', width:200},
            {value: 'CaseStatus', field:'CaseStatus', label: 'CaseStatus', width:200},
            {value: 'ExceptionalClearance', field:'ExceptionalClearance', label: 'ExceptionalClearance', width:200},
            {value: 'ReportingOfficerID', field:'ReportingOfficerID', label: 'ReportingOfficerID', width:200},
            {value: 'ReportingOfficerName', field:'ReportingOfficerName', label: 'ReportingOfficerName', width:200},
            {value: 'ReportingOfficerSSN', field:'ReportingOfficerSSN', label: 'ReportingOfficerSSN', width: 200},
            {value: 'TimeNotified', field:'TimeNotified', label: 'TimeNotified', width: 200},
            {value: 'TimeArrived', field:'TimeArrived', label: 'TimeArrived', width: 200},
            {value: 'TimeClearedScene', field:'TimeClearedScene', label: 'TimeClearedScene', width: 200},
            {value: 'ClearanceDate', field:'ClearanceDate', label: 'ClearanceDate', width: 200},
            {value: 'ClearingOfficerID', field:'ClearingOfficerID', label: 'ClearingOfficerID', width: 200},
            {value: 'ClearingOfficerName', field:'ClearingOfficerName', label: 'ClearingOfficerName', width: 200},
            {value: 'ClearingOfficerSSN', field:'ClearingOfficerSSN', label: 'ClearingOfficerSSN', width: 200},
            {value: 'LocationCode', field:'LocationCode', label: 'LocationCode', width: 200},
            {value: 'DispatchZone', field:'DispatchZone', label: 'DispatchZone', width: 200},
            {value: 'PatrolZone', field:'PatrolZone', label: 'PatrolZone', width: 200},
            {value: 'OtherZone', field:'OtherZone', label: 'OtherZone', width: 200},
            {value: 'Location', field:'Location', label: 'Location', width: 200},
            {value: 'LocationLandmark', field:'LocationLandmark', label: 'LocationLandmark', width: 200},
            {value: 'LocationStreetNumber', field:'LocationStreetNumber', label: 'LocationStreetNumber', width: 200},
            {value: 'LocationFraction', field:'LocationFraction', label: 'LocationFraction', width: 200},
            {value: 'LocationDirectional', field:'LocationDirectional', label: 'LocationDirectional', width: 200},
            {value: 'LocationStreet', field:'LocationStreet', label: 'LocationStreet', width: 200},
            {value: 'LocationLocation', field:'LocationLocation', label: 'LocationLocation', width: 200},
            {value: 'LocationMailingAddress', field:'LocationMailingAddress', label: 'LocationMailingAddress', width: 200},
            {value: 'LocationMailingAddress', field:'LocationMailingAddress', label: 'LocationMailingAddress', width: 200},
            {value: 'LocationState', field:'LocationState', label: 'LocationState', width: 200},
            {value: 'LocationZipCode', field:'LocationZipCode', label: 'LocationZipCode', width: 200},
            {value: 'LocationLatitude', field:'LocationLatitude', label: 'LocationLatitude', width: 200},
            {value: 'LocationLongitude', field:'LocationLongitude', label: 'LocationLongitude', width: 200},
            {value: 'LocationAltitude', field:'LocationAltitude', label: 'LocationAltitude', width: 200},
            {value: 'IncidentType', field:'IncidentType', label: 'IncidentType', width: 200},
            {value: 'CaseManagementStatus', field:'CaseManagementStatus', label: 'CaseManagementStatus', width: 200},
            {value: 'AssignedToID', field:'AssignedToID', label: 'AssignedToID', width: 200},
            {value: 'AssignedToName', field:'AssignedToName', label: 'AssignedToName', width: 200},
            {value: 'AssignedToSSN', field:'AssignedToSSN', label: 'AssignedToSSN', width: 200},
            {value: 'DateAssigned', field:'DateAssigned', label: 'DateAssigned', width: 200},
            {value: 'AssignedDueDate', field:'AssignedDueDate', label: 'AssignedDueDate', width: 200},
            {value: 'Narrative', field:'Narrative', label: 'Narrative', width: 200},
            {value: 'GCIC', field:'GCIC', label: 'GCIC', width: 200},
            {value: 'DrugRelated', field:'DrugRelated', label: 'DrugRelated', width: 200},
            {value: 'ApprovingOfficerID', field:'ApprovingOfficerID', label: 'ApprovingOfficerID', width: 200},
            {value: 'ApprovingOfficerName', field:'ApprovingOfficerName', label: 'ApprovingOfficerName', width: 200},
            {value: 'ApprovingOfficerSSN', field:'ApprovingOfficerSSN', label: 'ApprovingOfficerSSN', width: 200},
            {value: 'FvChildrenInvolved', field:'FvChildrenInvolved', label: 'FvChildrenInvolved', width: 200},
            {value: 'FvChildrenPresent', field:'FvChildrenPresent', label: 'FvChildrenPresent', width: 200},
            {value: 'FvPreviousComplaints', field:'FvPreviousComplaints', label: 'FvPreviousComplaints', width: 200},
            {value: 'FvPriorCourtOrder', field:'FvPriorCourtOrder', label: 'FvPriorCourtOrder', width: 200},
            {value: 'FvAvailableRemedies', field:'FvAvailableRemedies', label: 'FvAvailableRemedies', width: 200},
            {value: 'FvNoArrestMade', field:'FvNoArrestMade', label: 'FvNoArrestMade', width: 200},
            {value: 'FvAggressorIdentified', field:'FvAggressorIdentified', label: 'FvAggressorIdentified', width: 200},
            {value: 'FvSubstanceAbuse', field:'FvSubstanceAbuse', label: 'FvSubstanceAbuse', width: 200},
            {value: 'FvAggressorSubstance', field:'FvAggressorSubstance', label: 'FvAggressorSubstance', width: 200},
            {value: 'FvVictimSubstance', field:'FvVictimSubstance', label: 'FvVictimSubstance', width: 200},
            {value: 'Reportable', field:'Reportable', label: 'Reportable', width: 200},
            {value: 'ModifiedInRecords', field:'ModifiedInRecords', label: 'ModifiedInRecords', width: 200},
            {value: 'Validated', field:'Validated', label: 'Validated', width: 200},
            {value: 'Submitted', field:'Submitted', label: 'Submitted', width: 200},
            {value: 'Changed', field:'Changed', label: 'Changed', width: 200},
            {value: 'DateLastSubmitted', field:'DateLastSubmitted', label: 'DateLastSubmitted', width: 200},
            {value: 'SecurityLevel', field:'SecurityLevel', label: 'SecurityLevel', width: 200},
            {value: 'SecuredByName', field:'SecuredByName', label: 'SecuredByName', width: 200},
            {value: 'SecuredBySSN', field:'SecuredBySSN', label: 'SecuredBySSN', width: 200},
            {value: 'DateSecured', field:'DateSecured', label: 'DateSecured', width: 200},
            {value: 'TimeSecured', field:'TimeSecured', label: 'TimeSecured', width: 200},
            {value: 'SecuredNotes', field:'SecuredNotes', label: 'SecuredNotes', width: 200},
            {value: 'Juvenile', field:'Juvenile', label: 'Juvenile', width: 200},
            {value: 'DateApproved', field:'DateApproved', label: 'DateApproved', width: 200},
            {value: 'TimeApproved', field:'TimeApproved', label: 'TimeApproved', width: 200},
            {value: 'IndependentSupplement', field:'IndependentSupplement', label: 'IndependentSupplement', width: 200},
            {value: 'IndependentSupplementSource', field:'IndependentSupplementSource', label: 'IndependentSupplementSource', width: 200},
            {value: 'Expunged', field:'Expunged', label: 'Expunged', width: 200},
            {value: 'ExpungedBlockAll', field:'ExpungedBlockAll', label: 'ExpungedBlockAll', width: 200},
            {value: 'JuvenileBlockAll', field:'JuvenileBlockAll', label: 'JuvenileBlockAll', width: 200},
            {value: 'SecurityOption', field:'SecurityOption', label: 'SecurityOption', width: 200},
            {value: 'ReportDateIndicator', field:'ReportDateIndicator', label: 'ReportDateIndicator', width: 200},
            {value: 'ExceptionalClearanceDate', field:'ExceptionalClearanceDate', label: 'ExceptionalClearanceDate', width: 200},
            {value: 'CargoTheft', field:'CargoTheft', label: 'CargoTheft', width: 200},
            {value: 'JurisdictionStolen', field:'JurisdictionStolen', label: 'JurisdictionStolen', width: 200},
            {value: 'JurisdictionRecovered', field:'JurisdictionRecovered', label: 'JurisdictionRecovered', width: 200},
            {value: 'StolenVehicles', field:'StolenVehicles', label: 'StolenVehicles', width: 200},
            {value: 'RecoveredVehicles', field:'RecoveredVehicles', label: 'RecoveredVehicles', width: 200},
            {value: 'SubmittedTimeWindow', field:'SubmittedTimeWindow', label: 'SubmittedTimeWindow', width: 200},

        ]
        
        if(this.props.location.state) {
            columns = this.props.location.state.columns
            columns.unshift({value: 'IncidentNumber', field:'IncidentNumber', label: 'IncidentNumber', width: 100})
        }
        var rows = [];
        console.log(columns)

        

        //for every incident, populate a blank row with the column data
        for(var i = 0; i < data.length; i++) {
            var row = {}
            
            for(var j = 0; j < columns.length; j++) {
                if(i == 0) {
                    console.log(columns[j].value)
                    console.log(data[i][columns[j].value])
                }
                if(data[i][columns[j].value] == null){ 
                    row[columns[j].value] = '-'
                } else {
                    row[columns[j].value] = data[i][columns[j].value].toString()
                }
            }
            rows.push(row)
        }

        this.setState({
            no_history: false,
            wrong_query: false,
            crimeData: {
                columns: columns,
                rows: rows
            }
        })
    }
    

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('/RMSIncident')
            .then(results => {
                results.json().then(data => {
                    this.populateData(data)
            })})
            .catch(err => console.error(err))
    }

    render() {
        return(
            <div className="card"  style={{fontSize: 12}}>
                <div className="row">
                    <div className="col-12">
                        <button style={{marginLeft:'20px', marginTop:'20px', fontSize:'120%'}}className="btn btn-lg btn-primary"> <a style={{color:'white'}}href="/CustomColumn/RMSIncidentData">Change Columns</a></button>
                    </div>
                </div>
                <div className="card-body"style={{marginBottom:30, fontSize: 12}}>
                {/* <MDBTable autoWidth striped scrollX entries={20}>
                    <MDBTableHead columns={this.state.crimeData.columns} />
                    <MDBTableBody rows={this.state.crimeData.rows} />
                </MDBTable> */}
                    <MDBDataTable 
                        scrollX
                        striped
                        bordered
                        hover
                        entries={20}
                        data={this.state.crimeData}
                    />
                </div>
            </div>
        )
    }
}