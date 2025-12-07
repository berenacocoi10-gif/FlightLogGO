import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const generateReport = async (flightData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/reports/generate`, flightData);
        return response.data;
    } catch (error) {
        console.error('Error generating report:', error);
        throw error;
    }
};

export const fetchReports = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/reports/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reports:', error);
        throw error;
    }
};