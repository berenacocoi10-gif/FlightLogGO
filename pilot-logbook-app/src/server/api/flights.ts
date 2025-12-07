import express from 'express';
import { Flight } from '../../shared/models/flight';
import { syncFlightData } from '../services/syncService';
import { generateReport } from '../services/reportGenerator';

const router = express.Router();

// Endpoint to create a new flight entry
router.post('/', async (req, res) => {
    const flightData: Flight = req.body;

    try {
        // Save flight data to the database (implementation not shown)
        // await saveFlightData(flightData);

        // Sync flight data to the cloud
        await syncFlightData(flightData);

        res.status(201).json({ message: 'Flight data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save flight data' });
    }
});

// Endpoint to get all flights for a user
router.get('/', async (req, res) => {
    try {
        // Retrieve flight data from the database (implementation not shown)
        // const flights = await getAllFlights();

        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve flight data' });
    }
});

// Endpoint to generate a report for a specific flight
router.get('/report/:id', async (req, res) => {
    const flightId = req.params.id;

    try {
        const report = await generateReport(flightId);
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate report' });
    }
});

export default router;