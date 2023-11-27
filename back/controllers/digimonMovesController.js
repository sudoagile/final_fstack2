const DigimonMove = require('../models/DigimonMove'); // Asegúrate de que este modelo exista y coincida con la estructura de tus datos.

// Añadir un nuevo movimiento
async function addDigimonMove(req, res) {
    try {
        const { move, spCost, type, power, attribute, inheritable, description } = req.body;

        const newMove = new DigimonMove({
            move,
            spCost,
            type,
            power,
            attribute,
            inheritable,
            description
        });

        const savedMove = await newMove.save();
        res.status(201).send({ savedMove });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

// Obtener todos los movimientos
async function getDigimonMoves(req, res) {
    try {
        const moves = await DigimonMove.find();
        res.status(200).send({ moves });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

// Encontrar un movimiento por ID
async function findDigimonMove(req, res) {
    try {
        const move = await DigimonMove.findById(req.params.id);
        if (!move) {
            return res.status(404).send({ message: 'Movimiento no encontrado' });
        }
        res.status(200).send({ move });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

// Actualizar un movimiento
async function updateDigimonMove(req, res) {
    try {

        console.log( req.params.id, 'id' );
        console.log(req.body, 'body' );
        const move = await DigimonMove.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).send({ move });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

// Eliminar un movimiento
async function deleteDigimonMove(req, res) {
    try {
        const move = await DigimonMove.findByIdAndDelete(req.params.id);
        if (!move) {
            return res.status(404).send({ message: 'Movimiento no encontrado' });
        }
        res.status(200).send({ message: 'Movimiento eliminado exitosamente' });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = { addDigimonMove, getDigimonMoves, findDigimonMove, updateDigimonMove, deleteDigimonMove };
