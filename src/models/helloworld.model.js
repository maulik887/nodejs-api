const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const helloWorldSchema = mongoose.Schema(
    {
        message: {
            type: String
        }
    }
);

helloWorldSchema.plugin(toJSON);

/**
 * Create an instance of HelloWorld model
 * @param {string} message
 * @returns {HelloWorld}
 */
helloWorldSchema.statics.createInstance = function (message) {
    var newMessage = new this();
    newMessage.message = message;
    return newMessage;
}

/**
 * Convert model data in HTML format
 * @param {HelloWorld} model An instance of model
 * @returns {HelloWorld}
 */
helloWorldSchema.statics.toHTML = function (model) {
    return '<p>' + model.message + '</p>';
};

/**
 * @typedef HelloWorld
 */
 const HelloWorld = mongoose.model('HelloWorld', helloWorldSchema);

 module.exports = HelloWorld;