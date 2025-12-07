# Pilot Logbook App

## Overview
The Pilot Logbook App is a web application designed for pilots to easily log their flight data directly after landing using a mobile or tablet device. The application automatically syncs the data to the cloud, updates total flight hours, and generates reports compliant with CAAP, CAA, FAA, and EASA regulations for sharing with flight schools or employers.

## Features
- **User Authentication**: Secure login for pilots to access their flight data.
- **Flight Data Entry**: Simple form for entering flight details immediately after landing.
- **Cloud Synchronization**: Automatic syncing of flight data to the cloud for backup and accessibility.
- **Flight Hours Tracking**: Automatic updates to total flight hours based on logged flights.
- **Report Generation**: Generate compliance reports that meet CAAP, CAA, FAA, and EASA standards.
- **Responsive Design**: Optimized for mobile and tablet devices for easy access on the go.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pilot-logbook-app.git
   ```
2. Navigate to the project directory:
   ```
   cd pilot-logbook-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables by copying the example file:
   ```
   cp .env.example .env
   ```
5. Start the development server:
   ```
   npm run dev
   ```

## Usage
- Access the application through your web browser at `http://localhost:3000`.
- Log in with your credentials or create a new account.
- Use the dashboard to view your flight data and navigate to the flight entry form.
- After entering flight data, the app will sync it to the cloud automatically.

## Testing
To run tests for the application, use the following command:
```
npm test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.