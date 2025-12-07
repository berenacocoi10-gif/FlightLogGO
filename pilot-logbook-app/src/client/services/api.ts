import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const login = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
};

export const fetchFlights = async () => {
    const response = await axios.get(`${API_BASE_URL}/flights`);
    return response.data;
};

export const addFlight = async (flightData) => {
    const response = await axios.post(`${API_BASE_URL}/flights`, flightData);
    return response.data;
};

export const fetchFlightById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/flights/${id}`);
    return response.data;
};

export const generateReport = async (reportData) => {
    const response = await axios.post(`${API_BASE_URL}/reports`, reportData);
    return response.data;
};