import express from "express";
import cors from "cors";  // ✅ Import CORS first

const app = express();  // ✅ Define 'app' before using it

app.use(cors());  // ✅ Now it is correctly placed
app.use(express.json());  // Middleware to parse JSON

const PORT = 5000;

// Sample API Route
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Ashish", email: "ashish@example.com" },
    { id: 2, name: "John Doe", email: "john@example.com" }
  ]);
});

// ✅ Fix "Cannot GET /" by adding a default route
app.get("/", (req, res) => {
  res.send("Welcome to the Backend Server!");
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
