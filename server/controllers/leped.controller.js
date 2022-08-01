

const QuemSomos = require('../models/quem-somos.model');
const Noticia = require('../models/noticia.model');
const Coordenadoras = require('../models/coordenadora.model');
const Eventos = require('../models/evento.model');
const Galeria = require('../models/galeria.model');
const GrupoPesquisa = require('../models/grupo-pesquisa.model');
const S3Uploader = require('./aws.controller');


module.exports = {
  getQuemSomos,
  insertQuemSomos,
  deleteQuemSomos,
  updateQuemSomos,

  getCoordenadoras,
  insertCoordenadoras,
  deleteCoordenadoras,
  updateCoordenadoras,

  getEventos,
  insertEventos,
  deleteEventos,
  updateEventos,

  getGaleria,
  insertGaleria,
  deleteGaleria,
  updateGaleria,

  getGrupoPesquisa,
  insertGrupoPesquisa,
  deleteGrupoPesquisa,
  updateGrupoPesquisa,

  getNoticia,
  insertNoticia,
  deleteNoticia,
  updateNoticia
};

async function getQuemSomos() {
  return await QuemSomos.find()
    .sort({
      createAt: -1
    });
}

async function insertQuemSomos(req, idUser) {
  let form = JSON.parse(req.body.formulario);
  form.user = idUser;
  let fileName = 'images/' + req.files.fileArray.name;
  await S3Uploader.uploadBase64(fileName, buf).then(async fileData => {
    console.log('Arquivo submetido para AWS ' + fileName);
    conferencista.imagePathS3 = fileName;
    retorno.temErro = false;
    return await new QuemSomos(form).save();
  }, err => {
    console.log('Erro ao enviar imagem para AWS: ' + fileName);
    retorno.temErro = true;
    retorno.mensagem = 'Servidor momentaneamente inoperante. Tente novamente mais tarde.';
  });
}

async function deleteQuemSomos(id) {
  return await QuemSomos.findOneAndRemove({
    _id: id
  });
}

async function updateQuemSomos(form, idUser) {
  form.user = idUser;
  return await QuemSomos.findOneAndUpdate({
    _id: form._id
  },
    form, {
    upsert: true
  });
}

async function getCoordenadoras() {
  return await Coordenadoras.find()
    .sort({
      createAt: -1
    });
}

async function insertCoordenadoras(form, idUser) {
  form.user = idUser;
  return await new Coordenadoras(form).save();
}

async function deleteCoordenadoras(id) {
  return await Coordenadoras.findOneAndRemove({
    _id: id
  });
}

async function updateCoordenadoras(form, idUser) {
  form.user = idUser;
  return await Coordenadoras.findOneAndUpdate({
    _id: form._id
  },
    form, {
    upsert: true
  });
}

async function getEventos() {
  return await Eventos.find()
    .sort({
      createAt: -1
    });
}

async function insertEventos(form, idUser) {
  form.user = idUser;
  return await new Eventos(form).save();
}

async function deleteEventos(id) {
  return await Eventos.findOneAndRemove({
    _id: id
  });
}

async function updateEventos(form, idUser) {
  form.user = idUser;
  return await Eventos.findOneAndUpdate({
    _id: form._id
  },
    form, {
    upsert: true
  });
}

async function getGaleria() {
  return await Galeria.find()
    .sort({
      createAt: -1
    });
}

async function insertGaleria(form, idUser) {
  form.user = idUser;
  return await new Galeria(form).save();
}

async function deleteGaleria(id) {
  return await Galeria.findOneAndRemove({
    _id: id
  });
}

async function updateGaleria(form, idUser) {
  form.user = idUser;
  return await Galeria.findOneAndUpdate({
    _id: form._id
  },
    form, {
    upsert: true
  });
}

async function getGrupoPesquisa() {
  return await GrupoPesquisa.find()
    .sort({
      createAt: -1
    });
}

async function insertGrupoPesquisa(form, idUser) {
  form.user = idUser;
  return await new GrupoPesquisa(form).save();
}

async function deleteGrupoPesquisa(id) {
  return await GrupoPesquisa.findOneAndRemove({
    _id: id
  });
}

async function updateGrupoPesquisa(form, idUser) {
  form.user = idUser;
  return await GrupoPesquisa.findOneAndUpdate({
    _id: form._id
  },
    form, {
    upsert: true
  });
}

async function getNoticia() {
  return await Noticia.find()
    .sort({
      createAt: -1
    });
}

async function insertNoticia(form, idUser) {
  form.user = idUser;
  return await new Noticia(form).save();
}

async function deleteNoticia(id) {
  return await Noticia.findOneAndRemove({
    _id: id
  });
}

async function updateNoticia(form, idUser) {
  form.user = idUser;
  return await Noticia.findOneAndUpdate({
    _id: form._id
  },
    form, {
    upsert: true
  });
}
