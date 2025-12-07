import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlightForm from '../../src/client/components/FlightForm';

describe('FlightForm Component', () => {
    test('renders FlightForm correctly', () => {
        render(<FlightForm />);
        expect(screen.getByLabelText(/Flight Number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Departure Location/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Arrival Location/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Flight Date/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    });

    test('submits the form with correct data', () => {
        render(<FlightForm />);
        
        fireEvent.change(screen.getByLabelText(/Flight Number/i), { target: { value: 'FL123' } });
        fireEvent.change(screen.getByLabelText(/Departure Location/i), { target: { value: 'JFK' } });
        fireEvent.change(screen.getByLabelText(/Arrival Location/i), { target: { value: 'LAX' } });
        fireEvent.change(screen.getByLabelText(/Flight Date/i), { target: { value: '2023-10-01' } });
        
        fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
        
        // Add assertions to check if the form submission was handled correctly
        // This would typically involve checking if a callback was called or if the state was updated
    });
});