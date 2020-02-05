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
                label: 'Codes-Addresses',
                to: '/tables/CrimeAnalytics/Codes-Addresses',
            },
            {
                label: 'Codes-Offenses',
                to: '/tables/CrimeAnalytics/Codes-Offenses',
            }
        ]
    },
    {
        icon: 'pe-7s-rocket',
        label: 'GTPD RMS',
        to: '/tables/GTPD_RMS',
    },
    {
        icon: 'pe-7s-rocket',
        label: 'APD Shared',
        to: '/tables/APD_RMS',
    }
];
export const ProgramNav = [
    {
        icon: 'pe-7s-rocket',
        label: 'Import APD',
        to: '/progs/Import_APD'
    },
    {
        icon: 'pe-7s-rocket',
        label: 'Import GTPD',
        to: '/progs/Import_GTPD',
    },
    {
        icon: 'pe-7s-rocket',
        label: 'Update Time Table',
        to: '/progs/Update_Time_Table',
    }
];