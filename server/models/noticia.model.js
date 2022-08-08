const mongoose = require('mongoose');

const NoticiaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },

    createAt: {
      type: Date,
      default: Date.now
    },

    title: {
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

    externalLink: {
      type: String,
    },

  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Noticia', NoticiaSchema);
