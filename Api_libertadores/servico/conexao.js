import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'libertadores',
    password: 'Liberta123',
    database: 'libertadores',
});

export default pool;