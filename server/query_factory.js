
module.exports.showall = function(additional_join_statement=null, criteria=null, num_incidents=1000) {
    /* Supports caller defined additional joins and conditionals
        - default join: [Codes-Offense], [tblIncidentOffender]-->TODO: This only accounts for offenders in GTPD RMS
        - format
            - additional join statement: LEFT JOIN [~~] on ()
            - criteria: ( len([OCA Number]) = 8 )
     */
    return '\
        SELECT distinct top 1000 [OCA Number] as [Incident Number]\n' +
        '\
            , CONVERT(varchar, [Report Date], 23) as [Report Date]\
            , convert(varchar, [From Time], 8) as [Time]\
            , [Description]\
            , CONCAT([St Num], \' \', [Incident Offenses-GTPD+APD].[Street]) as [Street]\
            , [Location Landmark] as [Location Name]\
            , CONCAT([FirstName], \' \', [MiddleName], \' \', [LastName]) AS [Offender Name]\
            , [Officer Name]\
            , CASE WHEN LEN([OCA Number]) = 8 THEN \'GTPD\'\
                   WHEN LEN([OCA Number]) != 8 THEN \'APD\'\
              END as [Department]\n\
        FROM [CrimeAnalytics].[dbo].[Incident Offenses-GTPD+APD]\
            LEFT JOIN [CrimeAnalytics].[dbo].[Codes-Offense]\
                ON ([Incident Offenses-GTPD+APD].[Offense] = [Codes-Offense].[NIBRS_Code_Extended])\n\
            LEFT JOIN [SS_GARecords_Incident].[dbo].[tblIncidentOffender]\
                ON ( [tblIncidentOffender].[IncidentNumber] = [Incident Offenses-GTPD+APD].[OCA Number] )\n'+
            (additional_join_statement==null ? '' : additional_join_statement) + '\n'+
        (criteria==null ? '' : ('WHERE ' + criteria + '\n'))+
        'ORDER BY [Report Date] DESC, [Time] DESC';
}



module.exports.RMSIncident = function(additional_join_statement=null, criteria=null, num_incidents=1000) {
    return '\
    SELECT TOP (1000) [TimeStampIndex]\n\
          ,[IncidentNumber]\n\
          ,[SynchronizeTimeStamp]\n\
          ,[PriorTimeStamp]\n\
          ,[DateCreated]\n\
          ,[TimeCreated]\n\
          ,[CreatedBy]\n\
          ,[CreatedBySSN]\n\
          ,[CreatedSource]\n\
          ,[LastUpdatedDate]\n\
          ,[LastUpdatedTime]\n\
          ,[LastUpdatedBy]\n\
          ,[LastUpdatedBySSN]\n\
          ,[ReportDate]\n\
          ,[ReportTime]\n\
          ,[DateIncidentEnded]\n\
          ,[TimeIncidentEnded]\n\
          ,[IncidentDate]\n\
          ,[IncidentTime]\n\
          ,[CaseStatus]\n\
          ,[ExceptionalClearance]\n\
          ,[ReportingOfficerID]\n\
          ,[ReportingOfficerName]\n\
          ,[ReportingOfficerSSN]\n\
          ,[TimeNotified]\n\
          ,[TimeArrived]\n\
          ,[TimeClearedScene]\n\
          ,[ClearanceDate]\n\
          ,[ClearingOfficerID]\n\
          ,[ClearingOfficerName]\n\
          ,[ClearingOfficerSSN]\n\
          ,[LocationCode]\n\
          ,[DispatchZone]\n\
          ,[PatrolZone]\n\
          ,[OtherZone]\n\
          ,[Location]\n\
          ,[LocationLandmark]\n\
          ,[LocationStreetNumber]\n\
          ,[LocationFraction]\n\
          ,[LocationDirectional]\n\
          ,[LocationStreet]\n\
          ,[LocationLocation]\n\
          ,[LocationMailingAddress]\n\
          ,[LocationCity]\n\
          ,[LocationState]\n\
          ,[LocationZipCode]\n\
          ,[LocationLatitude]\n\
          ,[LocationLongitude]\n\
          ,[LocationAltitude]\n\
          ,[IncidentType]\n\
          ,[CaseManagementStatus]\n\
          ,[AssignedToID]\n\
          ,[AssignedToName]\n\
          ,[AssignedToSSN]\n\
          ,[DateAssigned]\n\
          ,[AssignedDueDate]\n\
          ,[Narrative]\n\
          ,[GCIC]\n\
          ,[DrugRelated]\n\
          ,[ApprovingOfficerID]\n\
          ,[ApprovingOfficerName]\n\
          ,[ApprovingOfficerSSN]\n\
          ,[FvChildrenInvolved]\n\
          ,[FvChildrenPresent]\n\
          ,[FvPreviousComplaints]\n\
          ,[FvPriorCourtOrder]\n\
          ,[FvAvailableRemedies]\n\
          ,[FvNoArrestMade]\n\
          ,[FvAggressorIdentified]\n\
          ,[FvSubstanceAbuse]\n\
          ,[FvAggressorSubstance]\n\
          ,[FvVictimSubstance]\n\
          ,[Reportable]\n\
          ,[ModifiedInRecords]\n\
          ,[Validated]\n\
          ,[Submitted]\n\
          ,[Changed]\n\
          ,[DateLastSubmitted]\n\
          ,[SecurityLevel]\n\
          ,[SecuredByName]\n\
          ,[SecuredBySSN]\n\
          ,[DateSecured]\n\
          ,[TimeSecured]\n\
          ,[SecuredNotes]\n\
          ,[Juvenile]\n\
          ,[DateApproved]\n\
          ,[TimeApproved]\n\
          ,[IndependentSupplement]\n\
          ,[IndependentSupplementSource]\n\
          ,[Expunged]\n\
          ,[ExpungedBlockAll]\n\
          ,[JuvenileBlockAll]\n\
          ,[SecurityOption]\n\
          ,[ReportDateIndicator]\n\
          ,[ExceptionalClearanceDate]\n\
          ,[CargoTheft]\n\
          ,[JurisdictionStolen]\n\
          ,[JurisdictionRecovered]\n\
          ,[StolenVehicles]\n\
          ,[RecoveredVehicles]\n\
          ,[SubmittedTimeWindow]\n\
      FROM [SS_GARecords_Incident].[dbo].[tblIncident]\n'+
            (additional_join_statement==null ? '' : additional_join_statement) + '\n'+
        (criteria==null ? '' : ('WHERE ' + criteria + '\n'))+
        'ORDER BY [ReportDate] DESC, [ReportTime] DESC';
}