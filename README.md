# Peterson Solution Simulator

A professional implementation of Peterson's Solution using **React.js** (Frontend) and **Node.js + Express.js** (Backend).

## 📌 Project Description

Peterson's Solution is a software-based synchronization algorithm used to solve the Critical Section Problem for two processes. It ensures that only one process can enter the critical section at a time while preventing race conditions.

This project provides a graphical simulation of Peterson's Algorithm where users can observe the behavior of two processes entering and leaving the critical section.

---

## 🚀 Features

- Peterson's Solution Simulation
- Two Process Execution
- Critical Section Visualization
- Waiting State Visualization
- Backend REST API
- Responsive User Interface
- React Frontend
- Express Backend

---

## 🛠 Technologies Used

### Frontend

- React.js
- CSS3
- Axios

### Backend

- Node.js
- Express.js
- CORS
- Dotenv

---

## 📂 Project Structure

```
Peterson-Solution/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── vercel.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   ├── package.json
│   └── .gitignore
│
├── README.md
└── .gitignore
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone <repository-url>
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

or

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## API Endpoint

### Get Peterson Algorithm

```
GET /api/peterson
```

Example Response

```json
{
  "title": "Peterson Solution",
  "description": "Only one process can enter the Critical Section at a time using Flag and Turn variables.",
  "algorithm": [
    "Process requests Critical Section",
    "Set Flag = True",
    "Give Turn to other process",
    "Wait if other process is inside",
    "Enter Critical Section",
    "Exit Critical Section",
    "Set Flag = False"
  ]
}
```

---

## Deployment

### Frontend

- Netlify

### Backend

- Vercel

---

## Peterson Algorithm Steps

1. Process requests Critical Section.
2. Flag is set to True.
3. Turn is assigned to the other process.
4. If the other process wants to enter, wait.
5. Enter Critical Section.
6. Execute Critical Section.
7. Exit Critical Section.
8. Set Flag to False.

---

## Future Improvements

- Process Animation
- Gantt Chart
- Multiple Process Simulation
- Execution History
- Performance Statistics

---

## Author

**Ahtisham Daud Satti**

Software Engineering Student

---

## License

This project is developed for educational purposes.
