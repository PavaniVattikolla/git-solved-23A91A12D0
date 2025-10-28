#!/usr/bin/env node

/**
 * DevOps Simulator – Monitoring Script
 * Supports both Production and Development environments.
 */

const fs = require("fs");
const os = require("os");
const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const LOG_FILE =
  ENV === "production"
    ? "/var/log/devops-monitor.log"
    : path.join(__dirname, "../logs/devops-monitor-dev.log");

console.log("======================================");
console.log(" DevOps Simulator – Monitoring Script ");
console.log("======================================");
console.log(`Environment: ${ENV}`);
console.log(`Logging to: ${LOG_FILE}`);
console.log("--------------------------------------");

// Utility: Write logs with timestamp
function log(message) {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, line);
  console.log(line.trim());
}

// Simulate system metrics
function getSystemStats() {
  return {
    cpuLoad: os.loadavg()[0].toFixed(2),
    memoryUsage: ((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2) + "%",
    uptime: `${(os.uptime() / 60).toFixed(1)} min`,
  };
}

// Monitor function
function monitor() {
  const stats = getSystemStats();
  log(`CPU Load: ${stats.cpuLoad}`);
  log(`Memory Usage: ${stats.memoryUsage}`);
  log(`Uptime: ${stats.uptime}`);

  if (ENV === "production") {
    log("Performing production health check...");
    // Example: check if critical services are up
  } else {
    log("Development mode: verbose debug logging enabled.");
  }

  log("--------------------------------------");
}

// Run monitor periodically
setInterval(monitor, 10000); // every 10 seconds

log("✅ DevOps Simulator Monitoring started successfully!");
