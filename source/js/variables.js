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
