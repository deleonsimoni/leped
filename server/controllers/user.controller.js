const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/user.model');
const S3Uploader = require('./aws.controller');


const userSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email(),
  mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
  password: Joi.string().required(),
  repeatPassword: Joi.string().required().valid(Joi.ref('password')),
});

module.exports = {
  insert,
  updateBio
};

async function insert(user) {
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  return await new User(user).save();
}

async function updateBio(req) {
  let form = { bio: JSON.parse(req.body.formulario) };
  let retorno = { temErro: true };

  if (req.files) {
    let fileName = 'images/usuarios/' + req.user._id + '/' + req.files.fileArray.name;
    await S3Uploader.uploadBase64(fileName, req.files.fileArray.data).then(async fileData => {
      console.log('Arquivo submetido para AWS ' + fileName);
      form.image = fileName;
      retorno.temErro = false;
      return await User.findOneAndUpdate({
        _id: req.user._id
      },
        form, {
        upsert: true
      });
    }, err => {
      console.log('Erro ao enviar imagem para AWS: ' + fileName);
      retorno.temErro = true;
      retorno.mensagem = 'Servidor momentaneamente inoperante. Tente novamente mais tarde.';
    });

  } else {
    return await User.findOneAndUpdate({
      _id: req.user._id
    },
      form, {
      upsert: true
    });
  }

  return "Ok";

}
