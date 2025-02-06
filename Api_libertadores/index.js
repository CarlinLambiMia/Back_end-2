import express from "express";
import { retornaCampeonatos, retornaCampeonatosAno, retornaCampeonatosID, retornaCampeonatosTime } from "./servico/retornaCampeonato_servico.js";
import { cadastrarCampeonato } from "./servico/cadastrarCampeonato.servico.js";
//import pool from './servico/conexao.js';

const app = express();
app.use(express.json());

app.post('/campeonatos', async (req, res) =>{
    const campeao = req.body.campeao;
    const vice = req.body.vice;
    const ano = req.body.ano;
    await cadastrarCampeonato(campeao, vice, ano);
    res.status(204).send({"Mensagem:": "Cadastro efetivado com sucesso!"})
})

app.get('/campeonatos', async (req, res) => {
    let campeonatos;

    const ano = req.query.ano;
    const time = req.query.time

    if (typeof ano === 'undefined' && typeof time === 'undefined') {
        campeonatos = await retornaCampeonatos();
    } 
    else if (typeof ano !== 'undefined'){
        campeonatos = await retornaCampeonatosAno(ano);
    }
    else if (typeof time !== 'undefined'){
        campeonatos = await retornaCampeonatosTime(time);
    }
    
    res.json(campeonatos);
})

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campeonato = await retornaCampeonatosID(id);
    if (campeonato.length > 0) {
        res.json(campeonato);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"})
    }
})

app.listen(9000, async() =>{
    const data = new Date();
    console.log("servidor iniciado em " + data);

    /*const conexao = await pool.getConnection();

    console.log(conexao.threadId);

    conexao.release();*/
});