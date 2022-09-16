
const GrupoCapitulo = require('../models/grupo-capitulo.model');
const S3Uploader = require('./aws.controller');



module.exports = {


  getCapitulosgp,
  insertCapitulosgp,
  deleteCapitulosgp,
  updateCapitulosgp,


};


async function getCapitulosgp() {
  return await GrupoCapitulo.find()

    /*{ type: 'GEPED' }*/

    .sort({
      createAt: -1
    });
}

async function insertCapitulosgp(req, idUser) {

  let form = JSON.parse(req.body.formulario);
  form.user = idUser;
  let retorno = { temErro: true };
  return await new GrupoCapitulo(form).save();
}

async function deleteCapitulosgp(id) {
  return await GrupoCapitulo.findOneAndRemove({
    _id: id
  });
}


async function updateCapitulosgp(req, idUser) {

  let form = JSON.parse(req.body.formulario);
  form.user = idUser;
  let retorno = { temErro: true };

  return await GrupoCapitulo.findOneAndUpdate({
    _id: form._id
  },
    form, {
    upsert: true
  });
}

