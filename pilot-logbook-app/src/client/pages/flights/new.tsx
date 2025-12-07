import React, { useState } from 'react';
import FlightForm from '../../components/FlightForm';
import { syncFlightData } from '../../services/sync';
import { useHistory } from 'react-router-dom';

const NewFlightPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleFlightSubmit = async (flightData) => {
        setIsLoading(true);
        try {
            await syncFlightData(flightData);
            history.push('/dashboard');
        } catch (error) {
            console.error('Error syncing flight data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>New Flight Entry</h1>
            <FlightForm onSubmit={handleFlightSubmit} isLoading={isLoading} />
        </div>
    );
};

export default NewFlightPage;