const { HelloWorld } = require('../../src/models');
const { helloworldService } = require('../../src/services');
const { helloworldController } = require('../../src/controllers');
const { getMockReq, getMockRes } = require('@jest-mock/express')

describe('Hello world model, service and controller tests', () => {
    describe('Hello world model validations', () => {
        let helloWorld;
        beforeEach(() => {
            helloWorld = {
                message: 'Hello, World',
            };
        });

        test('should correctly return a valid hello world message', async () => {
            await expect(HelloWorld.createInstance(helloWorld.message).message).toBe(helloWorld.message);
        });

        test('should correctly return a valid hello world object', async () => {
            await expect(HelloWorld.createInstance(helloWorld.message)).toHaveProperty('message');
        });
    });

    describe('Hello world service validations', () => {
        test('should return html representation of hello world message', () => {
            expect(helloworldService.helloworld(true)).toBe('<p>Hello, World</p>');
        });
    });

    describe('Hello world controller validations', () => {
        test('Controller should have helloWorld route implementation', async () => {
            const res = getMockRes()

            await helloworldController.getHelloWorld(getMockReq(), res);
            expect(res).not.toBeUndefined();

            await helloworldController.postHelloWorld(getMockReq(), res);
            expect(res).not.toBeUndefined();
        });
    });
});
