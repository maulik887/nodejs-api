const express = require('express');
const helloworldController = require('../../controllers/helloworld.controller');

const router = express.Router();

router
	.route('/')
	.get(helloworldController.getHelloWorld)
	.post(helloworldController.postHelloWorld);


module.exports = router;

/**
 * @swagger
 * tags:
 *   name: HelloWorld
 *   description: Hello World rest api
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get hello-world api
 *     description: Hello world api returns "hello world" text based on Accept header value. Default is an HTML response, api supports application/json Accept header for receiving json response.
 *     tags: [HelloWorld]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/HelloWorld'
 *   post:
 *     summary: Post hello-world api
 *     description: Hello world api returns an HTML response
 *     tags: [HelloWorld]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/HelloWorld'
 */
