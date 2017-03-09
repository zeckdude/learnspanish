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

var timeWords = {
  wordType: "word",
  values: {
    todoElDia: {
      spanish: "todo el día",
      english: "all day long"
    },
    todaLaVida: {
      spanish: "toda la vida",
      english: "all one's life"
    },
    todoElTiemp: {
      spanish: "todo el tiempo",
      english: "all the time"
    },
    siempre: {
      spanish: "siempre",
      english: "always / forever"
    },
    aVeces: {
      spanish: "a veces",
      english: "At times / Sometimes"
    },
    cadaDia: {
      spanish: "cada día",
      english: "every day"
    },
    cadaAno: {
      spanish: "cada año",
      english: "every year"
    },
    porUnRato: {
      spanish: "por un rato",
      english: "for a while"
    },
    frecuentemente: {
      spanish: "frecuentemente / con frecuencia",
      english: "frequently / often"
    },
    deVezEnCuando: {
      spanish: "de vez en cuando",
      english: "from time to time"
    },
    muchasVeces: {
      spanish: "muchas veces",
      english: "many times"
    },
    nunca: {
      spanish: "nunca",
      english: "never"
    },
    tantasVeces: {
      spanish: "tantas veces",
      english: "so many times"
    },
    variasVeces: {
      spanish: "varias veces",
      english: "(various / several) times"
    },
    cuando: {
      spanish: "cuando",
      english: "when / whenever"
    }
  }
};


//var verbs = {
//  wordType: "verb",
//  values: {
//    hablar: {
//      spanish: "hablar",
//      english: "to speak (talk)",
//      additional: {
//        verbEnding: "ar",
//        englishVariations: {
//          present: "speak",
//          present3rdPerson: "speaks",
//          past: "spoke"
//        }
//      }
//    },
//    aprender: {
//      spanish: "aprender",
//      english: "to learn",
//      additional: {
//        verbEnding: "er",
//        englishVariations: {
//          present: "learn",
//          present3rdPerson: "learns",
//          past: "learned"
//        }
//      }
//    },
//    vivir: {
//      spanish: "vivir",
//      english: "to live",
//      additional: {
//        verbEnding: "ir",
//        englishVariations: {
//          present: "live",
//          present3rdPerson: "lives",
//          past: "lived"
//        }
//      }
//    }
//  }
//};

var verbs = {
  wordType: "verb",
  values: {
    hablar: {
      spanish: "hablar",
      english: "to speak (talk)",
      additional: {
        verbEnding: "ar",
        englishVariations: {
          present: "speak",
          present3rdPerson: "speaks",
          past: "spoke"
        }
      }
    }
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


//var verbs = {
//  wordType: "verb",
//  arWords: [
//    hablar = {
//      spanish: {
//        word: "hablar"
//      },
//      english: {
//        definition: "to speak (talk)",
//        present: "speak",
//        present3rdPerson: "speaks",
//        past: "spoke"
//      }
//    },
//    preguntar = {
//      spanish: {
//        word: "preguntar"
//      },
//      english: {
//        definition: "to ask",
//        present: "ask",
//        present3rdPerson: "asks",
//        past: "asked"
//      }
//    },
//    estudiar = {
//      spanish: {
//        word: "estudiar"
//      },
//      english: {
//        definition: "to study",
//        present: "study",
//        present3rdPerson: "studies",
//        past: "studied"
//      }
//    }
//  ],
//  erWords: [
//    aprender = {
//      spanish: {
//        word: "aprender"
//      },
//      english: {
//        definition: "to learn",
//        present: "learn",
//        present3rdPerson: "learns",
//        past: "learned"
//      }
//    },
//    vender = {
//      spanish: {
//        word: "vender"
//      },
//      english: {
//        definition: "to sell",
//        present: "sell",
//        present3rdPerson: "sells",
//        past: "sold"
//      }
//    },
//    romper = {
//      spanish: {
//        word: "romper"
//      },
//      english: {
//        definition: "to break",
//        present: "break",
//        present3rdPerson: "breaks",
//        past: "broke"
//      }
//    }
//  ],
//  irWords: [
//    abrir = {
//      spanish: {
//        word: "abrir"
//      },
//      english: {
//        definition: "to open",
//        present: "open",
//        present3rdPerson: "opens",
//        past: "opened"
//      }
//    },
//    vivir = {
//      spanish: {
//        word: "vivir"
//      },
//      english: {
//        definition: "to live",
//        present: "live",
//        present3rdPerson: "lives",
//        past: "lived"
//      }
//    },
//    recibir = {
//      spanish: {
//        word: "recibir"
//      },
//      english: {
//        definition: "to receive",
//        present: "receive",
//        present3rdPerson: "receives",
//        past: "received"
//      }
//    }
//  ]
//};

var spanishTenses = {
  ar: {
    present: {
      appendTo: "stem",
      person: {
        yo: "o",
        tu: "as",
        el: "a",
        nosotros: "amos",
        ellos: "an"
      }
    },
    past: {
      appendTo: "stem",
      person: {
        yo: "e",
        tu: "aste",
        el: "ó",
        nosotros: "amos",
        ellos: "aron"
      }
    },
    imperfect: {
      appendTo: "stem",
      person: {
        yo: "aba",
        tu: "abas",
        el: "aba",
        nosotros: "ábamos",
        ellos: "aban"
      }
    },
    future: {
      appendTo: "infinitive",
      person: {
        yo: "é",
        tu: "ás",
        el: "á",
        nosotros: "emos",
        ellos: "án"
      }
    },
    conditional: {
      appendTo: "infinitive",
      person: {
        yo: "ía",
        tu: "ías",
        el: "ía",
        nosotros: "íamos",
        ellos: "ían"
      }
    }
  },
  er: {
    present: {
      appendTo: "stem",
      person: {
        yo: "o",
        tu: "es",
        el: "e",
        nosotros: "emos",
        ellos: "en"
      }
    },
    past: {
      appendTo: "stem",
      person: {
        yo: "í",
        tu: "iste",
        el: "ió",
        nosotros: "imos",
        ellos: "ieron"
      }
    },
    imperfect: {
      appendTo: "stem",
      person: {
        yo: "ía",
        tu: "ías",
        el: "ía",
        nosotros: "íamos",
        ellos: "ían"
      }
    },
    future: {
      appendTo: "infinitive",
      person: {
        yo: "é",
        tu: "ás",
        el: "á",
        nosotros: "emos",
        ellos: "án"
      }
    },
    conditional: {
      appendTo: "infinitive",
      person: {
        yo: "ía",
        tu: "ías",
        el: "ía",
        nosotros: "íamos",
        ellos: "ían"
      }
    }
  },
  ir: {
    present: {
      appendTo: "stem",
      person: {
        yo: "o",
        tu: "es",
        el: "e",
        nosotros: "imos",
        ellos: "en"
      }
    },
    past: {
      appendTo: "stem",
      person: {
        yo: "í",
        tu: "iste",
        el: "ió",
        nosotros: "imos",
        ellos: "ieron"
      }
    },
    imperfect: {
      appendTo: "stem",
      person: {
        yo: "ía",
        tu: "ías",
        el: "ía",
        nosotros: "íamos",
        ellos: "ían"
      }
    },
    future: {
      appendTo: "infinitive",
      person: {
        yo: "é",
        tu: "ás",
        el: "á",
        nosotros: "emos",
        ellos: "án"
      }
    },
    conditional: {
      appendTo: "infinitive",
      person: {
        yo: "ía",
        tu: "ías",
        el: "ía",
        nosotros: "íamos",
        ellos: "ían"
      }
    }
  }
};


var reflexiveVerbsSet1 = {
  wordType: "verb",
  values: {
    acostarse: {
      spanish: "acostarse",
      english: "to go to bed",
      additional: {
        verbEnding: "ar"
      }
    },
    afeitarse: {
      spanish: "afeitarse",
      english: "to shave oneself",
      additional: {
        verbEnding: "ar"
      }
    },
    bañarse: {
      spanish: "bañarse",
      english: "to bathe oneself",
      additional: {
        verbEnding: "ar"
      }
    },
    casarse: {
      spanish: "casarse (con alguien)",
      english: "to marry (someone)",
      additional: {
        verbEnding: "ar"
      }
    },
    cepillarse: {
      spanish: "cepillarse",
      english: "to brush oneself (hair, teeth, etc)",
      additional: {
        verbEnding: "ar"
      }
    },
    comerse: {
      spanish: "comerse",
      english: "to eat hastily",
      additional: {
        verbEnding: "er"
      }
    },
    despertarse: {
      spanish: "despertarse",
      english: "to wake up",
      additional: {
        verbEnding: "ar"
      }
    },
    desvestirse: {
      spanish: "desvestirse",
      english: "to undress oneself",
      additional: {
        verbEnding: "ir"
      }
    },
    dormirse: {
      spanish: "dormirse",
      english: "to fall asleep",
      additional: {
        verbEnding: "ir"
      }
    },
    ducharse: {
      spanish: "ducharse",
      english: "to take a shower",
      additional: {
        verbEnding: "ar"
      }
    },
    enfermarse: {
      spanish: "enfermarse",
      english: "to get sick",
      additional: {
        verbEnding: "ar"
      }
    },
    enojarse: {
      spanish: "enojarse",
      english: "to get angry",
      additional: {
        verbEnding: "ar"
      }
    },
    irse: {
      spanish: "irse",
      english: "to go away",
      additional: {
        verbEnding: "ir"
      }
    },
    lavarse: {
      spanish: "lavarse",
      english: "to wash oneself",
      additional: {
        verbEnding: "ar"
      }
    },
    levantarse: {
      spanish: "levantarse",
      english: "to stand up",
      additional: {
        verbEnding: "ar"
      }
    },
    llamarse: {
      spanish: "llamarse",
      english: "to call oneself",
      additional: {
        verbEnding: "ar"
      }
    },
    mirarse: {
      spanish: "mirarse",
      english: "to look at oneself",
      additional: {
        verbEnding: "ar"
      }
    },
    morirse: {
      spanish: "morirse",
      english: "to pass away",
      additional: {
        verbEnding: "ir"
      }
    },
    peinarse: {
      spanish: "peinarse",
      english: "to comb one's hair",
      additional: {
        verbEnding: "ar"
      }
    },
    ponerse: {
      spanish: "ponerse",
      english: "to become, get",
      additional: {
        verbEnding: "er"
      }
    },
    preocuparse: {
      spanish: "preocuparse (con)",
      english: "to worry (about)",
      additional: {
        verbEnding: "ar"
      }
    },
    probarse: {
      spanish: "probarse",
      english: "to try on (clothing)",
      additional: {
        verbEnding: "ar"
      }
    },
    quitarse: {
      spanish: "quitarse",
      english: "to take off (clothing)",
      additional: {
        verbEnding: "ar"
      }
    },
    secarse: {
      spanish: "secarse",
      english: "to dry oneself",
      additional: {
        verbEnding: "ar"
      }
    },
    sentarse: {
      spanish: "sentarse",
      english: "to seat oneself",
      additional: {
        verbEnding: "ar"
      }
    },
    sentirse: {
      spanish: "sentirse",
      english: "to feel (emotionally, physically)",
      additional: {
        verbEnding: "ir"
      }
    },
    verse: {
      spanish: "verse",
      english: "to see oneself",
      additional: {
        verbEnding: "er"
      }
    },
    vestirse: {
      spanish: "vestirse",
      english: "to get dressed",
      additional: {
        verbEnding: "ir"
      }
    }
  }
};

var memorizeSet1 = {
  wordType: "verb",
  values: {
    hablar: {
      spanish: "hablar",
      english: "to speak (talk)",
      additional: {
        verbEnding: "ar"
      }
    },
    acertar: {
      spanish: "acertar",
      english: "to get right",
      additional: {
        verbEnding: "ar"
      }
    },
    desear: {
      spanish: "desear",
      english: "to wish/desire",
      additional: {
        verbEnding: "ar"
      }
    },
    negar: {
      spanish: "negar",
      english: "to deny",
      additional: {
        verbEnding: "ar"
      }
    },
    mentir: {
      spanish: "mentir",
      english: "to lie",
      additional: {
        verbEnding: "ir"
      }
    },
    defender: {
      spanish: "defender",
      english: "to defend",
      additional: {
        verbEnding: "er"
      }
    },
    pedir: {
      spanish: "pedir",
      english: "to ask for",
      additional: {
        verbEnding: "ir"
      }
    },
    aprobar: {
      spanish: "aprobar",
      english: "to approve",
      additional: {
        verbEnding: "ar"
      }
    },
    envolver: {
      spanish: "envolver",
      english: "to wrap (up)",
      additional: {
        verbEnding: "er"
      }
    },
    encender: {
      spanish: "encender",
      english: "to light/kindle",
      additional: {
        verbEnding: "er"
      }
    },
    rogar: {
      spanish: "rogar",
      english: "to beg/pray",
      additional: {
        verbEnding: "ar"
      }
    },
    tropezar: {
      spanish: "tropezar (con)",
      english: "to bump into",
      additional: {
        verbEnding: "ar"
      }
    },
    volar: {
      spanish: "volar",
      english: "to fly",
      additional: {
        verbEnding: "ar"
      }
    },
    tostar: {
      spanish: "tostar",
      english: "to toast",
      additional: {
        verbEnding: "ar"
      }
    },
    temblar: {
      spanish: "temblar",
      english: "to tremble/shake",
      additional: {
        verbEnding: "ar"
      }
    },
    pintar: {
      spanish: "pintar",
      english: "to paint",
      additional: {
        verbEnding: "ar"
      }
    },
    mover: {
      spanish: "mover",
      english: "to move (an object)",
      additional: {
        verbEnding: "er"
      }
    },
    contar: {
      spanish: "contar",
      english: "to count",
      additional: {
        verbEnding: "ar"
      }
    },
    costar: {
      spanish: "costar",
      english: "to cost",
      additional: {
        verbEnding: "ar"
      }
    },
    dormir: {
      spanish: "dormir",
      english: "to sleep",
      additional: {
        verbEnding: "ir"
      }
    },
    encontrar: {
      spanish: "encontrar",
      english: "to find",
      additional: {
        verbEnding: "ar"
      }
    },
    morder: {
      spanish: "morder",
      english: "to bite",
      additional: {
        verbEnding: "er"
      }
    },
    morir: {
      spanish: "morir",
      english: "to die",
      additional: {
        verbEnding: "ir"
      }
    },
    recordar: {
      spanish: "recordar",
      english: "to remember",
      additional: {
        verbEnding: "ar"
      }
    },
    comenzar: {
      spanish: "comenzar",
      english: "to begin/commence",
      additional: {
        verbEnding: "ar"
      }
    },
    resolver: {
      spanish: "resolver",
      english: "to solve",
      additional: {
        verbEnding: "er"
      }
    },
    consentir: {
      spanish: "consentir",
      english: "to consent/pamper/spoil",
      additional: {
        verbEnding: "ir"
      }
    },
    hervir: {
      spanish: "hervir",
      english: "to boil",
      additional: {
        verbEnding: "ir"
      }
    },
    soñar: {
      spanish: "soñar (con)",
      english: "to dream (about)",
      additional: {
        verbEnding: "ar"
      }
    },
    sonar: {
      spanish: "sonar",
      english: "to sound/ring",
      additional: {
        verbEnding: "ar"
      }
    },
    devolver: {
      spanish: "devolver",
      english: "to return (an object)",
      additional: {
        verbEnding: "er"
      }
    },
    almorzar: {
      spanish: "almorzar",
      english: "to eat lunch",
      additional: {
        verbEnding: "ar"
      }
    },
    advertir: {
      spanish: "advertir",
      english: "to warn",
      additional: {
        verbEnding: "ar"
      }
    },
    cerrar: {
      spanish: "cerrar",
      english: "to close/shut",
      additional: {
        verbEnding: "ar"
      }
    },
    aconsejar: {
      spanish: "aconsejar",
      english: "to advise",
      additional: {
        verbEnding: "ar"
      }
    },
    convertir: {
      spanish: "convertir",
      english: "to convert",
      additional: {
        verbEnding: "ir"
      }
    },
    volver: {
      spanish: "volver",
      english: "to return",
      additional: {
        verbEnding: "er"
      }
    },
    adivinar: {
      spanish: "adivinar",
      english: "to guess",
      additional: {
        verbEnding: "ar"
      }
    },
    empezar: {
      spanish: "empezar",
      english: "to begin",
      additional: {
        verbEnding: "ar"
      }
    },
    probar: {
      spanish: "probar",
      english: "to prove/test/sample",
      additional: {
        verbEnding: "ar"
      }
    },
    confesar: {
      spanish: "confesar",
      english: "to confess",
      additional: {
        verbEnding: "ar"
      }
    },
    sentir: {
      spanish: "sentir",
      english: "to feel sorry/regret",
      additional: {
        verbEnding: "ir"
      }
    },
    entender: {
      spanish: "entender",
      english: "to understand",
      additional: {
        verbEnding: "er"
      }
    },
    fregar: {
      spanish: "fregar",
      english: "to scrub dishes/wash dishes",
      additional: {
        verbEnding: "ar"
      }
    },
    mostrar: {
      spanish: "mostrar",
      english: "to show",
      additional: {
        verbEnding: "ar"
      }
    },
    pensar_en: {
      spanish: "pensar (en)",
      english: "to think (about)",
      additional: {
        verbEnding: "ar"
      }
    },
    colgar: {
      spanish: "colgar",
      english: "to hang up",
      additional: {
        verbEnding: "ar"
      }
    },
    perder: {
      spanish: "perder",
      english: "to lose",
      additional: {
        verbEnding: "er"
      }
    },
    tambalear: {
      spanish: "tambalear",
      english: "to stumble",
      additional: {
        verbEnding: "ar"
      }
    },
    preferir: {
      spanish: "preferir",
      english: "to prefer",
      additional: {
        verbEnding: "ir"
      }
    },
    querer: {
      spanish: "querer",
      english: "to want/wish",
      additional: {
        verbEnding: "er"
      }
    },
    referir: {
      spanish: "referir",
      english: "to refer",
      additional: {
        verbEnding: "ir"
      }
    },
  }
};

var memorizeSet2 = {
  wordType: "verb",
  values: {
    bendecir: {
      spanish: "bendecir",
      english: "to bless",
      additional: {
        verbEnding: "ir"
      }
    },
    deducir: {
      spanish: "deducir",
      english: "to deduce",
      additional: {
        verbEnding: "ir"
      }
    },
    competir: {
      spanish: "competir",
      english: "to compete",
      additional: {
        verbEnding: "ir"
      }
    },
    conseguir: {
      spanish: "conseguir",
      english: "to obtain, get",
      additional: {
        verbEnding: "ir"
      }
    },
    corregir: {
      spanish: "corregir",
      english: "to correct",
      additional: {
        verbEnding: "ir"
      }
    },
    decir: {
      spanish: "decir",
      english: "to say, tell",
      additional: {
        verbEnding: "ir"
      }
    },
    despedir: {
      spanish: "despedir",
      english: "to fire",
      additional: {
        verbEnding: "ir"
      }
    },
    elegir: {
      spanish: "elegir",
      english: "to elect",
      additional: {
        verbEnding: "ir"
      }
    },
    freír: {
      spanish: "freír",
      english: "to fry",
      additional: {
        verbEnding: "ir"
      }
    },
    gemir: {
      spanish: "gemir",
      english: "to groan, moan",
      additional: {
        verbEnding: "ir"
      }
    },
    impedir: {
      spanish: "impedir",
      english: "to impede, hinder",
      additional: {
        verbEnding: "ir"
      }
    },
    maldecir: {
      spanish: "maldecir",
      english: "to curse",
      additional: {
        verbEnding: "ir"
      }
    },
    medir: {
      spanish: "medir",
      english: "to measure",
      additional: {
        verbEnding: "ir"
      }
    },
    pedir: {
      spanish: "pedir",
      english: "to ask for",
      additional: {
        verbEnding: "ir"
      }
    },
    reír: {
      spanish: "reír",
      english: "to laugh",
      additional: {
        verbEnding: "ir"
      }
    },
    repetir: {
      spanish: "repetir",
      english: "to repeat",
      additional: {
        verbEnding: "ir"
      }
    },
    seguir: {
      spanish: "seguir",
      english: "to follow, continue",
      additional: {
        verbEnding: "ir"
      }
    },
    servir: {
      spanish: "servir",
      english: "to serve",
      additional: {
        verbEnding: "ir"
      }
    },
    agradecer: {
      spanish: "agradecer",
      english: "to appreciate, be thankful (for)",
      additional: {
        verbEnding: "er"
      }
    },
    aparecer: {
      spanish: "aparecer",
      english: "to appear",
      additional: {
        verbEnding: "er"
      }
    },
    conocer: {
      spanish: "conocer",
      english: "to know (a person, place, subject)",
      additional: {
        verbEnding: "er"
      }
    },
    crecer: {
      spanish: "crecer",
      english: "to grow",
      additional: {
        verbEnding: "er"
      }
    },
    desaparecer: {
      spanish: "desaparecer",
      english: "to disappear",
      additional: {
        verbEnding: "er"
      }
    },
    establecer: {
      spanish: "establecer",
      english: "to establish",
      additional: {
        verbEnding: "er"
      }
    },
    merecer: {
      spanish: "merecer",
      english: "to deserve, merit",
      additional: {
        verbEnding: "er"
      }
    },
    nacer: {
      spanish: "nacer",
      english: "to be born",
      additional: {
        verbEnding: "er"
      }
    },
    obedecer: {
      spanish: "obedecer",
      english: "to obey",
      additional: {
        verbEnding: "er"
      }
    },
    ofrecer: {
      spanish: "ofrecer",
      english: "to offer",
      additional: {
        verbEnding: "er"
      }
    },
    paracer: {
      spanish: "paracer",
      english: "to seem, look like",
      additional: {
        verbEnding: "er"
      }
    },
    pertenecer: {
      spanish: "pertenecer (a)",
      english: "to belong (to)",
      additional: {
        verbEnding: "er"
      }
    },
    placer: {
      spanish: "placer",
      english: "to please, gratify",
      additional: {
        verbEnding: "er"
      }
    },
    reconocer: {
      spanish: "reconocer",
      english: "to recognize",
      additional: {
        verbEnding: "er"
      }
    },
    conducir: {
      spanish: "conducir",
      english: "to conduct, drive",
      additional: {
        verbEnding: "ir"
      }
    },
    deslucir: {
      spanish: "deslucir",
      english: "to tarnish, spoil",
      additional: {
        verbEnding: "ir"
      }
    },
    inducir: {
      spanish: "inducir",
      english: "to induce, persuade",
      additional: {
        verbEnding: "ir"
      }
    },
    introducir: {
      spanish: "introducir",
      english: "to introduce",
      additional: {
        verbEnding: "ir"
      }
    },
    lucir: {
      spanish: "lucir",
      english: "to light up, display",
      additional: {
        verbEnding: "ir"
      }
    },
    producir: {
      spanish: "producir",
      english: "to produce",
      additional: {
        verbEnding: "ir"
      }
    },
    reducir: {
      spanish: "reducir",
      english: "to reduce",
      additional: {
        verbEnding: "ir"
      }
    },
    traducir: {
      spanish: "traducir",
      english: "to translate",
      additional: {
        verbEnding: "ir"
      }
    },
    convencer: {
      spanish: "convencer",
      english: "to convince, persuade",
      additional: {
        verbEnding: "er"
      }
    },
    ejercer: {
      spanish: "ejercer",
      english: "to exert, exercise",
      additional: {
        verbEnding: "er"
      }
    },
    esparcir: {
      spanish: "esparcir",
      english: "to scatter, spread",
      additional: {
        verbEnding: "ir"
      }
    },
    vencer: {
      spanish: "vencer",
      english: "to conquer, defeat",
      additional: {
        verbEnding: "er"
      }
    },
    zurcir: {
      spanish: "zurcir",
      english: "to mend",
      additional: {
        verbEnding: "ir"
      }
    }
  }
};

// From: http://www.regextester.com/?fam=94730
// From: http://stackoverflow.com/a/15747789/83916
function wrapParenthesisContent(string, tag, className) {
  //console.log("string: ", string);
  //console.log("tag: ", tag);
  //console.log("className: ", className);

  var classDef;

  if(!tag) { tag = "span" }
  if(className) {
    classDef = ' class="'+className+'"';
  } else {
    classDef = '';
  }

  var openTag = '<'+tag+classDef+'>';

  return string.replace(/(\(.*?\))/ , openTag+'$&</'+tag+'>');
}



// Detect which CSS events are supported by the user's browser and only return the first one if several match (such as `transitionend` and `webkitTransitionEnd` for Chrome so you can listen for the end of a CSS event and then perform an action based on that) (https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/)
function browserSupportedEvents(){
  var t,
    el = document.createElement("fakeelement"),
    browserSupportedEvents = {};

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  };

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  };

  for (t in transitions){
    if (el.style[t] !== undefined){
      //console.log(transitions[t]);
      browserSupportedEvents.transition = transitions[t];
      break;
    }
  }

  for (a in animations){
    if (el.style[a] !== undefined){
      //console.log(animations[a]);
      browserSupportedEvents.animation = animations[a];
      break;
    }
  }

  return browserSupportedEvents;
}

