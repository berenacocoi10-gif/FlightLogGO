import express from 'express';
import { generateReport } from '../../services/reportGenerator';
import { validateReportRequest } from '../../middlewares/validationMiddleware';

const router = express.Router();

// Endpoint to generate a report
router.post('/generate', validateReportRequest, async (req, res) => {
    try {
        const reportData = await generateReport(req.body);
        res.status(200).json(reportData);
    } catch (error) {
        res.status(500).json({ message: 'Error generating report', error: error.message });
    }
});

// Endpoint to retrieve a specific report
router.get('/:id', async (req, res) => {
    try {
        const reportId = req.params.id;
        // Logic to retrieve report by ID (to be implemented)
        res.status(200).json({ message: 'Report retrieved successfully', reportId });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving report', error: error.message });
    }
});

export default router;