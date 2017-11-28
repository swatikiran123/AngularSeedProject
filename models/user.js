'use strict';

var mongoose = require('mongoose')
, Schema = mongoose.Schema;
//Scheam acts like a blue print

var mongooseValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({

	firstName: { type: String, require:true},
	lastName: { type: String, require:true},
	password: { type: String, require:true},
	email: { type: String, require:true, unique: true},
	messages: [{ type: Schema.Types.ObjectId, ref: 'messages'}]

});

userSchema.plugin(mongooseValidator);
module.exports = mongoose.model('users', userSchema);