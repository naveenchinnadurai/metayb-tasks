// swaggerOptions.js
export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nodejs Backend Task',
            version: '1.0.0',
            description: 'A sample API documentation using Swagger',
        },
        servers: [
            {
                url: 'http://localhost:7000',
            },
        ],
    },
    apis: [
        './src/docs/userRoutesDocs.js',
        './src/docs/rootRoutesDocs.js'
    ],
};
