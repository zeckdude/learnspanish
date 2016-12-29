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
      quizWords: [reflexiveVerbsSet1],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcmlhYmxlcy5qcyIsImZ1bmN0aW9ucy5qcyIsInF1aXotdmVyYi1jb25qdWdhdGlvbi5qcyIsInF1aXotd29yZC1yZXRlbnRpb24uanMiLCJ3b3Jkcy5qcyIsInByb2dyZXNzLWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHdvcmRzID0ge1xuICB3b3JkVHlwZTogXCJ3b3JkXCIsXG4gIHZhbHVlczoge1xuICAgIGN1YW5kbzoge1xuICAgICAgc3BhbmlzaDogXCJjdWFuZG9cIixcbiAgICAgIGVuZ2xpc2g6IFwid2hlblwiXG4gICAgfSxcbiAgICBob2xhOiB7XG4gICAgICBzcGFuaXNoOiBcImhvbGFcIixcbiAgICAgIGVuZ2xpc2g6IFwiaGVsbG9cIlxuICAgIH0sXG4gICAgdGFtcG9jbzoge1xuICAgICAgc3BhbmlzaDogXCJ0YW1wb2NvXCIsXG4gICAgICBlbmdsaXNoOiBcIm5laXRoZXIvbm9yXCJcbiAgICB9LFxuICAgIHRhbWJpZW46IHtcbiAgICAgIHNwYW5pc2g6IFwidGFtYmllblwiLFxuICAgICAgZW5nbGlzaDogXCJhbHNvL3Rvby9hcyB3ZWxsXCJcbiAgICB9LFxuXG4gIH1cbn07XG5cblxuLy92YXIgdmVyYnMgPSB7XG4vLyAgd29yZFR5cGU6IFwidmVyYlwiLFxuLy8gIHZhbHVlczoge1xuLy8gICAgaGFibGFyOiB7XG4vLyAgICAgIHNwYW5pc2g6IFwiaGFibGFyXCIsXG4vLyAgICAgIGVuZ2xpc2g6IFwidG8gc3BlYWsgKHRhbGspXCIsXG4vLyAgICAgIGFkZGl0aW9uYWw6IHtcbi8vICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCIsXG4vLyAgICAgICAgZW5nbGlzaFZhcmlhdGlvbnM6IHtcbi8vICAgICAgICAgIHByZXNlbnQ6IFwic3BlYWtcIixcbi8vICAgICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwic3BlYWtzXCIsXG4vLyAgICAgICAgICBwYXN0OiBcInNwb2tlXCJcbi8vICAgICAgICB9XG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICBhcHJlbmRlcjoge1xuLy8gICAgICBzcGFuaXNoOiBcImFwcmVuZGVyXCIsXG4vLyAgICAgIGVuZ2xpc2g6IFwidG8gbGVhcm5cIixcbi8vICAgICAgYWRkaXRpb25hbDoge1xuLy8gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIixcbi8vICAgICAgICBlbmdsaXNoVmFyaWF0aW9uczoge1xuLy8gICAgICAgICAgcHJlc2VudDogXCJsZWFyblwiLFxuLy8gICAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJsZWFybnNcIixcbi8vICAgICAgICAgIHBhc3Q6IFwibGVhcm5lZFwiXG4vLyAgICAgICAgfVxuLy8gICAgICB9XG4vLyAgICB9LFxuLy8gICAgdml2aXI6IHtcbi8vICAgICAgc3BhbmlzaDogXCJ2aXZpclwiLFxuLy8gICAgICBlbmdsaXNoOiBcInRvIGxpdmVcIixcbi8vICAgICAgYWRkaXRpb25hbDoge1xuLy8gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIixcbi8vICAgICAgICBlbmdsaXNoVmFyaWF0aW9uczoge1xuLy8gICAgICAgICAgcHJlc2VudDogXCJsaXZlXCIsXG4vLyAgICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcImxpdmVzXCIsXG4vLyAgICAgICAgICBwYXN0OiBcImxpdmVkXCJcbi8vICAgICAgICB9XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vL307XG5cbnZhciB2ZXJicyA9IHtcbiAgd29yZFR5cGU6IFwidmVyYlwiLFxuICB2YWx1ZXM6IHtcbiAgICBoYWJsYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiaGFibGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNwZWFrICh0YWxrKVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCIsXG4gICAgICAgIGVuZ2xpc2hWYXJpYXRpb25zOiB7XG4gICAgICAgICAgcHJlc2VudDogXCJzcGVha1wiLFxuICAgICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwic3BlYWtzXCIsXG4gICAgICAgICAgcGFzdDogXCJzcG9rZVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBhZGplY3RpdmVzID0ge1xuICB3b3JkVHlwZTogXCJhZGplY3RpdmVcIixcbiAgdmFsdWVzOiB7XG4gICAgbmFjbzoge1xuICAgICAgc3BhbmlzaDogXCJuYWNvXCIsXG4gICAgICBlbmdsaXNoOiBcInRhY2t5XCJcbiAgICB9LFxuICAgIHBvY286IHtcbiAgICAgIHNwYW5pc2g6IFwicG9jb1wiLFxuICAgICAgZW5nbGlzaDogXCJsaXR0bGUgKHF1YW50aXR5KVwiXG4gICAgfSxcbiAgICBtdWNobzoge1xuICAgICAgc3BhbmlzaDogXCJtdWNob1wiLFxuICAgICAgZW5nbGlzaDogXCJtdWNoXCJcbiAgICB9LFxuICAgIGNoaWNvOiB7XG4gICAgICBzcGFuaXNoOiBcImNoaWNvXCIsXG4gICAgICBlbmdsaXNoOiBcInNtYWxsXCJcbiAgICB9LFxuICAgIG1lZGlhbm86IHtcbiAgICAgIHNwYW5pc2g6IFwibWVkaWFub1wiLFxuICAgICAgZW5nbGlzaDogXCJub3JtYWwvc3RhbmRhcmQvbWVkaXVtXCJcbiAgICB9LFxuICAgIGdyYW5kZToge1xuICAgICAgc3BhbmlzaDogXCJncmFuZGVcIixcbiAgICAgIGVuZ2xpc2g6IFwibGFyZ2VcIlxuICAgIH0sXG4gICAgYWx0bzoge1xuICAgICAgc3BhbmlzaDogXCJhbHRvXCIsXG4gICAgICBlbmdsaXNoOiBcInRhbGxcIlxuICAgIH1cbiAgfVxufTtcblxudmFyIG5vdW5zID0ge1xuICB3b3JkVHlwZTogXCJub3VuXCIsXG4gIHZhbHVlczoge1xuICAgIG11amVyOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm11amVyXCIsXG4gICAgICAgIHBsdXJhbDogXCJtdWplcmVzXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIndvbWFuXCIsXG4gICAgICAgIHBsdXJhbDogXCJ3b21lblwiXG4gICAgICB9LFxuICAgICAgZ2VuZGVyOiBcImZlbWFsZVwiXG4gICAgfSxcbiAgICBob21icmU6IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwiaG9tYnJlXCIsXG4gICAgICAgIHBsdXJhbDogXCJob21icmVzXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm1hblwiLFxuICAgICAgICBwbHVyYWw6IFwibWVuXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwibWFsZVwiXG4gICAgfSxcbiAgICBuacOxbzoge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJuacOxb1wiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJib3lcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJtYWxlXCJcbiAgICB9LFxuICAgIG5pw7FhOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm5pw7FhXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcImdpcmxcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuICAgIH0sXG4gICAgcGFkcmU6IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwicGFkcmVcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwiZmF0aGVyXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwibWFsZVwiXG4gICAgfSxcbiAgICBtYWRyZToge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJtYWRyZVwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJtb3RoZXJcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuICAgIH0sXG4gICAgY3VhcnRvOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcImN1YXJ0b1wiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJiZWRyb29tXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwibWFsZVwiXG4gICAgfSxcbiAgICBzYWxhOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcInNhbGFcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwibGl2aW5nIHJvb21cIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuICAgIH0sXG4gIH1cbn07XG5cblxuLy92YXIgbm91bnMgPSB7XG4vLyAgd29yZFR5cGU6IFwibm91blwiLFxuLy8gIHZhbHVlczoge1xuLy8gICAgbmnDsW86IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcIm5pw7FvXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcImJveVwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJtYWxlXCJcbi8vICAgIH0sXG4vLyAgICBuacOxYToge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwibmnDsWFcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwiZ2lybFwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuLy8gICAgfSxcbi8vICAgIHBhZHJlOiB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICBzaW5ndWxhcjogXCJwYWRyZVwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBzaW5ndWxhcjogXCJmYXRoZXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBnZW5kZXI6IFwibWFsZVwiXG4vLyAgICB9LFxuLy8gICAgbWFkcmU6IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcIm1hZHJlXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcIm1vdGhlclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuLy8gICAgfSxcbi8vICB9XG4vL307XG5cblxuLy92YXIgdmVyYnMgPSB7XG4vLyAgd29yZFR5cGU6IFwidmVyYlwiLFxuLy8gIGFyV29yZHM6IFtcbi8vICAgIGhhYmxhciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwiaGFibGFyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIGRlZmluaXRpb246IFwidG8gc3BlYWsgKHRhbGspXCIsXG4vLyAgICAgICAgcHJlc2VudDogXCJzcGVha1wiLFxuLy8gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwic3BlYWtzXCIsXG4vLyAgICAgICAgcGFzdDogXCJzcG9rZVwiXG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICBwcmVndW50YXIgPSB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICB3b3JkOiBcInByZWd1bnRhclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBkZWZpbml0aW9uOiBcInRvIGFza1wiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwiYXNrXCIsXG4vLyAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJhc2tzXCIsXG4vLyAgICAgICAgcGFzdDogXCJhc2tlZFwiXG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICBlc3R1ZGlhciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwiZXN0dWRpYXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBzdHVkeVwiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwic3R1ZHlcIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcInN0dWRpZXNcIixcbi8vICAgICAgICBwYXN0OiBcInN0dWRpZWRcIlxuLy8gICAgICB9XG4vLyAgICB9XG4vLyAgXSxcbi8vICBlcldvcmRzOiBbXG4vLyAgICBhcHJlbmRlciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwiYXByZW5kZXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBsZWFyblwiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwibGVhcm5cIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcImxlYXJuc1wiLFxuLy8gICAgICAgIHBhc3Q6IFwibGVhcm5lZFwiXG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICB2ZW5kZXIgPSB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICB3b3JkOiBcInZlbmRlclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBkZWZpbml0aW9uOiBcInRvIHNlbGxcIixcbi8vICAgICAgICBwcmVzZW50OiBcInNlbGxcIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcInNlbGxzXCIsXG4vLyAgICAgICAgcGFzdDogXCJzb2xkXCJcbi8vICAgICAgfVxuLy8gICAgfSxcbi8vICAgIHJvbXBlciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwicm9tcGVyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIGRlZmluaXRpb246IFwidG8gYnJlYWtcIixcbi8vICAgICAgICBwcmVzZW50OiBcImJyZWFrXCIsXG4vLyAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJicmVha3NcIixcbi8vICAgICAgICBwYXN0OiBcImJyb2tlXCJcbi8vICAgICAgfVxuLy8gICAgfVxuLy8gIF0sXG4vLyAgaXJXb3JkczogW1xuLy8gICAgYWJyaXIgPSB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICB3b3JkOiBcImFicmlyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIGRlZmluaXRpb246IFwidG8gb3BlblwiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwib3BlblwiLFxuLy8gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwib3BlbnNcIixcbi8vICAgICAgICBwYXN0OiBcIm9wZW5lZFwiXG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICB2aXZpciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwidml2aXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBsaXZlXCIsXG4vLyAgICAgICAgcHJlc2VudDogXCJsaXZlXCIsXG4vLyAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJsaXZlc1wiLFxuLy8gICAgICAgIHBhc3Q6IFwibGl2ZWRcIlxuLy8gICAgICB9XG4vLyAgICB9LFxuLy8gICAgcmVjaWJpciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwicmVjaWJpclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBkZWZpbml0aW9uOiBcInRvIHJlY2VpdmVcIixcbi8vICAgICAgICBwcmVzZW50OiBcInJlY2VpdmVcIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcInJlY2VpdmVzXCIsXG4vLyAgICAgICAgcGFzdDogXCJyZWNlaXZlZFwiXG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICBdXG4vL307XG5cbnZhciBzcGFuaXNoVGVuc2VzID0ge1xuICBhcjoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCJvXCIsXG4gICAgICAgIHR1OiBcImFzXCIsXG4gICAgICAgIGVsOiBcImFcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiYW1vc1wiLFxuICAgICAgICBlbGxvczogXCJhblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBhcHBlbmRUbzogXCJzdGVtXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiZVwiLFxuICAgICAgICB0dTogXCJhc3RlXCIsXG4gICAgICAgIGVsOiBcIsOzXCIsXG4gICAgICAgIG5vc290cm9zOiBcImFtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiYXJvblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbXBlcmZlY3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCJhYmFcIixcbiAgICAgICAgdHU6IFwiYWJhc1wiLFxuICAgICAgICBlbDogXCJhYmFcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiw6FiYW1vc1wiLFxuICAgICAgICBlbGxvczogXCJhYmFuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgYXBwZW5kVG86IFwiaW5maW5pdGl2ZVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOpXCIsXG4gICAgICAgIHR1OiBcIsOhc1wiLFxuICAgICAgICBlbDogXCLDoVwiLFxuICAgICAgICBub3NvdHJvczogXCJlbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcIsOhblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25kaXRpb25hbDoge1xuICAgICAgYXBwZW5kVG86IFwiaW5maW5pdGl2ZVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOtYVwiLFxuICAgICAgICB0dTogXCLDrWFzXCIsXG4gICAgICAgIGVsOiBcIsOtYVwiLFxuICAgICAgICBub3NvdHJvczogXCLDrWFtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiw61hblwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlcjoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCJvXCIsXG4gICAgICAgIHR1OiBcImVzXCIsXG4gICAgICAgIGVsOiBcImVcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiZW1vc1wiLFxuICAgICAgICBlbGxvczogXCJlblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBhcHBlbmRUbzogXCJzdGVtXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiw61cIixcbiAgICAgICAgdHU6IFwiaXN0ZVwiLFxuICAgICAgICBlbDogXCJpw7NcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiaW1vc1wiLFxuICAgICAgICBlbGxvczogXCJpZXJvblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbXBlcmZlY3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDrWFcIixcbiAgICAgICAgdHU6IFwiw61hc1wiLFxuICAgICAgICBlbDogXCLDrWFcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiw61hbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcIsOtYW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBhcHBlbmRUbzogXCJpbmZpbml0aXZlXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiw6lcIixcbiAgICAgICAgdHU6IFwiw6FzXCIsXG4gICAgICAgIGVsOiBcIsOhXCIsXG4gICAgICAgIG5vc290cm9zOiBcImVtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiw6FuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbmRpdGlvbmFsOiB7XG4gICAgICBhcHBlbmRUbzogXCJpbmZpbml0aXZlXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiw61hXCIsXG4gICAgICAgIHR1OiBcIsOtYXNcIixcbiAgICAgICAgZWw6IFwiw61hXCIsXG4gICAgICAgIG5vc290cm9zOiBcIsOtYW1vc1wiLFxuICAgICAgICBlbGxvczogXCLDrWFuXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGlyOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIm9cIixcbiAgICAgICAgdHU6IFwiZXNcIixcbiAgICAgICAgZWw6IFwiZVwiLFxuICAgICAgICBub3NvdHJvczogXCJpbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcImVuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDrVwiLFxuICAgICAgICB0dTogXCJpc3RlXCIsXG4gICAgICAgIGVsOiBcImnDs1wiLFxuICAgICAgICBub3NvdHJvczogXCJpbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcImllcm9uXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGltcGVyZmVjdDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOtYVwiLFxuICAgICAgICB0dTogXCLDrWFzXCIsXG4gICAgICAgIGVsOiBcIsOtYVwiLFxuICAgICAgICBub3NvdHJvczogXCLDrWFtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiw61hblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIGFwcGVuZFRvOiBcImluZmluaXRpdmVcIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDqVwiLFxuICAgICAgICB0dTogXCLDoXNcIixcbiAgICAgICAgZWw6IFwiw6FcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiZW1vc1wiLFxuICAgICAgICBlbGxvczogXCLDoW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uYWw6IHtcbiAgICAgIGFwcGVuZFRvOiBcImluZmluaXRpdmVcIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDrWFcIixcbiAgICAgICAgdHU6IFwiw61hc1wiLFxuICAgICAgICBlbDogXCLDrWFcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiw61hbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcIsOtYW5cIlxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG52YXIgcmVmbGV4aXZlVmVyYnNTZXQxID0ge1xuICB3b3JkVHlwZTogXCJ2ZXJiXCIsXG4gIHZhbHVlczoge1xuICAgIGFjb3N0YXJzZToge1xuICAgICAgc3BhbmlzaDogXCJhY29zdGFyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZ28gdG8gYmVkXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYWZlaXRhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImFmZWl0YXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzaGF2ZSBvbmVzZWxmXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYmHDsWFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwiYmHDsWFyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYmF0aGUgb25lc2VsZlwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhc2Fyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwiY2FzYXJzZSAoY29uIGFsZ3VpZW4pXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIG1hcnJ5IChzb21lb25lKVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNlcGlsbGFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwiY2VwaWxsYXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBicnVzaCBvbmVzZWxmIChoYWlyLCB0ZWV0aCwgZXRjKVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbWVyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwiY29tZXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBlYXQgaGFzdGlseVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3BlcnRhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImRlc3BlcnRhcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHdha2UgdXBcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN2ZXN0aXJzZToge1xuICAgICAgc3BhbmlzaDogXCJkZXN2ZXN0aXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB1bmRyZXNzIG9uZXNlbGZcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkb3JtaXJzZToge1xuICAgICAgc3BhbmlzaDogXCJkb3JtaXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBmYWxsIGFzbGVlcFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGR1Y2hhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImR1Y2hhcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHRha2UgYSBzaG93ZXJcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbmZlcm1hcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImVuZmVybWFyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZ2V0IHNpY2tcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbm9qYXJzZToge1xuICAgICAgc3BhbmlzaDogXCJlbm9qYXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBnZXQgYW5ncnlcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImlyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZ28gYXdheVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhdmFyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwibGF2YXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB3YXNoIG9uZXNlbGZcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBsZXZhbnRhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcImxldmFudGFyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc3RhbmQgdXBcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBsbGFtYXJzZToge1xuICAgICAgc3BhbmlzaDogXCJsbGFtYXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjYWxsIG9uZXNlbGZcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtaXJhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcIm1pcmFyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gbG9vayBhdCBvbmVzZWxmXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbW9yaXJzZToge1xuICAgICAgc3BhbmlzaDogXCJtb3JpcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHBhc3MgYXdheVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBlaW5hcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcInBlaW5hcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNvbWIgb25lJ3MgaGFpclwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBvbmVyc2U6IHtcbiAgICAgIHNwYW5pc2g6IFwicG9uZXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBiZWNvbWUsIGdldFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZW9jdXBhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcInByZW9jdXBhcnNlIChjb24pXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHdvcnJ5IChhYm91dClcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9iYXJzZToge1xuICAgICAgc3BhbmlzaDogXCJwcm9iYXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB0cnkgb24gKGNsb3RoaW5nKVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHF1aXRhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcInF1aXRhcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHRha2Ugb2ZmIChjbG90aGluZylcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBzZWNhcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcInNlY2Fyc2VcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZHJ5IG9uZXNlbGZcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBzZW50YXJzZToge1xuICAgICAgc3BhbmlzaDogXCJzZW50YXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzZWF0IG9uZXNlbGZcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBzZW50aXJzZToge1xuICAgICAgc3BhbmlzaDogXCJzZW50aXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBmZWVsIChlbW90aW9uYWxseSwgcGh5c2ljYWxseSlcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICB2ZXJzZToge1xuICAgICAgc3BhbmlzaDogXCJ2ZXJzZVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzZWUgb25lc2VsZlwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZlc3RpcnNlOiB7XG4gICAgICBzcGFuaXNoOiBcInZlc3RpcnNlXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGdldCBkcmVzc2VkXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIG1lbW9yaXplU2V0MSA9IHtcbiAgd29yZFR5cGU6IFwidmVyYlwiLFxuICB2YWx1ZXM6IHtcbiAgICBoYWJsYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiaGFibGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNwZWFrICh0YWxrKVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjZXJ0YXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiYWNlcnRhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBnZXQgcmlnaHRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZXNlYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZGVzZWFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHdpc2gvZGVzaXJlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbmVnYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwibmVnYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZGVueVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lbnRpcjoge1xuICAgICAgc3BhbmlzaDogXCJtZW50aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gbGllXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZGVmZW5kZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZGVmZW5kZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZGVmZW5kXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGVkaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicGVkaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYXNrIGZvclwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGFwcm9iYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiYXByb2JhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBhcHByb3ZlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZW52b2x2ZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZW52b2x2ZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gd3JhcCAodXApXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZW5jZW5kZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZW5jZW5kZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gbGlnaHQva2luZGxlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcm9nYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicm9nYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYmVnL3ByYXlcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICB0cm9wZXphcjoge1xuICAgICAgc3BhbmlzaDogXCJ0cm9wZXphciAoY29uKVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBidW1wIGludG9cIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICB2b2xhcjoge1xuICAgICAgc3BhbmlzaDogXCJ2b2xhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBmbHlcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICB0b3N0YXI6IHtcbiAgICAgIHNwYW5pc2g6IFwidG9zdGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHRvYXN0XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgdGVtYmxhcjoge1xuICAgICAgc3BhbmlzaDogXCJ0ZW1ibGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHRyZW1ibGUvc2hha2VcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwaW50YXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicGludGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHBhaW50XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbW92ZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwibW92ZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gbW92ZSAoYW4gb2JqZWN0KVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhcjoge1xuICAgICAgc3BhbmlzaDogXCJjb250YXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY291bnRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb3N0YXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY29zdGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNvc3RcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkb3JtaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZG9ybWlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNsZWVwXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZW5jb250cmFyOiB7XG4gICAgICBzcGFuaXNoOiBcImVuY29udHJhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBmaW5kXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbW9yZGVyOiB7XG4gICAgICBzcGFuaXNoOiBcIm1vcmRlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBiaXRlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbW9yaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwibW9yaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZGllXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcmVjb3JkYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicmVjb3JkYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcmVtZW1iZXJcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21lbnphcjoge1xuICAgICAgc3BhbmlzaDogXCJjb21lbnphclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBiZWdpbi9jb21tZW5jZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc29sdmVyOiB7XG4gICAgICBzcGFuaXNoOiBcInJlc29sdmVyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNvbHZlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29uc2VudGlyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbnNlbnRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjb25zZW50L3BhbXBlci9zcG9pbFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGhlcnZpcjoge1xuICAgICAgc3BhbmlzaDogXCJoZXJ2aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYm9pbFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNvw7Fhcjoge1xuICAgICAgc3BhbmlzaDogXCJzb8OxYXIgKGNvbilcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZHJlYW0gKGFib3V0KVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNvbmFyOiB7XG4gICAgICBzcGFuaXNoOiBcInNvbmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNvdW5kL3JpbmdcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZXZvbHZlcjoge1xuICAgICAgc3BhbmlzaDogXCJkZXZvbHZlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byByZXR1cm4gKGFuIG9iamVjdClcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBhbG1vcnphcjoge1xuICAgICAgc3BhbmlzaDogXCJhbG1vcnphclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBlYXQgbHVuY2hcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBhZHZlcnRpcjoge1xuICAgICAgc3BhbmlzaDogXCJhZHZlcnRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB3YXJuXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY2VycmFyOiB7XG4gICAgICBzcGFuaXNoOiBcImNlcnJhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjbG9zZS9zaHV0XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYWNvbnNlamFyOiB7XG4gICAgICBzcGFuaXNoOiBcImFjb25zZWphclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBhZHZpc2VcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb252ZXJ0aXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY29udmVydGlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNvbnZlcnRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICB2b2x2ZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwidm9sdmVyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHJldHVyblwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkaXZpbmFyOiB7XG4gICAgICBzcGFuaXNoOiBcImFkaXZpbmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGd1ZXNzXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZW1wZXphcjoge1xuICAgICAgc3BhbmlzaDogXCJlbXBlemFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJlZ2luXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcHJvYmFyOiB7XG4gICAgICBzcGFuaXNoOiBcInByb2JhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBwcm92ZS90ZXN0L3NhbXBsZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbmZlc2FyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbmZlc2FyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNvbmZlc3NcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBzZW50aXI6IHtcbiAgICAgIHNwYW5pc2g6IFwic2VudGlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGZlZWwgc29ycnkvcmVncmV0XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZW50ZW5kZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZW50ZW5kZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdW5kZXJzdGFuZFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGZyZWdhcjoge1xuICAgICAgc3BhbmlzaDogXCJmcmVnYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc2NydWIgZGlzaGVzL3dhc2ggZGlzaGVzXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbW9zdHJhcjoge1xuICAgICAgc3BhbmlzaDogXCJtb3N0cmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNob3dcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwZW5zYXJfZW46IHtcbiAgICAgIHNwYW5pc2g6IFwicGVuc2FyIChlbilcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdGhpbmsgKGFib3V0KVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbGdhcjoge1xuICAgICAgc3BhbmlzaDogXCJjb2xnYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gaGFuZyB1cFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBlcmRlcjoge1xuICAgICAgc3BhbmlzaDogXCJwZXJkZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gbG9zZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhbWJhbGVhcjoge1xuICAgICAgc3BhbmlzaDogXCJ0YW1iYWxlYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc3R1bWJsZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZWZlcmlyOiB7XG4gICAgICBzcGFuaXNoOiBcInByZWZlcmlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHByZWZlclwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHF1ZXJlcjoge1xuICAgICAgc3BhbmlzaDogXCJxdWVyZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gd2FudC93aXNoXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcmVmZXJpcjoge1xuICAgICAgc3BhbmlzaDogXCJyZWZlcmlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHJlZmVyXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gIH1cbn07XG5cbnZhciBtZW1vcml6ZVNldDIgPSB7XG4gIHdvcmRUeXBlOiBcInZlcmJcIixcbiAgdmFsdWVzOiB7XG4gICAgYmVuZGVjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiYmVuZGVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYmxlc3NcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZWR1Y2lyOiB7XG4gICAgICBzcGFuaXNoOiBcImRlZHVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZGVkdWNlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcGV0aXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY29tcGV0aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29tcGV0ZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnNlZ3Vpcjoge1xuICAgICAgc3BhbmlzaDogXCJjb25zZWd1aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gb2J0YWluLCBnZXRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb3JyZWdpcjoge1xuICAgICAgc3BhbmlzaDogXCJjb3JyZWdpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjb3JyZWN0XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZGVjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZGVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc2F5LCB0ZWxsXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZGVzcGVkaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZGVzcGVkaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZmlyZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGVsZWdpcjoge1xuICAgICAgc3BhbmlzaDogXCJlbGVnaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZWxlY3RcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBmcmXDrXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZnJlw61yXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGZyeVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbWlyOiB7XG4gICAgICBzcGFuaXNoOiBcImdlbWlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGdyb2FuLCBtb2FuXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgaW1wZWRpcjoge1xuICAgICAgc3BhbmlzaDogXCJpbXBlZGlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGltcGVkZSwgaGluZGVyXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbWFsZGVjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwibWFsZGVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY3Vyc2VcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtZWRpcjoge1xuICAgICAgc3BhbmlzaDogXCJtZWRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBtZWFzdXJlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGVkaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicGVkaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYXNrIGZvclwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlw61yOiB7XG4gICAgICBzcGFuaXNoOiBcInJlw61yXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGxhdWdoXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcmVwZXRpcjoge1xuICAgICAgc3BhbmlzaDogXCJyZXBldGlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHJlcGVhdFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlZ3Vpcjoge1xuICAgICAgc3BhbmlzaDogXCJzZWd1aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZm9sbG93LCBjb250aW51ZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlcnZpcjoge1xuICAgICAgc3BhbmlzaDogXCJzZXJ2aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc2VydmVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBhZ3JhZGVjZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiYWdyYWRlY2VyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGFwcHJlY2lhdGUsIGJlIHRoYW5rZnVsIChmb3IpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYXBhcmVjZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiYXBhcmVjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYXBwZWFyXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29ub2Nlcjoge1xuICAgICAgc3BhbmlzaDogXCJjb25vY2VyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGtub3cgKGEgcGVyc29uLCBwbGFjZSwgc3ViamVjdClcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVjZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY3JlY2VyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGdyb3dcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZXNhcGFyZWNlcjoge1xuICAgICAgc3BhbmlzaDogXCJkZXNhcGFyZWNlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkaXNhcHBlYXJcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlc3RhYmxlY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcImVzdGFibGVjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZXN0YWJsaXNoXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbWVyZWNlcjoge1xuICAgICAgc3BhbmlzaDogXCJtZXJlY2VyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGRlc2VydmUsIG1lcml0XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbmFjZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwibmFjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYmUgYm9yblwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIG9iZWRlY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcIm9iZWRlY2VyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIG9iZXlcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBvZnJlY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcIm9mcmVjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gb2ZmZXJcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwYXJhY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcInBhcmFjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc2VlbSwgbG9vayBsaWtlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGVydGVuZWNlcjoge1xuICAgICAgc3BhbmlzaDogXCJwZXJ0ZW5lY2VyIChhKVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBiZWxvbmcgKHRvKVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlcjoge1xuICAgICAgc3BhbmlzaDogXCJwbGFjZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcGxlYXNlLCBncmF0aWZ5XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcmVjb25vY2VyOiB7XG4gICAgICBzcGFuaXNoOiBcInJlY29ub2NlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byByZWNvZ25pemVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25kdWNpcjoge1xuICAgICAgc3BhbmlzaDogXCJjb25kdWNpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjb25kdWN0LCBkcml2ZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc2x1Y2lyOiB7XG4gICAgICBzcGFuaXNoOiBcImRlc2x1Y2lyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHRhcm5pc2gsIHNwb2lsXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgaW5kdWNpcjoge1xuICAgICAgc3BhbmlzaDogXCJpbmR1Y2lyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGluZHVjZSwgcGVyc3VhZGVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnRyb2R1Y2lyOiB7XG4gICAgICBzcGFuaXNoOiBcImludHJvZHVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gaW50cm9kdWNlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbHVjaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwibHVjaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gbGlnaHQgdXAsIGRpc3BsYXlcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9kdWNpcjoge1xuICAgICAgc3BhbmlzaDogXCJwcm9kdWNpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBwcm9kdWNlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcmVkdWNpcjoge1xuICAgICAgc3BhbmlzaDogXCJyZWR1Y2lyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHJlZHVjZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyYWR1Y2lyOiB7XG4gICAgICBzcGFuaXNoOiBcInRyYWR1Y2lyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHRyYW5zbGF0ZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnZlbmNlcjoge1xuICAgICAgc3BhbmlzaDogXCJjb252ZW5jZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29udmluY2UsIHBlcnN1YWRlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZWplcmNlcjoge1xuICAgICAgc3BhbmlzaDogXCJlamVyY2VyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGV4ZXJ0LCBleGVyY2lzZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGVzcGFyY2lyOiB7XG4gICAgICBzcGFuaXNoOiBcImVzcGFyY2lyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNjYXR0ZXIsIHNwcmVhZFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZlbmNlcjoge1xuICAgICAgc3BhbmlzaDogXCJ2ZW5jZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29ucXVlciwgZGVmZWF0XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgenVyY2lyOiB7XG4gICAgICBzcGFuaXNoOiBcInp1cmNpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBtZW5kXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsIi8vIEZyb206IGh0dHA6Ly93d3cucmVnZXh0ZXN0ZXIuY29tLz9mYW09OTQ3MzBcbi8vIEZyb206IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1NzQ3Nzg5LzgzOTE2XG5mdW5jdGlvbiB3cmFwUGFyZW50aGVzaXNDb250ZW50KHN0cmluZywgdGFnLCBjbGFzc05hbWUpIHtcbiAgLy9jb25zb2xlLmxvZyhcInN0cmluZzogXCIsIHN0cmluZyk7XG4gIC8vY29uc29sZS5sb2coXCJ0YWc6IFwiLCB0YWcpO1xuICAvL2NvbnNvbGUubG9nKFwiY2xhc3NOYW1lOiBcIiwgY2xhc3NOYW1lKTtcblxuICB2YXIgY2xhc3NEZWY7XG5cbiAgaWYoIXRhZykgeyB0YWcgPSBcInNwYW5cIiB9XG4gIGlmKGNsYXNzTmFtZSkge1xuICAgIGNsYXNzRGVmID0gJyBjbGFzcz1cIicrY2xhc3NOYW1lKydcIic7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NEZWYgPSAnJztcbiAgfVxuXG4gIHZhciBvcGVuVGFnID0gJzwnK3RhZytjbGFzc0RlZisnPic7XG5cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oXFwoLio/XFwpKS8gLCBvcGVuVGFnKyckJjwvJyt0YWcrJz4nKTtcbn1cblxuXG5cbi8vIERldGVjdCB3aGljaCBDU1MgZXZlbnRzIGFyZSBzdXBwb3J0ZWQgYnkgdGhlIHVzZXIncyBicm93c2VyIGFuZCBvbmx5IHJldHVybiB0aGUgZmlyc3Qgb25lIGlmIHNldmVyYWwgbWF0Y2ggKHN1Y2ggYXMgYHRyYW5zaXRpb25lbmRgIGFuZCBgd2Via2l0VHJhbnNpdGlvbkVuZGAgZm9yIENocm9tZSBzbyB5b3UgY2FuIGxpc3RlbiBmb3IgdGhlIGVuZCBvZiBhIENTUyBldmVudCBhbmQgdGhlbiBwZXJmb3JtIGFuIGFjdGlvbiBiYXNlZCBvbiB0aGF0KSAoaHR0cHM6Ly9qb25zdWguY29tL2Jsb2cvZGV0ZWN0LXRoZS1lbmQtb2YtY3NzLWFuaW1hdGlvbnMtYW5kLXRyYW5zaXRpb25zLXdpdGgtamF2YXNjcmlwdC8pXG5mdW5jdGlvbiBicm93c2VyU3VwcG9ydGVkRXZlbnRzKCl7XG4gIHZhciB0LFxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZha2VlbGVtZW50XCIpLFxuICAgIGJyb3dzZXJTdXBwb3J0ZWRFdmVudHMgPSB7fTtcblxuICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgXCJ0cmFuc2l0aW9uXCIgICAgICA6IFwidHJhbnNpdGlvbmVuZFwiLFxuICAgIFwiT1RyYW5zaXRpb25cIiAgICAgOiBcIm9UcmFuc2l0aW9uRW5kXCIsXG4gICAgXCJNb3pUcmFuc2l0aW9uXCIgICA6IFwidHJhbnNpdGlvbmVuZFwiLFxuICAgIFwiV2Via2l0VHJhbnNpdGlvblwiOiBcIndlYmtpdFRyYW5zaXRpb25FbmRcIlxuICB9O1xuXG4gIHZhciBhbmltYXRpb25zID0ge1xuICAgIFwiYW5pbWF0aW9uXCIgICAgICA6IFwiYW5pbWF0aW9uZW5kXCIsXG4gICAgXCJPQW5pbWF0aW9uXCIgICAgIDogXCJvQW5pbWF0aW9uRW5kXCIsXG4gICAgXCJNb3pBbmltYXRpb25cIiAgIDogXCJhbmltYXRpb25lbmRcIixcbiAgICBcIldlYmtpdEFuaW1hdGlvblwiOiBcIndlYmtpdEFuaW1hdGlvbkVuZFwiXG4gIH07XG5cbiAgZm9yICh0IGluIHRyYW5zaXRpb25zKXtcbiAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAvL2NvbnNvbGUubG9nKHRyYW5zaXRpb25zW3RdKTtcbiAgICAgIGJyb3dzZXJTdXBwb3J0ZWRFdmVudHMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25zW3RdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZm9yIChhIGluIGFuaW1hdGlvbnMpe1xuICAgIGlmIChlbC5zdHlsZVthXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIC8vY29uc29sZS5sb2coYW5pbWF0aW9uc1thXSk7XG4gICAgICBicm93c2VyU3VwcG9ydGVkRXZlbnRzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbnNbYV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnJvd3NlclN1cHBvcnRlZEV2ZW50cztcbn1cblxudmFyIHN1cHBvcnRlZEV2ZW50cyA9IGJyb3dzZXJTdXBwb3J0ZWRFdmVudHMoKTtcbnZhciB0cmFuc2l0aW9uRXZlbnQgPSBzdXBwb3J0ZWRFdmVudHMudHJhbnNpdGlvbjtcbnZhciBhbmltYXRpb25FdmVudCA9IHN1cHBvcnRlZEV2ZW50cy5hbmltYXRpb247XG5cblxuXG5mdW5jdGlvbiBhbmltYXRlQ2FyZEZsaXAoY2FsbGJhY2spIHtcbiAgLy8gTGV0J3MgbWFrZSB0aGUgY2FsbGJhY2sgb3B0aW9uYWxcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xuXG4gIC8vY29uc29sZS5sb2coXCJmbGlwIGNhcmQgYmVnaW5cIik7XG5cbiAgLy8gRmxpcCB0aGUgY2FyZFxuICAkKFwiI3F1aXpcIikuZmluZChcIi5jYXJkXCIpLnRvZ2dsZUNsYXNzKFwiZmxpcHBlZFwiKTtcblxuICAvLyBSdW4gYSBjYWxsYmFjayB3aGVuIHRoZSBDU1MgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZCBpZiBpdCBoYXMgYmVlbiBwcm92aWRlZCBhcyBhbiBhcmd1bWVudFxuICBpZihjYWxsYmFjaykge1xuICAgIC8vY29uc29sZS5sb2coXCJBIGNhbGxiYWNrIHdhcyBwcm92aWRlZFwiKTtcblxuICAgIC8vIFdhaXQgZm9yIHRoZSBmbGlwcGluZyBhbmltYXRpb24gdG8gY29tcGxldGUgYmVmb3JlIHJ1bm5pbmcgY2FsbGJhY2tcbiAgICAkKFwiI3F1aXpcIikub25lKHRyYW5zaXRpb25FdmVudCwgXCIuY2FyZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJmbGlwIGNhcmQgZW5kXCIpO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuZnVuY3Rpb24gcG9wdWxhdGVRdWl6QXJlYShxdWl6UXVlc3Rpb24pIHtcbiAgLy9jb25zb2xlLmxvZyhcIlBvcHVsYXRlIFF1aXogQXJlYVwiKTtcblxuICB2YXIgcXVpeiA9ICQoXCIjcXVpelwiKTtcblxuICAvLyBDaGFuZ2Ugb3V0IHRoZSBxdWVzdGlvbiBiZWluZyBzaG93blxuICAvL2NvbnNvbGUubG9nKFwiRmFkZSBpbiB0aGUgY29udGVudCBvbiB0aGUgY2FyZHNcIik7XG4gIHF1aXouZmluZChcIi5mYWNlLmZyb250XCIpLmNoaWxkcmVuKFwiLmpzLWdlbmVyYXRlZC1zZW50ZW5jZVwiKS5odG1sKHdyYXBQYXJlbnRoZXNpc0NvbnRlbnQocXVpelF1ZXN0aW9uLmVuZ2xpc2gsICdzbWFsbCcpKS5mYWRlSW4oKTtcbiAgcXVpei5maW5kKFwiLmZhY2UuYmFja1wiKS5jaGlsZHJlbihcIi5qcy1nZW5lcmF0ZWQtc2VudGVuY2VcIikuaHRtbChxdWl6UXVlc3Rpb24uc3BhbmlzaCkuZmFkZUluKCk7XG5cbiAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGUgcXVpeiBoYXMgYmVlbiBwb3B1bGF0ZWQsIHNhdmUgdGhhdCBzdGF0dXMgc28gd2UgY2FuIGZsaXAgdGhlIGNhcmQgYXQgcmFuZG9tIHRvIGRpc3BsYXkgZGlmZmVyZW50IHNpZGVzIGJlZm9yZSBsb2FkaW5nIGluIHRoZSBzZW50ZW5jZVxuICBpZighaGFzRmlyc3RRdWVzdGlvblJ1bikgeyBoYXNGaXJzdFF1ZXN0aW9uUnVuID0gdHJ1ZTsgfVxufVxuXG5cblxuZnVuY3Rpb24gZGlzYWJsZVJlc3VsdEJ0bnMoZW5hYmxlU3RhdHVzKSB7XG4gICQoXCIuanMtcmVzdWx0LWJ0blwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgZW5hYmxlU3RhdHVzKTtcbn1cblxuXG5cbi8vIEZ1bmN0aW9uOiBjcmVhdGVOZXN0ZWRPYmplY3QoIGJhc2UsIG5hbWVzWywgdmFsdWVdIClcbi8vICAgYmFzZTogdGhlIG9iamVjdCBvbiB3aGljaCB0byBjcmVhdGUgdGhlIGhpZXJhcmNoeVxuLy8gICBuYW1lczogYW4gYXJyYXkgb2Ygc3RyaW5ncyBjb250YW5pbmcgdGhlIG5hbWVzIG9mIHRoZSBvYmplY3RzXG4vLyAgIHZhbHVlIChvcHRpb25hbCk6IGlmIGdpdmVuLCB3aWxsIGJlIHRoZSBsYXN0IG9iamVjdCBpbiB0aGUgaGllcmFyY2h5XG4vLyBSZXR1cm5zOiB0aGUgbGFzdCBvYmplY3QgaW4gdGhlIGhpZXJhcmNoeVxuLy8gRnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTE0MzMwNjcvODM5MTZcbmZ1bmN0aW9uIGNyZWF0ZU5lc3RlZE9iamVjdCggYmFzZSwgbmFtZXMsIHZhbHVlICkge1xuICAvLyBJZiBhIHZhbHVlIGlzIGdpdmVuLCByZW1vdmUgdGhlIGxhc3QgbmFtZSBhbmQga2VlcCBpdCBmb3IgbGF0ZXI6XG4gIHZhciBsYXN0TmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDMgPyBuYW1lcy5wb3AoKSA6IGZhbHNlO1xuXG4gIC8vIFdhbGsgdGhlIGhpZXJhcmNoeSwgY3JlYXRpbmcgbmV3IG9iamVjdHMgd2hlcmUgbmVlZGVkLlxuICAvLyBJZiB0aGUgbGFzdE5hbWUgd2FzIHJlbW92ZWQsIHRoZW4gdGhlIGxhc3Qgb2JqZWN0IGlzIG5vdCBzZXQgeWV0OlxuICBmb3IoIHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrICkge1xuICAgIGJhc2UgPSBiYXNlWyBuYW1lc1tpXSBdID0gYmFzZVsgbmFtZXNbaV0gXSB8fCB7fTtcbiAgfVxuXG4gIC8vIElmIGEgdmFsdWUgd2FzIGdpdmVuLCBzZXQgaXQgdG8gdGhlIGxhc3QgbmFtZTpcbiAgaWYoIGxhc3ROYW1lICkgYmFzZSA9IGJhc2VbIGxhc3ROYW1lIF0gPSB2YWx1ZTtcblxuICAvLyBSZXR1cm4gdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBoaWVyYXJjaHk6XG4gIHJldHVybiBiYXNlO1xufVxuXG5mdW5jdGlvbiBnZXROdW1iZXJPYmplY3RQcm9wZXJ0aWVzKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XG59XG5cblxuLy8gRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI1MzIyMTgvcGljay1yYW5kb20tcHJvcGVydHktZnJvbS1hLWphdmFzY3JpcHQtb2JqZWN0XG5mdW5jdGlvbiBnZXRSYW5kb21Qcm9wZXJ0eSAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgdmFyIHJhbmRvbVByb3BlcnR5ID0ga2V5c1sga2V5cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpIDw8IDBdO1xuICAvL2NvbnNvbGUubG9nKFwiUmFuZG9tIFByb3BlcnR5OiBcIiwgcmFuZG9tUHJvcGVydHkpO1xuICAvL3JldHVybiByYW5kb21Qcm9wZXJ0eTtcbiAgLy9yZXR1cm4ge1wicHJvcGVydHlOYW1lXCI6IHJhbmRvbVByb3BlcnR5LCBcInByb3BlcnR5VmFsdWVcIjogb2JqW3JhbmRvbVByb3BlcnR5XX07XG4gIHJldHVybiB7XCJwcm9wZXJ0eU5hbWVcIjogcmFuZG9tUHJvcGVydHksIFwicHJvcGVydHlWYWx1ZVwiOiBvYmpbcmFuZG9tUHJvcGVydHldfTtcbn1cblxuXG5mdW5jdGlvbiByYW5kb21BcnJheUVsZW1lbnQoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppdGVtcy5sZW5ndGgpXTtcbn1cblxuXG5mdW5jdGlvbiBnZXRTdGVtKHdvcmQpIHtcbiAgcmV0dXJuIHtcbiAgICBsYXN0Mjogd29yZC5zbGljZSgtMiksXG4gICAgc3RlbTogd29yZC5zdWJzdHJpbmcoMCwgd29yZC5sZW5ndGgtMilcbiAgfVxufVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNDg2NDE3NS84MzkxNlxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG4gIH1cbn1cblxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChpbmNsdWRlZClcbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVRdWl6KHF1aXpPcHRpb25zLCBxdWl6V29yZHMpIHtcbiAgY29uc29sZS5sb2coJ0luIGFjdGl2YXRlUXVpeigpJyk7XG4gIGNvbnNvbGUubG9nKCdxdWl6V29yZHMgaW4gYWN0aXZhdGVRdWl6KCknLCBxdWl6V29yZHMpO1xuXG4gIHZhciBxdWl6ID0gJChcIiNxdWl6XCIpO1xuXG4gIG51bVdvcmRzID0gZ2V0TnVtYmVyT2JqZWN0UHJvcGVydGllcyhxdWl6V29yZHMpO1xuICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiBQcm9wZXJ0aWVzIGluIHRoZSBxdWl6V29yZHMgb2JqZWN0OiBcIiwgbnVtV29yZHMpO1xuXG4gIHF1aXouZmluZChcIi5wcm9ncmVzc1wiKS5maW5kKFwiLm51bS13b3Jkc1wiKS50ZXh0KG51bVdvcmRzKTtcblxuXG4gIHZhciBjb21wbGV0ZWRRdWl6V29yZHMgPSB7fTtcblxuICAvLyBQb3B1bGF0ZSBRdWl6IG9uIHBhZ2UgbG9hZFxuICBwb3B1bGF0ZVF1aXpBcmVhKHF1aXpPcHRpb25zLmZ1bmN0aW9uVG9HZW5lcmF0ZVF1aXpRdWVzdGlvbigpKTtcblxuICAkKCcuanMtcmVzdWx0LWJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0U3RhdHVzID0gJCh0aGlzKS5kYXRhKFwicmVzdWx0LXN0YXR1c1wiKTtcblxuICAgIC8vIERpc2FibGUgdGhlIHJlc3VsdCBidXR0b25zIHNvIHRoZSB1c2VyIG5lZWRzIHRvIGZsaXAgb3ZlciB0aGUgY2FyZCB0byBjaGVjayB0aGUgYW5zd2VyIGJlZm9yZSBzZWxlY3RpbmcgYSByZXN1bHRcbiAgICBkaXNhYmxlUmVzdWx0QnRucyh0cnVlKTtcblxuICAgIC8vIElmIHRoZSBxdWl6IGlzIHNldCB1cCB0byBvbmx5IHNob3cga2VlcCBzY29yZSBhbmQgb25seSBzaG93IHVuYW5zd2VyZWQgcXVlc3Rpb25zIG9yIHByZXZpb3VzbHkgYW5zd2VyZWQgaW5jb3JyZWN0IHF1ZXN0aW9ucywgdGhlbiBjaGVjayBpZiBpdCB3YXMgYXNrZWQgY29ycmVjdGx5LCBhbmQgaWYgc28gbW92ZSB0aGF0IHdvcmRHcm91cCB0byB0aGUgYW5zd2VyZWRXb3JkcyBvYmplY3RcbiAgICBpZihxdWl6T3B0aW9ucy5vbmx5U2hvd1VuYW5zd2VyZWRRdWVzdGlvbnMgPT09IHRydWUpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBxdWVzdGlvbiB3YXMgYW5zd2VyZWQgY29ycmVjdGx5XG4gICAgICB2YXIgbGFzdFdvcmRLZXkgPSBsYXN0V29yZEdyb3VwLmtleTtcblxuICAgICAgaWYgKHJlc3VsdFN0YXR1cyA9PT0gXCJjb3JyZWN0XCIpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlF1ZXN0aW9uIGFuc3dlcmVkIGNvcnJlY3RseVwiKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibGFzdFdvcmRLZXk6IFwiLCBsYXN0V29yZEtleSk7XG4gICAgICAgIC8vIEluY3JlbWVudCB0aGUgYGFuc3dlckF0dGVtcHRlZGAgcHJvcGVydHkgdG8gcmVjb3JkIGhvdyBtYW55IHRpbWVzIHRoaXMgd29yZCB3YXMgYXR0ZW1wdGVkXG4gICAgICAgIHF1aXpXb3Jkc1tsYXN0V29yZEtleV1bJ2Fuc3dlckF0dGVtcHRlZCddKys7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBgYW5zd2VyQ29ycmVjdGAgdG8gdHJ1ZSB0byBzaG93IGl0IHdhcyBhbnN3ZXJlZCBjb3JyZWN0bHlcbiAgICAgICAgcXVpeldvcmRzW2xhc3RXb3JkS2V5XVsnYW5zd2VyQ29ycmVjdCddID0gdHJ1ZTtcblxuICAgICAgICAvLyBDb3B5IHRoZSBuZWNlc3NhcnkgcHJvcGVydGllcyBmcm9tIHRoZSB3b3JkIGdyb3VwIHRvIHRoZSBgY29tcGxldGVkUXVpeldvcmRzYCBvYmplY3RcbiAgICAgICAgY29tcGxldGVkUXVpeldvcmRzW2xhc3RXb3JkS2V5XSA9IHt9O1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBgZW5nbGlzaGAgcHJvcGVydHkgaXMgYW4gb2JqZWN0KGFzIGluIHRoZSBjYXNlIG9mIG5vdW5zIHdoZXJlIHRoZSBlbmdsaXNoIHByb3BlcnR5IGlzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgYHNpbmd1bGFyYCBwcm9wZXJ0eSB0aGF0IGhvbGRzIHRoZSBhY3R1YWwgZW5nbGlzaCB2YWx1ZSlcbiAgICAgICAgaWYoaXNQbGFpbk9iamVjdChxdWl6V29yZHNbbGFzdFdvcmRLZXldLmVuZ2xpc2gpKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcInF1aXpXb3Jkc1tsYXN0V29yZEtleV1cIixxdWl6V29yZHNbbGFzdFdvcmRLZXldKTtcbiAgICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNbbGFzdFdvcmRLZXldLmVuZ2xpc2ggPSBxdWl6V29yZHNbbGFzdFdvcmRLZXldLmVuZ2xpc2guc2luZ3VsYXI7XG4gICAgICAgICAgY29tcGxldGVkUXVpeldvcmRzW2xhc3RXb3JkS2V5XS5zcGFuaXNoID0gcXVpeldvcmRzW2xhc3RXb3JkS2V5XS5zcGFuaXNoLnNpbmd1bGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0uZW5nbGlzaCA9IHF1aXpXb3Jkc1tsYXN0V29yZEtleV0uZW5nbGlzaDtcbiAgICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNbbGFzdFdvcmRLZXldLnNwYW5pc2ggPSBxdWl6V29yZHNbbGFzdFdvcmRLZXldLnNwYW5pc2g7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNbbGFzdFdvcmRLZXldLmFuc3dlckF0dGVtcHRlZCA9IHF1aXpXb3Jkc1tsYXN0V29yZEtleV0uYW5zd2VyQXR0ZW1wdGVkO1xuICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNbbGFzdFdvcmRLZXldLndvcmRUeXBlID0gcXVpeldvcmRzW2xhc3RXb3JkS2V5XS53b3JkVHlwZTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHdvcmQgZ3JvdXAgZnJvbSB0aGUgYHF1aXpXb3Jkc2Agb2JqZWN0IHNvIGl0IGlzbid0IHNob3duIGFnYWluXG4gICAgICAgIGRlbGV0ZSBxdWl6V29yZHNbbGFzdFdvcmRLZXldO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgUHJvZ3Jlc3MgYmFyIHBlcmNlbnRhZ2UgYW5kIHNjb3JlIHZhbHVlXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjb21wbGV0ZWRRdWl6V29yZHM6IFwiLCBjb21wbGV0ZWRRdWl6V29yZHMpO1xuICAgICAgICB2YXIgbnVtV29yZHNBbnN3ZXJlZENvcnJlY3QgPSBnZXROdW1iZXJPYmplY3RQcm9wZXJ0aWVzKGNvbXBsZXRlZFF1aXpXb3Jkcyk7XG4gICAgICAgIHZhciBjb3JyZWN0UGVyY2VudGFnZSA9IChudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdCAvIG51bVdvcmRzKSAqIDEwMDtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbnVtV29yZHNBbnN3ZXJlZENvcnJlY3Q6ICcsIG51bVdvcmRzQW5zd2VyZWRDb3JyZWN0KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnY29ycmVjdFBlcmNlbnRhZ2U6ICcsIGNvcnJlY3RQZXJjZW50YWdlKTtcblxuICAgICAgICAvLyBTaW5jZSBhIHF1ZXN0aW9uIHdhcyBtYXJrZWQgYXMgY29ycmVjdCwgdGhlIHBlcmNlbnRhZ2UtY29ycmVjdCB3aWxsIGNoYW5nZSBhbmQgdGhlcmVmb3JlIHdlIHRyaWdnZXIgYSBjdXN0b20gZXZlbnQgd2hpY2ggcGFzc2VzIHNvbWUgZGF0YSB0byB0aGUgYHByb2dyZXNzLWJhci5qc2AgZmlsZSB3aGljaCBoYXMgYSBsaXN0ZW5lciBmb3IgdGhlIGN1c3RvbSBldmVudC5cbiAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcigncHJvZ3Jlc3MtY2hhbmdlZCcsIFtudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdCwgY29ycmVjdFBlcmNlbnRhZ2VdKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiTnVtYmVyIG9mIFByb3BlcnRpZXMgaW4gdGhlIHF1aXpXb3JkcyBvYmplY3Q6IFwiLCBnZXROdW1iZXJPYmplY3RQcm9wZXJ0aWVzKHF1aXpXb3JkcykpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1F1aXogV29yZHMgaW4gcmVzdWx0U3RhdHVzOiAnLCBxdWl6V29yZHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBgYW5zd2VyQXR0ZW1wdGVkYCBwcm9wZXJ0eSB0byByZWNvcmQgaG93IG1hbnkgdGltZXMgdGhpcyB3b3JkIHdhcyBhdHRlbXB0ZWRcbiAgICAgICAgcXVpeldvcmRzW2xhc3RXb3JkS2V5XVsnYW5zd2VyQXR0ZW1wdGVkJ10rKztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlF1ZXN0aW9uIGFuc3dlcmVkIGluY29ycmVjdGx5XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vY29uc29sZS5sb2coXCJpc1Jlc3VsdENvcnJlY3Q6IFwiICsgaXNSZXN1bHRDb3JyZWN0ICsgXCIoXCIgKyB0eXBlb2YgaXNSZXN1bHRDb3JyZWN0ICsgXCIpXCIpO1xuXG4gICAgLy8gQWRkIHRoZSBwdWxzZSBub3RpZmljYXRpb24gdG8gc2hvdyB0aGVpciByZXN1bHQgaW4gYSB2aXN1YWwgd2F5XG4gICAgJChcImRpdi5mYWNlXCIpLmFkZENsYXNzKFwicHVsc2Utbm90aWZpY2F0aW9uIHB1bHNlLW5vdGlmaWNhdGlvbi1cIiArIHJlc3VsdFN0YXR1cyk7XG5cbiAgICAvLyBGb3JjZSB0aGlzIGZ1bmN0aW9uIHRvIG9ubHkgcnVuIG9uY2UgcGVyIGNsaWNrIHNpbmNlIHRoZSBhbmltYXRpb24gaXMgYmVpbmcgYXBwbGllZCB0byBib3RoIGAuZmFjZWAgZGl2cyBzbyBpdCB3aWxsIGFjdHVhbGx5IGRldGVjdCBpdCB0d2ljZS5cbiAgICAvLyBUT0RPOiBGaXggdGhpcyBieSBhcHBseWluZyB0aGUgYC5wdWxzZS1ub3RpZmljYXRpb25gIGNsYXNzIG9uIG9ubHkgdGhlIGAuZmFjZWAgdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd24uXG4gICAgcXVpei5vbmUoYW5pbWF0aW9uRXZlbnQsIFwiLmZhY2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgIC8vIFNpbmNlIHRoZSBhbmltYXRpb24gaGFzIGZpbmlzaGVkLCByZW1vdmUgdGhlIGFuaW1hdGlvbiBjbGFzc1xuICAgICAgJChcImRpdi5mYWNlXCIpLnJlbW92ZUNsYXNzKFwicHVsc2Utbm90aWZpY2F0aW9uIHB1bHNlLW5vdGlmaWNhdGlvbi1cIiArIHJlc3VsdFN0YXR1cyk7XG5cbiAgICAgIC8vIEZhZGUgb3V0IHRoZSBjb250ZW50IG9uIHRoZSBjYXJkc1xuICAgICAgcXVpei5maW5kKFwiLmZhY2UuZnJvbnRcIikuY2hpbGRyZW4oXCIuanMtZ2VuZXJhdGVkLXNlbnRlbmNlXCIpLmZhZGVPdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHF1ZXN0aW9uIHRvIHNob3cgaWYgdGhlcmUgYXJlIGFueSBsZWZ0IGluIHRoZSBzZXRcbiAgICAgICAgaWYoZ2V0TnVtYmVyT2JqZWN0UHJvcGVydGllcyhxdWl6V29yZHMpID4gMCkge1xuICAgICAgICAgIHZhciBuZXdXb3JkR3JvdXAgPSBxdWl6T3B0aW9ucy5mdW5jdGlvblRvR2VuZXJhdGVRdWl6UXVlc3Rpb24oKTtcblxuICAgICAgICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBmaXJzdCBxdWVzdGlvbiwgcmFuZG9tbHkgZGV0ZXJtaW5lIGlmIHRoZSBjYXJkIHNob3VsZCB0dXJuIChzaG93IHRoZSBvdGhlciBsYW5ndWFnZSB0byBrZWVwIHRoZSBxdWVzdGlvbnMgdW5wcmVkaWN0YWJsZSlcbiAgICAgICAgICBpZiAoZ2V0UmFuZG9tSW50KDAsIDEpID09PSAxICYmIGhhc0ZpcnN0UXVlc3Rpb25SdW4pIHtcbiAgICAgICAgICAgIGFuaW1hdGVDYXJkRmxpcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHBvcHVsYXRlUXVpekFyZWEobmV3V29yZEdyb3VwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3B1bGF0ZVF1aXpBcmVhKG5ld1dvcmRHcm91cCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZSBRdWl6IGhhcyBmaW5pc2hlZC4gQ2FsY3VsYXRlIHRoZSByZXN1bHRzLlxuICAgICAgICAgIHF1aXouZmluZChcIi5xdWVzdGlvbnNcIikuZmFkZU91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHJlc3VsdHNBcmVhID0gcXVpei5maW5kKFwiLnJlc3VsdHNcIik7XG5cbiAgICAgICAgICAgIC8vIEZpbGwgaW4gdGhlIG51bWJlciBvZiB3b3JkcyBpbiB0aGUgcXVpelxuICAgICAgICAgICAgcmVzdWx0c0FyZWEuZmluZCgnLm51bS13b3JkcycpLnRleHQobnVtV29yZHMpO1xuXG4gICAgICAgICAgICAvLyBGaWxsIGluIGhvdyBtYW55IHdvcmRzIHdlcmUgY29ycmVjdGx5IGFuc3dlcmVkIG9uIHRoZSBmaXJzdCB0cnlcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjb21wbGV0ZWRRdWl6V29yZHMgMTogXCIsIGNvbXBsZXRlZFF1aXpXb3Jkcyk7XG4gICAgICAgICAgICB2YXIgbnVtRmlyc3RUcnlDb3JyZWN0ID0gMDtcblxuICAgICAgICAgICAgJC5lYWNoKGNvbXBsZXRlZFF1aXpXb3JkcywgZnVuY3Rpb24oaW5kZXgsIHdvcmRHcm91cCl7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpbmRleCBpbiBsb29wXCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIndvcmRHcm91cCBpbiBsb29wXCIsIHdvcmRHcm91cCk7XG4gICAgICAgICAgICAgIGlmKHdvcmRHcm91cC5hbnN3ZXJBdHRlbXB0ZWQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBudW1GaXJzdFRyeUNvcnJlY3QrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlc3VsdHNBcmVhLmZpbmQoJy5maXJzdC10cnktY29ycmVjdCcpLnRleHQobnVtRmlyc3RUcnlDb3JyZWN0KTtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSB0b3AgNSB3b3JkcyB0aGF0IGhhdmUgdGhlIG1vc3QgdHJpZXMgKEFkZCBsYXRlcilcblxuICAgICAgICAgICAgLy8gR2V0IGFsbCB0aGUgd29yZHMgYWxvbmcgd2l0aCBob3cgbWFueSB0cmllcyB0byBjb21wbGV0ZSBlYWNoIG9uZVxuXG4gICAgICAgICAgICB2YXIgY29tcGxldGVkUXVpeldvcmRzQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgY29tcGxldGVkUXVpeldvcmRzIG9iamVjdCB0byBhbiBhcnJheSBzbyBpdCdzIGVhc2llciB0byBzb3J0IGl0IHdoZW4gb3V0cHV0dGluZyBhbGwgdGhlIHdvcmRzIGFuc3dlcmVkIGJ5IHRoZSBudW1iZXIgb2YgdHJpZXMgZm9yIGVhY2ggd29yZFxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbXBsZXRlZFF1aXpXb3Jkcykge1xuICAgICAgICAgICAgICBpZiAoY29tcGxldGVkUXVpeldvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNBcnJheS5wdXNoKGNvbXBsZXRlZFF1aXpXb3Jkc1trZXldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTb3J0IGJ5IE51bWJlciAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDYzMDA3L2hvdy10by1zb3J0LWFuLWFycmF5LW9mLWludGVnZXJzLWNvcnJlY3RseSlcbiAgICAgICAgICAgIC8vIFNvcnQgYnkgdGhlIG51bWJlciBvZiB0aW1lcyB0aGUgYW5zd2VyIHdhcyBhdHRlbXB0ZWQgaW4gZGVzY2VuZGluZyBvcmRlclxuICAgICAgICAgICAgY29tcGxldGVkUXVpeldvcmRzQXJyYXkgPSBjb21wbGV0ZWRRdWl6V29yZHNBcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBiLmFuc3dlckF0dGVtcHRlZCAtIGEuYW5zd2VyQXR0ZW1wdGVkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKCBjb21wbGV0ZWRRdWl6V29yZHNBcnJheSApO1xuXG4gICAgICAgICAgICAvL3ZhciBjb21wbGV0ZWRRdWl6V29yZE51bSA9IDE7XG4gICAgICAgICAgICAvL3ZhciBjb21wbGV0ZWRRdWl6V29yZFRyaWVzXG5cbiAgICAgICAgICAgIC8vIERpc3BsYXkgZWFjaCBvZiB0aGUgY29tcGxldGVkIHdvcmRzIGFuZCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzIGZvciBlYWNoIG9uZVxuICAgICAgICAgICAgJC5lYWNoKGNvbXBsZXRlZFF1aXpXb3Jkc0FycmF5LCBmdW5jdGlvbihpbmRleCwgd29yZEdyb3VwKXtcbiAgICAgICAgICAgICAgcmVzdWx0c0FyZWEuZmluZCgndGFibGUuZnVsbC1zY29yZScpLmZpbmQoJ3Rib2R5JykuYXBwZW5kKCc8dHI+PHRkPicgKyB3b3JkR3JvdXAuc3BhbmlzaCArICc8L3RkPjx0ZD4nICsgd29yZEdyb3VwLmFuc3dlckF0dGVtcHRlZCArICc8L3RkPjwvdHI+Jyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzdWx0c0FyZWEuZmFkZUluKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBUT0RPOiBGaW5kIGEgd2F5IHRvIGZhZGUgb3V0IGJvdGggdGhlIGAuZmFjZWAgZGl2cyBidXQgb25seSBoYXZlIHRoZSBhYm92ZSBjb2RlIHJ1biBvbmNlIHdoZW4gYm90aCBhcmUgZmluaXNoZWQuXG4gICAgICBxdWl6LmZpbmQoXCIuZmFjZS5iYWNrXCIpLmNoaWxkcmVuKFwiLmpzLWdlbmVyYXRlZC1zZW50ZW5jZVwiKS5mYWRlT3V0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBDcmVhdGUgT2JqZWN0IHRoYXQgaG9sZHMgYWxsIHRoZSB3b3JkcyB0byBiZSBhc2tlZCBvbiBhIHBhcnRpY3VsYXIgcXVpelxuZnVuY3Rpb24gY3JlYXRlUXVpeihxdWl6T2JqZWN0cywgcXVpelR5cGUpIHtcblxuICBjb25zb2xlLmxvZygnSW4gY3JlYXRlUXVpeigpJyk7XG5cbiAgdmFyIHF1aXpPdXRwdXQgPSB7fTtcblxuICBpZihxdWl6VHlwZSA9PT0gJ3JldGVudGlvbicpIHtcbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBvZiB0aGUgd29yZE9iamVjdHMgcHJvdmlkZWQgKGV4OiBub3VucywgYWRqZWN0aXZlcywgZXRjLilcbiAgICAkLmVhY2gocXVpek9iamVjdHMsIGZ1bmN0aW9uIChpbmRleCwgd29yZE9iamVjdCkge1xuICAgICAgY29uc29sZS5sb2cod29yZE9iamVjdCk7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIFdvcmRHcm91cFxuICAgICAgJC5lYWNoKHdvcmRPYmplY3QudmFsdWVzLCBmdW5jdGlvbiAod29yZEtleSwgd29yZEdyb3VwKSB7XG4gICAgICAgIHdvcmRHcm91cC5rZXkgPSB3b3JkS2V5O1xuICAgICAgICB3b3JkR3JvdXAud29yZFR5cGUgPSB3b3JkT2JqZWN0LndvcmRUeXBlO1xuICAgICAgICB3b3JkR3JvdXAuYW5zd2VyQ29ycmVjdCA9IGZhbHNlO1xuICAgICAgICB3b3JkR3JvdXAuYW5zd2VyQXR0ZW1wdGVkID0gMDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh3b3JkS2V5LCB3b3JkR3JvdXApO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgd29yZEdyb3VwIHRvIHRoZSBxdWl6T3V0cHV0IG9iamVjdFxuICAgICAgICBxdWl6T3V0cHV0W3dvcmRLZXldID0gd29yZEdyb3VwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZihxdWl6VHlwZSA9PT0gJ2Nvbmp1Z2F0aW9uJykge1xuICAgIC8vY29uc29sZS5sb2cocXVpek9iamVjdHMpO1xuXG4gICAgcXVpek91dHB1dC53b3JkVHlwZXMgPSBbXTtcbiAgICBxdWl6T3V0cHV0LnZhbHVlcyA9IHt9O1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggb2YgdGhlIHdvcmRPYmplY3RzIHByb3ZpZGVkIChleDogbm91bnMsIGFkamVjdGl2ZXMsIGV0Yy4pXG4gICAgJC5lYWNoKHF1aXpPYmplY3RzLCBmdW5jdGlvbiAoaW5kZXgsIGNvbmp1Z2F0aW9uT2JqZWN0KSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCdoZXJlMycsY29uanVnYXRpb25PYmplY3QpO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBXb3JkVHlwZShpLmUuICdhcicsICdlcicsIG9yICdpcicgd29yZHMpXG4gICAgICAkLmVhY2goY29uanVnYXRpb25PYmplY3QsIGZ1bmN0aW9uICh3b3JkVHlwZU5hbWUsIHdvcmRUeXBlT2JqZWN0KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2hlcmU0IC0gd29yZFR5cGVOYW1lJyx3b3JkVHlwZU5hbWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlNCAtIHdvcmRUeXBlT2JqZWN0Jyx3b3JkVHlwZU9iamVjdCk7XG5cbiAgICAgICAgJC5lYWNoKHdvcmRUeXBlT2JqZWN0LCBmdW5jdGlvbiAodGVuc2VOYW1lLCB0ZW5zZU9iamVjdCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hlcmU1IC0gdGVuc2VOYW1lJyx0ZW5zZU5hbWUpO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hlcmU1IC0gdGVuc2VPYmplY3QnLHRlbnNlT2JqZWN0KTtcblxuICAgICAgICAgICQuZWFjaCh0ZW5zZU9iamVjdC5wZXJzb24sIGZ1bmN0aW9uIChwZXJzb24sIGNvbmp1Z2F0aW9uKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlNiAtIHBlcnNvbicscGVyc29uKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hlcmU2IC0gY29uanVnYXRpb24nLGNvbmp1Z2F0aW9uKTtcblxuICAgICAgICAgICAgdmFyIGNvbmp1Z2F0aW9uR3JvdXAgPSB7XG4gICAgICAgICAgICAgIGFuc3dlckNvcnJlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICBhbnN3ZXJBdHRlbXB0ZWQ6IDAsXG4gICAgICAgICAgICAgIHdvcmRUeXBlOiB3b3JkVHlwZU5hbWUsXG4gICAgICAgICAgICAgIHRlbnNlOiB0ZW5zZU5hbWUsXG4gICAgICAgICAgICAgIGFwcGVuZFRvOiB0ZW5zZU9iamVjdC5hcHBlbmRUbyxcbiAgICAgICAgICAgICAgcGVyc29uOiBwZXJzb24sXG4gICAgICAgICAgICAgIGNvbmp1Z2F0aW9uOiBjb25qdWdhdGlvblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25qdWdhdGlvbkdyb3VwXCIsIGNvbmp1Z2F0aW9uR3JvdXApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JkVHlwZU5hbWVcIiwgd29yZFR5cGVOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBxdWl6T3V0cHV0LndvcmRUeXBlcyk7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY29uanVnYXRpb24gd29yZFR5cGUgdG8gdGhlIHF1aXpPdXRwdXQgb2JqZWN0IGlmIGl0IGlzIG5vdCBhbHJlYWR5IGluIHRoZXJlXG4gICAgICAgICAgICBwdXNoV29yZFR5cGVUb0FycmF5KHF1aXpPdXRwdXQud29yZFR5cGVzLCB3b3JkVHlwZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNvbmp1Z2F0aW9uR3JvdXAgdG8gdGhlIHF1aXpPdXRwdXQgb2JqZWN0XG4gICAgICAgICAgICBxdWl6T3V0cHV0LnZhbHVlc1t3b3JkVHlwZU5hbWUgKyAnLScgKyB0ZW5zZU5hbWUgKyAnLScgKyBwZXJzb25dID0gY29uanVnYXRpb25Hcm91cDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiZmluYWwgcXVpek91dHB1dFwiLCBxdWl6T3V0cHV0KTtcbiAgcmV0dXJuIHF1aXpPdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIHB1c2hXb3JkVHlwZVRvQXJyYXkod29yZFR5cGVBcnJheSwgbmV3V29yZFR5cGVWYWx1ZSkge1xuICB3b3JkVHlwZUFycmF5ID0gd29yZFR5cGVBcnJheSB8fCBbXTtcblxuICBpZih3b3JkVHlwZUFycmF5Lmxlbmd0aCA8IDMpIHtcbiAgICBpZiAoJC5pbkFycmF5KG5ld1dvcmRUeXBlVmFsdWUsIHdvcmRUeXBlQXJyYXkpID09IC0xKSB7XG4gICAgICB3b3JkVHlwZUFycmF5LnB1c2gobmV3V29yZFR5cGVWYWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIndvcmRUeXBlQXJyYXlcIiwgd29yZFR5cGVBcnJheSk7XG5cbiAgICAgIHJldHVybiB3b3JkVHlwZUFycmF5O1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAvLyBGbGlwIG92ZXIgdGhlIGNhcmQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gaXQgdG8gcmV2ZWFsIHRoZSBhbnN3ZXJcbiAgJCgnLmZsaXAnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgLy9jb25zb2xlLmxvZygnY2FyZCBjbGlja2VkJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFuaW1hdGVDYXJkRmxpcCgpO1xuXG4gICAgLy8gRW5hYmxlIHRoZSByZXN1bHQgYnV0dG9ucyBub3cgdGhhdCB0aGUgcXVpeiBhbnN3ZXIgaGFzIGJlZW4gc2hvd25cbiAgICBkaXNhYmxlUmVzdWx0QnRucyhmYWxzZSk7XG4gIH0pO1xufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICBpZiAoICQoIFwiLmpzLXF1aXotdmVyYi1jb25qdWdhdGlvblwiICkubGVuZ3RoICkge1xuXG4gICAgaGFzRmlyc3RRdWVzdGlvblJ1biA9IGZhbHNlO1xuXG4gICAgdmFyIHF1aXpPcHRpb25zID0ge1xuICAgICAgb25seVNob3dVbmFuc3dlcmVkUXVlc3Rpb25zOiB0cnVlLFxuICAgICAgcXVpelR5cGU6ICdjb25qdWdhdGlvbicsXG4gICAgICBxdWl6Q29uanVnYXRpb25zOiBbc3BhbmlzaFRlbnNlc10sXG4gICAgICBmdW5jdGlvblRvR2VuZXJhdGVRdWl6UXVlc3Rpb246IGdlbmVyYXRlVmVyYkNvbmp1Z2F0aW9uUXVpelF1ZXN0aW9uXG4gICAgfTtcblxuICAgIC8vY29uc29sZS5sb2coJ2hlcmUyJywgcXVpek9wdGlvbnMucXVpekNvbmp1Z2F0aW9ucyk7XG5cbiAgICB2YXIgcXVpek91dHB1dCA9IGNyZWF0ZVF1aXoocXVpek9wdGlvbnMucXVpekNvbmp1Z2F0aW9ucywgcXVpek9wdGlvbnMucXVpelR5cGUpO1xuICAgIHZhciBxdWl6Q29uanVnYXRpb25Xb3JkVHlwZXMgPSBxdWl6T3V0cHV0LndvcmRUeXBlcztcbiAgICB2YXIgcXVpekNvbmp1Z2F0aW9ucyA9IHF1aXpPdXRwdXQudmFsdWVzO1xuXG4gICAgY29uc29sZS5sb2coXCJxdWl6T3V0cHV0XCIsIHF1aXpPdXRwdXQpO1xuXG4gICAgLy9mdW5jdGlvbiBnZXRSYW5kb21Db25qdWdhdGlvbihxdWl6V29yZHMpIHtcbiAgICAvLyAgLy8gR2V0IGEgcmFuZG9tIHZlcmIgdHlwZShpLmUuIC1hciB3b3JkcyksIHJhbmRvbSB0ZW5zZShpLmUuIGZ1dHVyZSksIGFuZCBhIHJhbmRvbSBjb25qdWdhdGlvbihpLmUuIGVsbG9zKVxuICAgIC8vXG4gICAgLy8gIC8vIFZhbHVlcyBpZiB0cnlpbmcgdG8gdGVzdCBlYWNoIGNvbmp1Z2F0aW9uIHR5cGVcbiAgICAvLyAgICB2YXIgY29uanVnYXRpb25Hcm91cCA9IGdldFJhbmRvbVByb3BlcnR5KHF1aXpXb3Jkcyk7XG4gICAgLy8gICAgdmFyIHRlbnNlID0gY29uanVnYXRpb25Hcm91cC50ZW5zZTtcbiAgICAvLyAgICB2YXIgYXBwZW5kVG8gPSB0ZW5zZS5wcm9wZXJ0eVZhbHVlLmFwcGVuZFRvO1xuICAgIC8vICAgIHZhciBjb25qdWdhdGlvbiA9IGdldFJhbmRvbVByb3BlcnR5KHRlbnNlLnByb3BlcnR5VmFsdWUucGVyc29uKTtcbiAgICAvL1xuICAgIC8vICAvL2RlYnVnZ2VyO1xuICAgIC8vXG4gICAgLy8gICAgdmFyIHdvcmRHcm91cCA9IGdldFJhbmRvbVByb3BlcnR5KHF1aXpXb3JkcylbJ3Byb3BlcnR5VmFsdWUnXTtcbiAgICAvLyAgICBsYXN0V29yZEdyb3VwID0gd29yZEdyb3VwO1xuICAgIC8vXG4gICAgLy8gIGNvbnNvbGUubG9nKFwid29yZEdyb3VwIC0gXCIsIHdvcmRHcm91cCk7XG4gICAgLy9cbiAgICAvLyAgLy8gVmFsdWVzIGlmIHRyeWluZyB0byB0ZXN0IGVhY2ggdmVyYiB3b3JkXG4gICAgLy8gICAgLy92YXIgd29yZFR5cGUgPSBzcGFuaXNoVGVuc2VzW3dvcmRHcm91cC5hZGRpdGlvbmFsLnZlcmJFbmRpbmcgKyBcIldvcmRzXCJdO1xuICAgIC8vICAgIC8vdmFyIHRlbnNlID0gZ2V0UmFuZG9tUHJvcGVydHkod29yZFR5cGUpO1xuICAgIC8vICAgIC8vdmFyIGFwcGVuZFRvID0gdGVuc2UucHJvcGVydHlWYWx1ZS5hcHBlbmRUbztcbiAgICAvLyAgICAvL3ZhciBjb25qdWdhdGlvbiA9IGdldFJhbmRvbVByb3BlcnR5KHRlbnNlLnByb3BlcnR5VmFsdWUucGVyc29uKTtcbiAgICAvL1xuICAgIC8vICBjb25zb2xlLmxvZyhcIndvcmRUeXBlOiBcIiwgd29yZFR5cGUpO1xuICAgIC8vICBjb25zb2xlLmxvZyhcInRlbnNlOiBcIiwgdGVuc2UpO1xuICAgIC8vICBjb25zb2xlLmxvZyhcImNvbmp1Z2F0aW9uOiBcIiwgY29uanVnYXRpb24pO1xuICAgIC8vICAvL2NvbnNvbGUubG9nKFwicmFuZG9tV29yZDogXCIsIHJhbmRvbVdvcmQpO1xuICAgIC8vXG4gICAgLy8gIC8vZGVidWdnZXI7XG4gICAgLy8gIC8vXG4gICAgLy8gIC8vLy8gR3JhYiBhIHJhbmRvbSBwcm9wZXJ0eSBmcm9tIHRoZSB0ZW5zZSBhbmQgaWYgdGhlIGNvbmp1Z2F0aW9uIHRoYXQgd2FzIGNob3NlbiBpcyBhY3R1YWxseSB0aGUgXCJhcHBlbmRUb1wiIHByb3BlcnR5LCB0aGVuIHJ1biB0aGUgZnVuY3Rpb24gYXMgbWFueSB0aW1lcyBhcyBuZWNlc3NhcnkgdG8gZ2V0IGFuIGFjdHVhbCBjb25qdWdhdGlvbiB2YWx1ZVxuICAgIC8vICAvL3ZhciByYW5kb21UZW5zZUNvbmp1Z2F0aW9uS2V5O1xuICAgIC8vICAvL2RvIHtcbiAgICAvLyAgLy8gIHJhbmRvbVRlbnNlQ29uanVnYXRpb25LZXkgPSBnZXRSYW5kb21Qcm9wZXJ0eShyYW5kb21UZW5zZS5wcm9wZXJ0eVZhbHVlKTtcbiAgICAvLyAgLy8gIC8vY29uc29sZS5sb2coXCJyYW5kb21UZW5zZUNvbmp1Z2F0aW9uS2V5OiBcIiwgcmFuZG9tVGVuc2VDb25qdWdhdGlvbktleSk7XG4gICAgLy8gIC8vfVxuICAgIC8vICAvL3doaWxlIChyYW5kb21UZW5zZUNvbmp1Z2F0aW9uS2V5LnByb3BlcnR5TmFtZSA9PT0gXCJhcHBlbmRUb1wiKTtcbiAgICAvL1xuICAgIC8vICAvL2NvbnNvbGUubG9nKFwiUmFuZG9tIFdvcmQgVHlwZSBpbiBTcGFuaXNoIFRlbnNlczogXCIsIHJhbmRvbVdvcmRUeXBlKTtcbiAgICAvLyAgLy9jb25zb2xlLmxvZyhcIlJhbmRvbSBUZW5zZSBpbiBcIiArIHJhbmRvbVdvcmRUeXBlLnByb3BlcnR5TmFtZSwgcmFuZG9tVGVuc2UpO1xuICAgIC8vICAvL2NvbnNvbGUubG9nKFwiUmFuZG9tIFRlbnNlIENvbmp1Z2F0aW9uIEtleSBpbiBcIiArIHJhbmRvbVRlbnNlLnByb3BlcnR5TmFtZSwgcmFuZG9tVGVuc2VDb25qdWdhdGlvbktleSk7XG4gICAgLy9cbiAgICAvLyAgcmV0dXJuIHtcbiAgICAvLyAgICB2ZXJiVHlwZTogd29yZFR5cGUsXG4gICAgLy8gICAgd29yZDogd29yZEdyb3VwLFxuICAgIC8vICAgIHRlbnNlOiB0ZW5zZSxcbiAgICAvLyAgICBjb25qdWdhdGlvbjogY29uanVnYXRpb24sXG4gICAgLy8gICAgYXBwZW5kVG86IGFwcGVuZFRvXG4gICAgLy8gIH07XG4gICAgLy99XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVZlcmJDb25qdWdhdGlvblF1aXpRdWVzdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdRdWVzdGlvbiBHZW5lcmF0ZWQnKTtcblxuICAgICAgdmFyIGVuZ2xpc2hUeXBlO1xuICAgICAgdmFyIHBlcnNvbjtcbiAgICAgIHZhciBjb25uZWN0b3JTdHJpbmc7XG4gICAgICB2YXIgcG9zc2libGVQZXJzb25zO1xuICAgICAgdmFyIHNwYW5pc2hGaXJzdFBhcnQ7XG5cbiAgICAgIC8vIEdldCBhIHJhbmRvbSB2ZXJiIHR5cGUoaS5lLiAtYXIgd29yZHMpLCByYW5kb20gdGVuc2UoaS5lLiBmdXR1cmUpLCBhbmQgYSByYW5kb20gY29uanVnYXRpb24oaS5lLiBlbGxvcylcbiAgICAgICAgLy8gRXhhbXBsZSBvdXRwdXQ6XG4gICAgICAgIC8vXCJhci1wcmVzZW50LXlvXCI6IHtcbiAgICAgICAgLy8gICAgXCJhbnN3ZXJDb3JyZWN0XCI6ZmFsc2UsXG4gICAgICAgIC8vICAgIFwiYW5zd2VyQXR0ZW1wdGVkXCI6MCxcbiAgICAgICAgLy8gICAgXCJ3b3JkVHlwZVwiOlwiYXJXb3Jkc1wiLFxuICAgICAgICAvLyAgICBcInRlbnNlXCI6XCJwcmVzZW50XCIsXG4gICAgICAgIC8vICAgIFwiYXBwZW5kVG9cIjpcInN0ZW1cIixcbiAgICAgICAgLy8gICAgXCJwZXJzb25cIjpcInlvXCIsXG4gICAgICAgIC8vICAgIFwiY29uanVnYXRpb25cIjpcIm9cIlxuICAgICAgICAvLyAgfVxuXG4gICAgICB2YXIgZ2VuZXJhdGVkQ29uanVnYXRpb25Hcm91cCA9IGdldFJhbmRvbVByb3BlcnR5KHF1aXpDb25qdWdhdGlvbnMpO1xuICAgICAgdmFyIGNvbmp1Z2F0aW9uR3JvdXBOYW1lID0gZ2VuZXJhdGVkQ29uanVnYXRpb25Hcm91cC5wcm9wZXJ0eU5hbWU7XG4gICAgICB2YXIgY29uanVnYXRpb25Hcm91cCA9IGdlbmVyYXRlZENvbmp1Z2F0aW9uR3JvdXAucHJvcGVydHlWYWx1ZTtcblxuICAgICAgLy8gQmVmb3JlIGdldHRpbmcgYSB3b3JkIHRvIGNvbmp1Z2F0ZSBvbiwgY2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgYXQgbGVhc3Qgb25lIHdvcmQgZnJvbSB0aGUgY3VycmVudCB3b3JkIHR5cGUgKGFyLCBlciwgaXIpIGlzIGF2YWlsYWJsZSBpbiB0aGUgdmVyYnMgb2JqZWN0IGJlaW5nIHBhc3NlZCBpblxuICAgICAgY29uc29sZS5sb2coXCJ2ZXJicy52YWx1ZXNcIiwgdmVyYnMudmFsdWVzKTtcbiAgICAgIHZhciB2ZXJic1dvcmRUeXBlcyA9IFtdO1xuICAgICAgJC5lYWNoKHZlcmJzLnZhbHVlcywgZnVuY3Rpb24gKGluZGV4LCB3b3JkKSB7XG4gICAgICAgIC8vIEFkZCB0aGUgdmVyYiB3b3JkVHlwZSB0byB0aGUgdmVyYnNXb3JkVHlwZXMgYXJyYXkgaWYgdGhlIHdvcmRUeXBlIGlzIG5vdCBhbHJlYWR5IGluIHRoZXJlXG4gICAgICAgIHZlcmJzV29yZFR5cGVzID0gcHVzaFdvcmRUeXBlVG9BcnJheSh2ZXJic1dvcmRUeXBlcywgd29yZC5hZGRpdGlvbmFsLnZlcmJFbmRpbmcpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidmVyYnNXb3JkVHlwZXNcIiwgdmVyYnNXb3JkVHlwZXMpO1xuXG4gICAgICB2YXIgbm90U3VwcG9ydGVkV29yZFR5cGVzID0gW107XG4gICAgICAkLmVhY2gocXVpekNvbmp1Z2F0aW9uV29yZFR5cGVzLCBmdW5jdGlvbiAoaW5kZXgsIGNvbmp1Z2F0aW9uV29yZFR5cGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgdG8gbWFrZSBzdXJlIGVhY2ggd29yZCB0eXBlIHRoYXQgaXMgYmVpbmcgdXNlZCBmb3IgdGhlIGNvbmp1Z2F0aW9ucyBpcyBhbHNvIGF2YWlsYWJsZSBpbiB0aGUgdmVyYnMgd29yZCB0eXBlc1xuICAgICAgICBpZiAoJC5pbkFycmF5KGNvbmp1Z2F0aW9uV29yZFR5cGUsIHZlcmJzV29yZFR5cGVzKSA9PSAtMSkge1xuICAgICAgICAgIG5vdFN1cHBvcnRlZFdvcmRUeXBlcy5wdXNoKGNvbmp1Z2F0aW9uV29yZFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYobm90U3VwcG9ydGVkV29yZFR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWxlcnQoJ1RoZSB2ZXJiIHNldCBjb25maWd1cmVkIGZvciB0aGlzIHF1aXogZG9lc25cXCd0IGhhdmUgYWxsIHRoZSBuZWNlc3Nhcnkgd29yZCB0eXBlcyBhdmFpbGFibGUuIFBsZWFzZSBlbnN1cmUgeW91IGhhdmUgc2V2ZXJhbCB3b3JkcyBmcm9tIHRoZSBmb2xsb3dpbmcgd29yZCB0eXBlcyBpbiB5b3VyIHNldDogJyArIG5vdFN1cHBvcnRlZFdvcmRUeXBlcy5qb2luKCcgYW5kICcpKTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IGEgcmFuZG9tIHZlcmIgdG8gdGVzdCB0aGUgY29uanVnYXRpb24gd2l0aFxuICAgICAgdmFyIHdvcmRHcm91cCA9IGdldFJhbmRvbVByb3BlcnR5KHZlcmJzLnZhbHVlcylbJ3Byb3BlcnR5VmFsdWUnXTtcbiAgICAgIGxhc3RXb3JkR3JvdXAgPSB3b3JkR3JvdXA7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiY29uanVnYXRpb25Hcm91cDogXCIsIGNvbmp1Z2F0aW9uR3JvdXApO1xuICAgICAgY29uc29sZS5sb2coXCJ2ZXJiczogXCIsIHZlcmJzKTtcbiAgICAgIGNvbnNvbGUubG9nKFwid29yZEdyb3VwOiBcIiwgd29yZEdyb3VwKTtcblxuICAgICAgLy8gQmFzZWQgb24gdGhlIFJhbmRvbSBDb25qdWdhdGlvbiB0aGF0IHdhcyBkZXRlcm1pbmVkIChpLmUuIHlvLCB0dSwgZWwsIG5vc290cm9zLCBvciBlbGxvcyksIGRldGVybWluZSB3aGljaCB2YXJpYXRpb24gdG8gdXNlIGlmIGFwcGxpY2FibGUgKGFzIGluIGVsIHdoaWNoIGNhbiBiZSBzdWJzdGl0dXRlZCB3aXRoIGVsbGEgb3IgdWQsIG9yIGFzIGluIGVsbG9zIHdoaWNoIGNhbiBiZSBzdWJzdGl0dXRlZCB3aXRoIGVsbGFzIG9yIHVkcylcbiAgICAgIHN3aXRjaChjb25qdWdhdGlvbkdyb3VwLnBlcnNvbikge1xuICAgICAgICBjYXNlIFwieW9cIjpcbiAgICAgICAgICBwZXJzb24gPSB7XG4gICAgICAgICAgICBlbmdsaXNoOiBcIklcIixcbiAgICAgICAgICAgIHNwYW5pc2g6IFwieW9cIlxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ0dVwiOlxuICAgICAgICAgIHBlcnNvbiA9IHtcbiAgICAgICAgICAgIGVuZ2xpc2g6IFwieW91IChpbmZvcm1hbClcIixcbiAgICAgICAgICAgIHNwYW5pc2g6IFwidMO6XCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZWxcIjpcbiAgICAgICAgICBwb3NzaWJsZVBlcnNvbnMgPSB7XG4gICAgICAgICAgICBlbDoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcImhlXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiZWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsbGE6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJzaGVcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJlbGxhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1ZDoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcInlvdSAoZm9ybWFsKVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcInVkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSb3NhOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwiUm9zYVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcIlJvc2FcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEtldmluOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwiS2V2aW5cIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJLZXZpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFBpY2sgYSByYW5kb20gcGVyc29uIHRvIGRpc3BsYXkgZm9yIHRoZSBxdWl6IChlbCwgZWxsYSwgb3IgdWQpXG4gICAgICAgICAgcGVyc29uID0gZ2V0UmFuZG9tUHJvcGVydHkocG9zc2libGVQZXJzb25zKS5wcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibm9zb3Ryb3NcIjpcbiAgICAgICAgICBwb3NzaWJsZVBlcnNvbnMgPSB7XG4gICAgICAgICAgICBub3NvdHJvczoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcIndlXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwibm9zb3Ryb3NcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlvdV9hbmRfaToge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcIllvdSBhbmQgSVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcInTDuiB5IHlvXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gUGljayBhIHJhbmRvbSBwZXJzb24gdG8gZGlzcGxheSBmb3IgdGhlIHF1aXogKG5vc290cm9zIG9yIHTDuiB5IHlvKVxuICAgICAgICAgIHBlcnNvbiA9IGdldFJhbmRvbVByb3BlcnR5KHBvc3NpYmxlUGVyc29ucykucHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImVsbG9zXCI6XG4gICAgICAgICAgcG9zc2libGVQZXJzb25zID0ge1xuICAgICAgICAgICAgZWxsb3M6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJ0aGV5IChtYWxlIG9yIG1peGVkKVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcImVsbG9zXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGxhczoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcInRoZXkgKGZlbWFsZSlcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJlbGxhc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdWRzOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwieW91IGFsbFwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcInVkc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm91cnR5bmluZXJzOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwiVGhlIDQ5ZXJzXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiTG9zIDQ5ZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cF9vZl9jaGlsZHJlbjoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcIlRoZSBjaGlsZHJlbiAoZmVtYWxlKVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcIkxhcyBuacOxYXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBQaWNrIGEgcmFuZG9tIHBlcnNvbiB0byBkaXNwbGF5IGZvciB0aGUgcXVpeiAoZWxsb3MsIGVsbGFzLCBvciB1ZHMpXG4gICAgICAgICAgcGVyc29uID0gZ2V0UmFuZG9tUHJvcGVydHkocG9zc2libGVQZXJzb25zKS5wcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBlbmdsaXNoVHlwZSAtIFRoZSBjb25qdWdhdGlvbiB0aGF0IGlzIHRvIGJlIHVzZWQgdGhhdCBjb3JyZWxhdGVzIHdpdGggdGhlIHNwYW5pc2ggY29uanVnYXRpb24gLSBpLmUgZm9yIHRoZSB3b3JkIFwidG8gcnVuXCIsIHRoZSAzIHZhcmlhdGlvbnMgYXJlIHJ1biAocHJlc2VudCksIHJ1bnMgKHByZXNlbnQzcmRQZXJzb24pLCBvciByYW4ocGFzdClcbiAgICAgIGlmIChjb25qdWdhdGlvbkdyb3VwLnRlbnNlID09PSBcInByZXNlbnRcIiAmJiBjb25qdWdhdGlvbkdyb3VwLmNvbmp1Z2F0aW9uID09PSBcImVsXCIpIHtcbiAgICAgICAgZW5nbGlzaFR5cGUgPSBcInByZXNlbnQzcmRQZXJzb25cIjtcbiAgICAgIH0gZWxzZSBpZiAoY29uanVnYXRpb25Hcm91cC50ZW5zZSA9PT0gXCJwYXN0XCIpIHtcbiAgICAgICAgZW5nbGlzaFR5cGUgPSBcInBhc3RcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZ2xpc2hUeXBlID0gXCJwcmVzZW50XCI7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbm5lY3RvclN0cmluZyAtIFRoZSBjb25uZWN0b3Igd29yZCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHF1aXogaW4gdGhlIGVuZ2xpc2ggc2VudGVuY2UgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSB0cmFuc2xhdGVkIChPbmx5IGFwcGxpZXMgdG8gdGhlIGNvbmRpdGlvbmFsLCBmdXR1cmUsIGFuZCBpbXBlcmZlY3QgdGVuc2VzKS4gaS5lLiBmb3IgdGhlIHNlbnRlbmNlIEppbW15IHdpbGwgcnVuIChmdXR1cmUpLCBKaW1teSB3b3VsZCBydW4gKGNvbmRpdGlvbmFsKSwgb3IgSmltbXkgdXNlZCB0byBydW4gKGltcGVyZmVjdClcbiAgICAgIGlmIChjb25qdWdhdGlvbkdyb3VwLnRlbnNlID09PSBcImNvbmRpdGlvbmFsXCIpIHtcbiAgICAgICAgY29ubmVjdG9yU3RyaW5nID0gXCJ3b3VsZFwiO1xuICAgICAgfSBlbHNlIGlmIChjb25qdWdhdGlvbkdyb3VwLnRlbnNlID09PSBcImZ1dHVyZVwiKSB7XG4gICAgICAgIGNvbm5lY3RvclN0cmluZyA9IFwid2lsbFwiO1xuICAgICAgfSBlbHNlIGlmIChjb25qdWdhdGlvbkdyb3VwLnRlbnNlID09PSBcImltcGVyZmVjdFwiKSB7XG4gICAgICAgIGNvbm5lY3RvclN0cmluZyA9IFwidXNlZCB0b1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29ubmVjdG9yU3RyaW5nID0gXCIgXCI7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvbm5lY3RvclN0cmluZyAhPT0gXCIgXCIpIHtcbiAgICAgICAgY29ubmVjdG9yU3RyaW5nID0gXCIgXCIgKyBjb25uZWN0b3JTdHJpbmcgKyBcIiBcIjtcbiAgICAgIH1cblxuICAgICAgaWYoY29uanVnYXRpb25Hcm91cC5hcHBlbmRUbyA9PT0gXCJzdGVtXCIpIHtcbiAgICAgICAgc3BhbmlzaEZpcnN0UGFydCA9IGdldFN0ZW0od29yZEdyb3VwLnNwYW5pc2gpLnN0ZW07XG4gICAgICB9IGVsc2UgaWYoY29uanVnYXRpb25Hcm91cC5hcHBlbmRUbyA9PT0gXCJpbmZpbml0aXZlXCIpIHtcbiAgICAgICAgc3BhbmlzaEZpcnN0UGFydCA9IHdvcmRHcm91cC5zcGFuaXNoO1xuICAgICAgfVxuXG5cbiAgICAgIC8vY29uc29sZS5sb2coXCJQZXJzb246IFwiLCBwZXJzb24pO1xuICAgICAgLy9jb25zb2xlLmxvZyhcImVuZ2xpc2hUeXBlOiBcIiwgZW5nbGlzaFR5cGUpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcImNvbm5lY3RvclN0cmluZzogXCIsIGNvbm5lY3RvclN0cmluZyk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwicmFuZG9tV29yZDogXCIsIHJhbmRvbVdvcmQpO1xuICAgICAgLy9cbiAgICAgIC8vY29uc29sZS5sb2coXCJTZW50ZW5jZSB0byBvdXRwdXQgaW4gRW5nbGlzaDogXCIsIHBlcnNvbi5lbmdsaXNoICsgY29ubmVjdG9yU3RyaW5nICsgcmFuZG9tV29yZFsnZW5nbGlzaCddW2VuZ2xpc2hUeXBlXSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiU2VudGVuY2UgdG8gb3V0cHV0IGluIFNwYW5pc2g6IFwiLCBwZXJzb24uc3BhbmlzaCArIFwiIFwiICsgc3BhbmlzaEZpcnN0UGFydCArIHJhbmRvbUNvbmp1Z2F0aW9uLmNvbmp1Z2F0aW9uLnByb3BlcnR5VmFsdWUpO1xuXG5cbiAgICAgIC8vIFJldHVybmluZyBzZW50ZW5jZSB0byBiZSBkaXNwbGF5ZWQgKGkuZS4gU2hlIHdpbGwgZWF0KSBpbiBib3RoIGxhbmd1YWdlc1xuXG4gICAgICAvL3JldHVybiB7XG4gICAgICAvLyAgZW5nbGlzaDogcGVyc29uLmVuZ2xpc2ggKyBjb25uZWN0b3JTdHJpbmcgKyByYW5kb21Db25qdWdhdGlvbi53b3JkWydlbmdsaXNoJ11bZW5nbGlzaFR5cGVdLFxuICAgICAgLy8gIHNwYW5pc2g6IHBlcnNvbi5zcGFuaXNoICsgXCIgXCIgKyBzcGFuaXNoRmlyc3RQYXJ0ICsgcmFuZG9tQ29uanVnYXRpb24uY29uanVnYXRpb24ucHJvcGVydHlWYWx1ZVxuICAgICAgLy99XG5cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5nbGlzaDogcGVyc29uLmVuZ2xpc2ggKyBjb25uZWN0b3JTdHJpbmcgKyB3b3JkR3JvdXAuYWRkaXRpb25hbC5lbmdsaXNoVmFyaWF0aW9uc1tlbmdsaXNoVHlwZV0sXG4gICAgICAgIHNwYW5pc2g6IHBlcnNvbi5zcGFuaXNoICsgXCIgXCIgKyBzcGFuaXNoRmlyc3RQYXJ0ICsgY29uanVnYXRpb25Hcm91cC5jb25qdWdhdGlvblxuICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG4gICAgLy8gQ3JlYXRlIE9iamVjdCB0byBrZWVwIHRyYWNrIG9mIHF1ZXN0aW9ucyB0aGF0IHdlcmUgYWxyZWFkeSBhc2tlZCBhbmQgaWYgdGhlIHVzZXIgYWxyZWFkeSBnb3QgdGhlbSByaWdodCBzbyB0aGV5IGRvbid0IGFzayB0aGVtIGFnYWluXG4gICAgLy92YXIgcXVpelNjb3JlID0ge307XG4gICAgLy92YXIgcXVpelF1ZXN0aW9uO1xuICAgIC8vXG4gICAgLy8kLmVhY2goc3BhbmlzaFRlbnNlcywgZnVuY3Rpb24gKHZlcmJUeXBlLCB0ZW5zZXMpIHtcbiAgICAvLyAgJC5lYWNoKHRlbnNlcywgZnVuY3Rpb24gKHRlbnNlLCB0ZW5zZUNvbmp1Z2F0aW9ucykge1xuICAgIC8vICAgICQuZWFjaCh0ZW5zZUNvbmp1Z2F0aW9ucywgZnVuY3Rpb24gKHRlbnNlQ29uanVnYXRpb25LZXksIHRlbnNlQ29uanVnYXRpb25WYWx1ZSkge1xuICAgIC8vICAgICAgaWYgKHRlbnNlQ29uanVnYXRpb25LZXkgPT09IFwiYXBwZW5kVG9cIikgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIC8vICAgICAgY3JlYXRlTmVzdGVkT2JqZWN0KCBxdWl6U2NvcmUsIFt2ZXJiVHlwZSwgdGVuc2UsIHRlbnNlQ29uanVnYXRpb25LZXldLCBmYWxzZSApO1xuICAgIC8vICAgICAgLy8gRXhhbXBsZSBvdXRwdXQ6IHF1aXpTY29yZS5hcldvcmRzLnByZXNlbnQuZWxsb3M6IGZhbHNlXG4gICAgLy8gICAgfSk7XG4gICAgLy8gIH0pO1xuICAgIC8vfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwicXVpelNjb3JlOlwiLCBxdWl6U2NvcmUpO1xuXG5cblxuICAgIC8vIEFjdGl2YXRlIHRoZSBxdWl6IHdpdGggdGhlIGNob3NlbiBvcHRpb25zXG4gICAgYWN0aXZhdGVRdWl6KHF1aXpPcHRpb25zLCBxdWl6Q29uanVnYXRpb25zKTtcbiAgfVxuXG5cblxuXG5cblxuXG5cblxufSk7XG5cblxuXG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5cblxuICBpZiAoICQoIFwiLmpzLXF1aXotd29yZC1yZXRlbnRpb25cIiApLmxlbmd0aCApIHtcbiAgICBoYXNGaXJzdFF1ZXN0aW9uUnVuID0gZmFsc2U7XG5cbiAgICB2YXIgcXVpek9wdGlvbnMgPSB7XG4gICAgICBvbmx5U2hvd1VuYW5zd2VyZWRRdWVzdGlvbnM6IHRydWUsXG4gICAgICBxdWl6VHlwZTogJ3JldGVudGlvbicsXG4gICAgICAvL3F1aXpXb3JkczogW21lbW9yaXplU2V0MSwgbWVtb3JpemVTZXQyXSxcbiAgICAgIHF1aXpXb3JkczogW3JlZmxleGl2ZVZlcmJzU2V0MV0sXG4gICAgICBmdW5jdGlvblRvR2VuZXJhdGVRdWl6UXVlc3Rpb246IGdlbmVyYXRlV29yZFJldGVudGlvblF1aXpRdWVzdGlvblxuICAgIH07XG5cbiAgICB2YXIgcXVpeldvcmRzID0gY3JlYXRlUXVpeihxdWl6T3B0aW9ucy5xdWl6V29yZHMsIHF1aXpPcHRpb25zLnF1aXpUeXBlKTtcblxuICAgIGNvbnNvbGUubG9nKFwicXVpeldvcmRzXCIsIHF1aXpXb3Jkcyk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVdvcmRSZXRlbnRpb25RdWl6UXVlc3Rpb24oKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCdRdWVzdGlvbiBHZW5lcmF0ZWQnKTtcblxuICAgICAgdmFyIHJhbmRvbVdvcmRHcm91cCA9IGdldFJhbmRvbVByb3BlcnR5KHF1aXpXb3JkcylbJ3Byb3BlcnR5VmFsdWUnXTtcbiAgICAgIGNvbnNvbGUubG9nKCdyYW5kb21Xb3JkR3JvdXAnLCByYW5kb21Xb3JkR3JvdXApO1xuXG4gICAgICBsYXN0V29yZEdyb3VwID0gcmFuZG9tV29yZEdyb3VwO1xuICAgICAgY29uc29sZS5sb2coXCJOZXcgbGFzdFdvcmRHcm91cDogXCIsIGxhc3RXb3JkR3JvdXApO1xuICAgICAgLy9FeGFtcGxlIE91dHB1dDpcbiAgICAgIC8ve1xuICAgICAgLy8gIGVuZ2xpc2g6IHtcbiAgICAgIC8vICAgIHBsdXJhbDogXCJmYXRoZXJzXCIsXG4gICAgICAvLyAgICAgIHNpbmd1bGFyOiBcImZhdGhlclwiXG4gICAgICAvLyAgfSxcbiAgICAgIC8vICBzcGFuaXNoOiB7XG4gICAgICAvLyAgICBwbHVyYWw6IFwicGFkcmVzXCIsXG4gICAgICAvLyAgICAgIHNpbmd1bGFyOiBcInBhZHJlXCJcbiAgICAgIC8vICB9LFxuICAgICAgLy8gIGdlbmRlcjogXCJtYWxlXCJcbiAgICAgIC8vfVxuXG4gICAgICBpZihyYW5kb21Xb3JkR3JvdXAud29yZFR5cGUgIT09IFwibm91blwiKSB7XG4gICAgICAgIHZhciBlbmdsaXNoT3V0cHV0ID0gcmFuZG9tV29yZEdyb3VwLmVuZ2xpc2g7XG4gICAgICAgIHZhciBzcGFuaXNoT3V0cHV0ID0gcmFuZG9tV29yZEdyb3VwLnNwYW5pc2g7XG4gICAgICB9XG5cbiAgICAgIGlmKHJhbmRvbVdvcmRHcm91cC53b3JkVHlwZSA9PT0gXCJub3VuXCIpIHtcbiAgICAgICAgdmFyIHF1YW50aXR5VHlwZTtcbiAgICAgICAgdmFyIHdvcmRUaGVFbmdsaXNoO1xuICAgICAgICB2YXIgd29yZEFFbmdsaXNoO1xuICAgICAgICB2YXIgd29yZFRoZVNwYW5pc2g7XG4gICAgICAgIHZhciB3b3JkQVNwYW5pc2g7XG4gICAgICAgIHZhciBsZWFkV29yZEVuZ2xpc2g7XG4gICAgICAgIHZhciBsZWFkV29yZFNwYW5pc2g7XG5cbiAgICAgICAgdmFyIHJhbmRvbVdvcmRHZW5kZXIgPSByYW5kb21Xb3JkR3JvdXBbJ2dlbmRlciddO1xuXG4gICAgICAgIC8vIElmIHRoZSBwbHVyYWwgcHJvcGVydHkgaXMgbWlzc2luZywgaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSBwbHVyYWwgZm9ybSBvZiB0aGUgbm91biBpcyBzaW1wbHkgdGhlIHNpbmd1bGFyIHZlcnNpb24gd2l0aCBhbiBcInNcIiBhdCB0aGUgZW5kLiBFeDogXCJuacOxb1wiIGFuZCBcIm5pw7Fvc1wiICYgXCJib3lcIiBhbmQgXCJib3lzXCJcbiAgICAgICAgaWYoIXJhbmRvbVdvcmRHcm91cC5lbmdsaXNoLmhhc093blByb3BlcnR5KFwicGx1cmFsXCIpKSB7XG4gICAgICAgICAgcmFuZG9tV29yZEdyb3VwLmVuZ2xpc2gucGx1cmFsID0gcmFuZG9tV29yZEdyb3VwLmVuZ2xpc2guc2luZ3VsYXIgKyBcInNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBwbHVyYWwgcHJvcGVydHkgaXMgbWlzc2luZywgaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSBwbHVyYWwgZm9ybSBvZiB0aGUgbm91biBpcyBzaW1wbHkgdGhlIHNpbmd1bGFyIHZlcnNpb24gd2l0aCBhbiBcInNcIiBhdCB0aGUgZW5kLiBFeDogXCJuacOxb1wiIGFuZCBcIm5pw7Fvc1wiICYgXCJib3lcIiBhbmQgXCJib3lzXCJcbiAgICAgICAgaWYoIXJhbmRvbVdvcmRHcm91cC5zcGFuaXNoLmhhc093blByb3BlcnR5KFwicGx1cmFsXCIpKSB7XG4gICAgICAgICAgcmFuZG9tV29yZEdyb3VwLnNwYW5pc2gucGx1cmFsID0gcmFuZG9tV29yZEdyb3VwLnNwYW5pc2guc2luZ3VsYXIgKyBcInNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXRSYW5kb21JbnQoMCwgMSkgPT09IDEpIHtcbiAgICAgICAgICBxdWFudGl0eVR5cGUgPSBcInNpbmd1bGFyXCI7XG5cbiAgICAgICAgICBpZiAocmFuZG9tV29yZEdlbmRlciA9PT0gXCJtYWxlXCIpIHtcbiAgICAgICAgICAgIHdvcmRUaGVTcGFuaXNoID0gXCJlbFwiO1xuICAgICAgICAgICAgd29yZEFTcGFuaXNoID0gXCJ1blwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmFuZG9tV29yZEdlbmRlciA9PT0gXCJmZW1hbGVcIikge1xuICAgICAgICAgICAgd29yZFRoZVNwYW5pc2ggPSBcImxhXCI7XG4gICAgICAgICAgICB3b3JkQVNwYW5pc2ggPSBcInVuYVwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHdvcmRUaGVFbmdsaXNoID0gXCJ0aGVcIjtcbiAgICAgICAgICB3b3JkQUVuZ2xpc2ggPSBcImFcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWFudGl0eVR5cGUgPSBcInBsdXJhbFwiO1xuXG4gICAgICAgICAgaWYgKHJhbmRvbVdvcmRHZW5kZXIgPT09IFwibWFsZVwiKSB7XG4gICAgICAgICAgICB3b3JkVGhlU3BhbmlzaCA9IFwibG9zXCI7XG4gICAgICAgICAgICB3b3JkQVNwYW5pc2ggPSBcInVub3NcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbVdvcmRHZW5kZXIgPT09IFwiZmVtYWxlXCIpIHtcbiAgICAgICAgICAgIHdvcmRUaGVTcGFuaXNoID0gXCJsYXNcIjtcbiAgICAgICAgICAgIHdvcmRBU3BhbmlzaCA9IFwidW5hc1wiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHdvcmRUaGVFbmdsaXNoID0gXCJ0aGVcIjtcbiAgICAgICAgICB3b3JkQUVuZ2xpc2ggPSBcInNvbWVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByYW5kb21Xb3JkRW5nbGlzaCA9IHJhbmRvbVdvcmRHcm91cFsnZW5nbGlzaCddW3F1YW50aXR5VHlwZV07XG4gICAgICAgIHZhciByYW5kb21Xb3JkU3BhbmlzaCA9IHJhbmRvbVdvcmRHcm91cFsnc3BhbmlzaCddW3F1YW50aXR5VHlwZV07XG5cbiAgICAgICAgLy8gUmFuZG9tbHkgc2hvdyBlaXRoZXIgdGhlIFwidGhlXCIgb3IgXCJhXCIgbGVhZCB3b3JkXG4gICAgICAgIGlmIChnZXRSYW5kb21JbnQoMCwgMSkgPT09IDEpIHtcbiAgICAgICAgICBsZWFkV29yZEVuZ2xpc2ggPSB3b3JkVGhlRW5nbGlzaDtcbiAgICAgICAgICBsZWFkV29yZFNwYW5pc2ggPSB3b3JkVGhlU3BhbmlzaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWFkV29yZEVuZ2xpc2ggPSB3b3JkQUVuZ2xpc2g7XG4gICAgICAgICAgbGVhZFdvcmRTcGFuaXNoID0gd29yZEFTcGFuaXNoO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVuZ2xpc2hPdXRwdXQgPSBsZWFkV29yZEVuZ2xpc2ggKyBcIiBcIiArIHJhbmRvbVdvcmRFbmdsaXNoO1xuICAgICAgICB2YXIgc3BhbmlzaE91dHB1dCA9IGxlYWRXb3JkU3BhbmlzaCArIFwiIFwiICsgcmFuZG9tV29yZFNwYW5pc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZ2xpc2g6IGVuZ2xpc2hPdXRwdXQsXG4gICAgICAgIHNwYW5pc2g6IHNwYW5pc2hPdXRwdXRcbiAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLy8gQWN0aXZhdGUgdGhlIHF1aXogd2l0aCB0aGUgY2hvc2VuIG9wdGlvbnNcbiAgICBhY3RpdmF0ZVF1aXoocXVpek9wdGlvbnMsIHF1aXpXb3Jkcyk7XG4gIH1cblxufSk7XG4iLCJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gIGlmICggJCggXCIuanMtd29yZHNcIiApLmxlbmd0aCApIHtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29uanVnYXRpb25UYWJsZSh3b3JkLCB0ZW5zZSkge1xuICAgICAgdmFyIGxhc3QyID0gZ2V0U3RlbSh3b3JkKS5sYXN0MjtcbiAgICAgIHZhciBzdGVtID0gZ2V0U3RlbSh3b3JkKS5zdGVtO1xuXG4gICAgICB2YXIgY3VycmVudFRlbnNlID0gc3BhbmlzaFRlbnNlc1tsYXN0MiArIFwiV29yZHNcIl1bdGVuc2VdO1xuICAgICAgdmFyIGFwcGVuZFRvID0gY3VycmVudFRlbnNlLmFwcGVuZFRvO1xuXG4gICAgICBmdW5jdGlvbiBjb25qdWdhdGVXb3JkKGNvbmp1Z2F0aW9uUGVyc29uKSB7XG4gICAgICAgIGlmIChhcHBlbmRUbyA9PT0gXCJzdGVtXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nYXBwZW5kLXRvJz5cIiArIHN0ZW0gKyBcIjwvc3Bhbj5cIiArIGN1cnJlbnRUZW5zZVtjb25qdWdhdGlvblBlcnNvbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2FwcGVuZC10byc+XCIgKyB3b3JkICsgXCI8L3NwYW4+XCIgKyBjdXJyZW50VGVuc2VbY29uanVnYXRpb25QZXJzb25dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB5byA9IGNvbmp1Z2F0ZVdvcmQoXCJ5b1wiKTtcbiAgICAgIHZhciB0dSA9IGNvbmp1Z2F0ZVdvcmQoXCJ0dVwiKTtcbiAgICAgIHZhciBlbCA9IGNvbmp1Z2F0ZVdvcmQoXCJlbFwiKTtcbiAgICAgIHZhciBub3NvdHJvcyA9IGNvbmp1Z2F0ZVdvcmQoXCJub3NvdHJvc1wiKTtcbiAgICAgIHZhciBlbGxvcyA9IGNvbmp1Z2F0ZVdvcmQoXCJlbGxvc1wiKTtcblxuICAgICAgLy9jb25zb2xlLmxvZyhcIndvcmQ6IFwiLCB3b3JkKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJsYXN0MjogXCIsIGxhc3QyKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJzdGVtOiBcIiwgc3RlbSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiYXBwZW5kVG86IFwiLCBhcHBlbmRUbyk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwieW86IFwiLCB5byk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwidHU6IFwiLCB0dSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiZWw6IFwiLCBlbCk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwibm9zb3Ryb3M6IFwiLCBub3NvdHJvcyk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiZWxsb3M6IFwiLCBlbGxvcyk7XG5cbiAgICAgIHZhciBnZW5lcmF0ZWRUYWJsZSA9IFwiPGgzPlwiICsgdGVuc2UgKyBcIiBUZW5zZTwvaDM+XCI7XG4gICAgICBnZW5lcmF0ZWRUYWJsZSArPSBcIjx0YWJsZT5cIiArXG4gICAgICAgIFwiPHRyPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz55bzwvdGQ+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi10ZXJtJz5cIiArIHlvICsgXCI8L3RkPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz5ub3NvdHJvczwvdGQ+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi10ZXJtJz5cIiArIG5vc290cm9zICsgXCI8L3RkPjwvdHI+XCIgK1xuICAgICAgICBcIjx0cj48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXBlcnNvbic+dMO6PC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgdHUgKyBcIjwvdGQ+PHRkIGNsYXNzPSdkaXNhYmxlZCc+PC90ZD48dGQgY2xhc3M9J2Rpc2FibGVkJz48L3RkPjwvdHI+XCIgK1xuICAgICAgICBcIjx0cj48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXBlcnNvbic+ZWwvZWxsYS9VZC48L3RkPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tdGVybSc+XCIgKyBlbCArIFwiPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXBlcnNvbic+ZWxsb3MvZWxsYXMvVWRzLjwvdGQ+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi10ZXJtJz5cIiArIGVsbG9zICsgXCI8L3RkPjwvdHI+XCIgK1xuICAgICAgICBcIjwvdGFibGU+XCI7XG5cbiAgICAgIHJldHVybiBnZW5lcmF0ZWRUYWJsZTtcbiAgICB9XG5cbiAgICAvL2dlbmVyYXRlQ29uanVnYXRpb25UYWJsZShcImFwcmVuZGVyXCIsIFwicGFzdFwiKTtcblxuXG5cbiAgICAvLyBFbXB0eSB0aGUgY29udGFpbmVyIGZvciB0aGUgY29uanVnYXRpb24gd29yZHMgdGFibGVcbiAgICAkKFwiLmpzLWNvbmp1Z2F0aW9uLXdvcmRzLWNoYXJ0XCIpLmh0bWwoXCJcIik7XG5cbiAgICAvLyBDcmVhdGUgYSB0YWJsZSBvZiB3b3Jkc1xuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgdmVyYnMgb2JqZWN0XG4gICAgJC5lYWNoKHZlcmJzLCBmdW5jdGlvbiAodmVyYlR5cGUsIHdvcmRzKSB7XG4gICAgICB2YXIgd29yZHNUYWJsZSA9IFwiPHRhYmxlIGNsYXNzPSd3b3Jkcyc+XCI7XG5cbiAgICAgIC8vY29uc29sZS5sb2codmVyYlR5cGUgKyBcIjogXCIgKyB3b3Jkcyk7XG4gICAgICAvLyBGb3IgZWFjaCB0YWJsZSBjb2x1bW4sIHVzZSB0aGUgdmVyYlR5cGUgKGkuZS4gYXJXb3JkcywgZXJXb3Jkcywgb3IgaXJXb3JkcykgYXMgdGhlIGhlYWRlclxuICAgICAgd29yZHNUYWJsZSArPSBcIjx0cj48dGg+XCIgKyB2ZXJiVHlwZSArIFwiPC90aD5cIjtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggd29yZCBmb3IgdGhlIGN1cnJlbnQgdmVyYlR5cGVcbiAgICAgICQuZWFjaCh3b3JkcywgZnVuY3Rpb24gKGluZGV4LCB3b3JkKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coaW5kZXggKyBcIjogXCIgKyB3b3JkKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNwYW5pc2ggV29yZDogXCIsIHdvcmQuc3BhbmlzaC53b3JkKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcm93IHRoYXQgY29udGFpbnMgdGhlIHdvcmQgaW4gc3BhbmlzaCB3aXRoIGEgbGluayB0byBvcGVuIGEgbW9kYWwgd2luZG93IHRoYXQgZGlzcGxheXMgYWxsIHRoZSBkaWZmZXJlbnQgY29uanVnYXRpb24gdGFibGVzIGZvciB0aGF0IHNwZWNpZmljIHdvcmRcbiAgICAgICAgd29yZHNUYWJsZSArPSBcIjx0cj48dGQ+PGEgY2xhc3M9J2ZhbmN5Ym94JyBocmVmPScjd29yZC1kZXRhaWxzJz5cIiArIHdvcmQuc3BhbmlzaC53b3JkICsgXCI8L2E+PC90ZD5cIjtcbiAgICAgIH0pO1xuXG4gICAgICB3b3Jkc1RhYmxlICs9IFwiPC90YWJsZT5cIjtcblxuICAgICAgLy8gQWRkIHRoZSBuZXdseSBjcmVhdGVkIHRhYmxlIHRvIHRoZSBjb25qdWdhdGlvbiB3b3JkcyB0YWJsZSBjb250YWluZXJcbiAgICAgICQoXCIuanMtY29uanVnYXRpb24td29yZHMtY2hhcnRcIikuYXBwZW5kKHdvcmRzVGFibGUpO1xuXG4gICAgfSk7XG5cbiAgICAvLyQoJy5mYW5jeWJveCcpLmZhbmN5Ym94KCk7XG5cblxuICAgIC8vIExvYWQgdGhlIHdvcmQgZGV0YWlscyBkaXYgd2l0aCB0aGUgY29ycmVjdCBjb250ZW50IHdoZW4gYSB3b3JkIGlzIGNsaWNrZWRcbiAgICAvLyBDdXJyZW50bHkgdGhpcyBpcyBsb29waW5nIHRocm91Z2ggYWxsIHRoZSB3b3JkcyBhdmFpbGFibGUgaW4gb3JkZXIgdG8gZmluZCBhIG1hdGNoIHRvIHRoZSB3b3JkIHRoYXQgd2FzIGNsaWNrZWQgYW5kIHdpbGwgdGhlbiBsb2FkIHVwIHRoZSBjb3JyZWN0IGluZm8gaW50byB0aGUgbW9kYWwgd2luZG93IGFuZCBvcGVucyBpdFxuICAgIC8vIFRPRE86IFVzZSBhIGRlZXAgZ2V0IGZ1bmN0aW9uYWxpdHkgdG8gZmluZCB0aGUgb2JqZWN0IGZvciB0aGUgd29yZCBpbnN0ZWFkIG9mIGxvb3BpbmcgdGhyb3VnaCBldmVyeXRoaW5nXG4gICAgJCgnYVtocmVmPVwiI3dvcmQtZGV0YWlsc1wiXScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBzcGFuaXNoV29yZENsaWNrZWQgPSAkKHRoaXMpLnRleHQoKTtcblxuICAgICAgJC5lYWNoKHZlcmJzLCBmdW5jdGlvbiAodmVyYlR5cGUsIHdvcmRzKSB7XG4gICAgICAgICQuZWFjaCh3b3JkcywgZnVuY3Rpb24gKGluZGV4LCB3b3JkKSB7XG4gICAgICAgICAgaWYgKHdvcmQuc3BhbmlzaC53b3JkID09PSBzcGFuaXNoV29yZENsaWNrZWQpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coc3BhbmlzaFdvcmRDbGlja2VkICsgJyB3YXMgZm91bmQnKTtcbiAgICAgICAgICAgICQoXCIjd29yZC1kZXRhaWxzXCIpLmNoaWxkcmVuKFwiaDJcIikuaHRtbCh3b3JkLnNwYW5pc2gud29yZCArIFwiIC0gPHNwYW4gY2xhc3M9J2VuZ2xpc2gtZGVmaW5pdGlvbic+XCIgKyB3b3JkLmVuZ2xpc2guZGVmaW5pdGlvbiArIFwiPC9zcGFuPlwiKTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBzcGFuaXNoVGVuc2VzIG9iamVjdCB0byBnZXQgZWFjaCBjb25qdWdhdGlvbiB0ZW5zZSBzdXBwb3J0ZWQgZm9yIHRoZSBjdXJyZW50IHZlcmIgdHlwZSAoaS5lLiAtYXIgd29yZHMpIGFuZCB0aGVuIGNyZWF0ZSBjb25qdWdhdGlvbiB0YWJsZXMgZm9yIHRoZSBjdXJyZW50IHdvcmQgYW5kIHRoZSBzdXBwb3J0ZWQgdGVuc2VzXG4gICAgICAgICAgICB2YXIgdGVuc2VUYWJsZXMgPSBcIlwiO1xuICAgICAgICAgICAgJC5lYWNoKHNwYW5pc2hUZW5zZXNbdmVyYlR5cGVdLCBmdW5jdGlvbiAodGVuc2UsIHByb3BlcnRpZXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgdGVuc2VUYWJsZXMgKz0gZ2VuZXJhdGVDb25qdWdhdGlvblRhYmxlKHdvcmQuc3BhbmlzaC53b3JkLCB0ZW5zZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChcIi5qcy1jb25qdWdhdGlvbi10YWJsZXNcIikuaHRtbCh0ZW5zZVRhYmxlcyk7XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIG91dCBvZiAkLmVhY2ggbG9vcCAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzg0NzgwL2hvdy10by1icmVhay1vdXQtb2YtanF1ZXJ5LWVhY2gtbG9vcClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICB9KS5mYW5jeWJveCgpO1xuICB9XG5cbn0pOyIsIi8vIEZyb206IGh0dHA6Ly9jb2RlcGVuLmlvL3plY2tkdWRlL3Blbi9FS0JKeVJcblxuLy8gb24gcGFnZSBsb2FkLi4uXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgbW92ZVByb2dyZXNzQmFyKCk7XG59KTtcblxuLy8gb24gYnJvd3NlciByZXNpemUuLi5cbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gIG1vdmVQcm9ncmVzc0JhcigpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdwcm9ncmVzcy1jaGFuZ2VkJywgZnVuY3Rpb24oZXZlbnQsIG51bVdvcmRzQW5zd2VyZWRDb3JyZWN0LCBjb3JyZWN0UGVyY2VudGFnZSkge1xuICAvL2NvbnNvbGUubG9nKCdudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdDogJywgbnVtV29yZHNBbnN3ZXJlZENvcnJlY3QpO1xuICAvL2NvbnNvbGUubG9nKCdjb3JyZWN0UGVyY2VudGFnZTogJywgY29ycmVjdFBlcmNlbnRhZ2UpO1xuXG4gIC8vIFVwZGF0ZSB0aGUgcHJvZ3Jlc3MgcGVyY2VudGFnZSBvbiB0aGUgZWxlbWVudFxuICAkKCcucHJvZ3Jlc3Mtd3JhcCcpLmRhdGEoJ3Byb2dyZXNzLXBlcmNlbnQnLCBjb3JyZWN0UGVyY2VudGFnZSk7XG4gIG1vdmVQcm9ncmVzc0JhcigpO1xuXG4gIC8vIFVwZGF0ZSB0aGUgc2NvcmUgaW4gdGhlIHByb2dyZXNzIGJhclxuICAkKCcucHJvZ3Jlc3MnKS5maW5kKCcubnVtLWFuc3dlcmVkLWNvcnJlY3QnKS50ZXh0KG51bVdvcmRzQW5zd2VyZWRDb3JyZWN0KTtcbn0pO1xuXG4vLyBTSUdOQVRVUkUgUFJPR1JFU1NcbmZ1bmN0aW9uIG1vdmVQcm9ncmVzc0JhcigpIHtcbiAgLy9jb25zb2xlLmxvZyhcIm1vdmVQcm9ncmVzc0JhclwiKTtcbiAgdmFyIGdldFBlcmNlbnQgPSAoJCgnLnByb2dyZXNzLXdyYXAnKS5kYXRhKCdwcm9ncmVzcy1wZXJjZW50JykgLyAxMDApO1xuICB2YXIgZ2V0UHJvZ3Jlc3NXcmFwV2lkdGggPSAkKCcucHJvZ3Jlc3Mtd3JhcCcpLndpZHRoKCk7XG4gIHZhciBwcm9ncmVzc1RvdGFsID0gZ2V0UGVyY2VudCAqIGdldFByb2dyZXNzV3JhcFdpZHRoO1xuICB2YXIgYW5pbWF0aW9uTGVuZ3RoID0gMjUwMDtcblxuICAvL2NvbnNvbGUubG9nKFwiZ2V0UGVyY2VudDogXCIsIGdldFBlcmNlbnQpO1xuXG4gIC8vIG9uIHBhZ2UgbG9hZCwgYW5pbWF0ZSBwZXJjZW50YWdlIGJhciB0byBkYXRhIHBlcmNlbnRhZ2UgbGVuZ3RoXG4gIC8vIC5zdG9wKCkgdXNlZCB0byBwcmV2ZW50IGFuaW1hdGlvbiBxdWV1ZWluZ1xuICAkKCcucHJvZ3Jlc3MtYmFyJykuc3RvcCgpLmFuaW1hdGUoe1xuICAgIGxlZnQ6IHByb2dyZXNzVG90YWxcbiAgfSwgYW5pbWF0aW9uTGVuZ3RoKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
