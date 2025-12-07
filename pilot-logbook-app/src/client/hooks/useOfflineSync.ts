import { useEffect, useState } from 'react';
import { syncFlightData } from '../services/sync';

const useOfflineSync = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [syncStatus, setSyncStatus] = useState('Idle');

    const handleOnline = () => {
        setIsOnline(true);
        syncData();
    };

    const handleOffline = () => {
        setIsOnline(false);
    };

    const syncData = async () => {
        setSyncStatus('Syncing...');
        try {
            await syncFlightData();
            setSyncStatus('Sync successful');
        } catch (error) {
            setSyncStatus('Sync failed');
        }
    };

    useEffect(() => {
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return { isOnline, syncStatus };
};

export default useOfflineSync;