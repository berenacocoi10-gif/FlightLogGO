import React from 'react';
import { useEffect, useState } from 'react';
import { getFlights } from '../services/api';

const FlightList: React.FC = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const data = await getFlights();
                setFlights(data);
            } catch (err) {
                setError('Failed to load flights');
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Your Flights</h2>
            <ul>
                {flights.map((flight) => (
                    <li key={flight.id}>
                        <strong>{flight.date}</strong>: {flight.aircraft} - {flight.duration} hours
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightList;