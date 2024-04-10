# LITABA



Welcome to LITABA, a news and information project that combines the power of Django for backend development and React for frontend development. This repository contains the codebase for both the backend and frontend components of the application.

## Technologies
* Django 
* Frontend
* Postgres

## Project Structure

```
project_root/
│
├── LITABA_BACKEND/          # Django Backend Directory
│   ├── django_project/      # Django project directory
│   ├── Dockerfile           # Dockerfile for Django backend
│   └── requirements.txt     # Python dependencies for Django
│
├── LITABA_FRONTEND/         # React Frontend Directory
│   ├── node_modules/        # Node.js dependencies (generated)
│   ├── public/              # Public assets directory for React app
│   ├── src/                 # Source code directory for React app
│   ├── .gitignore           # Git ignore file for frontend
│   ├── package.json         # Node.js package file
│   ├── README.md            # README file for React frontend
│   └── ...other files       # Other files and directories for React app
│
├── docker-compose.yml      # Docker Compose file for managing containers
└── .env                     # Environment variables file (e.g., database credentials)
```

## How to Run

To run the project, make sure you have Docker and Docker Compose installed on your system. Then, execute the following command from the project root directory:

```
docker-compose up --build
```

This command will build the Docker images for both the Django backend and React frontend, create the containers, and start them. Once the containers are up and running, you can access the containers through: 

Django backend at `http://localhost:8000` \
React frontend at `http://localhost:3000`

To view database \
Check Database Service Logs: After the containers are up, you can check the logs of your PostgreSQL service to see if it started successfully. Open a new terminal window, navigate to your project root directory, and run:
`docker-compose logs database`

This command will display the logs of your database service. Look for any errors or indications that the PostgreSQL service started successfully.

Connect to PostgreSQL Container:
You can connect to the PostgreSQL container and run PostgreSQL commands to verify the connection. Open a new terminal window, navigate to your project root directory, and run:
`docker-compose exec database psql -U user_name database_name` \
user_name & database_name are just placeholders 

Test Database Connection from Django: You can also verify the database connection from your Django application. Check the logs of your Django backend service to see if there are any database connection errors. Open a new terminal window, navigate to your project root directory, and run:\
`docker-compose logs backend`

To stop the containers, use:

```
docker-compose down
```

---

Built & Designed by Khotso Tsoaela
