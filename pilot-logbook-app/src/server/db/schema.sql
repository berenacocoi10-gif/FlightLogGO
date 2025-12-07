CREATE TABLE pilots (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    license_number VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE flights (
    id SERIAL PRIMARY KEY,
    pilot_id INT REFERENCES pilots(id) ON DELETE CASCADE,
    flight_date DATE NOT NULL,
    aircraft_type VARCHAR(50) NOT NULL,
    flight_duration INTERVAL NOT NULL,
    departure_airport VARCHAR(10) NOT NULL,
    arrival_airport VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE flight_logs (
    id SERIAL PRIMARY KEY,
    flight_id INT REFERENCES flights(id) ON DELETE CASCADE,
    log_entry TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);