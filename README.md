# Delhi High Court Case Lookup

A full-stack web application that fetches and displays Delhi High Court case details with order PDFs.  
Built with **Spring Boot (Java)** for backend and **React** for frontend.

## 🚀 Features
- Search Delhi High Court cases by Case Type, Number, and Filing Year.
- Fetch order PDFs dynamically.
- Pagination for PDF results.
- Error handling (No Case Found, Court Site Timeout).
- MySQL database logging of queries.
- Clean and responsive UI with external CSS.

## 🛠 Tech Stack
- **Backend:** Java, Spring Boot, Jsoup, REST API, MySQL
- **Frontend:** React, Axios, HTML, CSS
- **Tools:** Git, npm, Maven

## 📂 Project Structure

delhi-high-court-case-lookup/

├─ court-data-fetcher # Spring Boot backend

├─ frontend-logic # React frontend

## 🔧 Setup Instructions

### 1. Clone Repo

git clone https://github.com/Mmoin5/delhi-high-court-case-lookup.git

cd delhi-high-court-case-lookup

### 2. Backend Setup

Open court-data-fetcher/ in your IDE (e.g. Eclipse)

Configure application.properties for your MySQL database

Run the project with Maven or from IDE on port 8081

### 3. Frontend Setup

cd frontend-logic

npm install

npm run dev

### 4. Access App
   
Frontend: http://localhost:5173

Backend: http://localhost:8081

### 👨‍💻 Author
## Mohammed Moin Pasha
## mmoinpasha500@gmail.com
