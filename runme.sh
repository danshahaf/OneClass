#!/bin/bash

# Stop any running local host React servers
echo ">> Killing anything on port 3000"
kill $(lsof -t -i:3000) 2>/dev/null

# Change to the "frontend" directory
cd frontend

# Start the npm server
echo ">> Running React Frontend"
npm start &

# Run backend Express (node) server
echo ">> Executing Backend Server"
node index.js &

# Prompt user to run on another port if desired
read -p "Would you like to run the app on another port instead? (Y/n): " choice
if [[ "$choice" == "Y" || "$choice" == "y" ]]; then
  read -p "Enter the new port number: " new_port
  cd frontend
  echo ">> Running React Frontend on port $new_port"
  PORT=$new_port npm start
fi
