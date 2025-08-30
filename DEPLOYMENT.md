# Receipt Extractor Frontend - Deployment Guide

## Overview

This is a production-ready React application for extracting details from receipt images. The application is containerized with Docker and optimized for production deployment.

## Quick Start

### Development
```bash
# Local development
npm install
npm run dev

# Development with Docker
make docker-dev
# or
docker-compose up --build
```

### Production
```bash
# Quick production deployment
make deploy
# or
./deploy.sh

# Manual production deployment
docker build -f Dockerfile.prod -t receipt-extractor-frontend:latest .
docker run -p 80:80 receipt-extractor-frontend:latest
```

## Architecture

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Production Server**: Nginx (Alpine Linux)
- **Container**: Multi-stage Docker build

## Docker Files

| File | Purpose |
|------|---------|
| `Dockerfile` | Development environment |
| `Dockerfile.prod` | Production build |
| `Dockerfile.optimized` | Advanced production build with security optimizations |
| `docker-compose.yml` | Development environment |
| `docker-compose.prod.yml` | Production environment |
| `docker-compose.staging.yml` | Staging environment |

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | Empty (relative URLs) |

## Production Features

### Security
- Non-root user in containers
- Security headers in Nginx
- Content Security Policy
- XSS Protection
- Frame Options

### Performance
- Gzip compression
- Asset caching
- Code splitting
- Minification
- Multi-stage builds

### Monitoring
- Health check endpoints
- Container health checks
- Nginx access logs
- Error logging

## Deployment Commands

```bash
# Make commands
make help          # Show all available commands
make install       # Install dependencies
make dev           # Start development server
make build         # Build for production
make docker-dev    # Run with Docker (development)
make docker-prod   # Run with Docker (production)
make deploy        # Deploy production container
make stop          # Stop running containers
make logs          # Show container logs

# Direct Docker commands
docker build -f Dockerfile.prod -t receipt-extractor-frontend .
docker run -d --name receipt-app -p 80:80 receipt-extractor-frontend
docker-compose -f docker-compose.prod.yml up -d
```

## Health Checks

- Application: `http://localhost/health`
- Docker health checks built-in
- Nginx status monitoring

## File Structure

```
├── src/                    # Source code
├── sample-receipts/        # Sample images for testing
├── dist/                   # Build output
├── Dockerfile*             # Docker configurations
├── docker-compose*.yml     # Docker Compose files
├── nginx.conf              # Nginx configuration
├── deploy.sh               # Deployment script
├── Makefile                # Build automation
└── README.md               # Documentation
```

## Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Docker Issues
```bash
# Clean Docker cache
docker system prune -a
docker-compose down -v
```

### Logs
```bash
# Container logs
docker logs receipt-extractor-frontend

# Nginx logs
docker exec receipt-extractor-frontend cat /var/log/nginx/access.log
docker exec receipt-extractor-frontend cat /var/log/nginx/error.log
```

## Performance Optimization

The application includes several performance optimizations:

1. **Code Splitting**: Vendor libraries separated from application code
2. **Asset Optimization**: Images and fonts optimized for web
3. **Caching**: Long-term caching for static assets
4. **Compression**: Gzip compression for all text assets
5. **Minification**: JavaScript and CSS minification

## Security Considerations

1. **Container Security**: Non-root user, minimal base image
2. **Web Security**: CSP headers, XSS protection
3. **Network Security**: No unnecessary ports exposed
4. **Dependency Security**: Regular dependency updates

## Monitoring and Logging

- Health check endpoint at `/health`
- Nginx access logs for request monitoring
- Error logs for debugging
- Container resource monitoring with Docker stats
