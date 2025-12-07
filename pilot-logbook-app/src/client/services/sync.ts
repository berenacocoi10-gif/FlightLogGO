import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const useSyncFlightData = (flightData) => {
    const [syncStatus, setSyncStatus] = useState('idle');

    const syncData = async () => {
        setSyncStatus('syncing');
        try {
            await axios.post(`${API_URL}/flights`, flightData);
            setSyncStatus('success');
        } catch (error) {
            console.error('Error syncing flight data:', error);
            setSyncStatus('error');
        }
    };

    useEffect(() => {
        if (flightData) {
            syncData();
        }
    }, [flightData]);

    return syncStatus;
};