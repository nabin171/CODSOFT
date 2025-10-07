# My Portfolio Project

This is a second portfolio project built with **React** (frontend), **Express** (backend), and **MongoDB** (database).

---

## Features

- Contact form with backend validation and MongoDB storage
- Modern React frontend
- RESTful API with Express
- CORS enabled for frontend-backend communication

---

## Folder Structure

```
my-portfolio/
├── client/         # React frontend
├── server/         # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── index.js
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

### 2. Setup the Backend

```sh
cd server
npm install
```

- Create a `.env` file in the `server` folder:

  ```
  MONGODB_URI=your_mongodb_connection_string
  PORT=8000
  ```

- Start the backend:
  ```sh
  npm start
  ```
  The backend runs on [http://localhost:8000](http://localhost:8000).

### 3. Setup the Frontend

```sh
cd ../client
npm install
npm run dev
```

The frontend runs on [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## API Endpoints

- `POST /api/contact` — Submit contact form
- `GET /api/contact` — Get all contact messages

---

## Technologies Used

- React
- Express
- MongoDB & Mongoose
- Axios
- Vite (for frontend dev server)

---

## License

MIT

---
