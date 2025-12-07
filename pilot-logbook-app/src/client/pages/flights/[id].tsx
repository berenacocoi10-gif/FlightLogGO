import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFlightDetails } from '../../services/api';
import FlightDetails from '../../components/FlightDetails';
import SyncStatus from '../../components/SyncStatus';

const FlightPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [flight, setFlight] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchFlightDetails = async () => {
                try {
                    const data = await getFlightDetails(id);
                    setFlight(data);
                } catch (err) {
                    setError('Failed to load flight details');
                } finally {
                    setLoading(false);
                }
            };

            fetchFlightDetails();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Flight Details</h1>
            {flight ? <FlightDetails flight={flight} /> : <div>No flight data available</div>}
            <SyncStatus />
        </div>
    );
};

export default FlightPage;