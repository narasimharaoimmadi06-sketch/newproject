// Mock database (PostgreSQL disabled)

console.log("⚠ Running without real database. Using mock DB.");

const mockInsert = () => ({
  values: () => ({
    returning: async () => {
      return [];
    },
  }),
});

const mockSelect = () => ({
  from: () => ({
    where: async () => {
      return [];
    },
  }),
});

export const db = {
  insert: mockInsert,
  select: mockSelect,
} as any;

export const pool = null as any;
