const mongoose= require('mongoose');

const cards= mongoose.Schema({
card_number:{
type: Number,
require: true
},
code_cvv:{
type: Number,
require: true
},
date_expired:{
type: Date,
require: true
},
users:{

    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    autopopulate: true

}



});
cards.plugin(require('mongoose-autopopulate'));

module.exports= mongoose.model('cards', cards)
