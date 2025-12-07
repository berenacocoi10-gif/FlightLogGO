import React, { useState } from 'react';

const FlightForm = () => {
    const [flightData, setFlightData] = useState({
        flightNumber: '',
        departure: '',
        arrival: '',
        duration: '',
        date: '',
        remarks: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFlightData({
            ...flightData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add API call to submit flight data
        try {
            const response = await fetch('/api/flights', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(flightData)
            });
            if (response.ok) {
                // Handle successful submission (e.g., show a success message, reset form)
            } else {
                // Handle errors (e.g., show an error message)
            }
        } catch (error) {
            // Handle network errors
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Flight Number:</label>
                <input type="text" name="flightNumber" value={flightData.flightNumber} onChange={handleChange} required />
            </div>
            <div>
                <label>Departure:</label>
                <input type="text" name="departure" value={flightData.departure} onChange={handleChange} required />
            </div>
            <div>
                <label>Arrival:</label>
                <input type="text" name="arrival" value={flightData.arrival} onChange={handleChange} required />
            </div>
            <div>
                <label>Duration:</label>
                <input type="text" name="duration" value={flightData.duration} onChange={handleChange} required />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" name="date" value={flightData.date} onChange={handleChange} required />
            </div>
            <div>
                <label>Remarks:</label>
                <textarea name="remarks" value={flightData.remarks} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Submit Flight Data</button>
        </form>
    );
};

export default FlightForm;