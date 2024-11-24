const express = require ('express');
const colecaoUf = require ('./dados');

const app = express()

app.get('/ufs/:iduf', (req, res) => {
    const idUf = parseInt(req.params.iduf)
    let mensagemErro = ''
    let uf 

    if (!(isNaN(idUf))) {
        uf = colecaoUf.colecaoUf.find(u => u.id === idUf)
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
})