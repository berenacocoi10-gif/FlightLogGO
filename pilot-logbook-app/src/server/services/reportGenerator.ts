import { FlightData } from '../../shared/models/flight';
import { generateCAAPReport } from './compliance/caap';
import { generateFAAReport } from './compliance/faa';
import { generateEASAReport } from './compliance/easa';

export class ReportGenerator {
    private flightData: FlightData[];

    constructor(flightData: FlightData[]) {
        this.flightData = flightData;
    }

    public generateReports() {
        const caapReport = this.generateCAAP();
        const faaReport = this.generateFAA();
        const easaReport = this.generateEASA();

        return {
            caapReport,
            faaReport,
            easaReport,
        };
    }

    private generateCAAP() {
        return generateCAAPReport(this.flightData);
    }

    private generateFAA() {
        return generateFAAReport(this.flightData);
    }

    private generateEASA() {
        return generateEASAReport(this.flightData);
    }
}