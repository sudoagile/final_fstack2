const express = require('express');
const api = express.Router();
const upload = require('../libs/storage');

const {
    addDigimonMove,
    getDigimonMoves,
    findDigimonMove,
    updateDigimonMove,
    deleteDigimonMove
} = require('../controllers/digimonMovesController');

api.get('/digimon-moves', getDigimonMoves);
api.post('/digimon-moves', upload.single('imagen'), addDigimonMove);
api.get('/digimon-moves/:id', findDigimonMove);
api.put('/digimon-moves/:id', upload.single('imagen'), updateDigimonMove);
api.delete('/digimon-moves/:id', deleteDigimonMove);

module.exports = api;
