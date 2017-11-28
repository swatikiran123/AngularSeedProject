'use strict';

var mongoose = require('mongoose')
, Schema = mongoose.Schema;
//Scheam acts like a blue print

var msgSchema = new mongoose.Schema({

	content: { type: String, require:true},
	user: { type: Schema.Types.ObjectId, ref: 'user'}

});

module.exports = mongoose.model('messages', msgSchema);