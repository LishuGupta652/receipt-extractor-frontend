# Receipt Extractor Frontend - Makefile

.PHONY: help install dev build clean docker-dev docker-prod docker-staging deploy stop logs

# Default target
help:
	@echo "Receipt Extractor Frontend - Available commands:"
	@echo ""
	@echo "  install     - Install dependencies"
	@echo "  dev         - Start development server"
	@echo "  build       - Build for production"
	@echo "  clean       - Clean build artifacts"
	@echo ""
	@echo "  docker-dev  - Run development environment with Docker"
	@echo "  docker-prod - Run production environment with Docker"
	@echo "  docker-staging - Run staging environment with Docker"
	@echo ""
	@echo "  deploy      - Deploy production container"
	@echo "  stop        - Stop running containers"
	@echo "  logs        - Show container logs"

# Local development
install:
	npm install

dev:
	npm run dev

build:
	npm run build

clean:
	rm -rf dist node_modules/.cache

# Docker commands
docker-dev:
	docker-compose up --build

docker-prod:
	docker-compose -f docker-compose.prod.yml up --build

docker-staging:
	docker-compose -f docker-compose.staging.yml up --build

# Deployment
deploy:
	./deploy.sh

stop:
	docker-compose down
	docker stop receipt-extractor-frontend || true
	docker rm receipt-extractor-frontend || true

logs:
	docker logs receipt-extractor-frontend -f
