
const GrupoPesquisa = require('../models/grupo-pesquisa.model');
const S3Uploader = require('./aws.controller');



module.exports = {

  getHome,
  getPesquisa,
  getLivro,
  getArtigos,
  getCapitulos,
  getTeses,
  getExtensaoEnsino

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
  return await GrupoPesquisa.aggregate([
    { $match: { type: req.query.type } },
    { $unwind: '$pesquisas' },
    { $match: { 'pesquisas.icPesquisa': tipo } },
    { $sort: { 'pesquisas.ordem': -1 } },
    { $group: { _id: '$_id', pesquisas: { $push: '$pesquisas' } } }]);

}



async function getExtensaoEnsino(req) {
  if (req.query.type == 'gedoc') {

    let tipo = req.query.typeExtensao == 1 ? 'Realizados' : 'Em Andamento'
    return await GrupoPesquisa.aggregate([
      { $match: { type: req.query.type } },
      { $unwind: '$extensaoEnsino' },
      { $match: { 'extensaoEnsino.icEnsino': tipo } },
      { $sort: { 'extensaoEnsino.ordem': -1 } },
      { $group: { _id: '$_id', extensaoEnsino: { $push: '$extensaoEnsino' } } }]);

  }
  else {
    return await GrupoPesquisa.find({ type: req.query.type })
      .select('extensaoEnsino')
      .sort({
        createAt: -1
      });

  }


}


async function getLivro(req) {
  return await GrupoPesquisa.aggregate([
    { $match: { type: req.query.type } },
    { $unwind: '$livros' },
    { $sort: { 'livros.ordem': -1 } },
    { $group: { _id: '$_id', livros: { $push: '$livros' } } }]);
}

async function getArtigos(req) {
  return await GrupoPesquisa.aggregate([
    { $match: { type: req.query.type } },
    { $unwind: '$artigos' },
    { $sort: { 'artigos.ordem': -1 } },
    { $group: { _id: '$_id', artigos: { $push: '$artigos' } } }]);
}

async function getCapitulos(req) {
  return await GrupoPesquisa.aggregate([
    { $match: { type: req.query.type } },
    { $unwind: '$capitulos' },
    { $sort: { 'capitulos.ordem': -1 } },
    { $group: { _id: '$_id', capitulos: { $push: '$capitulos' } } }]);
}

async function getTeses(req) {

  return await GrupoPesquisa.find({ type: req.query.type })
    .select('teses')
    .sort({
      createAt: -1
    });
}

