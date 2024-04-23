# Three-Tier Application with Docker

This repository contains a simple three-tier application built using Docker, comprising a frontend, backend, and database.

## Overview

The application consists of the following components:

- **Frontend**: A simple HTML webpage.
- **Backend**: A Node.js server.
- **Database**: MySQL database.

## Prerequisites

Before getting started, ensure you have the following installed:

- Docker
- Docker Compose
- Docker Desktop

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dhruv11011/cloud_ia
   
2. **Navigate to the project directory**:
   ```bash
   cd <project-folder>

3. **Navigate to the backend directory**:
   ```bash
   cd backend
   
4. **Navigate to the project directory again**:
   ```bash
   cd..

5. **Start the Docker containers**:
   ```bash
   docker-compose up -d

## Additional Information
  ### Backend Dependencies:
- express
- mysql
- body-parser
- nodemon (development only)
- Database Initialization: The MySQL database is initialized with default data. You can modify the initialization script (init.sql) to customize the database schema or data.
