import React, { useEffect, useState } from 'react';
import { generateReport } from '../services/reports';
import { FlightData } from '../../shared/models/flight';

const ReportBuilder: React.FC<{ flights: FlightData[] }> = ({ flights }) => {
    const [report, setReport] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateReport = async () => {
        setLoading(true);
        setError(null);
        try {
            const generatedReport = await generateReport(flights);
            setReport(generatedReport);
        } catch (err) {
            setError('Failed to generate report. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (flights.length === 0) {
            setReport(null);
        }
    }, [flights]);

    return (
        <div>
            <h2>Flight Report Builder</h2>
            <button onClick={handleGenerateReport} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Report'}
            </button>
            {error && <p className="error">{error}</p>}
            {report && (
                <div>
                    <h3>Generated Report</h3>
                    <pre>{report}</pre>
                </div>
            )}
        </div>
    );
};

export default ReportBuilder;