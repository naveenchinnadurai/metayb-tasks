export const rootRoutesDocs = {
    '/': {
        get: {
            tags: ['Root'],
            summary: 'API welcome message and docs link',
            responses: {
                200: {
                    description: 'Returns welcome message and Swagger docs link',
                },
            },
        },
    },
    '/resume': {
        get: {
            tags: ['Root'],
            summary: 'Download developer resume PDF',
            responses: {
                200: {
                    description: 'Triggers PDF file download',
                },
            },
        },
    },
    '/check': {
        get: {
            tags: ['Root'],
            summary: 'API status check',
            responses: {
                200: {
                    description: 'Returns API check message',
                },
            },
        },
    },
};
