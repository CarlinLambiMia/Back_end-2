import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'Api_ipoclinica',
    password: 'Bolacha90**',
    database: 'clinica'
});

export default pool;