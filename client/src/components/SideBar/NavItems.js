export const ViewNav = [
    {
        icon: 'far fa-bookmark',
        label: 'Incident Overview',
        to: '/views/Incident_Overview'
    }
]

export const TableNav = function() {return ([
    {
        icon: 'fas fa-table',
        label: 'CrimeAnalytics',
        content: [
            {
                label: 'Incidents',
                to: '/tables/CrimeAnalytics/Incidents'
            },
            {
                label: 'Times',
                to: '/tables/CrimeAnalytics/Times',
            },
            {
                label:'Codes- Addresses',
                to: '/tables/CrimeAnalytics/Codes-Addresses',
            },
            {
                label: 'Codes-Offenses',
                to: '/tables/CrimeAnalytics/Codes-Offenses',
            }
        ]
    },
    {
        icon: 'fas fa-table',
        label: 'GTPD RMS',
        to: '/tables/GTPD_RMS',
    },
    {
        icon: 'fas fa-table',
        label: 'APD Shared',
        to: '/tables/APD_RMS',
    }
])}();

export const ProgramNav = [
    {
        icon: 'fas fa-scroll',
        label: 'Import New APD',
        to: '/progs/Import_APD',
    },
    {
        icon: 'fas fa-scroll',
        label: 'Review RMS',
        to: '/progs/Review_RMS',
    }
];

export const CANav = [
    {
        icon: 'fas fa-scroll',
        label: 'GTPD_Only',
        content: [
            {
                label: 'IncidentOffenses',
                to: '/CrimeAnalytics/GTPD/IncidentOffenses',
                    
            },
            {
                label: 'Codes_Addresses_Unique',
                to: '/CrimeAnalytics/GTPD/Codes_Addresses_Unique'
            },
            {
                label: 'Repeat_Offenders',
                to: '/CrimeAnalytics/GTPD/Repeat_Offenders'
            },
        ]
    },
    {
        icon: 'fas fa-scroll',
        label: 'APD_Only',
        content: [
            {
                label: 'IncidentOffenses',
                to: '/CrimeAnalytics/APD/IncidentOffenses'
            },
            {
                label: 'Narratives',
                to: '/CrimeAnalytics/APD/Narratives'
            },
            {
                label: 'Codes_Addresses_Unique',
                to: '/CrimeAnalytics/APD/Codes_Addresses_Unique'
            },
        ]
    },
];

