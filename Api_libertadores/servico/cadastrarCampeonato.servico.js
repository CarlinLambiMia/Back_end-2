import pool from "./conexao.js";

export async function cadastrarCampeonato(campeao, vice, ano){
    const conexao = await pool.getConnection();
    
    const resposta = await pool.query('insert into campeonatos(campeao, vice, ano) values (?,?,?)', campeao, vice, ano)
    console.log(resposta);
    conexao.release();
}