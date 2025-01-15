#!/bin/bash

# Start Docker containers
docker-compose up -d

# Wait for Kafka to be ready
echo "Waiting for Kafka to be ready..."
sleep 10

# Start services
npm run start:all 