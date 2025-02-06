import pool from './conexao.js'

async function retornaCampeonatos () {
    const conexao = await pool.getConnection();
    const query = 'SELECT * FROM campeonatos';
    const campeonatos = executaquery(conexao, query);
    conexao.release();
    return campeonatos;
}

async function retornaCampeonatosID (id) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id,campeao, vice, ano FROM campeonatos WHERE id = ' + id;
    const campeonatos = executaquery(conexao, query)
    conexao.release();
    return campeonatos;
}

async function retornaCampeonatosAno (ano) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id,campeao, vice, ano FROM campeonatos WHERE ano = ' + ano;
    const campeonatos = executaquery(conexao, query);
    conexao.release();
    return campeonatos;
}

async function retornaCampeonatosTime (time) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = "' + time +'"';
    const campeonatos = executaquery(conexao, query);
    conexao.release();
    return campeonatos;
}

async function executaquery(conexao, query) {
        const resultado_query = await conexao.query(query);
        const resposta = resultado_query[0];
        return resposta;
}

export { retornaCampeonatos, retornaCampeonatosAno, retornaCampeonatosID, retornaCampeonatosTime }