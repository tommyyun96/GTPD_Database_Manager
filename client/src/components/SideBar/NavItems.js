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
                to: '/CrimeAnalytics/GTPD/IncidentOffenses'
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
                label: 'Incident',
                to: '/RMS/Incident/Incident'
            },
            {
                label: 'Arrest',
                to: '/RMS/Incident/Arrest'
            },
            {
                label: 'Drug',
                to: '/RMS/Incident/Drug'
            },
            {
                label: 'MO',
                to: '/RMS/Incident/MO'
            },
            {
                label: 'Offender',
                to: '/RMS/Incident/Offender'
            },
            {
                label: 'Offense',
                to: '/RMS/Incident/Offense'
            },
            {
                label: 'OffenseOffenderUsed',
                to: '/RMS/Incident/OffenseOffenderUsed'
            },
            {
                label: 'OffenseWeapon',
                to: '/RMS/Incident/OffenseWeapon'
            },
            {
                label: 'OthersInvolved',
                to: '/RMS/Incident/OthersInvolved'
            },
            {
                label: 'Property',
                to: '/RMS/Incident/Property'
            },
            {
                label: 'Supplement',
                to: '/RMS/Incident/Supplement'
            },
            {
                label: 'Victim',
                to: '/RMS/Incident/Victim'
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