let mongoose = require('mongoose');
//create a model class

let individualModel = mongoose.Schema({
    name:String,
    address:String,
    email:String
},
{
    collection: "individuals"
});

module.exports = mongoose.model('Individual', individualModel);