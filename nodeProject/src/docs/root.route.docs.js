/**
 * @swagger
 * /:
 *   get:
 *     summary: Root route to verify the server is running
 *     responses:
 *       200:
 *         description: Returns a welcome message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Its Root of API
 */

/**
 * @swagger
 * /resume:
 *   get:
 *     summary: Download a resume PDF file
 *     responses:
 *       200:
 *         description: Triggers download of the resume PDF file
 */

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: A sample hello endpoint
 *     responses:
 *       200:
 *         description: Returns a greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hey, Its a API response
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users (delegated to user routes)
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 */

/**
 * @swagger
 * /api-docs:
 *   get:
 *     summary: Access Swagger UI documentation
 *     description: Launches the interactive API documentation
 *     responses:
 *       200:
 *         description: Swagger UI loaded
 */

/**
 * @swagger
 * /{any*}:
 *   get:
 *     summary: Catch-all for unmatched routes
 *     responses:
 *       404:
 *         description: Route not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Not Found
 *                 message:
 *                   type: string
 *                   example: Cannot GET /non-existent-route
 */
