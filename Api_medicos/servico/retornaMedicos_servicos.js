import pool from './conexao.js';

export async function retornaMedicos() {
    const conexao = await pool.getConnection();
    const [medicos] = await conexao.query(`
        SELECT m.id, m.nome, m.telefone, m.email, e.especialidade 
        FROM medicos m
        JOIN especialidades e ON m.especialidade = e.id
        ORDER BY m.nome
    `);
    conexao.release();
    return medicos;
}

export async function retornaMedicosNome(nome) {
    const conexao = await pool.getConnection();
    const [medicos] = await conexao.query(`
        SELECT m.id, m.nome, m.telefone, m.email, e.especialidade 
        FROM medicos m
        JOIN especialidades e ON m.especialidade = e.id
        WHERE m.nome LIKE ?
        ORDER BY m.nome
    `, [`%${nome}%`]);
    conexao.release();
    return medicos;
}

export async function retornaMedicosEspecialidade(especialidade) {
    const conexao = await pool.getConnection();
    const [medicos] = await conexao.query(`
        SELECT m.id, m.nome, m.telefone, m.email, e.especialidade 
        FROM medicos m
        JOIN especialidades e ON m.especialidade = e.id
        WHERE e.especialidade = ?
        ORDER BY m.nome
    `, [especialidade]);
    conexao.release();
    return medicos;
}