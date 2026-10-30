# GymTrack

A full-stack gym exercise tracker built with Java, Spring Boot, React and PostgreSQL.

GymTrack is a personal fitness management application designed to help users organize their exercises and, in the future, track their workouts and monitor their training progress.

The project is currently in its initial development stage, focusing on building a solid foundation for a more complete fitness platform.

## Features

### Current Features

- Add new exercises.
- View the list of saved exercises.
- Edit existing exercises.
- Delete exercises.
- Input validation to prevent empty exercise names.
- Persistent data storage using PostgreSQL.

## Tech Stack

**Backend**
- Java 21
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Maven

**Frontend**
- React
- JavaScript
- Vite
- CSS

**Tools**
- Git
- GitHub
- Visual Studio Code
- Eclipse

## Project Structure

```text
gymtrack/
├── src/                  # Spring Boot backend
├── frontend/             # React frontend
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

## Getting Started

### Prerequisites

- Java 21
- Node.js
- PostgreSQL
- Git

### 1. Clone the repository

```bash
git clone https://github.com/robertopeniuc/gymtrack.git
cd gymtrack
```

### 2. Set up the database

Create a PostgreSQL database named:

```sql
CREATE DATABASE gymtrack;
```

Configure the following environment variables:

- `DB_URL`: PostgreSQL connection URL.
- `DB_USERNAME`: PostgreSQL username.
- `DB_PASSWORD`: PostgreSQL password.

The default connection URL is:

```text
jdbc:postgresql://localhost:5432/gymtrack
```

### 3. Run the backend

From the project root, run:

**Windows PowerShell:**

```powershell
.\mvnw.cmd spring-boot:run
```

**Linux / macOS:**

```bash
./mvnw spring-boot:run
```

The backend runs at:

http://localhost:8080

### 4. Run the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the application at:

http://localhost:5173

## Project Vision

GymTrack is an evolving personal fitness management application.

The current version is an initial implementation focused on exercise management and database integration. It serves as the foundation for a more complete fitness platform.

### Planned Features

- **Workout routine management:** Create and organize personalized training routines.
- **Workout tracking:** Record sets, repetitions and weights for each exercise.
- **Training history:** Review previous workouts and monitor progress over time.
- **Exercise library:** Organize exercises by muscle groups and categories.
- **Progress statistics:** Visualize strength improvements and training performance through charts.
- **User accounts:** Add registration, authentication and personalized profiles.
- **Improved user experience:** Develop a more advanced and responsive interface.

## About the Project

GymTrack is a personal portfolio project developed to improve my skills in backend and frontend development.

Through this project, I am gaining practical experience with Java, Spring Boot, React, REST APIs, PostgreSQL and full-stack application development.

The application is under active development, and new features will be added progressively.