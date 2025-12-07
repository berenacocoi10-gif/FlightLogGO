import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authRoutes } from './api/auth';
import { flightRoutes } from './api/flights';
import { reportRoutes } from './api/reports';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/reports', reportRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});