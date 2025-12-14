import type { VercelRequest, VercelResponse } from "@vercel/node";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import { readFileSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "../dist/spa");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get("/api/ping", (_req, res) => {
  const ping = process.env.PING_MESSAGE ?? "ping";
  res.json({ message: ping });
});

app.get("/api/demo", (_req, res) => {
  res.status(200).json({ message: "Hello from Express server" });
});

// Serve static files from SPA
app.use(express.static(distPath));

// Handle React Router - serve index.html for non-API routes
app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  try {
    const html = readFileSync(path.join(distPath, "index.html"), "utf-8");
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  } catch (err) {
    res.status(404).json({ error: "Not found" });
  }
});

export default serverless(app);
