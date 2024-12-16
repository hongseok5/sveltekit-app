import mysql from "mysql2/promise"; // 반드시 promise를 가져와야 함
import { drizzle } from "drizzle-orm/mysql2";
import 'dotenv/config'
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,        // 호스트
  user: process.env.DATABASE_USER,        // 사용자 이름
  password: process.env.DATABASE_PSWORD,  // 비밀번호
  database: process.env.DATABASE_SCHEMA,  // 데이터베이스 스키마
  waitForConnections: true,
  connectionLimit: 10
});

export const db = drizzle(pool);
