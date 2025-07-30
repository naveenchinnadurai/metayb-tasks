
/**
 * @swagger
 * /user/check:
 *   get:
 *     summary: Health check for user routes
 *     responses:
 *       200:
 *         description: User route is reachable
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Fetch all users
 *     responses:
 *       200:
 *         description: A list of users
 */

/**
 * @swagger
 * /user/id/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /user/search:
 *   get:
 *     summary: Search user by name or email
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching users
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Add a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - role
 *               - YOB
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               role:
 *                 type: string
 *               YOB:
 *                 type: integer
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Validation error or user already exists
 */
