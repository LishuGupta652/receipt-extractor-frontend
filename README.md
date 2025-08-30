# Receipt Extractor Frontend

A modern, production-ready React application for extracting details from receipt images using AI-powered OCR technology. Built with TypeScript, Tailwind CSS, and fully containerized with Docker for seamless deployment.

![Receipt Extractor](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![Production](https://img.shields.io/badge/Production-Ready-green)

## ✨ Features

- 📁 **Drag & Drop Upload** - Intuitive file upload with drag and drop support
- 🔍 **AI-Powered OCR** - Automatic text extraction from receipt images
- ⚡ **Real-time Processing** - Visual feedback with loading states
- 📱 **Responsive Design** - Mobile-first design with Tailwind CSS
- 🐳 **Docker Ready** - Production-grade containerization
- 🔒 **Security Hardened** - Security headers and best practices
- ⚡ **Performance Optimized** - Code splitting, caching, and compression
- 🏥 **Health Monitoring** - Built-in health checks and monitoring

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 10+
- Docker (for containerized deployment)
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/receipt-extractor-frontend.git
cd receipt-extractor-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Docker Development

```bash
# Run with Docker Compose
npm run docker:dev

# Or manually
docker-compose up --build
```

## 🏗️ Production Deployment

### Option 1: Quick Deploy (Recommended)

```bash
# Use the deployment script
./deploy.sh

# Or with Make
make deploy
```

### Option 2: Manual Docker Deployment

```bash
# Build production image
npm run docker:build

# Run production container
npm run docker:run
```

### Option 3: Docker Compose Production

```bash
# Production environment
npm run docker:prod

# Staging environment
docker-compose -f docker-compose.staging.yml up --build
```

The production app will be available at `http://localhost`

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run docker:dev` | Run development with Docker |
| `npm run docker:prod` | Run production with Docker |
| `npm run docker:build` | Build production Docker image |
| `npm run docker:run` | Run production container |

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 4.1
- **Build Tool**: Vite 6.3
- **Icons**: Lucide React
- **Linting**: ESLint 9.22
- **Production Server**: Nginx (Alpine)
- **Container**: Docker with multi-stage builds

## 🐳 Docker Architecture

### Development Container
- Hot reload enabled
- Volume mounting for live code changes
- Debug-friendly configuration

### Production Container
- Multi-stage build for optimization
- Nginx for static file serving
- Security hardened with non-root user
- Health checks included
- Compressed assets with Gzip

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file (copy from `.env.template`):

```bash
# Backend API base URL (optional)
VITE_API_BASE_URL=http://localhost:3000
```

### Available Environments

- **Development**: `docker-compose.yml`
- **Production**: `docker-compose.prod.yml`
- **Staging**: `docker-compose.staging.yml`

## 📁 Project Structure

```
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── landing-page.tsx
│   │   ├── file-preview.tsx
│   │   ├── loader.tsx
│   │   └── extraction-result.tsx
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── sample-receipts/        # Sample images for testing
├── dist/                  # Production build output
├── public/                # Static assets
├── Dockerfile             # Development container
├── Dockerfile.prod        # Production container
├── Dockerfile.optimized   # Advanced production container
├── docker-compose*.yml    # Container orchestration
├── nginx.conf             # Nginx configuration
├── deploy.sh              # Deployment script
├── Makefile               # Build automation
└── README.md              # This file
```

## 🔍 API Integration

The application expects a backend API with the following endpoint:

```
POST /receipt-extractor/extract-receipt-details
Content-Type: multipart/form-data

Body: FormData with 'file' field containing the receipt image
```

Configure the API URL via the `VITE_API_BASE_URL` environment variable.

## 🏥 Monitoring & Health Checks

### Health Endpoint
```
GET /health
```
Returns: `200 OK` with "healthy" response

### Docker Health Checks
Built-in health checks monitor container status:
- **Interval**: 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3

### Logging
- Nginx access logs: `/var/log/nginx/access.log`
- Nginx error logs: `/var/log/nginx/error.log`
- Container logs: `docker logs receipt-extractor-frontend`

## ⚡ Performance Features

- **Code Splitting**: Vendor chunks separated for better caching
- **Asset Optimization**: Minified CSS/JS with Terser
- **Compression**: Gzip compression for all text assets
- **Caching**: Long-term caching headers for static assets
- **Lazy Loading**: Components loaded on demand

## 🔒 Security Features

- **Security Headers**: CSP, X-Frame-Options, XSS Protection
- **Non-root Container**: Runs with unprivileged user
- **Minimal Attack Surface**: Alpine Linux base image
- **Content Security Policy**: Prevents XSS attacks
- **No Sensitive Data**: No hardcoded secrets or keys

## 🚦 Make Commands

Use the included Makefile for easy development:

```bash
make help          # Show all available commands
make install       # Install dependencies
make dev           # Start development server
make build         # Build for production
make docker-dev    # Run development with Docker
make docker-prod   # Run production with Docker
make deploy        # Deploy production container
make stop          # Stop all containers
make logs          # Show container logs
make clean         # Clean build artifacts
```

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf node_modules dist .vite
npm install
npm run build
```

### Docker Issues
```bash
# Clean Docker cache
docker system prune -a
docker-compose down -v

# Rebuild without cache
docker-compose up --build --force-recreate
```

### Port Conflicts
```bash
# Check what's using port 5173 (development)
lsof -i :5173

# Check what's using port 80 (production)
lsof -i :80
```

### Container Logs
```bash
# View application logs
docker logs receipt-extractor-frontend -f

# View nginx logs
docker exec receipt-extractor-frontend tail -f /var/log/nginx/access.log
docker exec receipt-extractor-frontend tail -f /var/log/nginx/error.log
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review the [Deployment Guide](DEPLOYMENT.md) for detailed instructions
3. Open an issue on GitHub

---

**Built with ❤️ for seamless receipt processing**
