#!/bin/bash
# DevOps Simulator Unified Deployment Script
# Combines Production and Development deployment modes

set -e

echo "====================================="
echo "DevOps Simulator – Deployment Script"
echo "====================================="

# Choose environment (development or production)
DEPLOY_ENV=${1:-development} # Default is development

if [ "$DEPLOY_ENV" == "production" ]; then
  echo "Environment: PRODUCTION"
  DEPLOY_REGION="us-east-1"
  APP_PORT=8080

  echo "Region: $DEPLOY_REGION"
  echo "Port: $APP_PORT"

  echo "Running pre-deployment checks..."
  if [ ! -f "config/app-config.yaml" ]; then
      echo "Error: Configuration file not found!"
      exit 1
  fi

  echo "Starting production deployment..."
  echo "Pulling latest Docker images..."
  # docker pull devops-simulator:latest

  echo "Performing rolling update..."
  # kubectl rolling-update devops-simulator

  echo "✅ Production deployment completed successfully!"
  echo "Application available at: https://app.example.com"

else
  echo "Environment: DEVELOPMENT"
  DEPLOY_MODE="docker-compose"
  APP_PORT=3000
  ENABLE_DEBUG=true

  echo "Mode: $DEPLOY_MODE"
  echo "Port: $APP_PORT"
  echo "Debug: $ENABLE_DEBUG"

  echo "Installing dependencies..."
  npm install

  echo "Running tests..."
  npm test

  echo "Starting local deployment with Docker Compose..."
  docker-compose up -d

  echo "Waiting for application to start..."
  sleep 5

  echo "Performing health check..."
  curl -f http://localhost:$APP_PORT/health || exit 1

  echo "✅ Development deployment completed successfully!"
  echo "Application available at: http://localhost:$APP_PORT"
fi
