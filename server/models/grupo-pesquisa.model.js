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
    ],

    participantes: [{

      name: {
        type: String,

      },
      email: {
        type: String,
      },

      orcid: {
        type: String
      },

      lattes: {
        type: String,
      },

      instagram: {
        type: String,
      },

      twitter: {
        type: String,
      },

      facebook: {
        type: String,
      },
      imagePathS3: {
        type: String,
      },


    }],
    parceiros: [{

      parceriaName: {
        type: String,

      },
      parceriaDesc: {
        type: String,

      },
      imagePathS3: {
        type: String,
      }
    }],


    pesquisas: [{

      icPesquisa: {
        type: String,
        required: true
      },

      titleResearch: {
        type: String,
        required: true
      },

      resume: {
        type: String,
        required: true
      },

      coordination: {
        type: String,
        required: true
      },

      period: {
        type: String,
        required: true
      },

      financing: {
        type: String,
      },

      researchLink: {
        type: String,
      },

      publications: [{
        type: String,
      }]
    }],

    artigos: [{

      titleArticle: {
        type: String,
      },
      authorsArticle: {

        type: String,
      },
      journalArticle: {
        type: String,
      },

      linkArticle: {
        type: String,
      }

    }],
    teses: [{

      icTese: {
        type: String,
      },
      titleTesis: {
        type: String,
      },
      authorTesis: {

        type: String,
      },

      dateTesis: {
        type: String,
      },
      linkTesis: {
        type: String,
      }
    }],

    livros: [{

      titleBook: {
        type: String,
      },
      authorsBook: {

        type: String,
      },

      linkBook: {
        type: String,
      },

      imagePathS3: {
        type: String,
      },
    }],

    capitulos: [{

      titleChapter: {
        type: String,
      },
      authorsChapter: {

        type: String,
      },

      titleBook: {
        type: String,
      },
      eds: {
        type: String,
      },
      publisher: {
        type: String,
      },
      edition: {
        type: String,
      },
      location: {
        type: String,
      },
      vol: {
        type: String,
      },
      pages: {
        type: String,
      },
      year: {
        type: String,
      }

    }],





  },

  {
    versionKey: false,
  }
);

module.exports = mongoose.model('GrupoPesquisa', GrupoPesquisaSchema);
