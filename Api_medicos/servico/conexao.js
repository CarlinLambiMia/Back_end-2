import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'Nathan',
    password: '123456',
    database: 'clinica'
});

export default pool;