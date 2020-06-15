const sprintf = require('sprintf-js').sprintf;

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



module.exports.get_incident_data = function(body) {
    var order =''
    table = body.tableName
    noTimeStamp = [
        'CleryCategories', 
        'NIBRSTranslationCodes',
        'tblUCRArrest_194',
        'z_mirror_tblIncident_194',
        'z_mirror_tblIncidentDrug_194',
        'z_mirror_tblIncidentOffender_194',
        'z_mirror_tblIncidentOffense_194',
        'z_mirror_tblIncidentProperty_194',
        'z_mirror_tblIncidentSupplement_194',
        'z_mirror_tblIncidentVictim_194',
        //view tables
        'ARPComplainant',
        'ARPDrugs',
        'ARPIncidentNew',
        'ARPLandingNew',
        'ARPOffender',
        'ARPOffense',
        'ARPProperty',
        'ARPRelatedIncidentOffender',
        'ARPRelatedIncidentOffense',
        'ARPRelatedOffense',
        'ARPSupplement',
        'ARPVictim',
        'ARPWitness',
        'CrimeLogTXT',
        'CrimeReportOffenseTypes',
        'Incident',
        'NonCrimeLog',
        'WebIncidents',
    ]
    if(!noTimeStamp.includes(table)) {
        order = 'order by [TimeStampIndex] desc'
    }
    top = 'TOP (1000)'
    if(body.top) {
        if(body.top.value == 'All') {
            top = 'ALL'
        } else {
            top = 'TOP ('+body.top.value+')'
        }
    }


    return sprintf('\
    SELECT \%s *\
      FROM [SS_GARecords_Incident].[dbo].[\%s]\n\
      \%s',
      top,
      table,
      order
    )
}



module.exports.getColumns = function() {
    return 'select top (1) * FROM [SS_GARecords_Incident].[dbo].[WebIncidents]'
}

module.exports.getTables = function() {
    return 'SELECT [TABLE_NAME] FROM [SS_GARecords_Incident].INFORMATION_SCHEMA.TABLES where TABLE_TYPE = \'VIEW\' order by TABLE_NAME'
}