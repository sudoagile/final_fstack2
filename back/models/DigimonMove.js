const mongoose = require('mongoose');

const digimonMoveSchema = new mongoose.Schema({
    move: String,
    spcost: Number,
    type: String,
    power: Number,
    attribute: String,
    inheritable: String,
    description: String
});

const DigimonMove = mongoose.model('DigimonMove', digimonMoveSchema, 'movelist');

module.exports = DigimonMove;