export const RMSNav = [
    {
        icon: 'fas fa-scroll',
        label: 'SS_GARecords_Incident',
        content: [
            {
                label: 'Tables',
                content: [
                    {label:'CleryCategories', to:'/RMS/Incident/CleryCategories'},
                    {label:'NIBRSTranslationCodes', to:'/RMS/Incident/NIBRSTranslationCodes'},
                    {label:'tblConversionTimeStamp', to:'/RMS/Incident/tblConversionTimeStamp'},
                    {label:'tblIBRArrestDelete', to:'/RMS/Incident/tblIBRArrestDelete'},
                    {label:'tblIBRArrestDeleteSubmission', to:'/RMS/Incident/tblIBRArrestDeleteSubmission'},
                    {label:'tblIBRIncidentDelete', to:'/RMS/Incident/tblIBRIncidentDelete'},
                    {label:'tblIBRIncidentDeleteSubmission', to:'/RMS/Incident/tblIBRIncidentDeleteSubmission'},
                    {label:'tblIBRIncidentLocked', to:'/RMS/Incident/tblIBRIncidentLocked'},
                    {label:'tblIBRSubmission', to:'/RMS/Incident/tblIBRSubmission'},
                    {label:'tblIncident', to:'/RMS/Incident/tblIncident'},
                    {label:'tblIncidentApprovalLog', to:'/RMS/Incident/tblIncidentApprovalLog'},
                    {label:'tblIncidentApprovalLogMerge', to:'/RMS/Incident/tblIncidentApprovalLogMerge'},
                    {label:'tblIncidentArrest', to:'/RMS/Incident/tblIncidentArrest'},
                    {label:'tblIncidentArrestAlias', to:'/RMS/Incident/tblIncidentArrestAlias'},
                    {label:'tblIncidentArrestAssistingOfficer', to:'/RMS/Incident/tblIncidentArrestAssistingOfficer'},
                    {label:'tblIncidentArrestDrug', to:'/RMS/Incident/tblIncidentArrestDrug'},
                    {label:'tblIncidentArrestOffense', to:'/RMS/Incident/tblIncidentArrestOffense'},
                    {label:'tblIncidentArrestPhysicalFeatures', to:'/RMS/Incident/tblIncidentArrestPhysicalFeatures'},
                    {label:'tblIncidentArrestProperty', to:'/RMS/Incident/tblIncidentArrestProperty'},
                    {label:'tblIncidentArrestRelatedCase', to:'/RMS/Incident/tblIncidentArrestRelatedCase'},
                    {label:'tblIncidentArrestStatement', to:'/RMS/Incident/tblIncidentArrestStatement'},
                    {label:'tblIncidentArrestWeapon', to:'/RMS/Incident/tblIncidentArrestWeapon'},
                    {label:'tblIncidentAssignment', to:'/RMS/Incident/tblIncidentAssignment'},
                    {label:'tblIncidentAssistingOfficer', to:'/RMS/Incident/tblIncidentAssistingOfficer'},
                    {label:'tblIncidentAuditTrailDelete', to:'/RMS/Incident/tblIncidentAuditTrailDelete'},
                    {label:'tblIncidentAuditTrailUpdate', to:'/RMS/Incident/tblIncidentAuditTrailUpdate'},
                    {label:'tblIncidentCaseNotes', to:'/RMS/Incident/tblIncidentCaseNotes'},
                    {label:'tblIncidentCaseNotesAuditTrail', to:'/RMS/Incident/tblIncidentCaseNotesAuditTrail'},
                    {label:'tblIncidentDrug', to:'/RMS/Incident/tblIncidentDrug'},
                    {label:'tblIncidentFVAbuseType', to:'/RMS/Incident/tblIncidentFVAbuseType'},
                    {label:'tblIncidentFVPoliceAction', to:'/RMS/Incident/tblIncidentFVPoliceAction'},
                    {label:'tblIncidentFVRelationshipToVictim', to:'/RMS/Incident/tblIncidentFVRelationshipToVictim'},
                    {label:'tblIncidentImage', to:'/RMS/Incident/tblIncidentImage'},
                    {label:'tblIncidentMergeLog', to:'/RMS/Incident/tblIncidentMergeLog'},
                    {label:'tblIncidentMO', to:'/RMS/Incident/tblIncidentMO'},
                    {label:'tblIncidentOffender', to:'/RMS/Incident/tblIncidentOffender'},
                    {label:'tblIncidentOffenderAlias', to:'/RMS/Incident/tblIncidentOffenderAlias'},
                    {label:'tblIncidentOffenderPhysicalFeatures', to:'/RMS/Incident/tblIncidentOffenderPhysicalFeatures'},
                    {label:'tblIncidentOffenderRelatedOffense', to:'/RMS/Incident/tblIncidentOffenderRelatedOffense'},
                    {label:'tblIncidentOffenderStatement', to:'/RMS/Incident/tblIncidentOffenderStatement'},
                    {label:'tblIncidentOffense', to:'/RMS/Incident/tblIncidentOffense'},
                    {label:'tblIncidentOffenseBiasMotivated', to:'/RMS/Incident/tblIncidentOffenseBiasMotivated'},
                    {label:'tblIncidentOffenseCriminalActivity', to:'/RMS/Incident/tblIncidentOffenseCriminalActivity'},
                    {label:'tblIncidentOffenseGangActivity', to:'/RMS/Incident/tblIncidentOffenseGangActivity'},
                    {label:'tblIncidentOffenseOffenderUsed', to:'/RMS/Incident/tblIncidentOffenseOffenderUsed'},
                    {label:'tblIncidentOffenseWeapon', to:'/RMS/Incident/tblIncidentOffenseWeapon'},
                    {label:'tblIncidentOthersInvolved', to:'/RMS/Incident/tblIncidentOthersInvolved'},
                    {label:'tblIncidentOthersInvolvedStatement', to:'/RMS/Incident/tblIncidentOthersInvolvedStatement'},
                    {label:'tblIncidentProperty', to:'/RMS/Incident/tblIncidentProperty'},
                    {label:'tblIncidentRecentlyUsed', to:'/RMS/Incident/tblIncidentRecentlyUsed'},
                    {label:'tblIncidentRelatedCase', to:'/RMS/Incident/tblIncidentRelatedCase'},
                    {label:'tblIncidentRoute', to:'/RMS/Incident/tblIncidentRoute'},
                    {label:'tblIncidentRoutePending', to:'/RMS/Incident/tblIncidentRoutePending'},
                    {label:'tblIncidentSearch', to:'/RMS/Incident/tblIncidentSearch'},
                    {label:'tblIncidentSearchCriteria', to:'/RMS/Incident/tblIncidentSearchCriteria'},
                    {label:'tblIncidentSolvability', to:'/RMS/Incident/tblIncidentSolvability'},
                    {label:'tblIncidentSupplement', to:'/RMS/Incident/tblIncidentSupplement'},
                    {label:'tblIncidentSynchronize', to:'/RMS/Incident/tblIncidentSynchronize'},
                    {label:'tblIncidentVictim', to:'/RMS/Incident/tblIncidentVictim'},
                    {label:'tblIncidentVictimAssaultCircumstance', to:'/RMS/Incident/tblIncidentVictimAssaultCircumstance'},
                    {label:'tblIncidentVictimInjury', to:'/RMS/Incident/tblIncidentVictimInjury'},
                    {label:'tblIncidentVictimOffender', to:'/RMS/Incident/tblIncidentVictimOffender'},
                    {label:'tblIncidentVictimRelatedOffense', to:'/RMS/Incident/tblIncidentVictimRelatedOffense'},
                    {label:'tblIncidentVictimStatement', to:'/RMS/Incident/tblIncidentVictimStatement'},
                    {label:'tblLocking', to:'/RMS/Incident/tblLocking'},
                    {label:'tblUCRArrest_194', to:'/RMS/Incident/tblUCRArrest_194'},
                    {label:'tblVersion', to:'/RMS/Incident/tblVersion'},
                    {label:'z_mirror_tblIncident_194', to:'/RMS/Incident/z_mirror_tblIncident_194'},
                    {label:'z_mirror_tblIncidentDrug_194', to:'/RMS/Incident/z_mirror_tblIncidentDrug_194'},
                    {label:'z_mirror_tblIncidentOffender_194', to:'/RMS/Incident/z_mirror_tblIncidentOffender_194'},
                    {label:'z_mirror_tblIncidentOffense_194', to:'/RMS/Incident/z_mirror_tblIncidentOffense_194'},
                    {label:'z_mirror_tblIncidentProperty_194', to:'/RMS/Incident/z_mirror_tblIncidentProperty_194'},
                    {label:'z_mirror_tblIncidentSupplement_194', to:'/RMS/Incident/z_mirror_tblIncidentSupplement_194'},
                    {label:'z_mirror_tblIncidentVictim_194', to:'/RMS/Incident/z_mirror_tblIncidentVictim_194'},
                ]
            },
            {
                label: 'Views',
                content: [
                    {label:'ARPComplainant', to:'/RMS/Incident/ARPComplainant'},
                    {label:'ARPDrugs', to:'/RMS/Incident/ARPDrugs'},
                    {label:'ARPIncidentNew', to:'/RMS/Incident/ARPIncidentNew'},
                    {label:'ARPLandingNew', to:'/RMS/Incident/ARPLandingNew'},
                    {label:'ARPOffender', to:'/RMS/Incident/ARPOffender'},
                    {label:'ARPOffense', to:'/RMS/Incident/ARPOffense'},
                    {label:'ARPProperty', to:'/RMS/Incident/ARPProperty'},
                    {label:'ARPRelatedIncidentOffender', to:'/RMS/Incident/ARPRelatedIncidentOffender'},
                    {label:'ARPRelatedIncidentOffense', to:'/RMS/Incident/ARPRelatedIncidentOffense'},
                    {label:'ARPRelatedOffense', to:'/RMS/Incident/ARPRelatedOffense'},
                    {label:'ARPSupplement', to:'/RMS/Incident/ARPSupplement'},
                    {label:'ARPVictim', to:'/RMS/Incident/ARPVictim'},
                    {label:'ARPWitness', to:'/RMS/Incident/ARPWitness'},
                    {label:'CrimeLogTXT', to:'/RMS/Incident/CrimeLogTXT'},
                    {label:'CrimeReportOffenseTypes', to:'/RMS/Incident/CrimeReportOffenseTypes'},
                    {label:'Incident', to:'/RMS/Incident/Incident'},
                    {label:'NonCrimeLog', to:'/RMS/Incident/NonCrimeLog'},
                    {label:'WebIncidents', to:'/RMS/Incident/WebIncidents'},
                ]
            },
        ]
        
    },
];

export const ArchiveNav = [
    {
        icon: 'fas fa-scroll',
        label: 'Past APD Imports',
        to: '/progs/Past_APD_Imports',
    }
];