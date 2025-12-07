export interface Flight {
    id: string;
    pilotId: string;
    aircraftType: string;
    departureAirport: string;
    arrivalAirport: string;
    flightDate: Date;
    flightDuration: number; // in minutes
    totalFlightHours: number; // cumulative flight hours
    flightNotes?: string;
    createdAt: Date;
    updatedAt: Date;
}