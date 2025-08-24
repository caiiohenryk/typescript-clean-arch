import {
  boolean,
  datetime,
  mysqlTable,
  serial,
  varchar,
} from 'drizzle-orm/mysql-core';

export const taskTable = mysqlTable('tasks', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  full_description: varchar({ length: 1000 }),
  status: boolean(),
  created_at: datetime({ fsp: 0 }),
  completed_at: datetime({ fsp: 0 }),
});
