const mongoose = require('mongoose');

const test_1 = new mongoose.Schema({
    name: {type:String, require: true},
    description: {type: string}
})

const test = mongoose.model("test",test_1);

module.export = test;