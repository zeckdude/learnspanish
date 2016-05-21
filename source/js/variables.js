var words = {
  wordType: "word",
  values: {
    cuando: {
      spanish: "cuando",
      english: "when"
    },
    hola: {
      spanish: "hola",
      english: "hello"
    },
    tampoco: {
      spanish: "tampoco",
      english: "neither/nor"
    },
    tambien: {
      spanish: "tambien",
      english: "also/too/as well"
    },

  }
};

var adjectives = {
  wordType: "adjective",
  values: {
    naco: {
      spanish: "naco",
      english: "tacky"
    },
    poco: {
      spanish: "poco",
      english: "little (quantity)"
    },
    mucho: {
      spanish: "mucho",
      english: "much"
    },
    chico: {
      spanish: "chico",
      english: "small"
    },
    mediano: {
      spanish: "mediano",
      english: "normal/standard/medium"
    },
    grande: {
      spanish: "grande",
      english: "large"
    },
    alto: {
      spanish: "alto",
      english: "tall"
    }
  }
};

var nouns = {
  wordType: "noun",
  values: {
    mujer: {
      spanish: {
        singular: "mujer",
        plural: "mujeres"
      },
      english: {
        singular: "woman",
        plural: "women"
      },
      gender: "female"
    },
    hombre: {
      spanish: {
        singular: "hombre",
        plural: "hombres"
      },
      english: {
        singular: "man",
        plural: "men"
      },
      gender: "male"
    },
    niño: {
      spanish: {
        singular: "niño"
      },
      english: {
        singular: "boy"
      },
      gender: "male"
    },
    niña: {
      spanish: {
        singular: "niña"
      },
      english: {
        singular: "girl"
      },
      gender: "female"
    },
    padre: {
      spanish: {
        singular: "padre"
      },
      english: {
        singular: "father"
      },
      gender: "male"
    },
    madre: {
      spanish: {
        singular: "madre"
      },
      english: {
        singular: "mother"
      },
      gender: "female"
    },
    cuarto: {
      spanish: {
        singular: "cuarto"
      },
      english: {
        singular: "bedroom"
      },
      gender: "male"
    },
    sala: {
      spanish: {
        singular: "sala"
      },
      english: {
        singular: "living room"
      },
      gender: "female"
    },
  }
};


//var nouns = {
//  wordType: "noun",
//  values: {
//    niño: {
//      spanish: {
//        singular: "niño"
//      },
//      english: {
//        singular: "boy"
//      },
//      gender: "male"
//    },
//    niña: {
//      spanish: {
//        singular: "niña"
//      },
//      english: {
//        singular: "girl"
//      },
//      gender: "female"
//    },
//    padre: {
//      spanish: {
//        singular: "padre"
//      },
//      english: {
//        singular: "father"
//      },
//      gender: "male"
//    },
//    madre: {
//      spanish: {
//        singular: "madre"
//      },
//      english: {
//        singular: "mother"
//      },
//      gender: "female"
//    },
//  }
//};


var verbs = {
  arWords: [
    hablar = {
      spanish: {
        word: "hablar"
      },
      english: {
        definition: "to speak (talk)",
        present: "speak",
        present3rdPerson: "speaks",
        past: "spoke"
      }
    },
    preguntar = {
      spanish: {
        word: "preguntar"
      },
      english: {
        definition: "to ask",
        present: "ask",
        present3rdPerson: "asks",
        past: "asked"
      }
    },
    estudiar = {
      spanish: {
        word: "estudiar"
      },
      english: {
        definition: "to study",
        present: "study",
        present3rdPerson: "studies",
        past: "studied"
      }
    }
  ],
  erWords: [
    aprender = {
      spanish: {
        word: "aprender"
      },
      english: {
        definition: "to learn",
        present: "learn",
        present3rdPerson: "learns",
        past: "learned"
      }
    },
    vender = {
      spanish: {
        word: "vender"
      },
      english: {
        definition: "to sell",
        present: "sell",
        present3rdPerson: "sells",
        past: "sold"
      }
    },
    romper = {
      spanish: {
        word: "romper"
      },
      english: {
        definition: "to break",
        present: "break",
        present3rdPerson: "breaks",
        past: "broke"
      }
    }
  ],
  irWords: [
    venir = {
      spanish: {
        word: "abrir"
      },
      english: {
        definition: "to open",
        present: "open",
        present3rdPerson: "opens",
        past: "opened"
      }
    },
    vivir = {
      spanish: {
        word: "vivir"
      },
      english: {
        definition: "to live",
        present: "live",
        present3rdPerson: "lives",
        past: "lived"
      }
    },
    recibir = {
      spanish: {
        word: "recibir"
      },
      english: {
        definition: "to receive",
        present: "receive",
        present3rdPerson: "receives",
        past: "received"
      }
    }
  ]
};

var spanishTenses = {
  arWords: {
    present: {
      appendTo: "stem",
      yo: "o",
      tu: "as",
      el: "a",
      nosotros: "amos",
      ellos: "an"
    },
    past: {
      appendTo: "stem",
      yo: "e",
      tu: "aste",
      el: "ó",
      nosotros: "amos",
      ellos: "aron"
    },
    imperfect: {
      appendTo: "stem",
      yo: "aba",
      tu: "abas",
      el: "aba",
      nosotros: "ábamos",
      ellos: "aban"
    },
    future: {
      appendTo: "infinitive",
      yo: "é",
      tu: "ás",
      el: "á",
      nosotros: "emos",
      ellos: "án"
    },
    conditional: {
      appendTo: "infinitive",
      yo: "ía",
      tu: "ías",
      el: "ía",
      nosotros: "íamos",
      ellos: "ían"
    }
  },
  erWords: {
    present: {
      appendTo: "stem",
      yo: "o",
      tu: "es",
      el: "e",
      nosotros: "emos",
      ellos: "en"
    },
    past: {
      appendTo: "stem",
      yo: "í",
      tu: "iste",
      el: "ió",
      nosotros: "imos",
      ellos: "ieron"
    },
    imperfect: {
      appendTo: "stem",
      yo: "ía",
      tu: "ías",
      el: "ía",
      nosotros: "íamos",
      ellos: "ían"
    },
    future: {
      appendTo: "infinitive",
      yo: "é",
      tu: "ás",
      el: "á",
      nosotros: "emos",
      ellos: "án"
    },
    conditional: {
      appendTo: "infinitive",
      yo: "ía",
      tu: "ías",
      el: "ía",
      nosotros: "íamos",
      ellos: "ían"
    }
  },
  irWords: {
    present: {
      appendTo: "stem",
      yo: "o",
      tu: "es",
      el: "e",
      nosotros: "imos",
      ellos: "en"
    },
    past: {
      appendTo: "stem",
      yo: "í",
      tu: "iste",
      el: "ió",
      nosotros: "imos",
      ellos: "ieron"
    },
    imperfect: {
      appendTo: "stem",
      yo: "ía",
      tu: "ías",
      el: "ía",
      nosotros: "íamos",
      ellos: "ían"
    },
    future: {
      appendTo: "infinitive",
      yo: "é",
      tu: "ás",
      el: "á",
      nosotros: "emos",
      ellos: "án"
    },
    conditional: {
      appendTo: "infinitive",
      yo: "ía",
      tu: "ías",
      el: "ía",
      nosotros: "íamos",
      ellos: "ían"
    }
  }
};