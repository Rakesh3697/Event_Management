# 📅 Event Management System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

A full-stack event management application with CRUD functionality, search, and sorting capabilities.

## 🌟 Features
- **Event Management**
  - Create new events
  - Edit existing events
  - Delete events
  - View all events
- **Search & Filter**
  - Real-time search by event name
  - Sort by newest/oldest events
- **Responsive Design**
  - Works on desktop, tablet, and mobile

## 🏗️ Tech Stack
### Frontend
- **React** (with Vite)
- **Lucide Icons** for UI icons
- **CSS** for styling

### Backend
- **Spring Boot** (Java)
- **Spring Data JPA** for database operations
- **MySQL** database

### Development Tools
- **Maven** for Java dependencies
- **npm** for JavaScript packages

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Java JDK 17+
- MySQL 8.0+
---

## ⚙️ Installation & Setup

### Prerequisites
- **Java 17+** installed
- **Node.js 18+** and **npm** installed
- **MySQL Server** running locally


### 1️⃣ Backend Setup (Spring Boot)

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/event-management.git](https://github.com/your-username/event-management.git)
    cd event-management/backend
    ```

2.  **Create the MySQL database:**
    Open your MySQL client and run the following command:
    ```sql
    CREATE DATABASE event_db;
    ```

3.  **Configure the database connection:**
    Open `src/main/resources/application.properties` and update the database credentials to match your setup:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/event_db
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
    ```

4.  **Run the backend application:**
    ```bash
    mvn spring-boot:run
    ```
    The backend API will be available at **[http://localhost:8080](http://localhost:8080)**.

---

### 2️⃣ Frontend Setup (React + Vite)

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the frontend application:**
    ```bash
    npm run dev
    ```
    The frontend will be available at **[http://localhost:3000](http://localhost:3000)**.

---

## 🔗 API Endpoints

The backend exposes the following RESTful API endpoints:

| Method | Endpoint           | Description                      |
| ------ | ------------------ | -------------------------------- |
| GET    | `/api/events`      | Retrieves a list of all events.  |
| POST   | `/api/events`      | Creates a new event.             |
| GET    | `/api/events/{id}` | Retrieves a single event by ID.  |
| PUT    | `/api/events/{id}` | Updates an existing event by ID. |
| DELETE | `/api/events/{id}` | Deletes an event by ID.          |

---

## 🖥 How to Use

1.  Once both the backend and frontend are running, open your web browser and navigate to **[http://localhost:3000](http://localhost:3000)**.
2.  Use the **"New Event"** button to create a new event.
3.  Fill in the event details (name, description, date, time, and location) and save.
4.  Use the **edit** and **delete** icons next to each event to manage them.
5.  Use the search bar to filter events by name or the sorting buttons to organize them by date.

---

## 📸 Screenshots

### Home Page
A view of the main page, showcasing the list of events and the search/sort functionality.
![Home Page](screenshots/homepage.png)

### Create Event
The form for creating a new event.
![Create Event](screenshots/create-event.png)

---

## 🚀 Deployment

### Backend Deployment
-   The backend can be deployed to cloud platforms like **Render**, **Heroku**, or **AWS EC2**.
-   Remember to update the database connection string in `application.properties` to point to your production database.

### Frontend Deployment
-   First, build the project for production:
    ```bash
    npm run build
    ```
-   The generated `dist` folder can then be deployed to a hosting service like **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 💡 Author

**Rakesh Rocky** Full Stack Developer | React.js | Spring Boot | MySQL
