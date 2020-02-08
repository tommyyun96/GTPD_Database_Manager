
module.exports.showall = function(additional_join_statement=null, criteria=null, num_incidents=1000) {
    /* Supports caller defined additional joins and conditionals
        - default join: [Codes-Offense], [tblIncidentOffender]-->TODO: This only accounts for offenders in GTPD RMS
        - format
            - additional join statement: LEFT JOIN [~~] on ()
            - criteria: ( len([OCA Number]) = 8 )
     */
    return '\
        SELECT distinct top (%d) [OCA Number] as [Incident Number]\n' +
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