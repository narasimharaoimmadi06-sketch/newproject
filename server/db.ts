// Database disabled for production (no PostgreSQL)

console.log("⚠ Running without database connection.");

// Export empty placeholders so app doesn't crash
export const pool = null as any;
export const db = null as any;
