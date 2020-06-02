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
                label: 'Table1',
                to: '/CrimeAnalytics/GTPD/table1'
            }
        ]
    },
    {
        icon: 'fas fa-scroll',
        label: 'APD_Only',
        content: [
            {
                label: 'Table1',
                to: '/CrimeAnalytics/APD/table1'
            }
        ]
    },
];

export const RMSNav = [
    {
        icon: 'fas fa-scroll',
        label: 'SS_GARecords_Incident',
        content: [
            {
                label: 'Table1',
                to: '/RMS/Incident/table1'
            }
        ]
    },
    {
        icon: 'fas fa-scroll',
        label: 'SS_GARecords_Offense',
        content: [
            {
                label: 'Table1',
                to: '/RMS/Offense/table1'
            }
        ]
    },
    {
        icon: 'fas fa-scroll',
        label: 'SS_GARecords_Offender',
        content: [
            {
                label: 'Table1',
                to: '/RMS/Offender/table1'
            }
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