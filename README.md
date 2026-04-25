# Dockerized Node.js App on EC2

## What this project does
This project demonstrates how to deploy a simple Node.js application using Docker and Docker Compose.

## Stack
- Node.js
- Express
- Docker
- Docker Compose
- AWS EC2
- Nginx reverse proxy

## Features
- Simple web app
- /health endpoint
- Dockerized deployment
- Docker Compose support
- Ready for EC2 deployment

## Run locally
```bash
npm install
npm start

## RUN WITH DOCKER
docker build -t upwork-devops-project-1 .
docker run -d -p 3000:3000 upwork-devops-project-1

## RUN WITH DOCKER COMPOSE 
docker compose up -d
