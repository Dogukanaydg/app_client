# Cloud Environment Application - Todo App

## Project Overview
This project is a web-based Todo application with a user interface and database access. The entire application runs using Docker Compose.

## Team Members
- **Student Name xyz** - Student Number 1  
- **Student Name abc** - Student Number 2  

## Project Guidelines Fulfillment
- The project is developed as a group.  
- The repository is hosted on a code repository platform.  
- The repository contains this `README.md` file with all necessary instructions.  

## Technology Stack
- **Backend**: Node.js
- **Frontend**: React (Vite, Tailwind CSS)  
- **Database**: MongoDB  
- **Containerization**: Docker, Docker Compose  

## Functionalities Implemented
1. **Task Management (CRUD)**  
   - Users can create, update, and delete todo tasks.  

2. **Task Filtering & Status Management**  
   - Users can filter tasks by status.  

3. **Real-Time Updates**  
   - Automatic task updates without refreshing the page.  

## Prerequisites
Before running the application, ensure you have the following installed on your machine:
- Docker  
- Docker Compose  

## Steps to Run the Project
1. **Clone the Repository**  
   ```bash
   https://github.com/Biplov01/app_client.git
   cd app_client

   ```
2. **Change directory to backend**
    ```
    cd backend
    ```
3. **Add mongo db database URI**

    create a .env file inside your backend directory and then add your MONGO db url.
    ``` 
    MONGO_URI=YOUR_MONGO_DB_URI
    ```

2. **Start the Application with Docker Compose**
    ```
    docker-compose up --build
    ```
3. **Access the Application**
  - Frontend: http://localhost:3000
  - Backend API: http://localhost:5000

4. **Stopping the Application**

    To stop the application, press Ctrl+C in the terminal where the application is running, or run:
    ```
    docker-compose down
    ```
