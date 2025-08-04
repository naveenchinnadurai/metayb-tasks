export const userRoutesDocs = {
    '/api/v1/users/check': {
        get: {
            tags: ['Users'],
            summary: 'Check if user route is working',
            responses: {
                200: {
                    description: 'User route is accessible',
                },
            },
        },
    },
    '/api/v1/users': {
        get: {
            tags: ['Users'],
            summary: 'Get all users',
            responses: {
                200: {
                    description: 'Fetched all users',
                },
            },
        },
        post: {
            tags: ['Users'],
            summary: 'Create a new user',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                name: { type: 'string' },
                                role: { type: 'string' },
                                YOB: { type: 'string' },
                                email: { type: 'string' },
                                password: { type: 'string' },
                            },
                            required: ['name', 'role', 'YOB', 'email', 'password'],
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: 'User created successfully',
                },
                400: {
                    description: 'User already exists or invalid input',
                },
            },
        },
    },
    '/api/v1/users/id/{id}': {
        get: {
            tags: ['Users'],
            summary: 'Get a user by ID',
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema: { type: 'string' },
                },
            ],
            responses: {
                200: {
                    description: 'User found',
                },
                404: {
                    description: 'User not found',
                },
            },
        },
    },
    '/api/v1/users/search': {
        get: {
            tags: ['Users'],
            summary: 'Search users by name and/or email',
            parameters: [
                {
                    in: 'query',
                    name: 'name',
                    schema: { type: 'string' },
                },
                {
                    in: 'query',
                    name: 'email',
                    schema: { type: 'string' },
                },
            ],
            responses: {
                200: {
                    description: 'Search successful',
                },
            },
        },
    },
    '/api/v1/users/profile': {
        get: {
            tags: ['Users'],
            summary: 'Get profile of logged-in user',
            security: [{ cookieAuth: [] }],
            responses: {
                200: {
                    description: 'User profile returned',
                },
                404: {
                    description: 'User not found or token missing',
                },
            },
        },
    },
};
