const mongoose = require('mongoose');

const GaleriaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },

    createAt: {
      type: Date,
      default: Date.now
    },

    logo: {
      type: String,
      required: true
    },

  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Galeria', GaleriaSchema);
