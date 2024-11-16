const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

// Endpoint : Créer un nouvel incident
router.post('/report', async (req, res) => {
    try {
        const { type, location, severity, description } = req.body;
        const newIncident = new Incident({ type, location, severity, description });
        await newIncident.save();
        res.status(201).json({ message: 'Incident reporté avec succès', data: newIncident });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
});

// Endpoint : Obtenir tous les incidents
router.get('/', async (req, res) => {
    try {
        const incidents = await Incident.find();
        res.status(200).json(incidents);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
});

module.exports = router;
