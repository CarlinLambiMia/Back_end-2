import historicoInflacao from "../dados/dados.js";

export const pesquisarTodaLista = () => {
    return historicoInflacao;
};

export const consultarAno = (anoInformado) => {
    const ano = anoInformado;
    return historicoInflacao.filter(ipca => ipca.ano == ano);
};

export const buscarIpcaPorId = (id) => {
    const idIpca = parseInt(id);
    return historicoInflacao.filter(ipca => ipca.id == idIpca);
};

export const calcularValor = (valor, mesInicial, anoInicial, mesFinal, anoFinal) => {
    const listaIpca = historicoInflacao.filter((ipca) => {
        return (
            (ipca.ano === anoInicial && ipca.mes >= mesInicial) ||
            (ipca.ano > anoInicial && ipca.ano < anoFinal) ||
            (ipca.ano === anoFinal && ipca.mes <= mesFinal)
        );
    });

    let resultado = valor;

    listaIpca.forEach(ipca => {
        resultado *= (1 + (ipca.ipca / 100));
    });
    let valorArrendondado = parseFloat(resultado.toFixed(2))
    return valorArrendondado;
};