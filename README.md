# EmplIMS (Employee Information Management System)

EMPLIMS is a web-based application for managing employee information. It allows users to perform basic CRUD operations such as creating, reading, updating, and deleting employee records. The backend is built using Spring Boot, while the frontend is developed using React.

## Features

- Create new employee records
- Edit existing employee details
- View all employees
- Delete employee records
- RESTful API for communication between the frontend and backend

## Tech Stack

### Backend

- **Java**
- **Spring Boot**
- **Lombok**
- **JPA**
- **MySQL**
- **Maven**

### Frontend

- **React**
- **Axios**

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/emplims-backend.git
   cd emplims-backend
2. Configure the database in application.properties:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/emplims
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

## Build and run the application

```bash
mvn clean install
mvn spring-boot:run
```

- The backend will run on <http://localhost:8080>.

## Frontend Setup

### Navigate to the frontend directory

```bash
cd emplims-frontend
```

### Install dependencies

``` bash
npm install
```

### Run the application

```bash
npm start
```

- The frontend will run on <http://localhost:3000>.

## API Endpoints

Employee Endpoints:
GET /api/employees - Get all employees
GET /api/employees/{id} - Get an employee by ID
POST /api/employees - Create a new employee
PUT /api/employees/{id} - Update an employee by ID
DELETE /api/employees/{id} - Delete an employee by ID
