
const GrupoPesquisa = require('../models/grupo-pesquisa.model');
const S3Uploader = require('./aws.controller');



module.exports = {

  getHome,
  getPesquisa,
  getLivro,
  getArtigos,
  getCapitulos,
  getTeses

};



async function getHome(req) {

  return await GrupoPesquisa.find({ type: req.query.type })
    .select('title subTitle content imagePathS3 facebook youtube instagram twitter galeria participantes parceiros')
    .sort({
      createAt: -1
    });
}

async function getPesquisa(req) {
  let tipo = req.query.typePesquisa == 1 ? 'Realizada' : 'Em Andamento'
  console.log(tipo)
  return await GrupoPesquisa.find({ $and: [{ type: req.query.type }, { "pesquisas.icPesquisa": tipo }] })
    .select('pesquisas')
    .sort({
      createAt: -1
    });
}

async function getLivro(req) {

  return await GrupoPesquisa.find({ type: req.query.type })
    .select('livros')
    .sort({
      createAt: -1
    });
}

async function getArtigos(req) {

  return await GrupoPesquisa.find({ type: req.query.type })
    .select('artigos')
    .sort({
      createAt: -1
    });
}

async function getCapitulos(req) {

  return await GrupoPesquisa.find({ type: req.query.type })
    .select('capitulos')
    .sort({
      createAt: -1
    });
}

async function getTeses(req) {

  return await GrupoPesquisa.find({ type: req.query.type })
    .select('teses')
    .sort({
      createAt: -1
    });
}

