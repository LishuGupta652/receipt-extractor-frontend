#!/bin/bash

# Receipt Extractor Frontend - Production Deployment Script

set -e

echo "🚀 Starting Receipt Extractor Frontend deployment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Error: Docker is not running. Please start Docker and try again."
    exit 1
fi

# Build production image
echo "📦 Building production image..."
docker build -f Dockerfile.prod -t receipt-extractor-frontend:latest .

# Stop any running containers
echo "🛑 Stopping existing containers..."
docker stop receipt-extractor-frontend || true
docker rm receipt-extractor-frontend || true

# Run the production container
echo "🏃‍♂️ Starting production container..."
docker run -d \
    --name receipt-extractor-frontend \
    --restart unless-stopped \
    -p 80:80 \
    receipt-extractor-frontend:latest

echo "✅ Receipt Extractor Frontend is now running!"
echo "🌐 Access the application at: http://localhost"
echo "❤️  Health check available at: http://localhost/health"

# Show container status
echo ""
echo "📊 Container status:"
docker ps --filter "name=receipt-extractor-frontend" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
