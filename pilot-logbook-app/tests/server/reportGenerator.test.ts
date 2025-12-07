import { generateReport } from '../../src/server/services/reportGenerator';
import { Flight } from '../../src/shared/models/flight';

describe('Report Generator', () => {
    let flightData: Flight;

    beforeEach(() => {
        flightData = {
            id: '1',
            pilotName: 'John Doe',
            aircraft: 'Cessna 172',
            flightDate: new Date('2023-10-01'),
            duration: 1.5,
            departure: 'KABC',
            arrival: 'KXYZ',
            remarks: 'Smooth flight',
        };
    });

    it('should generate a report for a valid flight', () => {
        const report = generateReport(flightData);
        expect(report).toHaveProperty('pilotName', 'John Doe');
        expect(report).toHaveProperty('flightDate', flightData.flightDate);
        expect(report).toHaveProperty('duration', flightData.duration);
        expect(report).toHaveProperty('departure', flightData.departure);
        expect(report).toHaveProperty('arrival', flightData.arrival);
        expect(report).toHaveProperty('remarks', flightData.remarks);
    });

    it('should throw an error for invalid flight data', () => {
        flightData = { ...flightData, pilotName: '' }; // Invalid pilot name
        expect(() => generateReport(flightData)).toThrow('Invalid flight data');
    });
});