#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")/.."

# Build the application
echo "Building the application..."
npm run build

# Deploy to the server
echo "Deploying to the server..."
# Replace with your server deployment command
# Example: scp -r build/ user@yourserver:/path/to/deploy

# Notify completion
echo "Deployment completed successfully."