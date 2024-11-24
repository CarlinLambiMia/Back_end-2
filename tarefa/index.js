import express from "express";
import {colecaoUf, buscarUfPorid, buscarUfsPorNome, buscarUfs} from "./servicos/servico.js";

const app = express()

const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()))
};

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({"erro": "Nenhuma UF encontrada"});
    }
})

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorid(req.params.iduf);

    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(req.params.iduf))) {
        res.status(404).send({"erro": "requisição invalida"})
    } else {
        res.status(404).send({"erro": "Uf não encontrada"})
    }
})

app.listen(8080, () => {
    console.log('servidor inciado na porta 8080')
});
/*app.get('/ufs:iduf', (req, res) => {
    const idUf = parseInt(req.params.iduf)
    let mensagemErro = ''
    let uf 

    if (!(isNaN(idUf))) {
        uf = colecaoUf.find(u => u.id === idUf)
        if (!uf) {
            mensagemErro = 'Uf não encontrada'
        }
    }   else {
            mensagemErro = 'Requisição inválida'
    }
    if (uf) {
        res.json(uf)
    }else {
        res.status(404).json({"Erro:": mensagemErro})
    }
})

app.listen(8080, () =>{
    console.log('servidor iniciado na porta 8080')
})*/