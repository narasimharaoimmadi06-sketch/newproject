// Fake database for production without PostgreSQL

console.log("⚠ Running without real database. Using mock DB.");

export const db = {
  insert: () => ({
    values: async () => {
      return [];
    },
  }),
  select: () => ({
    from: () => ({
      where: async () => {
        return [];
      },
    }),
  }),
} as any;

export const pool = null as any;
