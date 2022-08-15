const mongoose = require('mongoose');

const GrupoPesquisaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },

    createAt: {
      type: Date,
      default: Date.now
    },

    type: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    subTitle: {
      type: String,
      required: true
    },

    content: {
      type: String,
      required: true
    },

    imagePathS3: {
      type: String,
    },

    coordenadoraName: {
      type: String,
    },

    coordenadoraImage: {
      type: String,
    },

    endereco: {
      type: String,
    },

    enderecoGoogle: {
      type: String,
    },

    telefone: {
      type: String,
    },

    funcionamento: {
      type: String,
    },

    email: {
      type: String,
    },

    facebook: {
      type: String,
    },

    youtube: {
      type: String,
    },

    instagram: {
      type: String,
    },

    twitter: {
      type: String,
    },

    galeria: [
      {
        type: String
      }
    ]
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('GrupoPesquisa', GrupoPesquisaSchema);