var supportedEvents = browserSupportedEvents();
var transitionEvent = supportedEvents.transition;
var animationEvent = supportedEvents.animation;



function animateCardFlip(callback) {
  // Let's make the callback optional
  callback = callback || null;

  //console.log("flip card begin");

  // Flip the card
  $("#quiz").find(".card").toggleClass("flipped");

  // Run a callback when the CSS animation has finished if it has been provided as an argument
  if(callback) {
    //console.log("A callback was provided");

    // Wait for the flipping animation to complete before running callback
    $("#quiz").one(transitionEvent, ".card", function (event) {
      //console.log("flip card end");
      callback();
    });
  }
}



function populateQuizArea(quizQuestion) {
  //console.log("Populate Quiz Area");

  var quiz = $("#quiz");

  // Change out the question being shown
  //console.log("Fade in the content on the cards");
  quiz.find(".face.front").children(".js-generated-sentence").html(wrapParenthesisContent(quizQuestion.english, 'small')).fadeIn();
  quiz.find(".face.back").children(".js-generated-sentence").html(quizQuestion.spanish).fadeIn();

  // If this is the first time the quiz has been populated, save that status so we can flip the card at random to display different sides before loading in the sentence
  if(!hasFirstQuestionRun) { hasFirstQuestionRun = true; }
}



function disableResultBtns(enableStatus) {
  $(".js-result-btn").prop("disabled", enableStatus);
}



// Function: createNestedObject( base, names[, value] )
//   base: the object on which to create the hierarchy
//   names: an array of strings contaning the names of the objects
//   value (optional): if given, will be the last object in the hierarchy
// Returns: the last object in the hierarchy
// From: http://stackoverflow.com/a/11433067/83916
function createNestedObject( base, names, value ) {
  // If a value is given, remove the last name and keep it for later:
  var lastName = arguments.length === 3 ? names.pop() : false;

  // Walk the hierarchy, creating new objects where needed.
  // If the lastName was removed, then the last object is not set yet:
  for( var i = 0; i < names.length; i++ ) {
    base = base[ names[i] ] = base[ names[i] ] || {};
  }

  // If a value was given, set it to the last name:
  if( lastName ) base = base[ lastName ] = value;

  // Return the last object in the hierarchy:
  return base;
}

function getNumberObjectProperties(obj) {
  return Object.keys(obj).length;
}


// From http://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
function getRandomProperty (obj) {
  var keys = Object.keys(obj);
  var randomProperty = keys[ keys.length * Math.random() << 0];
  //console.log("Random Property: ", randomProperty);
  //return randomProperty;
  //return {"propertyName": randomProperty, "propertyValue": obj[randomProperty]};
  return {"propertyName": randomProperty, "propertyValue": obj[randomProperty]};
}


function randomArrayElement(array) {
  return array[Math.floor(Math.random()*items.length)];
}


function getStem(word) {
  return {
    last2: word.slice(-2),
    stem: word.substring(0, word.length-2)
  }
}

// http://stackoverflow.com/a/34864175/83916
function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  } else {
    var prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
  }
}


// Returns a random integer between min (included) and max (included)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function activateQuiz(quizOptions, quizWords) {
  console.log('In activateQuiz()');
  console.log('quizWords in activateQuiz()', quizWords);

  var quiz = $("#quiz");

  numWords = getNumberObjectProperties(quizWords);
  console.log("Number of Properties in the quizWords object: ", numWords);

  quiz.find(".progress").find(".num-words").text(numWords);


  var completedQuizWords = {};

  // Populate Quiz on page load
  populateQuizArea(quizOptions.functionToGenerateQuizQuestion());

  $('.js-result-btn').click(function () {
    var resultStatus = $(this).data("result-status");

    // Disable the result buttons so the user needs to flip over the card to check the answer before selecting a result
    disableResultBtns(true);

    // If the quiz is set up to only show keep score and only show unanswered questions or previously answered incorrect questions, then check if it was asked correctly, and if so move that wordGroup to the answeredWords object
    if(quizOptions.onlyShowUnansweredQuestions === true) {
      // Check if the question was answered correctly
      var lastWordKey = lastWordGroup.key;

      if (resultStatus === "correct") {
        //console.log("Question answered correctly");

        //console.log("lastWordKey: ", lastWordKey);
        // Increment the `answerAttempted` property to record how many times this word was attempted
        quizWords[lastWordKey]['answerAttempted']++;

        // Change the `answerCorrect` to true to show it was answered correctly
        quizWords[lastWordKey]['answerCorrect'] = true;

        // Copy the necessary properties from the word group to the `completedQuizWords` object
        completedQuizWords[lastWordKey] = {};

        // Check if the `english` property is an object(as in the case of nouns where the english property is an object that contains a `singular` property that holds the actual english value)
        if(isPlainObject(quizWords[lastWordKey].english)) {
          //console.log("quizWords[lastWordKey]",quizWords[lastWordKey]);
          completedQuizWords[lastWordKey].english = quizWords[lastWordKey].english.singular;
          completedQuizWords[lastWordKey].spanish = quizWords[lastWordKey].spanish.singular;
        } else {
          completedQuizWords[lastWordKey].english = quizWords[lastWordKey].english;
          completedQuizWords[lastWordKey].spanish = quizWords[lastWordKey].spanish;
        }

        completedQuizWords[lastWordKey].answerAttempted = quizWords[lastWordKey].answerAttempted;
        completedQuizWords[lastWordKey].wordType = quizWords[lastWordKey].wordType;

        // Remove the word group from the `quizWords` object so it isn't shown again
        delete quizWords[lastWordKey];

        // Update the Progress bar percentage and score value
        //console.log("completedQuizWords: ", completedQuizWords);
        var numWordsAnsweredCorrect = getNumberObjectProperties(completedQuizWords);
        var correctPercentage = (numWordsAnsweredCorrect / numWords) * 100;
        //console.log('numWordsAnsweredCorrect: ', numWordsAnsweredCorrect);
        //console.log('correctPercentage: ', correctPercentage);

        // Since a question was marked as correct, the percentage-correct will change and therefore we trigger a custom event which passes some data to the `progress-bar.js` file which has a listener for the custom event.
        $(document).trigger('progress-changed', [numWordsAnsweredCorrect, correctPercentage]);

        //console.log("Number of Properties in the quizWords object: ", getNumberObjectProperties(quizWords));

        //console.log('Quiz Words in resultStatus: ', quizWords);
      } else {
        // Increment the `answerAttempted` property to record how many times this word was attempted
        quizWords[lastWordKey]['answerAttempted']++;
        //console.log("Question answered incorrectly");
      }
    }

    //console.log("isResultCorrect: " + isResultCorrect + "(" + typeof isResultCorrect + ")");

    // Add the pulse notification to show their result in a visual way
    $("div.face").addClass("pulse-notification pulse-notification-" + resultStatus);

    // Force this function to only run once per click since the animation is being applied to both `.face` divs so it will actually detect it twice.
    // TODO: Fix this by applying the `.pulse-notification` class on only the `.face` that is currently being shown.
    quiz.one(animationEvent, ".face", function (event) {

      // Since the animation has finished, remove the animation class
      $("div.face").removeClass("pulse-notification pulse-notification-" + resultStatus);

      // Fade out the content on the cards
      quiz.find(".face.front").children(".js-generated-sentence").fadeOut(function () {

        // Generate a new question to show if there are any left in the set
        if(getNumberObjectProperties(quizWords) > 0) {
          var newWordGroup = quizOptions.functionToGenerateQuizQuestion();

          // If this is not the first question, randomly determine if the card should turn (show the other language to keep the questions unpredictable)
          if (getRandomInt(0, 1) === 1 && hasFirstQuestionRun) {
            animateCardFlip(function () {
              populateQuizArea(newWordGroup);
            });
          } else {
            populateQuizArea(newWordGroup);
          }
        } else {
          // The Quiz has finished. Calculate the results.
          quiz.find(".questions").fadeOut(function(){
            var resultsArea = quiz.find(".results");

            // Fill in the number of words in the quiz
            resultsArea.find('.num-words').text(numWords);

            // Fill in how many words were correctly answered on the first try
            //console.log("completedQuizWords 1: ", completedQuizWords);
            var numFirstTryCorrect = 0;

            $.each(completedQuizWords, function(index, wordGroup){
              //console.log("index in loop", index);
              //console.log("wordGroup in loop", wordGroup);
              if(wordGroup.answerAttempted === 1) {
                numFirstTryCorrect++;
              }
            });

            resultsArea.find('.first-try-correct').text(numFirstTryCorrect);

            // Get the top 5 words that have the most tries (Add later)

            // Get all the words along with how many tries to complete each one

            var completedQuizWordsArray = [];

            // Convert the completedQuizWords object to an array so it's easier to sort it when outputting all the words answered by the number of tries for each word
            for (var key in completedQuizWords) {
              if (completedQuizWords.hasOwnProperty(key)) {
                completedQuizWordsArray.push(completedQuizWords[key]);
              }
            }

            // Sort by Number (http://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly)
            // Sort by the number of times the answer was attempted in descending order
            completedQuizWordsArray = completedQuizWordsArray.sort(function (a, b) {
              return b.answerAttempted - a.answerAttempted;
            });

            console.dir( completedQuizWordsArray );

            //var completedQuizWordNum = 1;
            //var completedQuizWordTries

            // Display each of the completed words and the number of attempts for each one
            $.each(completedQuizWordsArray, function(index, wordGroup){
              resultsArea.find('table.full-score').find('tbody').append('<tr><td>' + wordGroup.spanish + '</td><td>' + wordGroup.answerAttempted + '</td></tr>');
            });

            resultsArea.fadeIn();
          });
        }
      });

      // TODO: Find a way to fade out both the `.face` divs but only have the above code run once when both are finished.
      quiz.find(".face.back").children(".js-generated-sentence").fadeOut();
    });
  });
}

// Create Object that holds all the words to be asked on a particular quiz
function createQuiz(quizObjects, quizType) {

  console.log('In createQuiz()');

  var quizOutput = {};

  if(quizType === 'retention') {
    // Loop through each of the wordObjects provided (ex: nouns, adjectives, etc.)
    $.each(quizObjects, function (index, wordObject) {
      console.log(wordObject);

      // Loop through each WordGroup
      $.each(wordObject.values, function (wordKey, wordGroup) {
        wordGroup.key = wordKey;
        wordGroup.wordType = wordObject.wordType;
        wordGroup.answerCorrect = false;
        wordGroup.answerAttempted = 0;
        //console.log(wordKey, wordGroup);

        // Add the wordGroup to the quizOutput object
        quizOutput[wordKey] = wordGroup;
      });
    });
  }

  if(quizType === 'conjugation') {
    //console.log(quizObjects);

    quizOutput.wordTypes = [];
    quizOutput.values = {};

    // Loop through each of the wordObjects provided (ex: nouns, adjectives, etc.)
    $.each(quizObjects, function (index, conjugationObject) {
      //console.log('here3',conjugationObject);

      // Loop through each WordType(i.e. 'ar', 'er', or 'ir' words)
      $.each(conjugationObject, function (wordTypeName, wordTypeObject) {
        //console.log('here4 - wordTypeName',wordTypeName);
        //console.log('here4 - wordTypeObject',wordTypeObject);

        $.each(wordTypeObject, function (tenseName, tenseObject) {
          //console.log('here5 - tenseName',tenseName);
          //console.log('here5 - tenseObject',tenseObject);

          $.each(tenseObject.person, function (person, conjugation) {
            //console.log('here6 - person',person);
            //console.log('here6 - conjugation',conjugation);

            var conjugationGroup = {
              answerCorrect: false,
              answerAttempted: 0,
              wordType: wordTypeName,
              tense: tenseName,
              appendTo: tenseObject.appendTo,
              person: person,
              conjugation: conjugation
            };

            console.log("conjugationGroup", conjugationGroup);
            console.log("wordTypeName", wordTypeName);
            console.log(typeof quizOutput.wordTypes);

            // Add the conjugation wordType to the quizOutput object if it is not already in there
            pushWordTypeToArray(quizOutput.wordTypes, wordTypeName);

            // Add the conjugationGroup to the quizOutput object
            quizOutput.values[wordTypeName + '-' + tenseName + '-' + person] = conjugationGroup;
          });
        });
      });
    });
  }

  console.log("final quizOutput", quizOutput);
  return quizOutput;
}

function pushWordTypeToArray(wordTypeArray, newWordTypeValue) {
  wordTypeArray = wordTypeArray || [];

  if(wordTypeArray.length < 3) {
    if ($.inArray(newWordTypeValue, wordTypeArray) == -1) {
      wordTypeArray.push(newWordTypeValue);
      console.log("wordTypeArray", wordTypeArray);

      return wordTypeArray;
    }

    return false;
  }

  return false;
}


$(document).ready(function(){
  // Flip over the card when the user clicks on it to reveal the answer
  $('.flip').on('click', function(e) {
    //console.log('card clicked');
    e.preventDefault();
    animateCardFlip();

    // Enable the result buttons now that the quiz answer has been shown
    disableResultBtns(false);
  });
});
$(document).ready(function(){

  if ( $( ".js-quiz-verb-conjugation" ).length ) {

    hasFirstQuestionRun = false;

    var quizOptions = {
      onlyShowUnansweredQuestions: true,
      quizType: 'conjugation',
      quizConjugations: [spanishTenses],
      functionToGenerateQuizQuestion: generateVerbConjugationQuizQuestion
    };

    //console.log('here2', quizOptions.quizConjugations);

    var quizOutput = createQuiz(quizOptions.quizConjugations, quizOptions.quizType);
    var quizConjugationWordTypes = quizOutput.wordTypes;
    var quizConjugations = quizOutput.values;

    console.log("quizOutput", quizOutput);

    //function getRandomConjugation(quizWords) {
    //  // Get a random verb type(i.e. -ar words), random tense(i.e. future), and a random conjugation(i.e. ellos)
    //
    //  // Values if trying to test each conjugation type
    //    var conjugationGroup = getRandomProperty(quizWords);
    //    var tense = conjugationGroup.tense;
    //    var appendTo = tense.propertyValue.appendTo;
    //    var conjugation = getRandomProperty(tense.propertyValue.person);
    //
    //  //debugger;
    //
    //    var wordGroup = getRandomProperty(quizWords)['propertyValue'];
    //    lastWordGroup = wordGroup;
    //
    //  console.log("wordGroup - ", wordGroup);
    //
    //  // Values if trying to test each verb word
    //    //var wordType = spanishTenses[wordGroup.additional.verbEnding + "Words"];
    //    //var tense = getRandomProperty(wordType);
    //    //var appendTo = tense.propertyValue.appendTo;
    //    //var conjugation = getRandomProperty(tense.propertyValue.person);
    //
    //  console.log("wordType: ", wordType);
    //  console.log("tense: ", tense);
    //  console.log("conjugation: ", conjugation);
    //  //console.log("randomWord: ", randomWord);
    //
    //  //debugger;
    //  //
    //  //// Grab a random property from the tense and if the conjugation that was chosen is actually the "appendTo" property, then run the function as many times as necessary to get an actual conjugation value
    //  //var randomTenseConjugationKey;
    //  //do {
    //  //  randomTenseConjugationKey = getRandomProperty(randomTense.propertyValue);
    //  //  //console.log("randomTenseConjugationKey: ", randomTenseConjugationKey);
    //  //}
    //  //while (randomTenseConjugationKey.propertyName === "appendTo");
    //
    //  //console.log("Random Word Type in Spanish Tenses: ", randomWordType);
    //  //console.log("Random Tense in " + randomWordType.propertyName, randomTense);
    //  //console.log("Random Tense Conjugation Key in " + randomTense.propertyName, randomTenseConjugationKey);
    //
    //  return {
    //    verbType: wordType,
    //    word: wordGroup,
    //    tense: tense,
    //    conjugation: conjugation,
    //    appendTo: appendTo
    //  };
    //}

    function generateVerbConjugationQuizQuestion() {
      console.log('Question Generated');

      var englishType;
      var person;
      var connectorString;
      var possiblePersons;
      var spanishFirstPart;

      // Get a random verb type(i.e. -ar words), random tense(i.e. future), and a random conjugation(i.e. ellos)
        // Example output:
        //"ar-present-yo": {
        //    "answerCorrect":false,
        //    "answerAttempted":0,
        //    "wordType":"arWords",
        //    "tense":"present",
        //    "appendTo":"stem",
        //    "person":"yo",
        //    "conjugation":"o"
        //  }

      var generatedConjugationGroup = getRandomProperty(quizConjugations);
      var conjugationGroupName = generatedConjugationGroup.propertyName;
      var conjugationGroup = generatedConjugationGroup.propertyValue;

      // Before getting a word to conjugate on, check to make sure that at least one word from the current word type (ar, er, ir) is available in the verbs object being passed in
      console.log("verbs.values", verbs.values);
      var verbsWordTypes = [];
      $.each(verbs.values, function (index, word) {
        // Add the verb wordType to the verbsWordTypes array if the wordType is not already in there
        verbsWordTypes = pushWordTypeToArray(verbsWordTypes, word.additional.verbEnding);
      });

      console.log("verbsWordTypes", verbsWordTypes);

      var notSupportedWordTypes = [];
      $.each(quizConjugationWordTypes, function (index, conjugationWordType) {
        // Check to make sure each word type that is being used for the conjugations is also available in the verbs word types
        if ($.inArray(conjugationWordType, verbsWordTypes) == -1) {
          notSupportedWordTypes.push(conjugationWordType);
        }
      });

      if(notSupportedWordTypes.length > 0) {
        alert('The verb set configured for this quiz doesn\'t have all the necessary word types available. Please ensure you have several words from the following word types in your set: ' + notSupportedWordTypes.join(' and '));
      }

      // Get a random verb to test the conjugation with
      var wordGroup = getRandomProperty(verbs.values)['propertyValue'];
      lastWordGroup = wordGroup;

      console.log("conjugationGroup: ", conjugationGroup);
      console.log("verbs: ", verbs);
      console.log("wordGroup: ", wordGroup);

      // Based on the Random Conjugation that was determined (i.e. yo, tu, el, nosotros, or ellos), determine which variation to use if applicable (as in el which can be substituted with ella or ud, or as in ellos which can be substituted with ellas or uds)
      switch(conjugationGroup.person) {
        case "yo":
          person = {
            english: "I",
            spanish: "yo"
          };
          break;
        case "tu":
          person = {
            english: "you (informal)",
            spanish: "tú"
          };
          break;
        case "el":
          possiblePersons = {
            el: {
              english: "he",
              spanish: "el"
            },
            ella: {
              english: "she",
              spanish: "ella"
            },
            ud: {
              english: "you (formal)",
              spanish: "ud"
            },
            Rosa: {
              english: "Rosa",
              spanish: "Rosa"
            },
            Kevin: {
              english: "Kevin",
              spanish: "Kevin"
            }
          };

          // Pick a random person to display for the quiz (el, ella, or ud)
          person = getRandomProperty(possiblePersons).propertyValue;
          break;
        case "nosotros":
          possiblePersons = {
            nosotros: {
              english: "we",
              spanish: "nosotros"
            },
            you_and_i: {
              english: "You and I",
              spanish: "tú y yo"
            }
          };

          // Pick a random person to display for the quiz (nosotros or tú y yo)
          person = getRandomProperty(possiblePersons).propertyValue;
          break;
        case "ellos":
          possiblePersons = {
            ellos: {
              english: "they (male or mixed)",
              spanish: "ellos"
            },
            ellas: {
              english: "they (female)",
              spanish: "ellas"
            },
            uds: {
              english: "you all",
              spanish: "uds"
            },
            fourtyniners: {
              english: "The 49ers",
              spanish: "Los 49ers"
            },
            group_of_children: {
              english: "The children (female)",
              spanish: "Las niñas"
            }
          };

          // Pick a random person to display for the quiz (ellos, ellas, or uds)
          person = getRandomProperty(possiblePersons).propertyValue;
          break;
      }

      // englishType - The conjugation that is to be used that correlates with the spanish conjugation - i.e for the word "to run", the 3 variations are run (present), runs (present3rdPerson), or ran(past)
      if (conjugationGroup.tense === "present" && conjugationGroup.conjugation === "el") {
        englishType = "present3rdPerson";
      } else if (conjugationGroup.tense === "past") {
        englishType = "past";
      } else {
        englishType = "present";
      }

      // connectorString - The connector word to be displayed in the quiz in the english sentence that is supposed to be translated (Only applies to the conditional, future, and imperfect tenses). i.e. for the sentence Jimmy will run (future), Jimmy would run (conditional), or Jimmy used to run (imperfect)
      if (conjugationGroup.tense === "conditional") {
        connectorString = "would";
      } else if (conjugationGroup.tense === "future") {
        connectorString = "will";
      } else if (conjugationGroup.tense === "imperfect") {
        connectorString = "used to";
      } else {
        connectorString = " ";
      }

      if(connectorString !== " ") {
        connectorString = " " + connectorString + " ";
      }

      if(conjugationGroup.appendTo === "stem") {
        spanishFirstPart = getStem(wordGroup.spanish).stem;
      } else if(conjugationGroup.appendTo === "infinitive") {
        spanishFirstPart = wordGroup.spanish;
      }


      //console.log("Person: ", person);
      //console.log("englishType: ", englishType);
      //console.log("connectorString: ", connectorString);
      //console.log("randomWord: ", randomWord);
      //
      //console.log("Sentence to output in English: ", person.english + connectorString + randomWord['english'][englishType]);
      //console.log("Sentence to output in Spanish: ", person.spanish + " " + spanishFirstPart + randomConjugation.conjugation.propertyValue);


      // Returning sentence to be displayed (i.e. She will eat) in both languages

      //return {
      //  english: person.english + connectorString + randomConjugation.word['english'][englishType],
      //  spanish: person.spanish + " " + spanishFirstPart + randomConjugation.conjugation.propertyValue
      //}


      return {
        english: person.english + connectorString + wordGroup.additional.englishVariations[englishType],
        spanish: person.spanish + " " + spanishFirstPart + conjugationGroup.conjugation
      }

    }




    // Create Object to keep track of questions that were already asked and if the user already got them right so they don't ask them again
    //var quizScore = {};
    //var quizQuestion;
    //
    //$.each(spanishTenses, function (verbType, tenses) {
    //  $.each(tenses, function (tense, tenseConjugations) {
    //    $.each(tenseConjugations, function (tenseConjugationKey, tenseConjugationValue) {
    //      if (tenseConjugationKey === "appendTo") { return true; }
    //      createNestedObject( quizScore, [verbType, tense, tenseConjugationKey], false );
    //      // Example output: quizScore.arWords.present.ellos: false
    //    });
    //  });
    //});

    //console.log("quizScore:", quizScore);



    // Activate the quiz with the chosen options
    activateQuiz(quizOptions, quizConjugations);
  }









});




