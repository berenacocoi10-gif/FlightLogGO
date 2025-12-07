import { FlightData } from '../../shared/models/flight';
import { syncToCloud } from '../api/flights';
import { getTotalFlightHours } from '../db/schema';

export const syncFlightData = async (flightData: FlightData) => {
    try {
        // Sync flight data to the cloud
        await syncToCloud(flightData);
        
        // Update total flight hours in the database
        const totalHours = await getTotalFlightHours();
        console.log(`Total flight hours updated: ${totalHours}`);
        
        return { success: true, message: 'Flight data synced successfully.' };
    } catch (error) {
        console.error('Error syncing flight data:', error);
        return { success: false, message: 'Failed to sync flight data.' };
    }
};