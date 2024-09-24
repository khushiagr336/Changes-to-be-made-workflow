// controllers/integrationController.js
const Integration = require('../models/integration');

// Create a new integration
exports.createIntegration = async (req, res) => {
    try {
        const newIntegration = new Integration(req.body);
        await newIntegration.save();
        res.status(201).json(newIntegration);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all integrations
exports.getIntegrations = async (req, res) => {
    try {
        const integrations = await Integration.find();
        res.status(200).json(integrations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single integration by ID
exports.getIntegrationById = async (req, res) => {
    try {
        const integration = await Integration.findById(req.params.id);
        if (!integration) return res.status(404).json({ error: 'Integration not found' });
        res.status(200).json(integration);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an integration by ID
exports.updateIntegration = async (req, res) => {
    try {
        const updatedIntegration = await Integration.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedIntegration) return res.status(404).json({ error: 'Integration not found' });
        res.status(200).json(updatedIntegration);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an integration by ID
exports.deleteIntegration = async (req, res) => {
    try {
        const deletedIntegration = await Integration.findByIdAndDelete(req.params.id);
        if (!deletedIntegration) return res.status(404).json({ error: 'Integration not found' });
        res.status(200).json({ message: 'Integration deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