$(document).ready(function(){



  if ( $( ".js-quiz-word-retention" ).length ) {
    hasFirstQuestionRun = false;

    var quizOptions = {
      onlyShowUnansweredQuestions: true,
      quizType: 'retention',
      //quizWords: [memorizeSet1, memorizeSet2],
      quizWords: [timeWords],
      functionToGenerateQuizQuestion: generateWordRetentionQuizQuestion
    };

    var quizWords = createQuiz(quizOptions.quizWords, quizOptions.quizType);

    console.log("quizWords", quizWords);

    function generateWordRetentionQuizQuestion() {
      //console.log('Question Generated');

      var randomWordGroup = getRandomProperty(quizWords)['propertyValue'];
      console.log('randomWordGroup', randomWordGroup);

      lastWordGroup = randomWordGroup;
      console.log("New lastWordGroup: ", lastWordGroup);
      //Example Output:
      //{
      //  english: {
      //    plural: "fathers",
      //      singular: "father"
      //  },
      //  spanish: {
      //    plural: "padres",
      //      singular: "padre"
      //  },
      //  gender: "male"
      //}

      if(randomWordGroup.wordType !== "noun") {
        var englishOutput = randomWordGroup.english;
        var spanishOutput = randomWordGroup.spanish;
      }

      if(randomWordGroup.wordType === "noun") {
        var quantityType;
        var wordTheEnglish;
        var wordAEnglish;
        var wordTheSpanish;
        var wordASpanish;
        var leadWordEnglish;
        var leadWordSpanish;

        var randomWordGender = randomWordGroup['gender'];

        // If the plural property is missing, it is assumed that the plural form of the noun is simply the singular version with an "s" at the end. Ex: "niño" and "niños" & "boy" and "boys"
        if(!randomWordGroup.english.hasOwnProperty("plural")) {
          randomWordGroup.english.plural = randomWordGroup.english.singular + "s";
        }

        // If the plural property is missing, it is assumed that the plural form of the noun is simply the singular version with an "s" at the end. Ex: "niño" and "niños" & "boy" and "boys"
        if(!randomWordGroup.spanish.hasOwnProperty("plural")) {
          randomWordGroup.spanish.plural = randomWordGroup.spanish.singular + "s";
        }

        if (getRandomInt(0, 1) === 1) {
          quantityType = "singular";

          if (randomWordGender === "male") {
            wordTheSpanish = "el";
            wordASpanish = "un";
          } else if (randomWordGender === "female") {
            wordTheSpanish = "la";
            wordASpanish = "una";
          }

          wordTheEnglish = "the";
          wordAEnglish = "a";
        } else {
          quantityType = "plural";

          if (randomWordGender === "male") {
            wordTheSpanish = "los";
            wordASpanish = "unos";
          } else if (randomWordGender === "female") {
            wordTheSpanish = "las";
            wordASpanish = "unas";
          }

          wordTheEnglish = "the";
          wordAEnglish = "some";
        }

        var randomWordEnglish = randomWordGroup['english'][quantityType];
        var randomWordSpanish = randomWordGroup['spanish'][quantityType];

        // Randomly show either the "the" or "a" lead word
        if (getRandomInt(0, 1) === 1) {
          leadWordEnglish = wordTheEnglish;
          leadWordSpanish = wordTheSpanish;
        } else {
          leadWordEnglish = wordAEnglish;
          leadWordSpanish = wordASpanish;
        }

        var englishOutput = leadWordEnglish + " " + randomWordEnglish;
        var spanishOutput = leadWordSpanish + " " + randomWordSpanish;
      }

      return {
        english: englishOutput,
        spanish: spanishOutput
      }

    }


    // Activate the quiz with the chosen options
    activateQuiz(quizOptions, quizWords);
  }

});


$(document).ready(function(){
  if ( $( ".js-words" ).length ) {

    function generateConjugationTable(word, tense) {
      var last2 = getStem(word).last2;
      var stem = getStem(word).stem;

      var currentTense = spanishTenses[last2 + "Words"][tense];
      var appendTo = currentTense.appendTo;

      function conjugateWord(conjugationPerson) {
        if (appendTo === "stem") {
          return "<span class='append-to'>" + stem + "</span>" + currentTense[conjugationPerson];
        } else {
          return "<span class='append-to'>" + word + "</span>" + currentTense[conjugationPerson];
        }
      }

      var yo = conjugateWord("yo");
      var tu = conjugateWord("tu");
      var el = conjugateWord("el");
      var nosotros = conjugateWord("nosotros");
      var ellos = conjugateWord("ellos");

      //console.log("word: ", word);
      //console.log("last2: ", last2);
      //console.log("stem: ", stem);
      //console.log("appendTo: ", appendTo);
      //console.log("yo: ", yo);
      //console.log("tu: ", tu);
      //console.log("el: ", el);
      //console.log("nosotros: ", nosotros);
      //console.log("ellos: ", ellos);

      var generatedTable = "<h3>" + tense + " Tense</h3>";
      generatedTable += "<table>" +
        "<tr><td class='conjugation-person'>yo</td><td class='conjugation-term'>" + yo + "</td><td class='conjugation-person'>nosotros</td><td class='conjugation-term'>" + nosotros + "</td></tr>" +
        "<tr><td class='conjugation-person'>tú</td><td class='conjugation-term'>" + tu + "</td><td class='disabled'></td><td class='disabled'></td></tr>" +
        "<tr><td class='conjugation-person'>el/ella/Ud.</td><td class='conjugation-term'>" + el + "</td><td class='conjugation-person'>ellos/ellas/Uds.</td><td class='conjugation-term'>" + ellos + "</td></tr>" +
        "</table>";

      return generatedTable;
    }

    //generateConjugationTable("aprender", "past");



    // Empty the container for the conjugation words table
    $(".js-conjugation-words-chart").html("");

    // Create a table of words
    // Loop through the verbs object
    $.each(verbs, function (verbType, words) {
      var wordsTable = "<table class='words'>";

      //console.log(verbType + ": " + words);
      // For each table column, use the verbType (i.e. arWords, erWords, or irWords) as the header
      wordsTable += "<tr><th>" + verbType + "</th>";

      // Loop through each word for the current verbType
      $.each(words, function (index, word) {
        //console.log(index + ": " + word);
        //console.log("Spanish Word: ", word.spanish.word);

        // Create a new row that contains the word in spanish with a link to open a modal window that displays all the different conjugation tables for that specific word
        wordsTable += "<tr><td><a class='fancybox' href='#word-details'>" + word.spanish.word + "</a></td>";
      });

      wordsTable += "</table>";

      // Add the newly created table to the conjugation words table container
      $(".js-conjugation-words-chart").append(wordsTable);

    });

    //$('.fancybox').fancybox();


    // Load the word details div with the correct content when a word is clicked
    // Currently this is looping through all the words available in order to find a match to the word that was clicked and will then load up the correct info into the modal window and opens it
    // TODO: Use a deep get functionality to find the object for the word instead of looping through everything
    $('a[href="#word-details"]').click(function (e) {
      e.preventDefault();

      var spanishWordClicked = $(this).text();

      $.each(verbs, function (verbType, words) {
        $.each(words, function (index, word) {
          if (word.spanish.word === spanishWordClicked) {
            //console.log(spanishWordClicked + ' was found');
            $("#word-details").children("h2").html(word.spanish.word + " - <span class='english-definition'>" + word.english.definition + "</span>");

            // Loop through the spanishTenses object to get each conjugation tense supported for the current verb type (i.e. -ar words) and then create conjugation tables for the current word and the supported tenses
            var tenseTables = "";
            $.each(spanishTenses[verbType], function (tense, propertiesObject) {
              tenseTables += generateConjugationTable(word.spanish.word, tense);
            });

            $(".js-conjugation-tables").html(tenseTables);

            // Break out of $.each loop (http://stackoverflow.com/questions/1784780/how-to-break-out-of-jquery-each-loop)
            return false;
          }
        });
      });

    }).fancybox();
  }

});
// From: http://codepen.io/zeckdude/pen/EKBJyR

// on page load...
$(document).ready(function() {
  moveProgressBar();
});

// on browser resize...
$(window).resize(function() {
  moveProgressBar();
});

$(document).on('progress-changed', function(event, numWordsAnsweredCorrect, correctPercentage) {
  //console.log('numWordsAnsweredCorrect: ', numWordsAnsweredCorrect);
  //console.log('correctPercentage: ', correctPercentage);

  // Update the progress percentage on the element
  $('.progress-wrap').data('progress-percent', correctPercentage);
  moveProgressBar();

  // Update the score in the progress bar
  $('.progress').find('.num-answered-correct').text(numWordsAnsweredCorrect);
});

