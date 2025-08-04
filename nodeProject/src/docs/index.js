import { userRoutesDocs } from './users.route.docs.js';
import { authRoutesDocs } from './auth.route.docs.js';
import { rootRoutesDocs } from './root.route.docs.js';

export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node API Documentation',
            version: '1.0.0',
            description: 'API endpoints for User, Auth and Root operations',
        },
        servers: [
            {
                url: 'http://localhost:7000',
            },
        ],
        tags: [
            { name: 'Root', description: 'Health and file-related endpoints' },
            { name: 'Auth', description: 'Authentication endpoints' },
            { name: 'Users', description: 'User CRUD operations' },
        ],
        components: {
            securitySchemes: {
                cookieAuth: {
                    type: 'apiKey',
                    in: 'cookie',
                    name: 'accessToken',
                },
            },
        },
        paths: {
            ...rootRoutesDocs,
            ...authRoutesDocs,
            ...userRoutesDocs,
        },
    },
    apis: [], // You can leave this empty since we manually construct the doc
};
