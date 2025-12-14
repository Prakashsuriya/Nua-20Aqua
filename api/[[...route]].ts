import { VercelRequest, VercelResponse } from "@vercel/node";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Dynamically import the built server
    const serverModule = await import("../dist/server/node-build.mjs");
    const { createServer } = serverModule;

    // Create Express app
    const app = createServer();

    // Serve static files from SPA
    const express = await import("express");
    const distPath = path.join(__dirname, "../dist/spa");

    app.use(express.static(distPath));

    // Handle React Router - serve index.html for non-API routes
    app.get("*", (_, res) => {
      try {
        const indexPath = path.join(distPath, "index.html");
        const html = readFileSync(indexPath, "utf-8");
        res.setHeader("Content-Type", "text/html");
        res.send(html);
      } catch (err) {
        res.status(404).json({ error: "Not found" });
      }
    });

    // Handle the request
    return app(req, res);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