// SIGNATURE PROGRESS
function moveProgressBar() {
  //console.log("moveProgressBar");
  var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
  var getProgressWrapWidth = $('.progress-wrap').width();
  var progressTotal = getPercent * getProgressWrapWidth;
  var animationLength = 2500;

  //console.log("getPercent: ", getPercent);

  // on page load, animate percentage bar to data percentage length
  // .stop() used to prevent animation queueing
  $('.progress-bar').stop().animate({
    left: progressTotal
  }, animationLength);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcmlhYmxlcy5qcyIsImZ1bmN0aW9ucy5qcyIsInF1aXotdmVyYi1jb25qdWdhdGlvbi5qcyIsInF1aXotd29yZC1yZXRlbnRpb24uanMiLCJ3b3Jkcy5qcyIsInByb2dyZXNzLWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDLzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHdvcmRzID0ge1xuICB3b3JkVHlwZTogXCJ3b3JkXCIsXG4gIHZhbHVlczoge1xuICAgIGN1YW5kbzoge1xuICAgICAgc3BhbmlzaDogXCJjdWFuZG9cIixcbiAgICAgIGVuZ2xpc2g6IFwid2hlblwiXG4gICAgfSxcbiAgICBob2xhOiB7XG4gICAgICBzcGFuaXNoOiBcImhvbGFcIixcbiAgICAgIGVuZ2xpc2g6IFwiaGVsbG9cIlxuICAgIH0sXG4gICAgdGFtcG9jbzoge1xuICAgICAgc3BhbmlzaDogXCJ0YW1wb2NvXCIsXG4gICAgICBlbmdsaXNoOiBcIm5laXRoZXIvbm9yXCJcbiAgICB9LFxuICAgIHRhbWJpZW46IHtcbiAgICAgIHNwYW5pc2g6IFwidGFtYmllblwiLFxuICAgICAgZW5nbGlzaDogXCJhbHNvL3Rvby9hcyB3ZWxsXCJcbiAgICB9LFxuXG4gIH1cbn07XG5cbnZhciB0aW1lV29yZHMgPSB7XG4gIHdvcmRUeXBlOiBcIndvcmRcIixcbiAgdmFsdWVzOiB7XG4gICAgdG9kb0VsRGlhOiB7XG4gICAgICBzcGFuaXNoOiBcInRvZG8gZWwgZMOtYVwiLFxuICAgICAgZW5nbGlzaDogXCJhbGwgZGF5IGxvbmdcIlxuICAgIH0sXG4gICAgdG9kYUxhVmlkYToge1xuICAgICAgc3BhbmlzaDogXCJ0b2RhIGxhIHZpZGFcIixcbiAgICAgIGVuZ2xpc2g6IFwiYWxsIG9uZSdzIGxpZmVcIlxuICAgIH0sXG4gICAgdG9kb0VsVGllbXA6IHtcbiAgICAgIHNwYW5pc2g6IFwidG9kbyBlbCB0aWVtcG9cIixcbiAgICAgIGVuZ2xpc2g6IFwiYWxsIHRoZSB0aW1lXCJcbiAgICB9LFxuICAgIHNpZW1wcmU6IHtcbiAgICAgIHNwYW5pc2g6IFwic2llbXByZVwiLFxuICAgICAgZW5nbGlzaDogXCJhbHdheXMgLyBmb3JldmVyXCJcbiAgICB9LFxuICAgIGFWZWNlczoge1xuICAgICAgc3BhbmlzaDogXCJhIHZlY2VzXCIsXG4gICAgICBlbmdsaXNoOiBcIkF0IHRpbWVzIC8gU29tZXRpbWVzXCJcbiAgICB9LFxuICAgIGNhZGFEaWE6IHtcbiAgICAgIHNwYW5pc2g6IFwiY2FkYSBkw61hXCIsXG4gICAgICBlbmdsaXNoOiBcImV2ZXJ5IGRheVwiXG4gICAgfSxcbiAgICBjYWRhQW5vOiB7XG4gICAgICBzcGFuaXNoOiBcImNhZGEgYcOxb1wiLFxuICAgICAgZW5nbGlzaDogXCJldmVyeSB5ZWFyXCJcbiAgICB9LFxuICAgIHBvclVuUmF0bzoge1xuICAgICAgc3BhbmlzaDogXCJwb3IgdW4gcmF0b1wiLFxuICAgICAgZW5nbGlzaDogXCJmb3IgYSB3aGlsZVwiXG4gICAgfSxcbiAgICBmcmVjdWVudGVtZW50ZToge1xuICAgICAgc3BhbmlzaDogXCJmcmVjdWVudGVtZW50ZSAvIGNvbiBmcmVjdWVuY2lhXCIsXG4gICAgICBlbmdsaXNoOiBcImZyZXF1ZW50bHkgLyBvZnRlblwiXG4gICAgfSxcbiAgICBkZVZlekVuQ3VhbmRvOiB7XG4gICAgICBzcGFuaXNoOiBcImRlIHZleiBlbiBjdWFuZG9cIixcbiAgICAgIGVuZ2xpc2g6IFwiZnJvbSB0aW1lIHRvIHRpbWVcIlxuICAgIH0sXG4gICAgbXVjaGFzVmVjZXM6IHtcbiAgICAgIHNwYW5pc2g6IFwibXVjaGFzIHZlY2VzXCIsXG4gICAgICBlbmdsaXNoOiBcIm1hbnkgdGltZXNcIlxuICAgIH0sXG4gICAgbnVuY2E6IHtcbiAgICAgIHNwYW5pc2g6IFwibnVuY2FcIixcbiAgICAgIGVuZ2xpc2g6IFwibmV2ZXJcIlxuICAgIH0sXG4gICAgdGFudGFzVmVjZXM6IHtcbiAgICAgIHNwYW5pc2g6IFwidGFudGFzIHZlY2VzXCIsXG4gICAgICBlbmdsaXNoOiBcInNvIG1hbnkgdGltZXNcIlxuICAgIH0sXG4gICAgdmFyaWFzVmVjZXM6IHtcbiAgICAgIHNwYW5pc2g6IFwidmFyaWFzIHZlY2VzXCIsXG4gICAgICBlbmdsaXNoOiBcIih2YXJpb3VzIC8gc2V2ZXJhbCkgdGltZXNcIlxuICAgIH0sXG4gICAgY3VhbmRvOiB7XG4gICAgICBzcGFuaXNoOiBcImN1YW5kb1wiLFxuICAgICAgZW5nbGlzaDogXCJ3aGVuIC8gd2hlbmV2ZXJcIlxuICAgIH1cbiAgfVxufTtcblxuXG4vL3ZhciB2ZXJicyA9IHtcbi8vICB3b3JkVHlwZTogXCJ2ZXJiXCIsXG4vLyAgdmFsdWVzOiB7XG4vLyAgICBoYWJsYXI6IHtcbi8vICAgICAgc3BhbmlzaDogXCJoYWJsYXJcIixcbi8vICAgICAgZW5nbGlzaDogXCJ0byBzcGVhayAodGFsaylcIixcbi8vICAgICAgYWRkaXRpb25hbDoge1xuLy8gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIixcbi8vICAgICAgICBlbmdsaXNoVmFyaWF0aW9uczoge1xuLy8gICAgICAgICAgcHJlc2VudDogXCJzcGVha1wiLFxuLy8gICAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJzcGVha3NcIixcbi8vICAgICAgICAgIHBhc3Q6IFwic3Bva2VcIlxuLy8gICAgICAgIH1cbi8vICAgICAgfVxuLy8gICAgfSxcbi8vICAgIGFwcmVuZGVyOiB7XG4vLyAgICAgIHNwYW5pc2g6IFwiYXByZW5kZXJcIixcbi8vICAgICAgZW5nbGlzaDogXCJ0byBsZWFyblwiLFxuLy8gICAgICBhZGRpdGlvbmFsOiB7XG4vLyAgICAgICAgdmVyYkVuZGluZzogXCJlclwiLFxuLy8gICAgICAgIGVuZ2xpc2hWYXJpYXRpb25zOiB7XG4vLyAgICAgICAgICBwcmVzZW50OiBcImxlYXJuXCIsXG4vLyAgICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcImxlYXJuc1wiLFxuLy8gICAgICAgICAgcGFzdDogXCJsZWFybmVkXCJcbi8vICAgICAgICB9XG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICB2aXZpcjoge1xuLy8gICAgICBzcGFuaXNoOiBcInZpdmlyXCIsXG4vLyAgICAgIGVuZ2xpc2g6IFwidG8gbGl2ZVwiLFxuLy8gICAgICBhZGRpdGlvbmFsOiB7XG4vLyAgICAgICAgdmVyYkVuZGluZzogXCJpclwiLFxuLy8gICAgICAgIGVuZ2xpc2hWYXJpYXRpb25zOiB7XG4vLyAgICAgICAgICBwcmVzZW50OiBcImxpdmVcIixcbi8vICAgICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwibGl2ZXNcIixcbi8vICAgICAgICAgIHBhc3Q6IFwibGl2ZWRcIlxuLy8gICAgICAgIH1cbi8vICAgICAgfVxuLy8gICAgfVxuLy8gIH1cbi8vfTtcblxudmFyIHZlcmJzID0ge1xuICB3b3JkVHlwZTogXCJ2ZXJiXCIsXG4gIHZhbHVlczoge1xuICAgIGhhYmxhcjoge1xuICAgICAgc3BhbmlzaDogXCJoYWJsYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc3BlYWsgKHRhbGspXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIixcbiAgICAgICAgZW5nbGlzaFZhcmlhdGlvbnM6IHtcbiAgICAgICAgICBwcmVzZW50OiBcInNwZWFrXCIsXG4gICAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJzcGVha3NcIixcbiAgICAgICAgICBwYXN0OiBcInNwb2tlXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGFkamVjdGl2ZXMgPSB7XG4gIHdvcmRUeXBlOiBcImFkamVjdGl2ZVwiLFxuICB2YWx1ZXM6IHtcbiAgICBuYWNvOiB7XG4gICAgICBzcGFuaXNoOiBcIm5hY29cIixcbiAgICAgIGVuZ2xpc2g6IFwidGFja3lcIlxuICAgIH0sXG4gICAgcG9jbzoge1xuICAgICAgc3BhbmlzaDogXCJwb2NvXCIsXG4gICAgICBlbmdsaXNoOiBcImxpdHRsZSAocXVhbnRpdHkpXCJcbiAgICB9LFxuICAgIG11Y2hvOiB7XG4gICAgICBzcGFuaXNoOiBcIm11Y2hvXCIsXG4gICAgICBlbmdsaXNoOiBcIm11Y2hcIlxuICAgIH0sXG4gICAgY2hpY286IHtcbiAgICAgIHNwYW5pc2g6IFwiY2hpY29cIixcbiAgICAgIGVuZ2xpc2g6IFwic21hbGxcIlxuICAgIH0sXG4gICAgbWVkaWFubzoge1xuICAgICAgc3BhbmlzaDogXCJtZWRpYW5vXCIsXG4gICAgICBlbmdsaXNoOiBcIm5vcm1hbC9zdGFuZGFyZC9tZWRpdW1cIlxuICAgIH0sXG4gICAgZ3JhbmRlOiB7XG4gICAgICBzcGFuaXNoOiBcImdyYW5kZVwiLFxuICAgICAgZW5nbGlzaDogXCJsYXJnZVwiXG4gICAgfSxcbiAgICBhbHRvOiB7XG4gICAgICBzcGFuaXNoOiBcImFsdG9cIixcbiAgICAgIGVuZ2xpc2g6IFwidGFsbFwiXG4gICAgfVxuICB9XG59O1xuXG52YXIgbm91bnMgPSB7XG4gIHdvcmRUeXBlOiBcIm5vdW5cIixcbiAgdmFsdWVzOiB7XG4gICAgbXVqZXI6IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwibXVqZXJcIixcbiAgICAgICAgcGx1cmFsOiBcIm11amVyZXNcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwid29tYW5cIixcbiAgICAgICAgcGx1cmFsOiBcIndvbWVuXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwiZmVtYWxlXCJcbiAgICB9LFxuICAgIGhvbWJyZToge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJob21icmVcIixcbiAgICAgICAgcGx1cmFsOiBcImhvbWJyZXNcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwibWFuXCIsXG4gICAgICAgIHBsdXJhbDogXCJtZW5cIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJtYWxlXCJcbiAgICB9LFxuICAgIG5pw7FvOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm5pw7FvXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcImJveVwiXG4gICAgICB9LFxuICAgICAgZ2VuZGVyOiBcIm1hbGVcIlxuICAgIH0sXG4gICAgbmnDsWE6IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwibmnDsWFcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwiZ2lybFwiXG4gICAgICB9LFxuICAgICAgZ2VuZGVyOiBcImZlbWFsZVwiXG4gICAgfSxcbiAgICBwYWRyZToge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJwYWRyZVwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJmYXRoZXJcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJtYWxlXCJcbiAgICB9LFxuICAgIG1hZHJlOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm1hZHJlXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm1vdGhlclwiXG4gICAgICB9LFxuICAgICAgZ2VuZGVyOiBcImZlbWFsZVwiXG4gICAgfSxcbiAgICBjdWFydG86IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwiY3VhcnRvXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcImJlZHJvb21cIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJtYWxlXCJcbiAgICB9LFxuICAgIHNhbGE6IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwic2FsYVwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJsaXZpbmcgcm9vbVwiXG4gICAgICB9LFxuICAgICAgZ2VuZGVyOiBcImZlbWFsZVwiXG4gICAgfSxcbiAgfVxufTtcblxuXG4vL3ZhciBub3VucyA9IHtcbi8vICB3b3JkVHlwZTogXCJub3VuXCIsXG4vLyAgdmFsdWVzOiB7XG4vLyAgICBuacOxbzoge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwibmnDsW9cIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwiYm95XCJcbi8vICAgICAgfSxcbi8vICAgICAgZ2VuZGVyOiBcIm1hbGVcIlxuLy8gICAgfSxcbi8vICAgIG5pw7FhOiB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICBzaW5ndWxhcjogXCJuacOxYVwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBzaW5ndWxhcjogXCJnaXJsXCJcbi8vICAgICAgfSxcbi8vICAgICAgZ2VuZGVyOiBcImZlbWFsZVwiXG4vLyAgICB9LFxuLy8gICAgcGFkcmU6IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcInBhZHJlXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcImZhdGhlclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJtYWxlXCJcbi8vICAgIH0sXG4vLyAgICBtYWRyZToge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwibWFkcmVcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwibW90aGVyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZ2VuZGVyOiBcImZlbWFsZVwiXG4vLyAgICB9LFxuLy8gIH1cbi8vfTtcblxuXG4vL3ZhciB2ZXJicyA9IHtcbi8vICB3b3JkVHlwZTogXCJ2ZXJiXCIsXG4vLyAgYXJXb3JkczogW1xuLy8gICAgaGFibGFyID0ge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgd29yZDogXCJoYWJsYXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBzcGVhayAodGFsaylcIixcbi8vICAgICAgICBwcmVzZW50OiBcInNwZWFrXCIsXG4vLyAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJzcGVha3NcIixcbi8vICAgICAgICBwYXN0OiBcInNwb2tlXCJcbi8vICAgICAgfVxuLy8gICAgfSxcbi8vICAgIHByZWd1bnRhciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwicHJlZ3VudGFyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIGRlZmluaXRpb246IFwidG8gYXNrXCIsXG4vLyAgICAgICAgcHJlc2VudDogXCJhc2tcIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcImFza3NcIixcbi8vICAgICAgICBwYXN0OiBcImFza2VkXCJcbi8vICAgICAgfVxuLy8gICAgfSxcbi8vICAgIGVzdHVkaWFyID0ge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgd29yZDogXCJlc3R1ZGlhclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBkZWZpbml0aW9uOiBcInRvIHN0dWR5XCIsXG4vLyAgICAgICAgcHJlc2VudDogXCJzdHVkeVwiLFxuLy8gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwic3R1ZGllc1wiLFxuLy8gICAgICAgIHBhc3Q6IFwic3R1ZGllZFwiXG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICBdLFxuLy8gIGVyV29yZHM6IFtcbi8vICAgIGFwcmVuZGVyID0ge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgd29yZDogXCJhcHJlbmRlclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBkZWZpbml0aW9uOiBcInRvIGxlYXJuXCIsXG4vLyAgICAgICAgcHJlc2VudDogXCJsZWFyblwiLFxuLy8gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwibGVhcm5zXCIsXG4vLyAgICAgICAgcGFzdDogXCJsZWFybmVkXCJcbi8vICAgICAgfVxuLy8gICAgfSxcbi8vICAgIHZlbmRlciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwidmVuZGVyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIGRlZmluaXRpb246IFwidG8gc2VsbFwiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwic2VsbFwiLFxuLy8gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwic2VsbHNcIixcbi8vICAgICAgICBwYXN0OiBcInNvbGRcIlxuLy8gICAgICB9XG4vLyAgICB9LFxuLy8gICAgcm9tcGVyID0ge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgd29yZDogXCJyb21wZXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBicmVha1wiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwiYnJlYWtcIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcImJyZWFrc1wiLFxuLy8gICAgICAgIHBhc3Q6IFwiYnJva2VcIlxuLy8gICAgICB9XG4vLyAgICB9XG4vLyAgXSxcbi8vICBpcldvcmRzOiBbXG4vLyAgICBhYnJpciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwiYWJyaXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBvcGVuXCIsXG4vLyAgICAgICAgcHJlc2VudDogXCJvcGVuXCIsXG4vLyAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJvcGVuc1wiLFxuLy8gICAgICAgIHBhc3Q6IFwib3BlbmVkXCJcbi8vICAgICAgfVxuLy8gICAgfSxcbi8vICAgIHZpdmlyID0ge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgd29yZDogXCJ2aXZpclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBkZWZpbml0aW9uOiBcInRvIGxpdmVcIixcbi8vICAgICAgICBwcmVzZW50OiBcImxpdmVcIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcImxpdmVzXCIsXG4vLyAgICAgICAgcGFzdDogXCJsaXZlZFwiXG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICByZWNpYmlyID0ge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgd29yZDogXCJyZWNpYmlyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIGRlZmluaXRpb246IFwidG8gcmVjZWl2ZVwiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwicmVjZWl2ZVwiLFxuLy8gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwicmVjZWl2ZXNcIixcbi8vICAgICAgICBwYXN0OiBcInJlY2VpdmVkXCJcbi8vICAgICAgfVxuLy8gICAgfVxuLy8gIF1cbi8vfTtcblxudmFyIHNwYW5pc2hUZW5zZXMgPSB7XG4gIGFyOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIm9cIixcbiAgICAgICAgdHU6IFwiYXNcIixcbiAgICAgICAgZWw6IFwiYVwiLFxuICAgICAgICBub3NvdHJvczogXCJhbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcImFuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCJlXCIsXG4gICAgICAgIHR1OiBcImFzdGVcIixcbiAgICAgICAgZWw6IFwiw7NcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiYW1vc1wiLFxuICAgICAgICBlbGxvczogXCJhcm9uXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGltcGVyZmVjdDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcImFiYVwiLFxuICAgICAgICB0dTogXCJhYmFzXCIsXG4gICAgICAgIGVsOiBcImFiYVwiLFxuICAgICAgICBub3NvdHJvczogXCLDoWJhbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcImFiYW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBhcHBlbmRUbzogXCJpbmZpbml0aXZlXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiw6lcIixcbiAgICAgICAgdHU6IFwiw6FzXCIsXG4gICAgICAgIGVsOiBcIsOhXCIsXG4gICAgICAgIG5vc290cm9zOiBcImVtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiw6FuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbmRpdGlvbmFsOiB7XG4gICAgICBhcHBlbmRUbzogXCJpbmZpbml0aXZlXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiw61hXCIsXG4gICAgICAgIHR1OiBcIsOtYXNcIixcbiAgICAgICAgZWw6IFwiw61hXCIsXG4gICAgICAgIG5vc290cm9zOiBcIsOtYW1vc1wiLFxuICAgICAgICBlbGxvczogXCLDrWFuXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVyOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIm9cIixcbiAgICAgICAgdHU6IFwiZXNcIixcbiAgICAgICAgZWw6IFwiZVwiLFxuICAgICAgICBub3NvdHJvczogXCJlbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcImVuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDrVwiLFxuICAgICAgICB0dTogXCJpc3RlXCIsXG4gICAgICAgIGVsOiBcImnDs1wiLFxuICAgICAgICBub3NvdHJvczogXCJpbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcImllcm9uXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGltcGVyZmVjdDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOtYVwiLFxuICAgICAgICB0dTogXCLDrWFzXCIsXG4gICAgICAgIGVsOiBcIsOtYVwiLFxuICAgICAgICBub3NvdHJvczogXCLDrWFtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiw61hblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIGFwcGVuZFRvOiBcImluZmluaXRpdmVcIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDqVwiLFxuICAgICAgICB0dTogXCLDoXNcIixcbiAgICAgICAgZWw6IFwiw6FcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiZW1vc1wiLFxuICAgICAgICBlbGxvczogXCLDoW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uYWw6IHtcbiAgICAgIGFwcGVuZFRvOiBcImluZmluaXRpdmVcIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDrWFcIixcbiAgICAgICAgdHU6IFwiw61hc1wiLFxuICAgICAgICBlbDogXCLDrWFcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiw61hbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcIsOtYW5cIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaXI6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBhcHBlbmRUbzogXCJzdGVtXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwib1wiLFxuICAgICAgICB0dTogXCJlc1wiLFxuICAgICAgICBlbDogXCJlXCIsXG4gICAgICAgIG5vc290cm9zOiBcImltb3NcIixcbiAgICAgICAgZWxsb3M6IFwiZW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOtXCIsXG4gICAgICAgIHR1OiBcImlzdGVcIixcbiAgICAgICAgZWw6IFwiacOzXCIsXG4gICAgICAgIG5vc290cm9zOiBcImltb3NcIixcbiAgICAgICAgZWxsb3M6IFwiaWVyb25cIlxuICAgICAgfVxuICAgIH0sXG4gICAgaW1wZXJmZWN0OiB7XG4gICAgICBhcHBlbmRUbzogXCJzdGVtXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiw61hXCIsXG4gICAgICAgIHR1OiBcIsOtYXNcIixcbiAgICAgICAgZWw6IFwiw61hXCIsXG4gICAgICAgIG5vc290cm9zOiBcIsOtYW1vc1wiLFxuICAgICAgICBlbGxvczogXCLDrWFuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgYXBwZW5kVG86IFwiaW5maW5pdGl2ZVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOpXCIsXG4gICAgICAgIHR1OiBcIsOhc1wiLFxuICAgICAgICBlbDogXCLDoVwiLFxuICAgICAgICBub3NvdHJvczogXCJlbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcIsOhblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25kaXRpb25hbDoge1xuICAgICAgYXBwZW5kVG86IFwiaW5maW5pdGl2ZVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOtYVwiLFxuICAgICAgICB0dTogXCLDrWFzXCIsXG4gICAgICAgIGVsOiBcIsOtYVwiLFxuICAgICAgICBub3NvdHJvczogXCLDrWFtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiw61hblwiXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbnZhciByZWZsZXhpdmVWZXJic1NldDEgPSB7XG4gIHdvcmRUeXBlOiBcInZlcmJcIixcbiAgdmFsdWVzOiB7XG4gICAgYWNvc3RhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImFjb3N0YXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBnbyB0byBiZWRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBhZmVpdGFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwiYWZlaXRhcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNoYXZlIG9uZXNlbGZcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBiYcOxYXJzZToge1xuICAgICAgc3BhbmlzaDogXCJiYcOxYXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBiYXRoZSBvbmVzZWxmXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY2FzYXJzZToge1xuICAgICAgc3BhbmlzaDogXCJjYXNhcnNlIChjb24gYWxndWllbilcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gbWFycnkgKHNvbWVvbmUpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY2VwaWxsYXJzZToge1xuICAgICAgc3BhbmlzaDogXCJjZXBpbGxhcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJydXNoIG9uZXNlbGYgKGhhaXIsIHRlZXRoLCBldGMpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29tZXJzZToge1xuICAgICAgc3BhbmlzaDogXCJjb21lcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGVhdCBoYXN0aWx5XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZGVzcGVydGFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwiZGVzcGVydGFyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gd2FrZSB1cFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Zlc3RpcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImRlc3Zlc3RpcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHVuZHJlc3Mgb25lc2VsZlwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRvcm1pcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImRvcm1pcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGZhbGwgYXNsZWVwXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZHVjaGFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwiZHVjaGFyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdGFrZSBhIHNob3dlclwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuZmVybWFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwiZW5mZXJtYXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBnZXQgc2lja1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGVub2phcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImVub2phcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGdldCBhbmdyeVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGlyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwiaXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBnbyBhd2F5XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbGF2YXJzZToge1xuICAgICAgc3BhbmlzaDogXCJsYXZhcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHdhc2ggb25lc2VsZlwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGxldmFudGFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwibGV2YW50YXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzdGFuZCB1cFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGxsYW1hcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImxsYW1hcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNhbGwgb25lc2VsZlwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIG1pcmFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwibWlyYXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBsb29rIGF0IG9uZXNlbGZcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3JpcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcIm1vcmlyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcGFzcyBhd2F5XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGVpbmFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwicGVpbmFyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29tYiBvbmUncyBoYWlyXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcG9uZXJzZToge1xuICAgICAgc3BhbmlzaDogXCJwb25lcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJlY29tZSwgZ2V0XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcHJlb2N1cGFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwicHJlb2N1cGFyc2UgKGNvbilcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gd29ycnkgKGFib3V0KVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb2JhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcInByb2JhcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHRyeSBvbiAoY2xvdGhpbmcpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcXVpdGFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwicXVpdGFyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdGFrZSBvZmYgKGNsb3RoaW5nKVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlY2Fyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwic2VjYXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkcnkgb25lc2VsZlwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlbnRhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcInNlbnRhcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNlYXQgb25lc2VsZlwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlbnRpcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcInNlbnRpcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGZlZWwgKGVtb3Rpb25hbGx5LCBwaHlzaWNhbGx5KVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZlcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcInZlcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNlZSBvbmVzZWxmXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgdmVzdGlyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwidmVzdGlyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZ2V0IGRyZXNzZWRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgbWVtb3JpemVTZXQxID0ge1xuICB3b3JkVHlwZTogXCJ2ZXJiXCIsXG4gIHZhbHVlczoge1xuICAgIGhhYmxhcjoge1xuICAgICAgc3BhbmlzaDogXCJoYWJsYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc3BlYWsgKHRhbGspXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYWNlcnRhcjoge1xuICAgICAgc3BhbmlzaDogXCJhY2VydGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGdldCByaWdodFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc2Vhcjoge1xuICAgICAgc3BhbmlzaDogXCJkZXNlYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gd2lzaC9kZXNpcmVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBuZWdhcjoge1xuICAgICAgc3BhbmlzaDogXCJuZWdhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkZW55XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbWVudGlyOiB7XG4gICAgICBzcGFuaXNoOiBcIm1lbnRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBsaWVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZWZlbmRlcjoge1xuICAgICAgc3BhbmlzaDogXCJkZWZlbmRlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkZWZlbmRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwZWRpcjoge1xuICAgICAgc3BhbmlzaDogXCJwZWRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBhc2sgZm9yXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYXByb2Jhcjoge1xuICAgICAgc3BhbmlzaDogXCJhcHJvYmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGFwcHJvdmVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbnZvbHZlcjoge1xuICAgICAgc3BhbmlzaDogXCJlbnZvbHZlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB3cmFwICh1cClcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNlbmRlcjoge1xuICAgICAgc3BhbmlzaDogXCJlbmNlbmRlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBsaWdodC9raW5kbGVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICByb2dhcjoge1xuICAgICAgc3BhbmlzaDogXCJyb2dhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBiZWcvcHJheVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyb3BlemFyOiB7XG4gICAgICBzcGFuaXNoOiBcInRyb3BlemFyIChjb24pXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJ1bXAgaW50b1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbGFyOiB7XG4gICAgICBzcGFuaXNoOiBcInZvbGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGZseVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvc3Rhcjoge1xuICAgICAgc3BhbmlzaDogXCJ0b3N0YXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdG9hc3RcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICB0ZW1ibGFyOiB7XG4gICAgICBzcGFuaXNoOiBcInRlbWJsYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdHJlbWJsZS9zaGFrZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBpbnRhcjoge1xuICAgICAgc3BhbmlzaDogXCJwaW50YXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcGFpbnRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3Zlcjoge1xuICAgICAgc3BhbmlzaDogXCJtb3ZlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBtb3ZlIChhbiBvYmplY3QpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbnRhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjb3VudFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvc3Rhcjoge1xuICAgICAgc3BhbmlzaDogXCJjb3N0YXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29zdFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRvcm1pcjoge1xuICAgICAgc3BhbmlzaDogXCJkb3JtaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc2xlZXBcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNvbnRyYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZW5jb250cmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGZpbmRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3JkZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwibW9yZGVyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJpdGVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3Jpcjoge1xuICAgICAgc3BhbmlzaDogXCJtb3JpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkaWVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICByZWNvcmRhcjoge1xuICAgICAgc3BhbmlzaDogXCJyZWNvcmRhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byByZW1lbWJlclwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbWVuemFyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbWVuemFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJlZ2luL2NvbW1lbmNlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzb2x2ZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicmVzb2x2ZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc29sdmVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25zZW50aXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY29uc2VudGlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNvbnNlbnQvcGFtcGVyL3Nwb2lsXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgaGVydmlyOiB7XG4gICAgICBzcGFuaXNoOiBcImhlcnZpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBib2lsXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgc2/DsWFyOiB7XG4gICAgICBzcGFuaXNoOiBcInNvw7FhciAoY29uKVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkcmVhbSAoYWJvdXQpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgc29uYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwic29uYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc291bmQvcmluZ1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRldm9sdmVyOiB7XG4gICAgICBzcGFuaXNoOiBcImRldm9sdmVyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHJldHVybiAoYW4gb2JqZWN0KVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGFsbW9yemFyOiB7XG4gICAgICBzcGFuaXNoOiBcImFsbW9yemFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGVhdCBsdW5jaFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkdmVydGlyOiB7XG4gICAgICBzcGFuaXNoOiBcImFkdmVydGlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHdhcm5cIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjZXJyYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY2VycmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNsb3NlL3NodXRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBhY29uc2VqYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiYWNvbnNlamFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGFkdmlzZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnZlcnRpcjoge1xuICAgICAgc3BhbmlzaDogXCJjb252ZXJ0aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29udmVydFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHZlcjoge1xuICAgICAgc3BhbmlzaDogXCJ2b2x2ZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcmV0dXJuXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYWRpdmluYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiYWRpdmluYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZ3Vlc3NcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbXBlemFyOiB7XG4gICAgICBzcGFuaXNoOiBcImVtcGV6YXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYmVnaW5cIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9iYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicHJvYmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHByb3ZlL3Rlc3Qvc2FtcGxlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZmVzYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY29uZmVzYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29uZmVzc1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlbnRpcjoge1xuICAgICAgc3BhbmlzaDogXCJzZW50aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZmVlbCBzb3JyeS9yZWdyZXRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbnRlbmRlcjoge1xuICAgICAgc3BhbmlzaDogXCJlbnRlbmRlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB1bmRlcnN0YW5kXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZnJlZ2FyOiB7XG4gICAgICBzcGFuaXNoOiBcImZyZWdhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzY3J1YiBkaXNoZXMvd2FzaCBkaXNoZXNcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3N0cmFyOiB7XG4gICAgICBzcGFuaXNoOiBcIm1vc3RyYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc2hvd1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBlbnNhcl9lbjoge1xuICAgICAgc3BhbmlzaDogXCJwZW5zYXIgKGVuKVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB0aGluayAoYWJvdXQpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29sZ2FyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbGdhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBoYW5nIHVwXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGVyZGVyOiB7XG4gICAgICBzcGFuaXNoOiBcInBlcmRlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBsb3NlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgdGFtYmFsZWFyOiB7XG4gICAgICBzcGFuaXNoOiBcInRhbWJhbGVhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzdHVtYmxlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcHJlZmVyaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicHJlZmVyaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcHJlZmVyXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcXVlcmVyOiB7XG4gICAgICBzcGFuaXNoOiBcInF1ZXJlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB3YW50L3dpc2hcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICByZWZlcmlyOiB7XG4gICAgICBzcGFuaXNoOiBcInJlZmVyaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcmVmZXJcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgfVxufTtcblxudmFyIG1lbW9yaXplU2V0MiA9IHtcbiAgd29yZFR5cGU6IFwidmVyYlwiLFxuICB2YWx1ZXM6IHtcbiAgICBiZW5kZWNpcjoge1xuICAgICAgc3BhbmlzaDogXCJiZW5kZWNpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBibGVzc1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlZHVjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZGVkdWNpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkZWR1Y2VcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wZXRpcjoge1xuICAgICAgc3BhbmlzaDogXCJjb21wZXRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjb21wZXRlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29uc2VndWlyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbnNlZ3VpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBvYnRhaW4sIGdldFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvcnJlZ2lyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvcnJlZ2lyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNvcnJlY3RcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZWNpcjoge1xuICAgICAgc3BhbmlzaDogXCJkZWNpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzYXksIHRlbGxcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZXNwZWRpcjoge1xuICAgICAgc3BhbmlzaDogXCJkZXNwZWRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBmaXJlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZWxlZ2lyOiB7XG4gICAgICBzcGFuaXNoOiBcImVsZWdpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBlbGVjdFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGZyZcOtcjoge1xuICAgICAgc3BhbmlzaDogXCJmcmXDrXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZnJ5XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZ2VtaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZ2VtaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZ3JvYW4sIG1vYW5cIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbXBlZGlyOiB7XG4gICAgICBzcGFuaXNoOiBcImltcGVkaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gaW1wZWRlLCBoaW5kZXJcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtYWxkZWNpcjoge1xuICAgICAgc3BhbmlzaDogXCJtYWxkZWNpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjdXJzZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lZGlyOiB7XG4gICAgICBzcGFuaXNoOiBcIm1lZGlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIG1lYXN1cmVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwZWRpcjoge1xuICAgICAgc3BhbmlzaDogXCJwZWRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBhc2sgZm9yXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcmXDrXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicmXDrXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gbGF1Z2hcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICByZXBldGlyOiB7XG4gICAgICBzcGFuaXNoOiBcInJlcGV0aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcmVwZWF0XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgc2VndWlyOiB7XG4gICAgICBzcGFuaXNoOiBcInNlZ3VpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBmb2xsb3csIGNvbnRpbnVlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgc2VydmlyOiB7XG4gICAgICBzcGFuaXNoOiBcInNlcnZpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzZXJ2ZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGFncmFkZWNlcjoge1xuICAgICAgc3BhbmlzaDogXCJhZ3JhZGVjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYXBwcmVjaWF0ZSwgYmUgdGhhbmtmdWwgKGZvcilcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBhcGFyZWNlcjoge1xuICAgICAgc3BhbmlzaDogXCJhcGFyZWNlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBhcHBlYXJcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25vY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbm9jZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8ga25vdyAoYSBwZXJzb24sIHBsYWNlLCBzdWJqZWN0KVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWNlcjoge1xuICAgICAgc3BhbmlzaDogXCJjcmVjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZ3Jvd1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc2FwYXJlY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcImRlc2FwYXJlY2VyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGRpc2FwcGVhclwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGVzdGFibGVjZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZXN0YWJsZWNlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBlc3RhYmxpc2hcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXJlY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcIm1lcmVjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZGVzZXJ2ZSwgbWVyaXRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBuYWNlcjoge1xuICAgICAgc3BhbmlzaDogXCJuYWNlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBiZSBib3JuXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgb2JlZGVjZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwib2JlZGVjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gb2JleVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIG9mcmVjZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwib2ZyZWNlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBvZmZlclwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhcmFjZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicGFyYWNlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzZWVtLCBsb29rIGxpa2VcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwZXJ0ZW5lY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcInBlcnRlbmVjZXIgKGEpXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJlbG9uZyAodG8pXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcInBsYWNlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBwbGVhc2UsIGdyYXRpZnlcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICByZWNvbm9jZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicmVjb25vY2VyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHJlY29nbml6ZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbmR1Y2lyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbmR1Y2lyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNvbmR1Y3QsIGRyaXZlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZGVzbHVjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZGVzbHVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdGFybmlzaCwgc3BvaWxcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbmR1Y2lyOiB7XG4gICAgICBzcGFuaXNoOiBcImluZHVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gaW5kdWNlLCBwZXJzdWFkZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGludHJvZHVjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiaW50cm9kdWNpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBpbnRyb2R1Y2VcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBsdWNpcjoge1xuICAgICAgc3BhbmlzaDogXCJsdWNpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBsaWdodCB1cCwgZGlzcGxheVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb2R1Y2lyOiB7XG4gICAgICBzcGFuaXNoOiBcInByb2R1Y2lyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHByb2R1Y2VcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICByZWR1Y2lyOiB7XG4gICAgICBzcGFuaXNoOiBcInJlZHVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcmVkdWNlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgdHJhZHVjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwidHJhZHVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdHJhbnNsYXRlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29udmVuY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbnZlbmNlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjb252aW5jZSwgcGVyc3VhZGVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlamVyY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcImVqZXJjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZXhlcnQsIGV4ZXJjaXNlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZXNwYXJjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZXNwYXJjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc2NhdHRlciwgc3ByZWFkXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgdmVuY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcInZlbmNlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjb25xdWVyLCBkZWZlYXRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICB6dXJjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwienVyY2lyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIG1lbmRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiLy8gRnJvbTogaHR0cDovL3d3dy5yZWdleHRlc3Rlci5jb20vP2ZhbT05NDczMFxuLy8gRnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTU3NDc3ODkvODM5MTZcbmZ1bmN0aW9uIHdyYXBQYXJlbnRoZXNpc0NvbnRlbnQoc3RyaW5nLCB0YWcsIGNsYXNzTmFtZSkge1xuICAvL2NvbnNvbGUubG9nKFwic3RyaW5nOiBcIiwgc3RyaW5nKTtcbiAgLy9jb25zb2xlLmxvZyhcInRhZzogXCIsIHRhZyk7XG4gIC8vY29uc29sZS5sb2coXCJjbGFzc05hbWU6IFwiLCBjbGFzc05hbWUpO1xuXG4gIHZhciBjbGFzc0RlZjtcblxuICBpZighdGFnKSB7IHRhZyA9IFwic3BhblwiIH1cbiAgaWYoY2xhc3NOYW1lKSB7XG4gICAgY2xhc3NEZWYgPSAnIGNsYXNzPVwiJytjbGFzc05hbWUrJ1wiJztcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0RlZiA9ICcnO1xuICB9XG5cbiAgdmFyIG9wZW5UYWcgPSAnPCcrdGFnK2NsYXNzRGVmKyc+JztcblxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhcXCguKj9cXCkpLyAsIG9wZW5UYWcrJyQmPC8nK3RhZysnPicpO1xufVxuXG5cblxuLy8gRGV0ZWN0IHdoaWNoIENTUyBldmVudHMgYXJlIHN1cHBvcnRlZCBieSB0aGUgdXNlcidzIGJyb3dzZXIgYW5kIG9ubHkgcmV0dXJuIHRoZSBmaXJzdCBvbmUgaWYgc2V2ZXJhbCBtYXRjaCAoc3VjaCBhcyBgdHJhbnNpdGlvbmVuZGAgYW5kIGB3ZWJraXRUcmFuc2l0aW9uRW5kYCBmb3IgQ2hyb21lIHNvIHlvdSBjYW4gbGlzdGVuIGZvciB0aGUgZW5kIG9mIGEgQ1NTIGV2ZW50IGFuZCB0aGVuIHBlcmZvcm0gYW4gYWN0aW9uIGJhc2VkIG9uIHRoYXQpIChodHRwczovL2pvbnN1aC5jb20vYmxvZy9kZXRlY3QtdGhlLWVuZC1vZi1jc3MtYW5pbWF0aW9ucy1hbmQtdHJhbnNpdGlvbnMtd2l0aC1qYXZhc2NyaXB0LylcbmZ1bmN0aW9uIGJyb3dzZXJTdXBwb3J0ZWRFdmVudHMoKXtcbiAgdmFyIHQsXG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmFrZWVsZW1lbnRcIiksXG4gICAgYnJvd3NlclN1cHBvcnRlZEV2ZW50cyA9IHt9O1xuXG4gIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICBcInRyYW5zaXRpb25cIiAgICAgIDogXCJ0cmFuc2l0aW9uZW5kXCIsXG4gICAgXCJPVHJhbnNpdGlvblwiICAgICA6IFwib1RyYW5zaXRpb25FbmRcIixcbiAgICBcIk1velRyYW5zaXRpb25cIiAgIDogXCJ0cmFuc2l0aW9uZW5kXCIsXG4gICAgXCJXZWJraXRUcmFuc2l0aW9uXCI6IFwid2Via2l0VHJhbnNpdGlvbkVuZFwiXG4gIH07XG5cbiAgdmFyIGFuaW1hdGlvbnMgPSB7XG4gICAgXCJhbmltYXRpb25cIiAgICAgIDogXCJhbmltYXRpb25lbmRcIixcbiAgICBcIk9BbmltYXRpb25cIiAgICAgOiBcIm9BbmltYXRpb25FbmRcIixcbiAgICBcIk1vekFuaW1hdGlvblwiICAgOiBcImFuaW1hdGlvbmVuZFwiLFxuICAgIFwiV2Via2l0QW5pbWF0aW9uXCI6IFwid2Via2l0QW5pbWF0aW9uRW5kXCJcbiAgfTtcblxuICBmb3IgKHQgaW4gdHJhbnNpdGlvbnMpe1xuICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIC8vY29uc29sZS5sb2codHJhbnNpdGlvbnNbdF0pO1xuICAgICAgYnJvd3NlclN1cHBvcnRlZEV2ZW50cy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbnNbdF07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmb3IgKGEgaW4gYW5pbWF0aW9ucyl7XG4gICAgaWYgKGVsLnN0eWxlW2FdICE9PSB1bmRlZmluZWQpe1xuICAgICAgLy9jb25zb2xlLmxvZyhhbmltYXRpb25zW2FdKTtcbiAgICAgIGJyb3dzZXJTdXBwb3J0ZWRFdmVudHMuYW5pbWF0aW9uID0gYW5pbWF0aW9uc1thXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBicm93c2VyU3VwcG9ydGVkRXZlbnRzO1xufVxuXG52YXIgc3VwcG9ydGVkRXZlbnRzID0gYnJvd3NlclN1cHBvcnRlZEV2ZW50cygpO1xudmFyIHRyYW5zaXRpb25FdmVudCA9IHN1cHBvcnRlZEV2ZW50cy50cmFuc2l0aW9uO1xudmFyIGFuaW1hdGlvbkV2ZW50ID0gc3VwcG9ydGVkRXZlbnRzLmFuaW1hdGlvbjtcblxuXG5cbmZ1bmN0aW9uIGFuaW1hdGVDYXJkRmxpcChjYWxsYmFjaykge1xuICAvLyBMZXQncyBtYWtlIHRoZSBjYWxsYmFjayBvcHRpb25hbFxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XG5cbiAgLy9jb25zb2xlLmxvZyhcImZsaXAgY2FyZCBiZWdpblwiKTtcblxuICAvLyBGbGlwIHRoZSBjYXJkXG4gICQoXCIjcXVpelwiKS5maW5kKFwiLmNhcmRcIikudG9nZ2xlQ2xhc3MoXCJmbGlwcGVkXCIpO1xuXG4gIC8vIFJ1biBhIGNhbGxiYWNrIHdoZW4gdGhlIENTUyBhbmltYXRpb24gaGFzIGZpbmlzaGVkIGlmIGl0IGhhcyBiZWVuIHByb3ZpZGVkIGFzIGFuIGFyZ3VtZW50XG4gIGlmKGNhbGxiYWNrKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkEgY2FsbGJhY2sgd2FzIHByb3ZpZGVkXCIpO1xuXG4gICAgLy8gV2FpdCBmb3IgdGhlIGZsaXBwaW5nIGFuaW1hdGlvbiB0byBjb21wbGV0ZSBiZWZvcmUgcnVubmluZyBjYWxsYmFja1xuICAgICQoXCIjcXVpelwiKS5vbmUodHJhbnNpdGlvbkV2ZW50LCBcIi5jYXJkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy9jb25zb2xlLmxvZyhcImZsaXAgY2FyZCBlbmRcIik7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG5mdW5jdGlvbiBwb3B1bGF0ZVF1aXpBcmVhKHF1aXpRdWVzdGlvbikge1xuICAvL2NvbnNvbGUubG9nKFwiUG9wdWxhdGUgUXVpeiBBcmVhXCIpO1xuXG4gIHZhciBxdWl6ID0gJChcIiNxdWl6XCIpO1xuXG4gIC8vIENoYW5nZSBvdXQgdGhlIHF1ZXN0aW9uIGJlaW5nIHNob3duXG4gIC8vY29uc29sZS5sb2coXCJGYWRlIGluIHRoZSBjb250ZW50IG9uIHRoZSBjYXJkc1wiKTtcbiAgcXVpei5maW5kKFwiLmZhY2UuZnJvbnRcIikuY2hpbGRyZW4oXCIuanMtZ2VuZXJhdGVkLXNlbnRlbmNlXCIpLmh0bWwod3JhcFBhcmVudGhlc2lzQ29udGVudChxdWl6UXVlc3Rpb24uZW5nbGlzaCwgJ3NtYWxsJykpLmZhZGVJbigpO1xuICBxdWl6LmZpbmQoXCIuZmFjZS5iYWNrXCIpLmNoaWxkcmVuKFwiLmpzLWdlbmVyYXRlZC1zZW50ZW5jZVwiKS5odG1sKHF1aXpRdWVzdGlvbi5zcGFuaXNoKS5mYWRlSW4oKTtcblxuICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSBxdWl6IGhhcyBiZWVuIHBvcHVsYXRlZCwgc2F2ZSB0aGF0IHN0YXR1cyBzbyB3ZSBjYW4gZmxpcCB0aGUgY2FyZCBhdCByYW5kb20gdG8gZGlzcGxheSBkaWZmZXJlbnQgc2lkZXMgYmVmb3JlIGxvYWRpbmcgaW4gdGhlIHNlbnRlbmNlXG4gIGlmKCFoYXNGaXJzdFF1ZXN0aW9uUnVuKSB7IGhhc0ZpcnN0UXVlc3Rpb25SdW4gPSB0cnVlOyB9XG59XG5cblxuXG5mdW5jdGlvbiBkaXNhYmxlUmVzdWx0QnRucyhlbmFibGVTdGF0dXMpIHtcbiAgJChcIi5qcy1yZXN1bHQtYnRuXCIpLnByb3AoXCJkaXNhYmxlZFwiLCBlbmFibGVTdGF0dXMpO1xufVxuXG5cblxuLy8gRnVuY3Rpb246IGNyZWF0ZU5lc3RlZE9iamVjdCggYmFzZSwgbmFtZXNbLCB2YWx1ZV0gKVxuLy8gICBiYXNlOiB0aGUgb2JqZWN0IG9uIHdoaWNoIHRvIGNyZWF0ZSB0aGUgaGllcmFyY2h5XG4vLyAgIG5hbWVzOiBhbiBhcnJheSBvZiBzdHJpbmdzIGNvbnRhbmluZyB0aGUgbmFtZXMgb2YgdGhlIG9iamVjdHNcbi8vICAgdmFsdWUgKG9wdGlvbmFsKTogaWYgZ2l2ZW4sIHdpbGwgYmUgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBoaWVyYXJjaHlcbi8vIFJldHVybnM6IHRoZSBsYXN0IG9iamVjdCBpbiB0aGUgaGllcmFyY2h5XG4vLyBGcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMTQzMzA2Ny84MzkxNlxuZnVuY3Rpb24gY3JlYXRlTmVzdGVkT2JqZWN0KCBiYXNlLCBuYW1lcywgdmFsdWUgKSB7XG4gIC8vIElmIGEgdmFsdWUgaXMgZ2l2ZW4sIHJlbW92ZSB0aGUgbGFzdCBuYW1lIGFuZCBrZWVwIGl0IGZvciBsYXRlcjpcbiAgdmFyIGxhc3ROYW1lID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMyA/IG5hbWVzLnBvcCgpIDogZmFsc2U7XG5cbiAgLy8gV2FsayB0aGUgaGllcmFyY2h5LCBjcmVhdGluZyBuZXcgb2JqZWN0cyB3aGVyZSBuZWVkZWQuXG4gIC8vIElmIHRoZSBsYXN0TmFtZSB3YXMgcmVtb3ZlZCwgdGhlbiB0aGUgbGFzdCBvYmplY3QgaXMgbm90IHNldCB5ZXQ6XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgYmFzZSA9IGJhc2VbIG5hbWVzW2ldIF0gPSBiYXNlWyBuYW1lc1tpXSBdIHx8IHt9O1xuICB9XG5cbiAgLy8gSWYgYSB2YWx1ZSB3YXMgZ2l2ZW4sIHNldCBpdCB0byB0aGUgbGFzdCBuYW1lOlxuICBpZiggbGFzdE5hbWUgKSBiYXNlID0gYmFzZVsgbGFzdE5hbWUgXSA9IHZhbHVlO1xuXG4gIC8vIFJldHVybiB0aGUgbGFzdCBvYmplY3QgaW4gdGhlIGhpZXJhcmNoeTpcbiAgcmV0dXJuIGJhc2U7XG59XG5cbmZ1bmN0aW9uIGdldE51bWJlck9iamVjdFByb3BlcnRpZXMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcbn1cblxuXG4vLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjUzMjIxOC9waWNrLXJhbmRvbS1wcm9wZXJ0eS1mcm9tLWEtamF2YXNjcmlwdC1vYmplY3RcbmZ1bmN0aW9uIGdldFJhbmRvbVByb3BlcnR5IChvYmopIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICB2YXIgcmFuZG9tUHJvcGVydHkgPSBrZXlzWyBrZXlzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkgPDwgMF07XG4gIC8vY29uc29sZS5sb2coXCJSYW5kb20gUHJvcGVydHk6IFwiLCByYW5kb21Qcm9wZXJ0eSk7XG4gIC8vcmV0dXJuIHJhbmRvbVByb3BlcnR5O1xuICAvL3JldHVybiB7XCJwcm9wZXJ0eU5hbWVcIjogcmFuZG9tUHJvcGVydHksIFwicHJvcGVydHlWYWx1ZVwiOiBvYmpbcmFuZG9tUHJvcGVydHldfTtcbiAgcmV0dXJuIHtcInByb3BlcnR5TmFtZVwiOiByYW5kb21Qcm9wZXJ0eSwgXCJwcm9wZXJ0eVZhbHVlXCI6IG9ialtyYW5kb21Qcm9wZXJ0eV19O1xufVxuXG5cbmZ1bmN0aW9uIHJhbmRvbUFycmF5RWxlbWVudChhcnJheSkge1xuICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKml0ZW1zLmxlbmd0aCldO1xufVxuXG5cbmZ1bmN0aW9uIGdldFN0ZW0od29yZCkge1xuICByZXR1cm4ge1xuICAgIGxhc3QyOiB3b3JkLnNsaWNlKC0yKSxcbiAgICBzdGVtOiB3b3JkLnN1YnN0cmluZygwLCB3b3JkLmxlbmd0aC0yKVxuICB9XG59XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM0ODY0MTc1LzgzOTE2XG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbiAgfVxufVxuXG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVF1aXoocXVpek9wdGlvbnMsIHF1aXpXb3Jkcykge1xuICBjb25zb2xlLmxvZygnSW4gYWN0aXZhdGVRdWl6KCknKTtcbiAgY29uc29sZS5sb2coJ3F1aXpXb3JkcyBpbiBhY3RpdmF0ZVF1aXooKScsIHF1aXpXb3Jkcyk7XG5cbiAgdmFyIHF1aXogPSAkKFwiI3F1aXpcIik7XG5cbiAgbnVtV29yZHMgPSBnZXROdW1iZXJPYmplY3RQcm9wZXJ0aWVzKHF1aXpXb3Jkcyk7XG4gIGNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIFByb3BlcnRpZXMgaW4gdGhlIHF1aXpXb3JkcyBvYmplY3Q6IFwiLCBudW1Xb3Jkcyk7XG5cbiAgcXVpei5maW5kKFwiLnByb2dyZXNzXCIpLmZpbmQoXCIubnVtLXdvcmRzXCIpLnRleHQobnVtV29yZHMpO1xuXG5cbiAgdmFyIGNvbXBsZXRlZFF1aXpXb3JkcyA9IHt9O1xuXG4gIC8vIFBvcHVsYXRlIFF1aXogb24gcGFnZSBsb2FkXG4gIHBvcHVsYXRlUXVpekFyZWEocXVpek9wdGlvbnMuZnVuY3Rpb25Ub0dlbmVyYXRlUXVpelF1ZXN0aW9uKCkpO1xuXG4gICQoJy5qcy1yZXN1bHQtYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHRTdGF0dXMgPSAkKHRoaXMpLmRhdGEoXCJyZXN1bHQtc3RhdHVzXCIpO1xuXG4gICAgLy8gRGlzYWJsZSB0aGUgcmVzdWx0IGJ1dHRvbnMgc28gdGhlIHVzZXIgbmVlZHMgdG8gZmxpcCBvdmVyIHRoZSBjYXJkIHRvIGNoZWNrIHRoZSBhbnN3ZXIgYmVmb3JlIHNlbGVjdGluZyBhIHJlc3VsdFxuICAgIGRpc2FibGVSZXN1bHRCdG5zKHRydWUpO1xuXG4gICAgLy8gSWYgdGhlIHF1aXogaXMgc2V0IHVwIHRvIG9ubHkgc2hvdyBrZWVwIHNjb3JlIGFuZCBvbmx5IHNob3cgdW5hbnN3ZXJlZCBxdWVzdGlvbnMgb3IgcHJldmlvdXNseSBhbnN3ZXJlZCBpbmNvcnJlY3QgcXVlc3Rpb25zLCB0aGVuIGNoZWNrIGlmIGl0IHdhcyBhc2tlZCBjb3JyZWN0bHksIGFuZCBpZiBzbyBtb3ZlIHRoYXQgd29yZEdyb3VwIHRvIHRoZSBhbnN3ZXJlZFdvcmRzIG9iamVjdFxuICAgIGlmKHF1aXpPcHRpb25zLm9ubHlTaG93VW5hbnN3ZXJlZFF1ZXN0aW9ucyA9PT0gdHJ1ZSkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHF1ZXN0aW9uIHdhcyBhbnN3ZXJlZCBjb3JyZWN0bHlcbiAgICAgIHZhciBsYXN0V29yZEtleSA9IGxhc3RXb3JkR3JvdXAua2V5O1xuXG4gICAgICBpZiAocmVzdWx0U3RhdHVzID09PSBcImNvcnJlY3RcIikge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUXVlc3Rpb24gYW5zd2VyZWQgY29ycmVjdGx5XCIpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJsYXN0V29yZEtleTogXCIsIGxhc3RXb3JkS2V5KTtcbiAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBgYW5zd2VyQXR0ZW1wdGVkYCBwcm9wZXJ0eSB0byByZWNvcmQgaG93IG1hbnkgdGltZXMgdGhpcyB3b3JkIHdhcyBhdHRlbXB0ZWRcbiAgICAgICAgcXVpeldvcmRzW2xhc3RXb3JkS2V5XVsnYW5zd2VyQXR0ZW1wdGVkJ10rKztcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIGBhbnN3ZXJDb3JyZWN0YCB0byB0cnVlIHRvIHNob3cgaXQgd2FzIGFuc3dlcmVkIGNvcnJlY3RseVxuICAgICAgICBxdWl6V29yZHNbbGFzdFdvcmRLZXldWydhbnN3ZXJDb3JyZWN0J10gPSB0cnVlO1xuXG4gICAgICAgIC8vIENvcHkgdGhlIG5lY2Vzc2FyeSBwcm9wZXJ0aWVzIGZyb20gdGhlIHdvcmQgZ3JvdXAgdG8gdGhlIGBjb21wbGV0ZWRRdWl6V29yZHNgIG9iamVjdFxuICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNbbGFzdFdvcmRLZXldID0ge307XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGBlbmdsaXNoYCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QoYXMgaW4gdGhlIGNhc2Ugb2Ygbm91bnMgd2hlcmUgdGhlIGVuZ2xpc2ggcHJvcGVydHkgaXMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBgc2luZ3VsYXJgIHByb3BlcnR5IHRoYXQgaG9sZHMgdGhlIGFjdHVhbCBlbmdsaXNoIHZhbHVlKVxuICAgICAgICBpZihpc1BsYWluT2JqZWN0KHF1aXpXb3Jkc1tsYXN0V29yZEtleV0uZW5nbGlzaCkpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicXVpeldvcmRzW2xhc3RXb3JkS2V5XVwiLHF1aXpXb3Jkc1tsYXN0V29yZEtleV0pO1xuICAgICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0uZW5nbGlzaCA9IHF1aXpXb3Jkc1tsYXN0V29yZEtleV0uZW5nbGlzaC5zaW5ndWxhcjtcbiAgICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNbbGFzdFdvcmRLZXldLnNwYW5pc2ggPSBxdWl6V29yZHNbbGFzdFdvcmRLZXldLnNwYW5pc2guc2luZ3VsYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcGxldGVkUXVpeldvcmRzW2xhc3RXb3JkS2V5XS5lbmdsaXNoID0gcXVpeldvcmRzW2xhc3RXb3JkS2V5XS5lbmdsaXNoO1xuICAgICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0uc3BhbmlzaCA9IHF1aXpXb3Jkc1tsYXN0V29yZEtleV0uc3BhbmlzaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0uYW5zd2VyQXR0ZW1wdGVkID0gcXVpeldvcmRzW2xhc3RXb3JkS2V5XS5hbnN3ZXJBdHRlbXB0ZWQ7XG4gICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0ud29yZFR5cGUgPSBxdWl6V29yZHNbbGFzdFdvcmRLZXldLndvcmRUeXBlO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgd29yZCBncm91cCBmcm9tIHRoZSBgcXVpeldvcmRzYCBvYmplY3Qgc28gaXQgaXNuJ3Qgc2hvd24gYWdhaW5cbiAgICAgICAgZGVsZXRlIHF1aXpXb3Jkc1tsYXN0V29yZEtleV07XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBQcm9ncmVzcyBiYXIgcGVyY2VudGFnZSBhbmQgc2NvcmUgdmFsdWVcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNvbXBsZXRlZFF1aXpXb3JkczogXCIsIGNvbXBsZXRlZFF1aXpXb3Jkcyk7XG4gICAgICAgIHZhciBudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdCA9IGdldE51bWJlck9iamVjdFByb3BlcnRpZXMoY29tcGxldGVkUXVpeldvcmRzKTtcbiAgICAgICAgdmFyIGNvcnJlY3RQZXJjZW50YWdlID0gKG51bVdvcmRzQW5zd2VyZWRDb3JyZWN0IC8gbnVtV29yZHMpICogMTAwO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdDogJywgbnVtV29yZHNBbnN3ZXJlZENvcnJlY3QpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdjb3JyZWN0UGVyY2VudGFnZTogJywgY29ycmVjdFBlcmNlbnRhZ2UpO1xuXG4gICAgICAgIC8vIFNpbmNlIGEgcXVlc3Rpb24gd2FzIG1hcmtlZCBhcyBjb3JyZWN0LCB0aGUgcGVyY2VudGFnZS1jb3JyZWN0IHdpbGwgY2hhbmdlIGFuZCB0aGVyZWZvcmUgd2UgdHJpZ2dlciBhIGN1c3RvbSBldmVudCB3aGljaCBwYXNzZXMgc29tZSBkYXRhIHRvIHRoZSBgcHJvZ3Jlc3MtYmFyLmpzYCBmaWxlIHdoaWNoIGhhcyBhIGxpc3RlbmVyIGZvciB0aGUgY3VzdG9tIGV2ZW50LlxuICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdwcm9ncmVzcy1jaGFuZ2VkJywgW251bVdvcmRzQW5zd2VyZWRDb3JyZWN0LCBjb3JyZWN0UGVyY2VudGFnZV0pO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJOdW1iZXIgb2YgUHJvcGVydGllcyBpbiB0aGUgcXVpeldvcmRzIG9iamVjdDogXCIsIGdldE51bWJlck9iamVjdFByb3BlcnRpZXMocXVpeldvcmRzKSk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZygnUXVpeiBXb3JkcyBpbiByZXN1bHRTdGF0dXM6ICcsIHF1aXpXb3Jkcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGBhbnN3ZXJBdHRlbXB0ZWRgIHByb3BlcnR5IHRvIHJlY29yZCBob3cgbWFueSB0aW1lcyB0aGlzIHdvcmQgd2FzIGF0dGVtcHRlZFxuICAgICAgICBxdWl6V29yZHNbbGFzdFdvcmRLZXldWydhbnN3ZXJBdHRlbXB0ZWQnXSsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUXVlc3Rpb24gYW5zd2VyZWQgaW5jb3JyZWN0bHlcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmxvZyhcImlzUmVzdWx0Q29ycmVjdDogXCIgKyBpc1Jlc3VsdENvcnJlY3QgKyBcIihcIiArIHR5cGVvZiBpc1Jlc3VsdENvcnJlY3QgKyBcIilcIik7XG5cbiAgICAvLyBBZGQgdGhlIHB1bHNlIG5vdGlmaWNhdGlvbiB0byBzaG93IHRoZWlyIHJlc3VsdCBpbiBhIHZpc3VhbCB3YXlcbiAgICAkKFwiZGl2LmZhY2VcIikuYWRkQ2xhc3MoXCJwdWxzZS1ub3RpZmljYXRpb24gcHVsc2Utbm90aWZpY2F0aW9uLVwiICsgcmVzdWx0U3RhdHVzKTtcblxuICAgIC8vIEZvcmNlIHRoaXMgZnVuY3Rpb24gdG8gb25seSBydW4gb25jZSBwZXIgY2xpY2sgc2luY2UgdGhlIGFuaW1hdGlvbiBpcyBiZWluZyBhcHBsaWVkIHRvIGJvdGggYC5mYWNlYCBkaXZzIHNvIGl0IHdpbGwgYWN0dWFsbHkgZGV0ZWN0IGl0IHR3aWNlLlxuICAgIC8vIFRPRE86IEZpeCB0aGlzIGJ5IGFwcGx5aW5nIHRoZSBgLnB1bHNlLW5vdGlmaWNhdGlvbmAgY2xhc3Mgb24gb25seSB0aGUgYC5mYWNlYCB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBzaG93bi5cbiAgICBxdWl6Lm9uZShhbmltYXRpb25FdmVudCwgXCIuZmFjZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgLy8gU2luY2UgdGhlIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQsIHJlbW92ZSB0aGUgYW5pbWF0aW9uIGNsYXNzXG4gICAgICAkKFwiZGl2LmZhY2VcIikucmVtb3ZlQ2xhc3MoXCJwdWxzZS1ub3RpZmljYXRpb24gcHVsc2Utbm90aWZpY2F0aW9uLVwiICsgcmVzdWx0U3RhdHVzKTtcblxuICAgICAgLy8gRmFkZSBvdXQgdGhlIGNvbnRlbnQgb24gdGhlIGNhcmRzXG4gICAgICBxdWl6LmZpbmQoXCIuZmFjZS5mcm9udFwiKS5jaGlsZHJlbihcIi5qcy1nZW5lcmF0ZWQtc2VudGVuY2VcIikuZmFkZU91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgcXVlc3Rpb24gdG8gc2hvdyBpZiB0aGVyZSBhcmUgYW55IGxlZnQgaW4gdGhlIHNldFxuICAgICAgICBpZihnZXROdW1iZXJPYmplY3RQcm9wZXJ0aWVzKHF1aXpXb3JkcykgPiAwKSB7XG4gICAgICAgICAgdmFyIG5ld1dvcmRHcm91cCA9IHF1aXpPcHRpb25zLmZ1bmN0aW9uVG9HZW5lcmF0ZVF1aXpRdWVzdGlvbigpO1xuXG4gICAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIGZpcnN0IHF1ZXN0aW9uLCByYW5kb21seSBkZXRlcm1pbmUgaWYgdGhlIGNhcmQgc2hvdWxkIHR1cm4gKHNob3cgdGhlIG90aGVyIGxhbmd1YWdlIHRvIGtlZXAgdGhlIHF1ZXN0aW9ucyB1bnByZWRpY3RhYmxlKVxuICAgICAgICAgIGlmIChnZXRSYW5kb21JbnQoMCwgMSkgPT09IDEgJiYgaGFzRmlyc3RRdWVzdGlvblJ1bikge1xuICAgICAgICAgICAgYW5pbWF0ZUNhcmRGbGlwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcG9wdWxhdGVRdWl6QXJlYShuZXdXb3JkR3JvdXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcHVsYXRlUXVpekFyZWEobmV3V29yZEdyb3VwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlIFF1aXogaGFzIGZpbmlzaGVkLiBDYWxjdWxhdGUgdGhlIHJlc3VsdHMuXG4gICAgICAgICAgcXVpei5maW5kKFwiLnF1ZXN0aW9uc1wiKS5mYWRlT3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgcmVzdWx0c0FyZWEgPSBxdWl6LmZpbmQoXCIucmVzdWx0c1wiKTtcblxuICAgICAgICAgICAgLy8gRmlsbCBpbiB0aGUgbnVtYmVyIG9mIHdvcmRzIGluIHRoZSBxdWl6XG4gICAgICAgICAgICByZXN1bHRzQXJlYS5maW5kKCcubnVtLXdvcmRzJykudGV4dChudW1Xb3Jkcyk7XG5cbiAgICAgICAgICAgIC8vIEZpbGwgaW4gaG93IG1hbnkgd29yZHMgd2VyZSBjb3JyZWN0bHkgYW5zd2VyZWQgb24gdGhlIGZpcnN0IHRyeVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNvbXBsZXRlZFF1aXpXb3JkcyAxOiBcIiwgY29tcGxldGVkUXVpeldvcmRzKTtcbiAgICAgICAgICAgIHZhciBudW1GaXJzdFRyeUNvcnJlY3QgPSAwO1xuXG4gICAgICAgICAgICAkLmVhY2goY29tcGxldGVkUXVpeldvcmRzLCBmdW5jdGlvbihpbmRleCwgd29yZEdyb3VwKXtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImluZGV4IGluIGxvb3BcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid29yZEdyb3VwIGluIGxvb3BcIiwgd29yZEdyb3VwKTtcbiAgICAgICAgICAgICAgaWYod29yZEdyb3VwLmFuc3dlckF0dGVtcHRlZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIG51bUZpcnN0VHJ5Q29ycmVjdCsrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzdWx0c0FyZWEuZmluZCgnLmZpcnN0LXRyeS1jb3JyZWN0JykudGV4dChudW1GaXJzdFRyeUNvcnJlY3QpO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHRvcCA1IHdvcmRzIHRoYXQgaGF2ZSB0aGUgbW9zdCB0cmllcyAoQWRkIGxhdGVyKVxuXG4gICAgICAgICAgICAvLyBHZXQgYWxsIHRoZSB3b3JkcyBhbG9uZyB3aXRoIGhvdyBtYW55IHRyaWVzIHRvIGNvbXBsZXRlIGVhY2ggb25lXG5cbiAgICAgICAgICAgIHZhciBjb21wbGV0ZWRRdWl6V29yZHNBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb21wbGV0ZWRRdWl6V29yZHMgb2JqZWN0IHRvIGFuIGFycmF5IHNvIGl0J3MgZWFzaWVyIHRvIHNvcnQgaXQgd2hlbiBvdXRwdXR0aW5nIGFsbCB0aGUgd29yZHMgYW5zd2VyZWQgYnkgdGhlIG51bWJlciBvZiB0cmllcyBmb3IgZWFjaCB3b3JkXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29tcGxldGVkUXVpeldvcmRzKSB7XG4gICAgICAgICAgICAgIGlmIChjb21wbGV0ZWRRdWl6V29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc0FycmF5LnB1c2goY29tcGxldGVkUXVpeldvcmRzW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNvcnQgYnkgTnVtYmVyIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNjMwMDcvaG93LXRvLXNvcnQtYW4tYXJyYXktb2YtaW50ZWdlcnMtY29ycmVjdGx5KVxuICAgICAgICAgICAgLy8gU29ydCBieSB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBhbnN3ZXIgd2FzIGF0dGVtcHRlZCBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNBcnJheSA9IGNvbXBsZXRlZFF1aXpXb3Jkc0FycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGIuYW5zd2VyQXR0ZW1wdGVkIC0gYS5hbnN3ZXJBdHRlbXB0ZWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5kaXIoIGNvbXBsZXRlZFF1aXpXb3Jkc0FycmF5ICk7XG5cbiAgICAgICAgICAgIC8vdmFyIGNvbXBsZXRlZFF1aXpXb3JkTnVtID0gMTtcbiAgICAgICAgICAgIC8vdmFyIGNvbXBsZXRlZFF1aXpXb3JkVHJpZXNcblxuICAgICAgICAgICAgLy8gRGlzcGxheSBlYWNoIG9mIHRoZSBjb21wbGV0ZWQgd29yZHMgYW5kIHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMgZm9yIGVhY2ggb25lXG4gICAgICAgICAgICAkLmVhY2goY29tcGxldGVkUXVpeldvcmRzQXJyYXksIGZ1bmN0aW9uKGluZGV4LCB3b3JkR3JvdXApe1xuICAgICAgICAgICAgICByZXN1bHRzQXJlYS5maW5kKCd0YWJsZS5mdWxsLXNjb3JlJykuZmluZCgndGJvZHknKS5hcHBlbmQoJzx0cj48dGQ+JyArIHdvcmRHcm91cC5zcGFuaXNoICsgJzwvdGQ+PHRkPicgKyB3b3JkR3JvdXAuYW5zd2VyQXR0ZW1wdGVkICsgJzwvdGQ+PC90cj4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXN1bHRzQXJlYS5mYWRlSW4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFRPRE86IEZpbmQgYSB3YXkgdG8gZmFkZSBvdXQgYm90aCB0aGUgYC5mYWNlYCBkaXZzIGJ1dCBvbmx5IGhhdmUgdGhlIGFib3ZlIGNvZGUgcnVuIG9uY2Ugd2hlbiBib3RoIGFyZSBmaW5pc2hlZC5cbiAgICAgIHF1aXouZmluZChcIi5mYWNlLmJhY2tcIikuY2hpbGRyZW4oXCIuanMtZ2VuZXJhdGVkLXNlbnRlbmNlXCIpLmZhZGVPdXQoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIENyZWF0ZSBPYmplY3QgdGhhdCBob2xkcyBhbGwgdGhlIHdvcmRzIHRvIGJlIGFza2VkIG9uIGEgcGFydGljdWxhciBxdWl6XG5mdW5jdGlvbiBjcmVhdGVRdWl6KHF1aXpPYmplY3RzLCBxdWl6VHlwZSkge1xuXG4gIGNvbnNvbGUubG9nKCdJbiBjcmVhdGVRdWl6KCknKTtcblxuICB2YXIgcXVpek91dHB1dCA9IHt9O1xuXG4gIGlmKHF1aXpUeXBlID09PSAncmV0ZW50aW9uJykge1xuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIG9mIHRoZSB3b3JkT2JqZWN0cyBwcm92aWRlZCAoZXg6IG5vdW5zLCBhZGplY3RpdmVzLCBldGMuKVxuICAgICQuZWFjaChxdWl6T2JqZWN0cywgZnVuY3Rpb24gKGluZGV4LCB3b3JkT2JqZWN0KSB7XG4gICAgICBjb25zb2xlLmxvZyh3b3JkT2JqZWN0KTtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggV29yZEdyb3VwXG4gICAgICAkLmVhY2god29yZE9iamVjdC52YWx1ZXMsIGZ1bmN0aW9uICh3b3JkS2V5LCB3b3JkR3JvdXApIHtcbiAgICAgICAgd29yZEdyb3VwLmtleSA9IHdvcmRLZXk7XG4gICAgICAgIHdvcmRHcm91cC53b3JkVHlwZSA9IHdvcmRPYmplY3Qud29yZFR5cGU7XG4gICAgICAgIHdvcmRHcm91cC5hbnN3ZXJDb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIHdvcmRHcm91cC5hbnN3ZXJBdHRlbXB0ZWQgPSAwO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHdvcmRLZXksIHdvcmRHcm91cCk7XG5cbiAgICAgICAgLy8gQWRkIHRoZSB3b3JkR3JvdXAgdG8gdGhlIHF1aXpPdXRwdXQgb2JqZWN0XG4gICAgICAgIHF1aXpPdXRwdXRbd29yZEtleV0gPSB3b3JkR3JvdXA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKHF1aXpUeXBlID09PSAnY29uanVnYXRpb24nKSB7XG4gICAgLy9jb25zb2xlLmxvZyhxdWl6T2JqZWN0cyk7XG5cbiAgICBxdWl6T3V0cHV0LndvcmRUeXBlcyA9IFtdO1xuICAgIHF1aXpPdXRwdXQudmFsdWVzID0ge307XG5cbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBvZiB0aGUgd29yZE9iamVjdHMgcHJvdmlkZWQgKGV4OiBub3VucywgYWRqZWN0aXZlcywgZXRjLilcbiAgICAkLmVhY2gocXVpek9iamVjdHMsIGZ1bmN0aW9uIChpbmRleCwgY29uanVnYXRpb25PYmplY3QpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ2hlcmUzJyxjb25qdWdhdGlvbk9iamVjdCk7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIFdvcmRUeXBlKGkuZS4gJ2FyJywgJ2VyJywgb3IgJ2lyJyB3b3JkcylcbiAgICAgICQuZWFjaChjb25qdWdhdGlvbk9iamVjdCwgZnVuY3Rpb24gKHdvcmRUeXBlTmFtZSwgd29yZFR5cGVPYmplY3QpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaGVyZTQgLSB3b3JkVHlwZU5hbWUnLHdvcmRUeXBlTmFtZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2hlcmU0IC0gd29yZFR5cGVPYmplY3QnLHdvcmRUeXBlT2JqZWN0KTtcblxuICAgICAgICAkLmVhY2god29yZFR5cGVPYmplY3QsIGZ1bmN0aW9uICh0ZW5zZU5hbWUsIHRlbnNlT2JqZWN0KSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnaGVyZTUgLSB0ZW5zZU5hbWUnLHRlbnNlTmFtZSk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnaGVyZTUgLSB0ZW5zZU9iamVjdCcsdGVuc2VPYmplY3QpO1xuXG4gICAgICAgICAgJC5lYWNoKHRlbnNlT2JqZWN0LnBlcnNvbiwgZnVuY3Rpb24gKHBlcnNvbiwgY29uanVnYXRpb24pIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hlcmU2IC0gcGVyc29uJyxwZXJzb24pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGVyZTYgLSBjb25qdWdhdGlvbicsY29uanVnYXRpb24pO1xuXG4gICAgICAgICAgICB2YXIgY29uanVnYXRpb25Hcm91cCA9IHtcbiAgICAgICAgICAgICAgYW5zd2VyQ29ycmVjdDogZmFsc2UsXG4gICAgICAgICAgICAgIGFuc3dlckF0dGVtcHRlZDogMCxcbiAgICAgICAgICAgICAgd29yZFR5cGU6IHdvcmRUeXBlTmFtZSxcbiAgICAgICAgICAgICAgdGVuc2U6IHRlbnNlTmFtZSxcbiAgICAgICAgICAgICAgYXBwZW5kVG86IHRlbnNlT2JqZWN0LmFwcGVuZFRvLFxuICAgICAgICAgICAgICBwZXJzb246IHBlcnNvbixcbiAgICAgICAgICAgICAgY29uanVnYXRpb246IGNvbmp1Z2F0aW9uXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbmp1Z2F0aW9uR3JvdXBcIiwgY29uanVnYXRpb25Hcm91cCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmRUeXBlTmFtZVwiLCB3b3JkVHlwZU5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHF1aXpPdXRwdXQud29yZFR5cGVzKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRoZSBjb25qdWdhdGlvbiB3b3JkVHlwZSB0byB0aGUgcXVpek91dHB1dCBvYmplY3QgaWYgaXQgaXMgbm90IGFscmVhZHkgaW4gdGhlcmVcbiAgICAgICAgICAgIHB1c2hXb3JkVHlwZVRvQXJyYXkocXVpek91dHB1dC53b3JkVHlwZXMsIHdvcmRUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY29uanVnYXRpb25Hcm91cCB0byB0aGUgcXVpek91dHB1dCBvYmplY3RcbiAgICAgICAgICAgIHF1aXpPdXRwdXQudmFsdWVzW3dvcmRUeXBlTmFtZSArICctJyArIHRlbnNlTmFtZSArICctJyArIHBlcnNvbl0gPSBjb25qdWdhdGlvbkdyb3VwO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJmaW5hbCBxdWl6T3V0cHV0XCIsIHF1aXpPdXRwdXQpO1xuICByZXR1cm4gcXVpek91dHB1dDtcbn1cblxuZnVuY3Rpb24gcHVzaFdvcmRUeXBlVG9BcnJheSh3b3JkVHlwZUFycmF5LCBuZXdXb3JkVHlwZVZhbHVlKSB7XG4gIHdvcmRUeXBlQXJyYXkgPSB3b3JkVHlwZUFycmF5IHx8IFtdO1xuXG4gIGlmKHdvcmRUeXBlQXJyYXkubGVuZ3RoIDwgMykge1xuICAgIGlmICgkLmluQXJyYXkobmV3V29yZFR5cGVWYWx1ZSwgd29yZFR5cGVBcnJheSkgPT0gLTEpIHtcbiAgICAgIHdvcmRUeXBlQXJyYXkucHVzaChuZXdXb3JkVHlwZVZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwid29yZFR5cGVBcnJheVwiLCB3b3JkVHlwZUFycmF5KTtcblxuICAgICAgcmV0dXJuIHdvcmRUeXBlQXJyYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gIC8vIEZsaXAgb3ZlciB0aGUgY2FyZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBpdCB0byByZXZlYWwgdGhlIGFuc3dlclxuICAkKCcuZmxpcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjYXJkIGNsaWNrZWQnKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYW5pbWF0ZUNhcmRGbGlwKCk7XG5cbiAgICAvLyBFbmFibGUgdGhlIHJlc3VsdCBidXR0b25zIG5vdyB0aGF0IHRoZSBxdWl6IGFuc3dlciBoYXMgYmVlbiBzaG93blxuICAgIGRpc2FibGVSZXN1bHRCdG5zKGZhbHNlKTtcbiAgfSk7XG59KTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gIGlmICggJCggXCIuanMtcXVpei12ZXJiLWNvbmp1Z2F0aW9uXCIgKS5sZW5ndGggKSB7XG5cbiAgICBoYXNGaXJzdFF1ZXN0aW9uUnVuID0gZmFsc2U7XG5cbiAgICB2YXIgcXVpek9wdGlvbnMgPSB7XG4gICAgICBvbmx5U2hvd1VuYW5zd2VyZWRRdWVzdGlvbnM6IHRydWUsXG4gICAgICBxdWl6VHlwZTogJ2Nvbmp1Z2F0aW9uJyxcbiAgICAgIHF1aXpDb25qdWdhdGlvbnM6IFtzcGFuaXNoVGVuc2VzXSxcbiAgICAgIGZ1bmN0aW9uVG9HZW5lcmF0ZVF1aXpRdWVzdGlvbjogZ2VuZXJhdGVWZXJiQ29uanVnYXRpb25RdWl6UXVlc3Rpb25cbiAgICB9O1xuXG4gICAgLy9jb25zb2xlLmxvZygnaGVyZTInLCBxdWl6T3B0aW9ucy5xdWl6Q29uanVnYXRpb25zKTtcblxuICAgIHZhciBxdWl6T3V0cHV0ID0gY3JlYXRlUXVpeihxdWl6T3B0aW9ucy5xdWl6Q29uanVnYXRpb25zLCBxdWl6T3B0aW9ucy5xdWl6VHlwZSk7XG4gICAgdmFyIHF1aXpDb25qdWdhdGlvbldvcmRUeXBlcyA9IHF1aXpPdXRwdXQud29yZFR5cGVzO1xuICAgIHZhciBxdWl6Q29uanVnYXRpb25zID0gcXVpek91dHB1dC52YWx1ZXM7XG5cbiAgICBjb25zb2xlLmxvZyhcInF1aXpPdXRwdXRcIiwgcXVpek91dHB1dCk7XG5cbiAgICAvL2Z1bmN0aW9uIGdldFJhbmRvbUNvbmp1Z2F0aW9uKHF1aXpXb3Jkcykge1xuICAgIC8vICAvLyBHZXQgYSByYW5kb20gdmVyYiB0eXBlKGkuZS4gLWFyIHdvcmRzKSwgcmFuZG9tIHRlbnNlKGkuZS4gZnV0dXJlKSwgYW5kIGEgcmFuZG9tIGNvbmp1Z2F0aW9uKGkuZS4gZWxsb3MpXG4gICAgLy9cbiAgICAvLyAgLy8gVmFsdWVzIGlmIHRyeWluZyB0byB0ZXN0IGVhY2ggY29uanVnYXRpb24gdHlwZVxuICAgIC8vICAgIHZhciBjb25qdWdhdGlvbkdyb3VwID0gZ2V0UmFuZG9tUHJvcGVydHkocXVpeldvcmRzKTtcbiAgICAvLyAgICB2YXIgdGVuc2UgPSBjb25qdWdhdGlvbkdyb3VwLnRlbnNlO1xuICAgIC8vICAgIHZhciBhcHBlbmRUbyA9IHRlbnNlLnByb3BlcnR5VmFsdWUuYXBwZW5kVG87XG4gICAgLy8gICAgdmFyIGNvbmp1Z2F0aW9uID0gZ2V0UmFuZG9tUHJvcGVydHkodGVuc2UucHJvcGVydHlWYWx1ZS5wZXJzb24pO1xuICAgIC8vXG4gICAgLy8gIC8vZGVidWdnZXI7XG4gICAgLy9cbiAgICAvLyAgICB2YXIgd29yZEdyb3VwID0gZ2V0UmFuZG9tUHJvcGVydHkocXVpeldvcmRzKVsncHJvcGVydHlWYWx1ZSddO1xuICAgIC8vICAgIGxhc3RXb3JkR3JvdXAgPSB3b3JkR3JvdXA7XG4gICAgLy9cbiAgICAvLyAgY29uc29sZS5sb2coXCJ3b3JkR3JvdXAgLSBcIiwgd29yZEdyb3VwKTtcbiAgICAvL1xuICAgIC8vICAvLyBWYWx1ZXMgaWYgdHJ5aW5nIHRvIHRlc3QgZWFjaCB2ZXJiIHdvcmRcbiAgICAvLyAgICAvL3ZhciB3b3JkVHlwZSA9IHNwYW5pc2hUZW5zZXNbd29yZEdyb3VwLmFkZGl0aW9uYWwudmVyYkVuZGluZyArIFwiV29yZHNcIl07XG4gICAgLy8gICAgLy92YXIgdGVuc2UgPSBnZXRSYW5kb21Qcm9wZXJ0eSh3b3JkVHlwZSk7XG4gICAgLy8gICAgLy92YXIgYXBwZW5kVG8gPSB0ZW5zZS5wcm9wZXJ0eVZhbHVlLmFwcGVuZFRvO1xuICAgIC8vICAgIC8vdmFyIGNvbmp1Z2F0aW9uID0gZ2V0UmFuZG9tUHJvcGVydHkodGVuc2UucHJvcGVydHlWYWx1ZS5wZXJzb24pO1xuICAgIC8vXG4gICAgLy8gIGNvbnNvbGUubG9nKFwid29yZFR5cGU6IFwiLCB3b3JkVHlwZSk7XG4gICAgLy8gIGNvbnNvbGUubG9nKFwidGVuc2U6IFwiLCB0ZW5zZSk7XG4gICAgLy8gIGNvbnNvbGUubG9nKFwiY29uanVnYXRpb246IFwiLCBjb25qdWdhdGlvbik7XG4gICAgLy8gIC8vY29uc29sZS5sb2coXCJyYW5kb21Xb3JkOiBcIiwgcmFuZG9tV29yZCk7XG4gICAgLy9cbiAgICAvLyAgLy9kZWJ1Z2dlcjtcbiAgICAvLyAgLy9cbiAgICAvLyAgLy8vLyBHcmFiIGEgcmFuZG9tIHByb3BlcnR5IGZyb20gdGhlIHRlbnNlIGFuZCBpZiB0aGUgY29uanVnYXRpb24gdGhhdCB3YXMgY2hvc2VuIGlzIGFjdHVhbGx5IHRoZSBcImFwcGVuZFRvXCIgcHJvcGVydHksIHRoZW4gcnVuIHRoZSBmdW5jdGlvbiBhcyBtYW55IHRpbWVzIGFzIG5lY2Vzc2FyeSB0byBnZXQgYW4gYWN0dWFsIGNvbmp1Z2F0aW9uIHZhbHVlXG4gICAgLy8gIC8vdmFyIHJhbmRvbVRlbnNlQ29uanVnYXRpb25LZXk7XG4gICAgLy8gIC8vZG8ge1xuICAgIC8vICAvLyAgcmFuZG9tVGVuc2VDb25qdWdhdGlvbktleSA9IGdldFJhbmRvbVByb3BlcnR5KHJhbmRvbVRlbnNlLnByb3BlcnR5VmFsdWUpO1xuICAgIC8vICAvLyAgLy9jb25zb2xlLmxvZyhcInJhbmRvbVRlbnNlQ29uanVnYXRpb25LZXk6IFwiLCByYW5kb21UZW5zZUNvbmp1Z2F0aW9uS2V5KTtcbiAgICAvLyAgLy99XG4gICAgLy8gIC8vd2hpbGUgKHJhbmRvbVRlbnNlQ29uanVnYXRpb25LZXkucHJvcGVydHlOYW1lID09PSBcImFwcGVuZFRvXCIpO1xuICAgIC8vXG4gICAgLy8gIC8vY29uc29sZS5sb2coXCJSYW5kb20gV29yZCBUeXBlIGluIFNwYW5pc2ggVGVuc2VzOiBcIiwgcmFuZG9tV29yZFR5cGUpO1xuICAgIC8vICAvL2NvbnNvbGUubG9nKFwiUmFuZG9tIFRlbnNlIGluIFwiICsgcmFuZG9tV29yZFR5cGUucHJvcGVydHlOYW1lLCByYW5kb21UZW5zZSk7XG4gICAgLy8gIC8vY29uc29sZS5sb2coXCJSYW5kb20gVGVuc2UgQ29uanVnYXRpb24gS2V5IGluIFwiICsgcmFuZG9tVGVuc2UucHJvcGVydHlOYW1lLCByYW5kb21UZW5zZUNvbmp1Z2F0aW9uS2V5KTtcbiAgICAvL1xuICAgIC8vICByZXR1cm4ge1xuICAgIC8vICAgIHZlcmJUeXBlOiB3b3JkVHlwZSxcbiAgICAvLyAgICB3b3JkOiB3b3JkR3JvdXAsXG4gICAgLy8gICAgdGVuc2U6IHRlbnNlLFxuICAgIC8vICAgIGNvbmp1Z2F0aW9uOiBjb25qdWdhdGlvbixcbiAgICAvLyAgICBhcHBlbmRUbzogYXBwZW5kVG9cbiAgICAvLyAgfTtcbiAgICAvL31cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVmVyYkNvbmp1Z2F0aW9uUXVpelF1ZXN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ1F1ZXN0aW9uIEdlbmVyYXRlZCcpO1xuXG4gICAgICB2YXIgZW5nbGlzaFR5cGU7XG4gICAgICB2YXIgcGVyc29uO1xuICAgICAgdmFyIGNvbm5lY3RvclN0cmluZztcbiAgICAgIHZhciBwb3NzaWJsZVBlcnNvbnM7XG4gICAgICB2YXIgc3BhbmlzaEZpcnN0UGFydDtcblxuICAgICAgLy8gR2V0IGEgcmFuZG9tIHZlcmIgdHlwZShpLmUuIC1hciB3b3JkcyksIHJhbmRvbSB0ZW5zZShpLmUuIGZ1dHVyZSksIGFuZCBhIHJhbmRvbSBjb25qdWdhdGlvbihpLmUuIGVsbG9zKVxuICAgICAgICAvLyBFeGFtcGxlIG91dHB1dDpcbiAgICAgICAgLy9cImFyLXByZXNlbnQteW9cIjoge1xuICAgICAgICAvLyAgICBcImFuc3dlckNvcnJlY3RcIjpmYWxzZSxcbiAgICAgICAgLy8gICAgXCJhbnN3ZXJBdHRlbXB0ZWRcIjowLFxuICAgICAgICAvLyAgICBcIndvcmRUeXBlXCI6XCJhcldvcmRzXCIsXG4gICAgICAgIC8vICAgIFwidGVuc2VcIjpcInByZXNlbnRcIixcbiAgICAgICAgLy8gICAgXCJhcHBlbmRUb1wiOlwic3RlbVwiLFxuICAgICAgICAvLyAgICBcInBlcnNvblwiOlwieW9cIixcbiAgICAgICAgLy8gICAgXCJjb25qdWdhdGlvblwiOlwib1wiXG4gICAgICAgIC8vICB9XG5cbiAgICAgIHZhciBnZW5lcmF0ZWRDb25qdWdhdGlvbkdyb3VwID0gZ2V0UmFuZG9tUHJvcGVydHkocXVpekNvbmp1Z2F0aW9ucyk7XG4gICAgICB2YXIgY29uanVnYXRpb25Hcm91cE5hbWUgPSBnZW5lcmF0ZWRDb25qdWdhdGlvbkdyb3VwLnByb3BlcnR5TmFtZTtcbiAgICAgIHZhciBjb25qdWdhdGlvbkdyb3VwID0gZ2VuZXJhdGVkQ29uanVnYXRpb25Hcm91cC5wcm9wZXJ0eVZhbHVlO1xuXG4gICAgICAvLyBCZWZvcmUgZ2V0dGluZyBhIHdvcmQgdG8gY29uanVnYXRlIG9uLCBjaGVjayB0byBtYWtlIHN1cmUgdGhhdCBhdCBsZWFzdCBvbmUgd29yZCBmcm9tIHRoZSBjdXJyZW50IHdvcmQgdHlwZSAoYXIsIGVyLCBpcikgaXMgYXZhaWxhYmxlIGluIHRoZSB2ZXJicyBvYmplY3QgYmVpbmcgcGFzc2VkIGluXG4gICAgICBjb25zb2xlLmxvZyhcInZlcmJzLnZhbHVlc1wiLCB2ZXJicy52YWx1ZXMpO1xuICAgICAgdmFyIHZlcmJzV29yZFR5cGVzID0gW107XG4gICAgICAkLmVhY2godmVyYnMudmFsdWVzLCBmdW5jdGlvbiAoaW5kZXgsIHdvcmQpIHtcbiAgICAgICAgLy8gQWRkIHRoZSB2ZXJiIHdvcmRUeXBlIHRvIHRoZSB2ZXJic1dvcmRUeXBlcyBhcnJheSBpZiB0aGUgd29yZFR5cGUgaXMgbm90IGFscmVhZHkgaW4gdGhlcmVcbiAgICAgICAgdmVyYnNXb3JkVHlwZXMgPSBwdXNoV29yZFR5cGVUb0FycmF5KHZlcmJzV29yZFR5cGVzLCB3b3JkLmFkZGl0aW9uYWwudmVyYkVuZGluZyk7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJ2ZXJic1dvcmRUeXBlc1wiLCB2ZXJic1dvcmRUeXBlcyk7XG5cbiAgICAgIHZhciBub3RTdXBwb3J0ZWRXb3JkVHlwZXMgPSBbXTtcbiAgICAgICQuZWFjaChxdWl6Q29uanVnYXRpb25Xb3JkVHlwZXMsIGZ1bmN0aW9uIChpbmRleCwgY29uanVnYXRpb25Xb3JkVHlwZSkge1xuICAgICAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgZWFjaCB3b3JkIHR5cGUgdGhhdCBpcyBiZWluZyB1c2VkIGZvciB0aGUgY29uanVnYXRpb25zIGlzIGFsc28gYXZhaWxhYmxlIGluIHRoZSB2ZXJicyB3b3JkIHR5cGVzXG4gICAgICAgIGlmICgkLmluQXJyYXkoY29uanVnYXRpb25Xb3JkVHlwZSwgdmVyYnNXb3JkVHlwZXMpID09IC0xKSB7XG4gICAgICAgICAgbm90U3VwcG9ydGVkV29yZFR5cGVzLnB1c2goY29uanVnYXRpb25Xb3JkVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZihub3RTdXBwb3J0ZWRXb3JkVHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhbGVydCgnVGhlIHZlcmIgc2V0IGNvbmZpZ3VyZWQgZm9yIHRoaXMgcXVpeiBkb2VzblxcJ3QgaGF2ZSBhbGwgdGhlIG5lY2Vzc2FyeSB3b3JkIHR5cGVzIGF2YWlsYWJsZS4gUGxlYXNlIGVuc3VyZSB5b3UgaGF2ZSBzZXZlcmFsIHdvcmRzIGZyb20gdGhlIGZvbGxvd2luZyB3b3JkIHR5cGVzIGluIHlvdXIgc2V0OiAnICsgbm90U3VwcG9ydGVkV29yZFR5cGVzLmpvaW4oJyBhbmQgJykpO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgYSByYW5kb20gdmVyYiB0byB0ZXN0IHRoZSBjb25qdWdhdGlvbiB3aXRoXG4gICAgICB2YXIgd29yZEdyb3VwID0gZ2V0UmFuZG9tUHJvcGVydHkodmVyYnMudmFsdWVzKVsncHJvcGVydHlWYWx1ZSddO1xuICAgICAgbGFzdFdvcmRHcm91cCA9IHdvcmRHcm91cDtcblxuICAgICAgY29uc29sZS5sb2coXCJjb25qdWdhdGlvbkdyb3VwOiBcIiwgY29uanVnYXRpb25Hcm91cCk7XG4gICAgICBjb25zb2xlLmxvZyhcInZlcmJzOiBcIiwgdmVyYnMpO1xuICAgICAgY29uc29sZS5sb2coXCJ3b3JkR3JvdXA6IFwiLCB3b3JkR3JvdXApO1xuXG4gICAgICAvLyBCYXNlZCBvbiB0aGUgUmFuZG9tIENvbmp1Z2F0aW9uIHRoYXQgd2FzIGRldGVybWluZWQgKGkuZS4geW8sIHR1LCBlbCwgbm9zb3Ryb3MsIG9yIGVsbG9zKSwgZGV0ZXJtaW5lIHdoaWNoIHZhcmlhdGlvbiB0byB1c2UgaWYgYXBwbGljYWJsZSAoYXMgaW4gZWwgd2hpY2ggY2FuIGJlIHN1YnN0aXR1dGVkIHdpdGggZWxsYSBvciB1ZCwgb3IgYXMgaW4gZWxsb3Mgd2hpY2ggY2FuIGJlIHN1YnN0aXR1dGVkIHdpdGggZWxsYXMgb3IgdWRzKVxuICAgICAgc3dpdGNoKGNvbmp1Z2F0aW9uR3JvdXAucGVyc29uKSB7XG4gICAgICAgIGNhc2UgXCJ5b1wiOlxuICAgICAgICAgIHBlcnNvbiA9IHtcbiAgICAgICAgICAgIGVuZ2xpc2g6IFwiSVwiLFxuICAgICAgICAgICAgc3BhbmlzaDogXCJ5b1wiXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInR1XCI6XG4gICAgICAgICAgcGVyc29uID0ge1xuICAgICAgICAgICAgZW5nbGlzaDogXCJ5b3UgKGluZm9ybWFsKVwiLFxuICAgICAgICAgICAgc3BhbmlzaDogXCJ0w7pcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlbFwiOlxuICAgICAgICAgIHBvc3NpYmxlUGVyc29ucyA9IHtcbiAgICAgICAgICAgIGVsOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwiaGVcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJlbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxsYToge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcInNoZVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcImVsbGFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVkOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwieW91IChmb3JtYWwpXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwidWRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJvc2E6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJSb3NhXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiUm9zYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgS2V2aW46IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJLZXZpblwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcIktldmluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gUGljayBhIHJhbmRvbSBwZXJzb24gdG8gZGlzcGxheSBmb3IgdGhlIHF1aXogKGVsLCBlbGxhLCBvciB1ZClcbiAgICAgICAgICBwZXJzb24gPSBnZXRSYW5kb21Qcm9wZXJ0eShwb3NzaWJsZVBlcnNvbnMpLnByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJub3NvdHJvc1wiOlxuICAgICAgICAgIHBvc3NpYmxlUGVyc29ucyA9IHtcbiAgICAgICAgICAgIG5vc290cm9zOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwid2VcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJub3NvdHJvc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeW91X2FuZF9pOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwiWW91IGFuZCBJXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwidMO6IHkgeW9cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBQaWNrIGEgcmFuZG9tIHBlcnNvbiB0byBkaXNwbGF5IGZvciB0aGUgcXVpeiAobm9zb3Ryb3Mgb3IgdMO6IHkgeW8pXG4gICAgICAgICAgcGVyc29uID0gZ2V0UmFuZG9tUHJvcGVydHkocG9zc2libGVQZXJzb25zKS5wcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZWxsb3NcIjpcbiAgICAgICAgICBwb3NzaWJsZVBlcnNvbnMgPSB7XG4gICAgICAgICAgICBlbGxvczoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcInRoZXkgKG1hbGUgb3IgbWl4ZWQpXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiZWxsb3NcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsbGFzOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwidGhleSAoZmVtYWxlKVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcImVsbGFzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1ZHM6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJ5b3UgYWxsXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwidWRzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3VydHluaW5lcnM6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJUaGUgNDllcnNcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJMb3MgNDllcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyb3VwX29mX2NoaWxkcmVuOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwiVGhlIGNoaWxkcmVuIChmZW1hbGUpXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiTGFzIG5pw7Fhc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFBpY2sgYSByYW5kb20gcGVyc29uIHRvIGRpc3BsYXkgZm9yIHRoZSBxdWl6IChlbGxvcywgZWxsYXMsIG9yIHVkcylcbiAgICAgICAgICBwZXJzb24gPSBnZXRSYW5kb21Qcm9wZXJ0eShwb3NzaWJsZVBlcnNvbnMpLnByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGVuZ2xpc2hUeXBlIC0gVGhlIGNvbmp1Z2F0aW9uIHRoYXQgaXMgdG8gYmUgdXNlZCB0aGF0IGNvcnJlbGF0ZXMgd2l0aCB0aGUgc3BhbmlzaCBjb25qdWdhdGlvbiAtIGkuZSBmb3IgdGhlIHdvcmQgXCJ0byBydW5cIiwgdGhlIDMgdmFyaWF0aW9ucyBhcmUgcnVuIChwcmVzZW50KSwgcnVucyAocHJlc2VudDNyZFBlcnNvbiksIG9yIHJhbihwYXN0KVxuICAgICAgaWYgKGNvbmp1Z2F0aW9uR3JvdXAudGVuc2UgPT09IFwicHJlc2VudFwiICYmIGNvbmp1Z2F0aW9uR3JvdXAuY29uanVnYXRpb24gPT09IFwiZWxcIikge1xuICAgICAgICBlbmdsaXNoVHlwZSA9IFwicHJlc2VudDNyZFBlcnNvblwiO1xuICAgICAgfSBlbHNlIGlmIChjb25qdWdhdGlvbkdyb3VwLnRlbnNlID09PSBcInBhc3RcIikge1xuICAgICAgICBlbmdsaXNoVHlwZSA9IFwicGFzdFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5nbGlzaFR5cGUgPSBcInByZXNlbnRcIjtcbiAgICAgIH1cblxuICAgICAgLy8gY29ubmVjdG9yU3RyaW5nIC0gVGhlIGNvbm5lY3RvciB3b3JkIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgcXVpeiBpbiB0aGUgZW5nbGlzaCBzZW50ZW5jZSB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHRyYW5zbGF0ZWQgKE9ubHkgYXBwbGllcyB0byB0aGUgY29uZGl0aW9uYWwsIGZ1dHVyZSwgYW5kIGltcGVyZmVjdCB0ZW5zZXMpLiBpLmUuIGZvciB0aGUgc2VudGVuY2UgSmltbXkgd2lsbCBydW4gKGZ1dHVyZSksIEppbW15IHdvdWxkIHJ1biAoY29uZGl0aW9uYWwpLCBvciBKaW1teSB1c2VkIHRvIHJ1biAoaW1wZXJmZWN0KVxuICAgICAgaWYgKGNvbmp1Z2F0aW9uR3JvdXAudGVuc2UgPT09IFwiY29uZGl0aW9uYWxcIikge1xuICAgICAgICBjb25uZWN0b3JTdHJpbmcgPSBcIndvdWxkXCI7XG4gICAgICB9IGVsc2UgaWYgKGNvbmp1Z2F0aW9uR3JvdXAudGVuc2UgPT09IFwiZnV0dXJlXCIpIHtcbiAgICAgICAgY29ubmVjdG9yU3RyaW5nID0gXCJ3aWxsXCI7XG4gICAgICB9IGVsc2UgaWYgKGNvbmp1Z2F0aW9uR3JvdXAudGVuc2UgPT09IFwiaW1wZXJmZWN0XCIpIHtcbiAgICAgICAgY29ubmVjdG9yU3RyaW5nID0gXCJ1c2VkIHRvXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25uZWN0b3JTdHJpbmcgPSBcIiBcIjtcbiAgICAgIH1cblxuICAgICAgaWYoY29ubmVjdG9yU3RyaW5nICE9PSBcIiBcIikge1xuICAgICAgICBjb25uZWN0b3JTdHJpbmcgPSBcIiBcIiArIGNvbm5lY3RvclN0cmluZyArIFwiIFwiO1xuICAgICAgfVxuXG4gICAgICBpZihjb25qdWdhdGlvbkdyb3VwLmFwcGVuZFRvID09PSBcInN0ZW1cIikge1xuICAgICAgICBzcGFuaXNoRmlyc3RQYXJ0ID0gZ2V0U3RlbSh3b3JkR3JvdXAuc3BhbmlzaCkuc3RlbTtcbiAgICAgIH0gZWxzZSBpZihjb25qdWdhdGlvbkdyb3VwLmFwcGVuZFRvID09PSBcImluZmluaXRpdmVcIikge1xuICAgICAgICBzcGFuaXNoRmlyc3RQYXJ0ID0gd29yZEdyb3VwLnNwYW5pc2g7XG4gICAgICB9XG5cblxuICAgICAgLy9jb25zb2xlLmxvZyhcIlBlcnNvbjogXCIsIHBlcnNvbik7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiZW5nbGlzaFR5cGU6IFwiLCBlbmdsaXNoVHlwZSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiY29ubmVjdG9yU3RyaW5nOiBcIiwgY29ubmVjdG9yU3RyaW5nKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJyYW5kb21Xb3JkOiBcIiwgcmFuZG9tV29yZCk7XG4gICAgICAvL1xuICAgICAgLy9jb25zb2xlLmxvZyhcIlNlbnRlbmNlIHRvIG91dHB1dCBpbiBFbmdsaXNoOiBcIiwgcGVyc29uLmVuZ2xpc2ggKyBjb25uZWN0b3JTdHJpbmcgKyByYW5kb21Xb3JkWydlbmdsaXNoJ11bZW5nbGlzaFR5cGVdKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJTZW50ZW5jZSB0byBvdXRwdXQgaW4gU3BhbmlzaDogXCIsIHBlcnNvbi5zcGFuaXNoICsgXCIgXCIgKyBzcGFuaXNoRmlyc3RQYXJ0ICsgcmFuZG9tQ29uanVnYXRpb24uY29uanVnYXRpb24ucHJvcGVydHlWYWx1ZSk7XG5cblxuICAgICAgLy8gUmV0dXJuaW5nIHNlbnRlbmNlIHRvIGJlIGRpc3BsYXllZCAoaS5lLiBTaGUgd2lsbCBlYXQpIGluIGJvdGggbGFuZ3VhZ2VzXG5cbiAgICAgIC8vcmV0dXJuIHtcbiAgICAgIC8vICBlbmdsaXNoOiBwZXJzb24uZW5nbGlzaCArIGNvbm5lY3RvclN0cmluZyArIHJhbmRvbUNvbmp1Z2F0aW9uLndvcmRbJ2VuZ2xpc2gnXVtlbmdsaXNoVHlwZV0sXG4gICAgICAvLyAgc3BhbmlzaDogcGVyc29uLnNwYW5pc2ggKyBcIiBcIiArIHNwYW5pc2hGaXJzdFBhcnQgKyByYW5kb21Db25qdWdhdGlvbi5jb25qdWdhdGlvbi5wcm9wZXJ0eVZhbHVlXG4gICAgICAvL31cblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmdsaXNoOiBwZXJzb24uZW5nbGlzaCArIGNvbm5lY3RvclN0cmluZyArIHdvcmRHcm91cC5hZGRpdGlvbmFsLmVuZ2xpc2hWYXJpYXRpb25zW2VuZ2xpc2hUeXBlXSxcbiAgICAgICAgc3BhbmlzaDogcGVyc29uLnNwYW5pc2ggKyBcIiBcIiArIHNwYW5pc2hGaXJzdFBhcnQgKyBjb25qdWdhdGlvbkdyb3VwLmNvbmp1Z2F0aW9uXG4gICAgICB9XG5cbiAgICB9XG5cblxuXG5cbiAgICAvLyBDcmVhdGUgT2JqZWN0IHRvIGtlZXAgdHJhY2sgb2YgcXVlc3Rpb25zIHRoYXQgd2VyZSBhbHJlYWR5IGFza2VkIGFuZCBpZiB0aGUgdXNlciBhbHJlYWR5IGdvdCB0aGVtIHJpZ2h0IHNvIHRoZXkgZG9uJ3QgYXNrIHRoZW0gYWdhaW5cbiAgICAvL3ZhciBxdWl6U2NvcmUgPSB7fTtcbiAgICAvL3ZhciBxdWl6UXVlc3Rpb247XG4gICAgLy9cbiAgICAvLyQuZWFjaChzcGFuaXNoVGVuc2VzLCBmdW5jdGlvbiAodmVyYlR5cGUsIHRlbnNlcykge1xuICAgIC8vICAkLmVhY2godGVuc2VzLCBmdW5jdGlvbiAodGVuc2UsIHRlbnNlQ29uanVnYXRpb25zKSB7XG4gICAgLy8gICAgJC5lYWNoKHRlbnNlQ29uanVnYXRpb25zLCBmdW5jdGlvbiAodGVuc2VDb25qdWdhdGlvbktleSwgdGVuc2VDb25qdWdhdGlvblZhbHVlKSB7XG4gICAgLy8gICAgICBpZiAodGVuc2VDb25qdWdhdGlvbktleSA9PT0gXCJhcHBlbmRUb1wiKSB7IHJldHVybiB0cnVlOyB9XG4gICAgLy8gICAgICBjcmVhdGVOZXN0ZWRPYmplY3QoIHF1aXpTY29yZSwgW3ZlcmJUeXBlLCB0ZW5zZSwgdGVuc2VDb25qdWdhdGlvbktleV0sIGZhbHNlICk7XG4gICAgLy8gICAgICAvLyBFeGFtcGxlIG91dHB1dDogcXVpelNjb3JlLmFyV29yZHMucHJlc2VudC5lbGxvczogZmFsc2VcbiAgICAvLyAgICB9KTtcbiAgICAvLyAgfSk7XG4gICAgLy99KTtcblxuICAgIC8vY29uc29sZS5sb2coXCJxdWl6U2NvcmU6XCIsIHF1aXpTY29yZSk7XG5cblxuXG4gICAgLy8gQWN0aXZhdGUgdGhlIHF1aXogd2l0aCB0aGUgY2hvc2VuIG9wdGlvbnNcbiAgICBhY3RpdmF0ZVF1aXoocXVpek9wdGlvbnMsIHF1aXpDb25qdWdhdGlvbnMpO1xuICB9XG5cblxuXG5cblxuXG5cblxuXG59KTtcblxuXG5cbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblxuXG4gIGlmICggJCggXCIuanMtcXVpei13b3JkLXJldGVudGlvblwiICkubGVuZ3RoICkge1xuICAgIGhhc0ZpcnN0UXVlc3Rpb25SdW4gPSBmYWxzZTtcblxuICAgIHZhciBxdWl6T3B0aW9ucyA9IHtcbiAgICAgIG9ubHlTaG93VW5hbnN3ZXJlZFF1ZXN0aW9uczogdHJ1ZSxcbiAgICAgIHF1aXpUeXBlOiAncmV0ZW50aW9uJyxcbiAgICAgIC8vcXVpeldvcmRzOiBbbWVtb3JpemVTZXQxLCBtZW1vcml6ZVNldDJdLFxuICAgICAgcXVpeldvcmRzOiBbdGltZVdvcmRzXSxcbiAgICAgIGZ1bmN0aW9uVG9HZW5lcmF0ZVF1aXpRdWVzdGlvbjogZ2VuZXJhdGVXb3JkUmV0ZW50aW9uUXVpelF1ZXN0aW9uXG4gICAgfTtcblxuICAgIHZhciBxdWl6V29yZHMgPSBjcmVhdGVRdWl6KHF1aXpPcHRpb25zLnF1aXpXb3JkcywgcXVpek9wdGlvbnMucXVpelR5cGUpO1xuXG4gICAgY29uc29sZS5sb2coXCJxdWl6V29yZHNcIiwgcXVpeldvcmRzKTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlV29yZFJldGVudGlvblF1aXpRdWVzdGlvbigpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ1F1ZXN0aW9uIEdlbmVyYXRlZCcpO1xuXG4gICAgICB2YXIgcmFuZG9tV29yZEdyb3VwID0gZ2V0UmFuZG9tUHJvcGVydHkocXVpeldvcmRzKVsncHJvcGVydHlWYWx1ZSddO1xuICAgICAgY29uc29sZS5sb2coJ3JhbmRvbVdvcmRHcm91cCcsIHJhbmRvbVdvcmRHcm91cCk7XG5cbiAgICAgIGxhc3RXb3JkR3JvdXAgPSByYW5kb21Xb3JkR3JvdXA7XG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyBsYXN0V29yZEdyb3VwOiBcIiwgbGFzdFdvcmRHcm91cCk7XG4gICAgICAvL0V4YW1wbGUgT3V0cHV0OlxuICAgICAgLy97XG4gICAgICAvLyAgZW5nbGlzaDoge1xuICAgICAgLy8gICAgcGx1cmFsOiBcImZhdGhlcnNcIixcbiAgICAgIC8vICAgICAgc2luZ3VsYXI6IFwiZmF0aGVyXCJcbiAgICAgIC8vICB9LFxuICAgICAgLy8gIHNwYW5pc2g6IHtcbiAgICAgIC8vICAgIHBsdXJhbDogXCJwYWRyZXNcIixcbiAgICAgIC8vICAgICAgc2luZ3VsYXI6IFwicGFkcmVcIlxuICAgICAgLy8gIH0sXG4gICAgICAvLyAgZ2VuZGVyOiBcIm1hbGVcIlxuICAgICAgLy99XG5cbiAgICAgIGlmKHJhbmRvbVdvcmRHcm91cC53b3JkVHlwZSAhPT0gXCJub3VuXCIpIHtcbiAgICAgICAgdmFyIGVuZ2xpc2hPdXRwdXQgPSByYW5kb21Xb3JkR3JvdXAuZW5nbGlzaDtcbiAgICAgICAgdmFyIHNwYW5pc2hPdXRwdXQgPSByYW5kb21Xb3JkR3JvdXAuc3BhbmlzaDtcbiAgICAgIH1cblxuICAgICAgaWYocmFuZG9tV29yZEdyb3VwLndvcmRUeXBlID09PSBcIm5vdW5cIikge1xuICAgICAgICB2YXIgcXVhbnRpdHlUeXBlO1xuICAgICAgICB2YXIgd29yZFRoZUVuZ2xpc2g7XG4gICAgICAgIHZhciB3b3JkQUVuZ2xpc2g7XG4gICAgICAgIHZhciB3b3JkVGhlU3BhbmlzaDtcbiAgICAgICAgdmFyIHdvcmRBU3BhbmlzaDtcbiAgICAgICAgdmFyIGxlYWRXb3JkRW5nbGlzaDtcbiAgICAgICAgdmFyIGxlYWRXb3JkU3BhbmlzaDtcblxuICAgICAgICB2YXIgcmFuZG9tV29yZEdlbmRlciA9IHJhbmRvbVdvcmRHcm91cFsnZ2VuZGVyJ107XG5cbiAgICAgICAgLy8gSWYgdGhlIHBsdXJhbCBwcm9wZXJ0eSBpcyBtaXNzaW5nLCBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHBsdXJhbCBmb3JtIG9mIHRoZSBub3VuIGlzIHNpbXBseSB0aGUgc2luZ3VsYXIgdmVyc2lvbiB3aXRoIGFuIFwic1wiIGF0IHRoZSBlbmQuIEV4OiBcIm5pw7FvXCIgYW5kIFwibmnDsW9zXCIgJiBcImJveVwiIGFuZCBcImJveXNcIlxuICAgICAgICBpZighcmFuZG9tV29yZEdyb3VwLmVuZ2xpc2guaGFzT3duUHJvcGVydHkoXCJwbHVyYWxcIikpIHtcbiAgICAgICAgICByYW5kb21Xb3JkR3JvdXAuZW5nbGlzaC5wbHVyYWwgPSByYW5kb21Xb3JkR3JvdXAuZW5nbGlzaC5zaW5ndWxhciArIFwic1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHBsdXJhbCBwcm9wZXJ0eSBpcyBtaXNzaW5nLCBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHBsdXJhbCBmb3JtIG9mIHRoZSBub3VuIGlzIHNpbXBseSB0aGUgc2luZ3VsYXIgdmVyc2lvbiB3aXRoIGFuIFwic1wiIGF0IHRoZSBlbmQuIEV4OiBcIm5pw7FvXCIgYW5kIFwibmnDsW9zXCIgJiBcImJveVwiIGFuZCBcImJveXNcIlxuICAgICAgICBpZighcmFuZG9tV29yZEdyb3VwLnNwYW5pc2guaGFzT3duUHJvcGVydHkoXCJwbHVyYWxcIikpIHtcbiAgICAgICAgICByYW5kb21Xb3JkR3JvdXAuc3BhbmlzaC5wbHVyYWwgPSByYW5kb21Xb3JkR3JvdXAuc3BhbmlzaC5zaW5ndWxhciArIFwic1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdldFJhbmRvbUludCgwLCAxKSA9PT0gMSkge1xuICAgICAgICAgIHF1YW50aXR5VHlwZSA9IFwic2luZ3VsYXJcIjtcblxuICAgICAgICAgIGlmIChyYW5kb21Xb3JkR2VuZGVyID09PSBcIm1hbGVcIikge1xuICAgICAgICAgICAgd29yZFRoZVNwYW5pc2ggPSBcImVsXCI7XG4gICAgICAgICAgICB3b3JkQVNwYW5pc2ggPSBcInVuXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21Xb3JkR2VuZGVyID09PSBcImZlbWFsZVwiKSB7XG4gICAgICAgICAgICB3b3JkVGhlU3BhbmlzaCA9IFwibGFcIjtcbiAgICAgICAgICAgIHdvcmRBU3BhbmlzaCA9IFwidW5hXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd29yZFRoZUVuZ2xpc2ggPSBcInRoZVwiO1xuICAgICAgICAgIHdvcmRBRW5nbGlzaCA9IFwiYVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1YW50aXR5VHlwZSA9IFwicGx1cmFsXCI7XG5cbiAgICAgICAgICBpZiAocmFuZG9tV29yZEdlbmRlciA9PT0gXCJtYWxlXCIpIHtcbiAgICAgICAgICAgIHdvcmRUaGVTcGFuaXNoID0gXCJsb3NcIjtcbiAgICAgICAgICAgIHdvcmRBU3BhbmlzaCA9IFwidW5vc1wiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmFuZG9tV29yZEdlbmRlciA9PT0gXCJmZW1hbGVcIikge1xuICAgICAgICAgICAgd29yZFRoZVNwYW5pc2ggPSBcImxhc1wiO1xuICAgICAgICAgICAgd29yZEFTcGFuaXNoID0gXCJ1bmFzXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd29yZFRoZUVuZ2xpc2ggPSBcInRoZVwiO1xuICAgICAgICAgIHdvcmRBRW5nbGlzaCA9IFwic29tZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhbmRvbVdvcmRFbmdsaXNoID0gcmFuZG9tV29yZEdyb3VwWydlbmdsaXNoJ11bcXVhbnRpdHlUeXBlXTtcbiAgICAgICAgdmFyIHJhbmRvbVdvcmRTcGFuaXNoID0gcmFuZG9tV29yZEdyb3VwWydzcGFuaXNoJ11bcXVhbnRpdHlUeXBlXTtcblxuICAgICAgICAvLyBSYW5kb21seSBzaG93IGVpdGhlciB0aGUgXCJ0aGVcIiBvciBcImFcIiBsZWFkIHdvcmRcbiAgICAgICAgaWYgKGdldFJhbmRvbUludCgwLCAxKSA9PT0gMSkge1xuICAgICAgICAgIGxlYWRXb3JkRW5nbGlzaCA9IHdvcmRUaGVFbmdsaXNoO1xuICAgICAgICAgIGxlYWRXb3JkU3BhbmlzaCA9IHdvcmRUaGVTcGFuaXNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlYWRXb3JkRW5nbGlzaCA9IHdvcmRBRW5nbGlzaDtcbiAgICAgICAgICBsZWFkV29yZFNwYW5pc2ggPSB3b3JkQVNwYW5pc2g7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZW5nbGlzaE91dHB1dCA9IGxlYWRXb3JkRW5nbGlzaCArIFwiIFwiICsgcmFuZG9tV29yZEVuZ2xpc2g7XG4gICAgICAgIHZhciBzcGFuaXNoT3V0cHV0ID0gbGVhZFdvcmRTcGFuaXNoICsgXCIgXCIgKyByYW5kb21Xb3JkU3BhbmlzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5nbGlzaDogZW5nbGlzaE91dHB1dCxcbiAgICAgICAgc3BhbmlzaDogc3BhbmlzaE91dHB1dFxuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvLyBBY3RpdmF0ZSB0aGUgcXVpeiB3aXRoIHRoZSBjaG9zZW4gb3B0aW9uc1xuICAgIGFjdGl2YXRlUXVpeihxdWl6T3B0aW9ucywgcXVpeldvcmRzKTtcbiAgfVxuXG59KTtcbiIsIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgaWYgKCAkKCBcIi5qcy13b3Jkc1wiICkubGVuZ3RoICkge1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb25qdWdhdGlvblRhYmxlKHdvcmQsIHRlbnNlKSB7XG4gICAgICB2YXIgbGFzdDIgPSBnZXRTdGVtKHdvcmQpLmxhc3QyO1xuICAgICAgdmFyIHN0ZW0gPSBnZXRTdGVtKHdvcmQpLnN0ZW07XG5cbiAgICAgIHZhciBjdXJyZW50VGVuc2UgPSBzcGFuaXNoVGVuc2VzW2xhc3QyICsgXCJXb3Jkc1wiXVt0ZW5zZV07XG4gICAgICB2YXIgYXBwZW5kVG8gPSBjdXJyZW50VGVuc2UuYXBwZW5kVG87XG5cbiAgICAgIGZ1bmN0aW9uIGNvbmp1Z2F0ZVdvcmQoY29uanVnYXRpb25QZXJzb24pIHtcbiAgICAgICAgaWYgKGFwcGVuZFRvID09PSBcInN0ZW1cIikge1xuICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdhcHBlbmQtdG8nPlwiICsgc3RlbSArIFwiPC9zcGFuPlwiICsgY3VycmVudFRlbnNlW2Nvbmp1Z2F0aW9uUGVyc29uXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nYXBwZW5kLXRvJz5cIiArIHdvcmQgKyBcIjwvc3Bhbj5cIiArIGN1cnJlbnRUZW5zZVtjb25qdWdhdGlvblBlcnNvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHlvID0gY29uanVnYXRlV29yZChcInlvXCIpO1xuICAgICAgdmFyIHR1ID0gY29uanVnYXRlV29yZChcInR1XCIpO1xuICAgICAgdmFyIGVsID0gY29uanVnYXRlV29yZChcImVsXCIpO1xuICAgICAgdmFyIG5vc290cm9zID0gY29uanVnYXRlV29yZChcIm5vc290cm9zXCIpO1xuICAgICAgdmFyIGVsbG9zID0gY29uanVnYXRlV29yZChcImVsbG9zXCIpO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKFwid29yZDogXCIsIHdvcmQpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcImxhc3QyOiBcIiwgbGFzdDIpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInN0ZW06IFwiLCBzdGVtKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRUbzogXCIsIGFwcGVuZFRvKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ5bzogXCIsIHlvKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0dTogXCIsIHR1KTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJlbDogXCIsIGVsKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJub3NvdHJvczogXCIsIG5vc290cm9zKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJlbGxvczogXCIsIGVsbG9zKTtcblxuICAgICAgdmFyIGdlbmVyYXRlZFRhYmxlID0gXCI8aDM+XCIgKyB0ZW5zZSArIFwiIFRlbnNlPC9oMz5cIjtcbiAgICAgIGdlbmVyYXRlZFRhYmxlICs9IFwiPHRhYmxlPlwiICtcbiAgICAgICAgXCI8dHI+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi1wZXJzb24nPnlvPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgeW8gKyBcIjwvdGQ+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi1wZXJzb24nPm5vc290cm9zPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgbm9zb3Ryb3MgKyBcIjwvdGQ+PC90cj5cIiArXG4gICAgICAgIFwiPHRyPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz50w7o8L3RkPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tdGVybSc+XCIgKyB0dSArIFwiPC90ZD48dGQgY2xhc3M9J2Rpc2FibGVkJz48L3RkPjx0ZCBjbGFzcz0nZGlzYWJsZWQnPjwvdGQ+PC90cj5cIiArXG4gICAgICAgIFwiPHRyPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz5lbC9lbGxhL1VkLjwvdGQ+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi10ZXJtJz5cIiArIGVsICsgXCI8L3RkPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz5lbGxvcy9lbGxhcy9VZHMuPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgZWxsb3MgKyBcIjwvdGQ+PC90cj5cIiArXG4gICAgICAgIFwiPC90YWJsZT5cIjtcblxuICAgICAgcmV0dXJuIGdlbmVyYXRlZFRhYmxlO1xuICAgIH1cblxuICAgIC8vZ2VuZXJhdGVDb25qdWdhdGlvblRhYmxlKFwiYXByZW5kZXJcIiwgXCJwYXN0XCIpO1xuXG5cblxuICAgIC8vIEVtcHR5IHRoZSBjb250YWluZXIgZm9yIHRoZSBjb25qdWdhdGlvbiB3b3JkcyB0YWJsZVxuICAgICQoXCIuanMtY29uanVnYXRpb24td29yZHMtY2hhcnRcIikuaHRtbChcIlwiKTtcblxuICAgIC8vIENyZWF0ZSBhIHRhYmxlIG9mIHdvcmRzXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSB2ZXJicyBvYmplY3RcbiAgICAkLmVhY2godmVyYnMsIGZ1bmN0aW9uICh2ZXJiVHlwZSwgd29yZHMpIHtcbiAgICAgIHZhciB3b3Jkc1RhYmxlID0gXCI8dGFibGUgY2xhc3M9J3dvcmRzJz5cIjtcblxuICAgICAgLy9jb25zb2xlLmxvZyh2ZXJiVHlwZSArIFwiOiBcIiArIHdvcmRzKTtcbiAgICAgIC8vIEZvciBlYWNoIHRhYmxlIGNvbHVtbiwgdXNlIHRoZSB2ZXJiVHlwZSAoaS5lLiBhcldvcmRzLCBlcldvcmRzLCBvciBpcldvcmRzKSBhcyB0aGUgaGVhZGVyXG4gICAgICB3b3Jkc1RhYmxlICs9IFwiPHRyPjx0aD5cIiArIHZlcmJUeXBlICsgXCI8L3RoPlwiO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCB3b3JkIGZvciB0aGUgY3VycmVudCB2ZXJiVHlwZVxuICAgICAgJC5lYWNoKHdvcmRzLCBmdW5jdGlvbiAoaW5kZXgsIHdvcmQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbmRleCArIFwiOiBcIiArIHdvcmQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiU3BhbmlzaCBXb3JkOiBcIiwgd29yZC5zcGFuaXNoLndvcmQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyByb3cgdGhhdCBjb250YWlucyB0aGUgd29yZCBpbiBzcGFuaXNoIHdpdGggYSBsaW5rIHRvIG9wZW4gYSBtb2RhbCB3aW5kb3cgdGhhdCBkaXNwbGF5cyBhbGwgdGhlIGRpZmZlcmVudCBjb25qdWdhdGlvbiB0YWJsZXMgZm9yIHRoYXQgc3BlY2lmaWMgd29yZFxuICAgICAgICB3b3Jkc1RhYmxlICs9IFwiPHRyPjx0ZD48YSBjbGFzcz0nZmFuY3lib3gnIGhyZWY9JyN3b3JkLWRldGFpbHMnPlwiICsgd29yZC5zcGFuaXNoLndvcmQgKyBcIjwvYT48L3RkPlwiO1xuICAgICAgfSk7XG5cbiAgICAgIHdvcmRzVGFibGUgKz0gXCI8L3RhYmxlPlwiO1xuXG4gICAgICAvLyBBZGQgdGhlIG5ld2x5IGNyZWF0ZWQgdGFibGUgdG8gdGhlIGNvbmp1Z2F0aW9uIHdvcmRzIHRhYmxlIGNvbnRhaW5lclxuICAgICAgJChcIi5qcy1jb25qdWdhdGlvbi13b3Jkcy1jaGFydFwiKS5hcHBlbmQod29yZHNUYWJsZSk7XG5cbiAgICB9KTtcblxuICAgIC8vJCgnLmZhbmN5Ym94JykuZmFuY3lib3goKTtcblxuXG4gICAgLy8gTG9hZCB0aGUgd29yZCBkZXRhaWxzIGRpdiB3aXRoIHRoZSBjb3JyZWN0IGNvbnRlbnQgd2hlbiBhIHdvcmQgaXMgY2xpY2tlZFxuICAgIC8vIEN1cnJlbnRseSB0aGlzIGlzIGxvb3BpbmcgdGhyb3VnaCBhbGwgdGhlIHdvcmRzIGF2YWlsYWJsZSBpbiBvcmRlciB0byBmaW5kIGEgbWF0Y2ggdG8gdGhlIHdvcmQgdGhhdCB3YXMgY2xpY2tlZCBhbmQgd2lsbCB0aGVuIGxvYWQgdXAgdGhlIGNvcnJlY3QgaW5mbyBpbnRvIHRoZSBtb2RhbCB3aW5kb3cgYW5kIG9wZW5zIGl0XG4gICAgLy8gVE9ETzogVXNlIGEgZGVlcCBnZXQgZnVuY3Rpb25hbGl0eSB0byBmaW5kIHRoZSBvYmplY3QgZm9yIHRoZSB3b3JkIGluc3RlYWQgb2YgbG9vcGluZyB0aHJvdWdoIGV2ZXJ5dGhpbmdcbiAgICAkKCdhW2hyZWY9XCIjd29yZC1kZXRhaWxzXCJdJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIHNwYW5pc2hXb3JkQ2xpY2tlZCA9ICQodGhpcykudGV4dCgpO1xuXG4gICAgICAkLmVhY2godmVyYnMsIGZ1bmN0aW9uICh2ZXJiVHlwZSwgd29yZHMpIHtcbiAgICAgICAgJC5lYWNoKHdvcmRzLCBmdW5jdGlvbiAoaW5kZXgsIHdvcmQpIHtcbiAgICAgICAgICBpZiAod29yZC5zcGFuaXNoLndvcmQgPT09IHNwYW5pc2hXb3JkQ2xpY2tlZCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzcGFuaXNoV29yZENsaWNrZWQgKyAnIHdhcyBmb3VuZCcpO1xuICAgICAgICAgICAgJChcIiN3b3JkLWRldGFpbHNcIikuY2hpbGRyZW4oXCJoMlwiKS5odG1sKHdvcmQuc3BhbmlzaC53b3JkICsgXCIgLSA8c3BhbiBjbGFzcz0nZW5nbGlzaC1kZWZpbml0aW9uJz5cIiArIHdvcmQuZW5nbGlzaC5kZWZpbml0aW9uICsgXCI8L3NwYW4+XCIpO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHNwYW5pc2hUZW5zZXMgb2JqZWN0IHRvIGdldCBlYWNoIGNvbmp1Z2F0aW9uIHRlbnNlIHN1cHBvcnRlZCBmb3IgdGhlIGN1cnJlbnQgdmVyYiB0eXBlIChpLmUuIC1hciB3b3JkcykgYW5kIHRoZW4gY3JlYXRlIGNvbmp1Z2F0aW9uIHRhYmxlcyBmb3IgdGhlIGN1cnJlbnQgd29yZCBhbmQgdGhlIHN1cHBvcnRlZCB0ZW5zZXNcbiAgICAgICAgICAgIHZhciB0ZW5zZVRhYmxlcyA9IFwiXCI7XG4gICAgICAgICAgICAkLmVhY2goc3BhbmlzaFRlbnNlc1t2ZXJiVHlwZV0sIGZ1bmN0aW9uICh0ZW5zZSwgcHJvcGVydGllc09iamVjdCkge1xuICAgICAgICAgICAgICB0ZW5zZVRhYmxlcyArPSBnZW5lcmF0ZUNvbmp1Z2F0aW9uVGFibGUod29yZC5zcGFuaXNoLndvcmQsIHRlbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmpzLWNvbmp1Z2F0aW9uLXRhYmxlc1wiKS5odG1sKHRlbnNlVGFibGVzKTtcblxuICAgICAgICAgICAgLy8gQnJlYWsgb3V0IG9mICQuZWFjaCBsb29wIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3ODQ3ODAvaG93LXRvLWJyZWFrLW91dC1vZi1qcXVlcnktZWFjaC1sb29wKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIH0pLmZhbmN5Ym94KCk7XG4gIH1cblxufSk7IiwiLy8gRnJvbTogaHR0cDovL2NvZGVwZW4uaW8vemVja2R1ZGUvcGVuL0VLQkp5UlxuXG4vLyBvbiBwYWdlIGxvYWQuLi5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBtb3ZlUHJvZ3Jlc3NCYXIoKTtcbn0pO1xuXG4vLyBvbiBicm93c2VyIHJlc2l6ZS4uLlxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgbW92ZVByb2dyZXNzQmFyKCk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ3Byb2dyZXNzLWNoYW5nZWQnLCBmdW5jdGlvbihldmVudCwgbnVtV29yZHNBbnN3ZXJlZENvcnJlY3QsIGNvcnJlY3RQZXJjZW50YWdlKSB7XG4gIC8vY29uc29sZS5sb2coJ251bVdvcmRzQW5zd2VyZWRDb3JyZWN0OiAnLCBudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdCk7XG4gIC8vY29uc29sZS5sb2coJ2NvcnJlY3RQZXJjZW50YWdlOiAnLCBjb3JyZWN0UGVyY2VudGFnZSk7XG5cbiAgLy8gVXBkYXRlIHRoZSBwcm9ncmVzcyBwZXJjZW50YWdlIG9uIHRoZSBlbGVtZW50XG4gICQoJy5wcm9ncmVzcy13cmFwJykuZGF0YSgncHJvZ3Jlc3MtcGVyY2VudCcsIGNvcnJlY3RQZXJjZW50YWdlKTtcbiAgbW92ZVByb2dyZXNzQmFyKCk7XG5cbiAgLy8gVXBkYXRlIHRoZSBzY29yZSBpbiB0aGUgcHJvZ3Jlc3MgYmFyXG4gICQoJy5wcm9ncmVzcycpLmZpbmQoJy5udW0tYW5zd2VyZWQtY29ycmVjdCcpLnRleHQobnVtV29yZHNBbnN3ZXJlZENvcnJlY3QpO1xufSk7XG5cbi8vIFNJR05BVFVSRSBQUk9HUkVTU1xuZnVuY3Rpb24gbW92ZVByb2dyZXNzQmFyKCkge1xuICAvL2NvbnNvbGUubG9nKFwibW92ZVByb2dyZXNzQmFyXCIpO1xuICB2YXIgZ2V0UGVyY2VudCA9ICgkKCcucHJvZ3Jlc3Mtd3JhcCcpLmRhdGEoJ3Byb2dyZXNzLXBlcmNlbnQnKSAvIDEwMCk7XG4gIHZhciBnZXRQcm9ncmVzc1dyYXBXaWR0aCA9ICQoJy5wcm9ncmVzcy13cmFwJykud2lkdGgoKTtcbiAgdmFyIHByb2dyZXNzVG90YWwgPSBnZXRQZXJjZW50ICogZ2V0UHJvZ3Jlc3NXcmFwV2lkdGg7XG4gIHZhciBhbmltYXRpb25MZW5ndGggPSAyNTAwO1xuXG4gIC8vY29uc29sZS5sb2coXCJnZXRQZXJjZW50OiBcIiwgZ2V0UGVyY2VudCk7XG5cbiAgLy8gb24gcGFnZSBsb2FkLCBhbmltYXRlIHBlcmNlbnRhZ2UgYmFyIHRvIGRhdGEgcGVyY2VudGFnZSBsZW5ndGhcbiAgLy8gLnN0b3AoKSB1c2VkIHRvIHByZXZlbnQgYW5pbWF0aW9uIHF1ZXVlaW5nXG4gICQoJy5wcm9ncmVzcy1iYXInKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgbGVmdDogcHJvZ3Jlc3NUb3RhbFxuICB9LCBhbmltYXRpb25MZW5ndGgpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
