export const authRoutesDocs = {
    '/api/v1/auth': {
        get: {
            tags: ['Auth'],
            summary: 'Check if auth route is working',
            responses: {
                200: {
                    description: 'Auth route is accessible',
                },
            },
        },
    },
    '/api/v1/auth/login': {
        post: {
            tags: ['Auth'],
            summary: 'User login',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                email: { type: 'string' },
                                password: { type: 'string' },
                            },
                            required: ['email', 'password'],
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Login successful',
                },
                403: {
                    description: 'Invalid credentials',
                },
                404: {
                    description: 'User not found',
                },
            },
        },
    },
};
