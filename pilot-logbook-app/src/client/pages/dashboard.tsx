import React, { useEffect, useState } from 'react';
import FlightList from '../components/FlightList';
import SyncStatus from '../components/SyncStatus';
import { fetchFlights } from '../services/api';
import { useOfflineSync } from '../hooks/useOfflineSync';

const Dashboard = () => {
    const [flights, setFlights] = useState([]);
    const { syncStatus } = useOfflineSync();

    useEffect(() => {
        const loadFlights = async () => {
            const flightData = await fetchFlights();
            setFlights(flightData);
        };

        loadFlights();
    }, []);

    return (
        <div>
            <h1>Your Flight Dashboard</h1>
            <SyncStatus status={syncStatus} />
            <FlightList flights={flights} />
        </div>
    );
};

export default Dashboard;