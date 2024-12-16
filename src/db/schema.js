import {  datetime,  mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const gameTable = mysqlTable('game', {
  id: serial('id').primaryKey(),
  name: varchar('name', {length: 100}).notNull(),
  type: varchar('type', {length:10}).notNull(),
  datetime: datetime('datetime'),
  location: varchar('location', {length: 100}).notNull()
});
