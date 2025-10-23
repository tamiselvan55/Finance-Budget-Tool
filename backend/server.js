require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const transactionsRoutes = require("./routes/transactions");
const authRoutes = require("./routes/auth");

const app = express();
app.use("/api/auth", authRoutes);
app.use(cors());
app.use(express.json());

// connect DB
connectDB(process.env.MONGO_URI);

// routes
app.use("/api/transactions", transactionsRoutes);

// health
app.get("/", (req, res) => res.send({ status: "ok", message: "Finance API running" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
