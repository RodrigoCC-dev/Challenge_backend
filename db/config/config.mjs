import fs from 'fs';
import 'dotenv/config';

const config = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: 'challenge_dev',
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres'
  },
  test: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: 'challenge_test',
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres'
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: 'challenge_production',
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres'
  }
};

export default config;
