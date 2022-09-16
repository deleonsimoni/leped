
const GrupoPesquisa = require('../models/grupo-pesquisa.model');
const S3Uploader = require('./aws.controller');



module.exports = {

  getTesesgp,
  insertTesesgp,
  deleteTesesgp,
  updateTesesgp,
  getPesquisasgp,
  insertPesquisasgp,
  deletePesquisasgp,
  updatePesquisasgp,

  getArtigosgp,
  insertArtigosgp,
  deleteArtigosgp,
  updateArtigosgp,

  getLivrosgp,
  insertLivrosgp,
  deleteLivrosgp,
  updateLivrosgp,

  getCapitulosgp,
  insertCapitulosgp,
  deleteCapitulosgp,
  updateCapitulosgp,

  getQuemSomosgp,
  insertQuemSomosgp,
  deleteQuemSomosgp,
  updateQuemSomosgp,
};



async function getTesesgp() {
  return await GrupoPesquisa.find()
    .select('publicacoes.teses')
    .sort({
      createAt: -1
    });
}

async function insertTesesgp(form, idUser) {

  await GrupoPesquisa.findOneAndUpdate({ type: 'GEPED' }, {
    '$set': {
      'publicacoes.teses': form
    }
  })
}

async function deleteTesesgp(id) {
  return await GrupoPesquisa.findOneAndRemove({
    'publicacoes.teses._id': id
  });
}

async function updateTesesgp(form) {

  return await GrupoPesquisa.findOneAndUpdate({
    'publicacoes.teses._id': form._id
  },
    form, {
    upsert: true
  });
}

async function getPesquisasgp() {
  return await GrupoPesquisa.find()
    .select('pesquisas')
    .sort({
      createAt: -1
    });
}

async function insertPesquisasgp(form, idUser) {

  await GrupoPesquisa.findOneAndUpdate({ type: 'GEPED' }, {
    '$set': {
      'pesquisas': form
    }
  })
}

async function deletePesquisasgp(id) {
  return await GrupoPesquisa.findOneAndRemove({
    'pesquisas._id': id
  });
}

async function updatePesquisasgp(form) {

  return await GrupoPesquisa.findOneAndUpdate({
    'pesquisas._id': form._id
  },
    form, {
    upsert: true
  });
}

async function getArtigosgp() {
  return await GrupoPesquisa.find()
    .select('publicacoes.artigos')
    .sort({
      createAt: -1
    });
}

async function insertArtigosgp(form, idUser) {

  await GrupoPesquisa.findOneAndUpdate({ type: 'GEPED' }, {
    '$set': {
      'publicacoes.artigos': form
    }
  })
}

async function deleteArtigosgp(id) {
  return await GrupoPesquisa.findOneAndRemove({
    'publicacoes.artigos._id': id
  });
}

async function updateArtigosgp(form) {

  return await GrupoPesquisa.findOneAndUpdate({
    'publicacoes.artigos._id': form._id
  },
    form, {
    upsert: true
  });
}

async function getLivrosgp() {
  return await GrupoPesquisa.find()
    .select('publicacoes.livros')
    .sort({
      createAt: -1
    });
}

async function insertLivrosgp(form, idUser) {

  await GrupoPesquisa.findOneAndUpdate({ type: 'GEPED' }, {
    '$set': {
      'publicacoes.livros': form
    }
  })
}

async function deleteLivrosgp(id) {
  return await GrupoPesquisa.findOneAndRemove({
    'publicacoes.livros._id': id
  });
}

async function updateLivrosgp(form) {

  return await GrupoPesquisa.findOneAndUpdate({
    'publicacoes.livros._id': form._id
  },
    form, {
    upsert: true
  });
}

async function getCapitulosgp() {
  return await GrupoPesquisa.find()
    .select('publicacoes.capitulos')
    .sort({
      createAt: -1
    });
}

async function insertCapitulosgp(form, idUser) {

  await GrupoPesquisa.findOneAndUpdate({ type: 'GEPED' }, {
    '$set': {
      'publicacoes.capitulos': form
    }
  })
}

async function deleteCapitulosgp(id) {
  return await GrupoPesquisa.findOneAndRemove({
    'publicacoes.capitulos._id': id
  });
}

async function updateCapitulosgp(form) {

  return await GrupoPesquisa.findOneAndUpdate({
    'publicacoes.capitulos._id': form._id
  },
    form, {
    upsert: true
  });
}

async function getQuemSomosgp() {
  return await GrupoPesquisa.find()
    .select('quemsomos')
    .sort({
      createAt: -1
    });
}

async function insertQuemSomosgp(form, idUser) {

  await GrupoPesquisa.findOneAndUpdate({ type: 'GEPED' }, {
    '$set': {
      'quemsomos': form
    }
  })
}

async function deleteQuemSomosgp(id) {
  return await GrupoPesquisa.findOneAndRemove({
    'quemsomos._id': id
  });
}

async function updateQuemSomosgp(form) {

  return await GrupoPesquisa.findOneAndUpdate({
    'quemsomos._id': form._id
  },
    form, {
    upsert: true
  });
}