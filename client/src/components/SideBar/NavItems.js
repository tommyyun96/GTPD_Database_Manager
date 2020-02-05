export const TableNav = [
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
];
export const ProgramNav = [
    {
        icon: 'fas fa-scroll',
        label: 'Import APD',
        to: '/progs/Import_APD'
    },
    {
        icon: 'fas fa-scroll',
        label: 'Import GTPD',
        to: '/progs/Import_GTPD',
    },
    {
        icon: 'fas fa-scroll',
        label: 'Update Time Table',
        to: '/progs/Update_Time_Table',
    }
];