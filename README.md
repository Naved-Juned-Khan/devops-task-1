# DevOps Task 1 - CI/CD Pipeline

## Project Overview
This project demonstrates an automated CI/CD pipeline
using GitHub Actions, Node.js and Docker.

## Technologies Used
- Node.js
- GitHub
- GitHub Actions
- Docker
- Docker Hub

## Pipeline Workflow
1. Developer pushes code to GitHub.
2. GitHub Actions triggers automatically.
3. Node.js dependencies are installed.
4. Application tests are executed.
5. Docker image is built.
6. Docker image is pushed to Docker Hub.

## Project Structure

- app.js - Node.js application
- app.test.js - Application tests
- Dockerfile - Docker configuration
- .dockerignore - Docker ignore rules
- .github/workflows/main.yml - CI/CD pipeline

## How to Run Locally

Install dependencies:

npm install

Run tests:

npm test

Start application:

npm start

## Docker Commands

Build image:

docker build -t devops-task-1 .

Run container:

docker run -p 3000:3000 devops-task-1

## Author
Naved juned khan