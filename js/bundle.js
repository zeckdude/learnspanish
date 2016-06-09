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
      quizWords: [memorizeSet1],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcmlhYmxlcy5qcyIsImZ1bmN0aW9ucy5qcyIsInF1aXotdmVyYi1jb25qdWdhdGlvbi5qcyIsInF1aXotd29yZC1yZXRlbnRpb24uanMiLCJ3b3Jkcy5qcyIsInByb2dyZXNzLWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9TQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHdvcmRzID0ge1xuICB3b3JkVHlwZTogXCJ3b3JkXCIsXG4gIHZhbHVlczoge1xuICAgIGN1YW5kbzoge1xuICAgICAgc3BhbmlzaDogXCJjdWFuZG9cIixcbiAgICAgIGVuZ2xpc2g6IFwid2hlblwiXG4gICAgfSxcbiAgICBob2xhOiB7XG4gICAgICBzcGFuaXNoOiBcImhvbGFcIixcbiAgICAgIGVuZ2xpc2g6IFwiaGVsbG9cIlxuICAgIH0sXG4gICAgdGFtcG9jbzoge1xuICAgICAgc3BhbmlzaDogXCJ0YW1wb2NvXCIsXG4gICAgICBlbmdsaXNoOiBcIm5laXRoZXIvbm9yXCJcbiAgICB9LFxuICAgIHRhbWJpZW46IHtcbiAgICAgIHNwYW5pc2g6IFwidGFtYmllblwiLFxuICAgICAgZW5nbGlzaDogXCJhbHNvL3Rvby9hcyB3ZWxsXCJcbiAgICB9LFxuXG4gIH1cbn07XG5cblxuLy92YXIgdmVyYnMgPSB7XG4vLyAgd29yZFR5cGU6IFwidmVyYlwiLFxuLy8gIHZhbHVlczoge1xuLy8gICAgaGFibGFyOiB7XG4vLyAgICAgIHNwYW5pc2g6IFwiaGFibGFyXCIsXG4vLyAgICAgIGVuZ2xpc2g6IFwidG8gc3BlYWsgKHRhbGspXCIsXG4vLyAgICAgIGFkZGl0aW9uYWw6IHtcbi8vICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCIsXG4vLyAgICAgICAgZW5nbGlzaFZhcmlhdGlvbnM6IHtcbi8vICAgICAgICAgIHByZXNlbnQ6IFwic3BlYWtcIixcbi8vICAgICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwic3BlYWtzXCIsXG4vLyAgICAgICAgICBwYXN0OiBcInNwb2tlXCJcbi8vICAgICAgICB9XG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICBhcHJlbmRlcjoge1xuLy8gICAgICBzcGFuaXNoOiBcImFwcmVuZGVyXCIsXG4vLyAgICAgIGVuZ2xpc2g6IFwidG8gbGVhcm5cIixcbi8vICAgICAgYWRkaXRpb25hbDoge1xuLy8gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIixcbi8vICAgICAgICBlbmdsaXNoVmFyaWF0aW9uczoge1xuLy8gICAgICAgICAgcHJlc2VudDogXCJsZWFyblwiLFxuLy8gICAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJsZWFybnNcIixcbi8vICAgICAgICAgIHBhc3Q6IFwibGVhcm5lZFwiXG4vLyAgICAgICAgfVxuLy8gICAgICB9XG4vLyAgICB9LFxuLy8gICAgdml2aXI6IHtcbi8vICAgICAgc3BhbmlzaDogXCJ2aXZpclwiLFxuLy8gICAgICBlbmdsaXNoOiBcInRvIGxpdmVcIixcbi8vICAgICAgYWRkaXRpb25hbDoge1xuLy8gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIixcbi8vICAgICAgICBlbmdsaXNoVmFyaWF0aW9uczoge1xuLy8gICAgICAgICAgcHJlc2VudDogXCJsaXZlXCIsXG4vLyAgICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcImxpdmVzXCIsXG4vLyAgICAgICAgICBwYXN0OiBcImxpdmVkXCJcbi8vICAgICAgICB9XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICB9XG4vL307XG5cbnZhciB2ZXJicyA9IHtcbiAgd29yZFR5cGU6IFwidmVyYlwiLFxuICB2YWx1ZXM6IHtcbiAgICBoYWJsYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiaGFibGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHNwZWFrICh0YWxrKVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCIsXG4gICAgICAgIGVuZ2xpc2hWYXJpYXRpb25zOiB7XG4gICAgICAgICAgcHJlc2VudDogXCJzcGVha1wiLFxuICAgICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwic3BlYWtzXCIsXG4gICAgICAgICAgcGFzdDogXCJzcG9rZVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBhZGplY3RpdmVzID0ge1xuICB3b3JkVHlwZTogXCJhZGplY3RpdmVcIixcbiAgdmFsdWVzOiB7XG4gICAgbmFjbzoge1xuICAgICAgc3BhbmlzaDogXCJuYWNvXCIsXG4gICAgICBlbmdsaXNoOiBcInRhY2t5XCJcbiAgICB9LFxuICAgIHBvY286IHtcbiAgICAgIHNwYW5pc2g6IFwicG9jb1wiLFxuICAgICAgZW5nbGlzaDogXCJsaXR0bGUgKHF1YW50aXR5KVwiXG4gICAgfSxcbiAgICBtdWNobzoge1xuICAgICAgc3BhbmlzaDogXCJtdWNob1wiLFxuICAgICAgZW5nbGlzaDogXCJtdWNoXCJcbiAgICB9LFxuICAgIGNoaWNvOiB7XG4gICAgICBzcGFuaXNoOiBcImNoaWNvXCIsXG4gICAgICBlbmdsaXNoOiBcInNtYWxsXCJcbiAgICB9LFxuICAgIG1lZGlhbm86IHtcbiAgICAgIHNwYW5pc2g6IFwibWVkaWFub1wiLFxuICAgICAgZW5nbGlzaDogXCJub3JtYWwvc3RhbmRhcmQvbWVkaXVtXCJcbiAgICB9LFxuICAgIGdyYW5kZToge1xuICAgICAgc3BhbmlzaDogXCJncmFuZGVcIixcbiAgICAgIGVuZ2xpc2g6IFwibGFyZ2VcIlxuICAgIH0sXG4gICAgYWx0bzoge1xuICAgICAgc3BhbmlzaDogXCJhbHRvXCIsXG4gICAgICBlbmdsaXNoOiBcInRhbGxcIlxuICAgIH1cbiAgfVxufTtcblxudmFyIG5vdW5zID0ge1xuICB3b3JkVHlwZTogXCJub3VuXCIsXG4gIHZhbHVlczoge1xuICAgIG11amVyOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm11amVyXCIsXG4gICAgICAgIHBsdXJhbDogXCJtdWplcmVzXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIndvbWFuXCIsXG4gICAgICAgIHBsdXJhbDogXCJ3b21lblwiXG4gICAgICB9LFxuICAgICAgZ2VuZGVyOiBcImZlbWFsZVwiXG4gICAgfSxcbiAgICBob21icmU6IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwiaG9tYnJlXCIsXG4gICAgICAgIHBsdXJhbDogXCJob21icmVzXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm1hblwiLFxuICAgICAgICBwbHVyYWw6IFwibWVuXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwibWFsZVwiXG4gICAgfSxcbiAgICBuacOxbzoge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJuacOxb1wiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJib3lcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJtYWxlXCJcbiAgICB9LFxuICAgIG5pw7FhOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm5pw7FhXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcImdpcmxcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuICAgIH0sXG4gICAgcGFkcmU6IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwicGFkcmVcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwiZmF0aGVyXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwibWFsZVwiXG4gICAgfSxcbiAgICBtYWRyZToge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJtYWRyZVwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJtb3RoZXJcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuICAgIH0sXG4gICAgY3VhcnRvOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcImN1YXJ0b1wiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJiZWRyb29tXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwibWFsZVwiXG4gICAgfSxcbiAgICBzYWxhOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcInNhbGFcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwibGl2aW5nIHJvb21cIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuICAgIH0sXG4gIH1cbn07XG5cblxuLy92YXIgbm91bnMgPSB7XG4vLyAgd29yZFR5cGU6IFwibm91blwiLFxuLy8gIHZhbHVlczoge1xuLy8gICAgbmnDsW86IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcIm5pw7FvXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcImJveVwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJtYWxlXCJcbi8vICAgIH0sXG4vLyAgICBuacOxYToge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwibmnDsWFcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwiZ2lybFwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuLy8gICAgfSxcbi8vICAgIHBhZHJlOiB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICBzaW5ndWxhcjogXCJwYWRyZVwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBzaW5ndWxhcjogXCJmYXRoZXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBnZW5kZXI6IFwibWFsZVwiXG4vLyAgICB9LFxuLy8gICAgbWFkcmU6IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcIm1hZHJlXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcIm1vdGhlclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuLy8gICAgfSxcbi8vICB9XG4vL307XG5cblxuLy92YXIgdmVyYnMgPSB7XG4vLyAgd29yZFR5cGU6IFwidmVyYlwiLFxuLy8gIGFyV29yZHM6IFtcbi8vICAgIGhhYmxhciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwiaGFibGFyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIGRlZmluaXRpb246IFwidG8gc3BlYWsgKHRhbGspXCIsXG4vLyAgICAgICAgcHJlc2VudDogXCJzcGVha1wiLFxuLy8gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwic3BlYWtzXCIsXG4vLyAgICAgICAgcGFzdDogXCJzcG9rZVwiXG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICBwcmVndW50YXIgPSB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICB3b3JkOiBcInByZWd1bnRhclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBkZWZpbml0aW9uOiBcInRvIGFza1wiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwiYXNrXCIsXG4vLyAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJhc2tzXCIsXG4vLyAgICAgICAgcGFzdDogXCJhc2tlZFwiXG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICBlc3R1ZGlhciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwiZXN0dWRpYXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBzdHVkeVwiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwic3R1ZHlcIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcInN0dWRpZXNcIixcbi8vICAgICAgICBwYXN0OiBcInN0dWRpZWRcIlxuLy8gICAgICB9XG4vLyAgICB9XG4vLyAgXSxcbi8vICBlcldvcmRzOiBbXG4vLyAgICBhcHJlbmRlciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwiYXByZW5kZXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBsZWFyblwiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwibGVhcm5cIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcImxlYXJuc1wiLFxuLy8gICAgICAgIHBhc3Q6IFwibGVhcm5lZFwiXG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICB2ZW5kZXIgPSB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICB3b3JkOiBcInZlbmRlclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBkZWZpbml0aW9uOiBcInRvIHNlbGxcIixcbi8vICAgICAgICBwcmVzZW50OiBcInNlbGxcIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcInNlbGxzXCIsXG4vLyAgICAgICAgcGFzdDogXCJzb2xkXCJcbi8vICAgICAgfVxuLy8gICAgfSxcbi8vICAgIHJvbXBlciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwicm9tcGVyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIGRlZmluaXRpb246IFwidG8gYnJlYWtcIixcbi8vICAgICAgICBwcmVzZW50OiBcImJyZWFrXCIsXG4vLyAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJicmVha3NcIixcbi8vICAgICAgICBwYXN0OiBcImJyb2tlXCJcbi8vICAgICAgfVxuLy8gICAgfVxuLy8gIF0sXG4vLyAgaXJXb3JkczogW1xuLy8gICAgYWJyaXIgPSB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICB3b3JkOiBcImFicmlyXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIGRlZmluaXRpb246IFwidG8gb3BlblwiLFxuLy8gICAgICAgIHByZXNlbnQ6IFwib3BlblwiLFxuLy8gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwib3BlbnNcIixcbi8vICAgICAgICBwYXN0OiBcIm9wZW5lZFwiXG4vLyAgICAgIH1cbi8vICAgIH0sXG4vLyAgICB2aXZpciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwidml2aXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBsaXZlXCIsXG4vLyAgICAgICAgcHJlc2VudDogXCJsaXZlXCIsXG4vLyAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJsaXZlc1wiLFxuLy8gICAgICAgIHBhc3Q6IFwibGl2ZWRcIlxuLy8gICAgICB9XG4vLyAgICB9LFxuLy8gICAgcmVjaWJpciA9IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHdvcmQ6IFwicmVjaWJpclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBkZWZpbml0aW9uOiBcInRvIHJlY2VpdmVcIixcbi8vICAgICAgICBwcmVzZW50OiBcInJlY2VpdmVcIixcbi8vICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcInJlY2VpdmVzXCIsXG4vLyAgICAgICAgcGFzdDogXCJyZWNlaXZlZFwiXG4vLyAgICAgIH1cbi8vICAgIH1cbi8vICBdXG4vL307XG5cbnZhciBzcGFuaXNoVGVuc2VzID0ge1xuICBhcjoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCJvXCIsXG4gICAgICAgIHR1OiBcImFzXCIsXG4gICAgICAgIGVsOiBcImFcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiYW1vc1wiLFxuICAgICAgICBlbGxvczogXCJhblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBhcHBlbmRUbzogXCJzdGVtXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiZVwiLFxuICAgICAgICB0dTogXCJhc3RlXCIsXG4gICAgICAgIGVsOiBcIsOzXCIsXG4gICAgICAgIG5vc290cm9zOiBcImFtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiYXJvblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbXBlcmZlY3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCJhYmFcIixcbiAgICAgICAgdHU6IFwiYWJhc1wiLFxuICAgICAgICBlbDogXCJhYmFcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiw6FiYW1vc1wiLFxuICAgICAgICBlbGxvczogXCJhYmFuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgYXBwZW5kVG86IFwiaW5maW5pdGl2ZVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOpXCIsXG4gICAgICAgIHR1OiBcIsOhc1wiLFxuICAgICAgICBlbDogXCLDoVwiLFxuICAgICAgICBub3NvdHJvczogXCJlbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcIsOhblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25kaXRpb25hbDoge1xuICAgICAgYXBwZW5kVG86IFwiaW5maW5pdGl2ZVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOtYVwiLFxuICAgICAgICB0dTogXCLDrWFzXCIsXG4gICAgICAgIGVsOiBcIsOtYVwiLFxuICAgICAgICBub3NvdHJvczogXCLDrWFtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiw61hblwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlcjoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCJvXCIsXG4gICAgICAgIHR1OiBcImVzXCIsXG4gICAgICAgIGVsOiBcImVcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiZW1vc1wiLFxuICAgICAgICBlbGxvczogXCJlblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBhcHBlbmRUbzogXCJzdGVtXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiw61cIixcbiAgICAgICAgdHU6IFwiaXN0ZVwiLFxuICAgICAgICBlbDogXCJpw7NcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiaW1vc1wiLFxuICAgICAgICBlbGxvczogXCJpZXJvblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbXBlcmZlY3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDrWFcIixcbiAgICAgICAgdHU6IFwiw61hc1wiLFxuICAgICAgICBlbDogXCLDrWFcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiw61hbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcIsOtYW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBhcHBlbmRUbzogXCJpbmZpbml0aXZlXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiw6lcIixcbiAgICAgICAgdHU6IFwiw6FzXCIsXG4gICAgICAgIGVsOiBcIsOhXCIsXG4gICAgICAgIG5vc290cm9zOiBcImVtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiw6FuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbmRpdGlvbmFsOiB7XG4gICAgICBhcHBlbmRUbzogXCJpbmZpbml0aXZlXCIsXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgeW86IFwiw61hXCIsXG4gICAgICAgIHR1OiBcIsOtYXNcIixcbiAgICAgICAgZWw6IFwiw61hXCIsXG4gICAgICAgIG5vc290cm9zOiBcIsOtYW1vc1wiLFxuICAgICAgICBlbGxvczogXCLDrWFuXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGlyOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIm9cIixcbiAgICAgICAgdHU6IFwiZXNcIixcbiAgICAgICAgZWw6IFwiZVwiLFxuICAgICAgICBub3NvdHJvczogXCJpbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcImVuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDrVwiLFxuICAgICAgICB0dTogXCJpc3RlXCIsXG4gICAgICAgIGVsOiBcImnDs1wiLFxuICAgICAgICBub3NvdHJvczogXCJpbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcImllcm9uXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGltcGVyZmVjdDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHlvOiBcIsOtYVwiLFxuICAgICAgICB0dTogXCLDrWFzXCIsXG4gICAgICAgIGVsOiBcIsOtYVwiLFxuICAgICAgICBub3NvdHJvczogXCLDrWFtb3NcIixcbiAgICAgICAgZWxsb3M6IFwiw61hblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIGFwcGVuZFRvOiBcImluZmluaXRpdmVcIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDqVwiLFxuICAgICAgICB0dTogXCLDoXNcIixcbiAgICAgICAgZWw6IFwiw6FcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiZW1vc1wiLFxuICAgICAgICBlbGxvczogXCLDoW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZGl0aW9uYWw6IHtcbiAgICAgIGFwcGVuZFRvOiBcImluZmluaXRpdmVcIixcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB5bzogXCLDrWFcIixcbiAgICAgICAgdHU6IFwiw61hc1wiLFxuICAgICAgICBlbDogXCLDrWFcIixcbiAgICAgICAgbm9zb3Ryb3M6IFwiw61hbW9zXCIsXG4gICAgICAgIGVsbG9zOiBcIsOtYW5cIlxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG52YXIgbWVtb3JpemVTZXQxID0ge1xuICB3b3JkVHlwZTogXCJ2ZXJiXCIsXG4gIHZhbHVlczoge1xuICAgIGhhYmxhcjoge1xuICAgICAgc3BhbmlzaDogXCJoYWJsYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc3BlYWsgKHRhbGspXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYWNlcnRhcjoge1xuICAgICAgc3BhbmlzaDogXCJhY2VydGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGdldCByaWdodFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc2Vhcjoge1xuICAgICAgc3BhbmlzaDogXCJkZXNlYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gd2lzaC9kZXNpcmVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBuZWdhcjoge1xuICAgICAgc3BhbmlzaDogXCJuZWdhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkZW55XCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbWVudGlyOiB7XG4gICAgICBzcGFuaXNoOiBcIm1lbnRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBsaWVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZWZlbmRlcjoge1xuICAgICAgc3BhbmlzaDogXCJkZWZlbmRlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkZWZlbmRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwZWRpcjoge1xuICAgICAgc3BhbmlzaDogXCJwZWRpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBhc2sgZm9yXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYXByb2Jhcjoge1xuICAgICAgc3BhbmlzaDogXCJhcHJvYmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGFwcHJvdmVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbnZvbHZlcjoge1xuICAgICAgc3BhbmlzaDogXCJlbnZvbHZlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB3cmFwICh1cClcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNlbmRlcjoge1xuICAgICAgc3BhbmlzaDogXCJlbmNlbmRlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBsaWdodC9raW5kbGVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICByb2dhcjoge1xuICAgICAgc3BhbmlzaDogXCJyb2dhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBiZWcvcHJheVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyb3BlemFyOiB7XG4gICAgICBzcGFuaXNoOiBcInRyb3BlemFyIChjb24pXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJ1bXAgaW50b1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbGFyOiB7XG4gICAgICBzcGFuaXNoOiBcInZvbGFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGZseVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvc3Rhcjoge1xuICAgICAgc3BhbmlzaDogXCJ0b3N0YXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdG9hc3RcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICB0ZW1ibGFyOiB7XG4gICAgICBzcGFuaXNoOiBcInRlbWJsYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gdHJlbWJsZS9zaGFrZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBpbnRhcjoge1xuICAgICAgc3BhbmlzaDogXCJwaW50YXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcGFpbnRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3Zlcjoge1xuICAgICAgc3BhbmlzaDogXCJtb3ZlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBtb3ZlIChhbiBvYmplY3QpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbnRhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBjb3VudFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvc3Rhcjoge1xuICAgICAgc3BhbmlzaDogXCJjb3N0YXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29zdFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRvcm1pcjoge1xuICAgICAgc3BhbmlzaDogXCJkb3JtaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc2xlZXBcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNvbnRyYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiZW5jb250cmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGZpbmRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3JkZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwibW9yZGVyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJpdGVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3Jpcjoge1xuICAgICAgc3BhbmlzaDogXCJtb3JpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkaWVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICByZWNvcmRhcjoge1xuICAgICAgc3BhbmlzaDogXCJyZWNvcmRhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byByZW1lbWJlclwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbWVuemFyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbWVuemFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGJlZ2luL2NvbW1lbmNlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzb2x2ZXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicmVzb2x2ZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc29sdmVcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25zZW50aXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY29uc2VudGlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNvbnNlbnQvcGFtcGVyL3Nwb2lsXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgaGVydmlyOiB7XG4gICAgICBzcGFuaXNoOiBcImhlcnZpclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBib2lsXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgc2/DsWFyOiB7XG4gICAgICBzcGFuaXNoOiBcInNvw7FhciAoY29uKVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBkcmVhbSAoYWJvdXQpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgc29uYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwic29uYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc291bmQvcmluZ1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRldm9sdmVyOiB7XG4gICAgICBzcGFuaXNoOiBcImRldm9sdmVyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHJldHVybiAoYW4gb2JqZWN0KVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGFsbW9yemFyOiB7XG4gICAgICBzcGFuaXNoOiBcImFsbW9yemFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGVhdCBsdW5jaFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkdmVydGlyOiB7XG4gICAgICBzcGFuaXNoOiBcImFkdmVydGlyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHdhcm5cIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjZXJyYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY2VycmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGNsb3NlL3NodXRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBhY29uc2VqYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiYWNvbnNlamFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIGFkdmlzZVwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnZlcnRpcjoge1xuICAgICAgc3BhbmlzaDogXCJjb252ZXJ0aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29udmVydFwiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImlyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZvbHZlcjoge1xuICAgICAgc3BhbmlzaDogXCJ2b2x2ZXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcmV0dXJuXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYWRpdmluYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiYWRpdmluYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZ3Vlc3NcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbXBlemFyOiB7XG4gICAgICBzcGFuaXNoOiBcImVtcGV6YXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gYmVnaW5cIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9iYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicHJvYmFyXCIsXG4gICAgICBlbmdsaXNoOiBcInRvIHByb3ZlL3Rlc3Qvc2FtcGxlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZmVzYXI6IHtcbiAgICAgIHNwYW5pc2g6IFwiY29uZmVzYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gY29uZmVzc1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlbnRpcjoge1xuICAgICAgc3BhbmlzaDogXCJzZW50aXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gZmVlbCBzb3JyeS9yZWdyZXRcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlbnRlbmRlcjoge1xuICAgICAgc3BhbmlzaDogXCJlbnRlbmRlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB1bmRlcnN0YW5kXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZnJlZ2FyOiB7XG4gICAgICBzcGFuaXNoOiBcImZyZWdhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzY3J1YiBkaXNoZXMvd2FzaCBkaXNoZXNcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJhclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3N0cmFyOiB7XG4gICAgICBzcGFuaXNoOiBcIm1vc3RyYXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gc2hvd1wiLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICB2ZXJiRW5kaW5nOiBcImFyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBlbnNhcl9lbjoge1xuICAgICAgc3BhbmlzaDogXCJwZW5zYXIgKGVuKVwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB0aGluayAoYWJvdXQpXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgY29sZ2FyOiB7XG4gICAgICBzcGFuaXNoOiBcImNvbGdhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBoYW5nIHVwXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGVyZGVyOiB7XG4gICAgICBzcGFuaXNoOiBcInBlcmRlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBsb3NlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiZXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgdGFtYmFsZWFyOiB7XG4gICAgICBzcGFuaXNoOiBcInRhbWJhbGVhclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byBzdHVtYmxlXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiYXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcHJlZmVyaXI6IHtcbiAgICAgIHNwYW5pc2g6IFwicHJlZmVyaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcHJlZmVyXCIsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIHZlcmJFbmRpbmc6IFwiaXJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcXVlcmVyOiB7XG4gICAgICBzcGFuaXNoOiBcInF1ZXJlclwiLFxuICAgICAgZW5nbGlzaDogXCJ0byB3YW50L3dpc2hcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICByZWZlcmlyOiB7XG4gICAgICBzcGFuaXNoOiBcInJlZmVyaXJcIixcbiAgICAgIGVuZ2xpc2g6IFwidG8gcmVmZXJcIixcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgdmVyYkVuZGluZzogXCJpclwiXG4gICAgICB9XG4gICAgfSxcbiAgfVxufTsiLCIvLyBGcm9tOiBodHRwOi8vd3d3LnJlZ2V4dGVzdGVyLmNvbS8/ZmFtPTk0NzMwXG4vLyBGcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTc0Nzc4OS84MzkxNlxuZnVuY3Rpb24gd3JhcFBhcmVudGhlc2lzQ29udGVudChzdHJpbmcsIHRhZywgY2xhc3NOYW1lKSB7XG4gIC8vY29uc29sZS5sb2coXCJzdHJpbmc6IFwiLCBzdHJpbmcpO1xuICAvL2NvbnNvbGUubG9nKFwidGFnOiBcIiwgdGFnKTtcbiAgLy9jb25zb2xlLmxvZyhcImNsYXNzTmFtZTogXCIsIGNsYXNzTmFtZSk7XG5cbiAgdmFyIGNsYXNzRGVmO1xuXG4gIGlmKCF0YWcpIHsgdGFnID0gXCJzcGFuXCIgfVxuICBpZihjbGFzc05hbWUpIHtcbiAgICBjbGFzc0RlZiA9ICcgY2xhc3M9XCInK2NsYXNzTmFtZSsnXCInO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzRGVmID0gJyc7XG4gIH1cblxuICB2YXIgb3BlblRhZyA9ICc8Jyt0YWcrY2xhc3NEZWYrJz4nO1xuXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFxcKC4qP1xcKSkvICwgb3BlblRhZysnJCY8LycrdGFnKyc+Jyk7XG59XG5cblxuXG4vLyBEZXRlY3Qgd2hpY2ggQ1NTIGV2ZW50cyBhcmUgc3VwcG9ydGVkIGJ5IHRoZSB1c2VyJ3MgYnJvd3NlciBhbmQgb25seSByZXR1cm4gdGhlIGZpcnN0IG9uZSBpZiBzZXZlcmFsIG1hdGNoIChzdWNoIGFzIGB0cmFuc2l0aW9uZW5kYCBhbmQgYHdlYmtpdFRyYW5zaXRpb25FbmRgIGZvciBDaHJvbWUgc28geW91IGNhbiBsaXN0ZW4gZm9yIHRoZSBlbmQgb2YgYSBDU1MgZXZlbnQgYW5kIHRoZW4gcGVyZm9ybSBhbiBhY3Rpb24gYmFzZWQgb24gdGhhdCkgKGh0dHBzOi8vam9uc3VoLmNvbS9ibG9nL2RldGVjdC10aGUtZW5kLW9mLWNzcy1hbmltYXRpb25zLWFuZC10cmFuc2l0aW9ucy13aXRoLWphdmFzY3JpcHQvKVxuZnVuY3Rpb24gYnJvd3NlclN1cHBvcnRlZEV2ZW50cygpe1xuICB2YXIgdCxcbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKSxcbiAgICBicm93c2VyU3VwcG9ydGVkRXZlbnRzID0ge307XG5cbiAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgIFwidHJhbnNpdGlvblwiICAgICAgOiBcInRyYW5zaXRpb25lbmRcIixcbiAgICBcIk9UcmFuc2l0aW9uXCIgICAgIDogXCJvVHJhbnNpdGlvbkVuZFwiLFxuICAgIFwiTW96VHJhbnNpdGlvblwiICAgOiBcInRyYW5zaXRpb25lbmRcIixcbiAgICBcIldlYmtpdFRyYW5zaXRpb25cIjogXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJcbiAgfTtcblxuICB2YXIgYW5pbWF0aW9ucyA9IHtcbiAgICBcImFuaW1hdGlvblwiICAgICAgOiBcImFuaW1hdGlvbmVuZFwiLFxuICAgIFwiT0FuaW1hdGlvblwiICAgICA6IFwib0FuaW1hdGlvbkVuZFwiLFxuICAgIFwiTW96QW5pbWF0aW9uXCIgICA6IFwiYW5pbWF0aW9uZW5kXCIsXG4gICAgXCJXZWJraXRBbmltYXRpb25cIjogXCJ3ZWJraXRBbmltYXRpb25FbmRcIlxuICB9O1xuXG4gIGZvciAodCBpbiB0cmFuc2l0aW9ucyl7XG4gICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpe1xuICAgICAgLy9jb25zb2xlLmxvZyh0cmFuc2l0aW9uc1t0XSk7XG4gICAgICBicm93c2VyU3VwcG9ydGVkRXZlbnRzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uc1t0XTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoYSBpbiBhbmltYXRpb25zKXtcbiAgICBpZiAoZWwuc3R5bGVbYV0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAvL2NvbnNvbGUubG9nKGFuaW1hdGlvbnNbYV0pO1xuICAgICAgYnJvd3NlclN1cHBvcnRlZEV2ZW50cy5hbmltYXRpb24gPSBhbmltYXRpb25zW2FdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXJTdXBwb3J0ZWRFdmVudHM7XG59XG5cbnZhciBzdXBwb3J0ZWRFdmVudHMgPSBicm93c2VyU3VwcG9ydGVkRXZlbnRzKCk7XG52YXIgdHJhbnNpdGlvbkV2ZW50ID0gc3VwcG9ydGVkRXZlbnRzLnRyYW5zaXRpb247XG52YXIgYW5pbWF0aW9uRXZlbnQgPSBzdXBwb3J0ZWRFdmVudHMuYW5pbWF0aW9uO1xuXG5cblxuZnVuY3Rpb24gYW5pbWF0ZUNhcmRGbGlwKGNhbGxiYWNrKSB7XG4gIC8vIExldCdzIG1ha2UgdGhlIGNhbGxiYWNrIG9wdGlvbmFsXG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcblxuICAvL2NvbnNvbGUubG9nKFwiZmxpcCBjYXJkIGJlZ2luXCIpO1xuXG4gIC8vIEZsaXAgdGhlIGNhcmRcbiAgJChcIiNxdWl6XCIpLmZpbmQoXCIuY2FyZFwiKS50b2dnbGVDbGFzcyhcImZsaXBwZWRcIik7XG5cbiAgLy8gUnVuIGEgY2FsbGJhY2sgd2hlbiB0aGUgQ1NTIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQgaWYgaXQgaGFzIGJlZW4gcHJvdmlkZWQgYXMgYW4gYXJndW1lbnRcbiAgaWYoY2FsbGJhY2spIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiQSBjYWxsYmFjayB3YXMgcHJvdmlkZWRcIik7XG5cbiAgICAvLyBXYWl0IGZvciB0aGUgZmxpcHBpbmcgYW5pbWF0aW9uIHRvIGNvbXBsZXRlIGJlZm9yZSBydW5uaW5nIGNhbGxiYWNrXG4gICAgJChcIiNxdWl6XCIpLm9uZSh0cmFuc2l0aW9uRXZlbnQsIFwiLmNhcmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiZmxpcCBjYXJkIGVuZFwiKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlUXVpekFyZWEocXVpelF1ZXN0aW9uKSB7XG4gIC8vY29uc29sZS5sb2coXCJQb3B1bGF0ZSBRdWl6IEFyZWFcIik7XG5cbiAgdmFyIHF1aXogPSAkKFwiI3F1aXpcIik7XG5cbiAgLy8gQ2hhbmdlIG91dCB0aGUgcXVlc3Rpb24gYmVpbmcgc2hvd25cbiAgLy9jb25zb2xlLmxvZyhcIkZhZGUgaW4gdGhlIGNvbnRlbnQgb24gdGhlIGNhcmRzXCIpO1xuICBxdWl6LmZpbmQoXCIuZmFjZS5mcm9udFwiKS5jaGlsZHJlbihcIi5qcy1nZW5lcmF0ZWQtc2VudGVuY2VcIikuaHRtbCh3cmFwUGFyZW50aGVzaXNDb250ZW50KHF1aXpRdWVzdGlvbi5lbmdsaXNoLCAnc21hbGwnKSkuZmFkZUluKCk7XG4gIHF1aXouZmluZChcIi5mYWNlLmJhY2tcIikuY2hpbGRyZW4oXCIuanMtZ2VuZXJhdGVkLXNlbnRlbmNlXCIpLmh0bWwocXVpelF1ZXN0aW9uLnNwYW5pc2gpLmZhZGVJbigpO1xuXG4gIC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIHF1aXogaGFzIGJlZW4gcG9wdWxhdGVkLCBzYXZlIHRoYXQgc3RhdHVzIHNvIHdlIGNhbiBmbGlwIHRoZSBjYXJkIGF0IHJhbmRvbSB0byBkaXNwbGF5IGRpZmZlcmVudCBzaWRlcyBiZWZvcmUgbG9hZGluZyBpbiB0aGUgc2VudGVuY2VcbiAgaWYoIWhhc0ZpcnN0UXVlc3Rpb25SdW4pIHsgaGFzRmlyc3RRdWVzdGlvblJ1biA9IHRydWU7IH1cbn1cblxuXG5cbmZ1bmN0aW9uIGRpc2FibGVSZXN1bHRCdG5zKGVuYWJsZVN0YXR1cykge1xuICAkKFwiLmpzLXJlc3VsdC1idG5cIikucHJvcChcImRpc2FibGVkXCIsIGVuYWJsZVN0YXR1cyk7XG59XG5cblxuXG4vLyBGdW5jdGlvbjogY3JlYXRlTmVzdGVkT2JqZWN0KCBiYXNlLCBuYW1lc1ssIHZhbHVlXSApXG4vLyAgIGJhc2U6IHRoZSBvYmplY3Qgb24gd2hpY2ggdG8gY3JlYXRlIHRoZSBoaWVyYXJjaHlcbi8vICAgbmFtZXM6IGFuIGFycmF5IG9mIHN0cmluZ3MgY29udGFuaW5nIHRoZSBuYW1lcyBvZiB0aGUgb2JqZWN0c1xuLy8gICB2YWx1ZSAob3B0aW9uYWwpOiBpZiBnaXZlbiwgd2lsbCBiZSB0aGUgbGFzdCBvYmplY3QgaW4gdGhlIGhpZXJhcmNoeVxuLy8gUmV0dXJuczogdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBoaWVyYXJjaHlcbi8vIEZyb206IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzExNDMzMDY3LzgzOTE2XG5mdW5jdGlvbiBjcmVhdGVOZXN0ZWRPYmplY3QoIGJhc2UsIG5hbWVzLCB2YWx1ZSApIHtcbiAgLy8gSWYgYSB2YWx1ZSBpcyBnaXZlbiwgcmVtb3ZlIHRoZSBsYXN0IG5hbWUgYW5kIGtlZXAgaXQgZm9yIGxhdGVyOlxuICB2YXIgbGFzdE5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID09PSAzID8gbmFtZXMucG9wKCkgOiBmYWxzZTtcblxuICAvLyBXYWxrIHRoZSBoaWVyYXJjaHksIGNyZWF0aW5nIG5ldyBvYmplY3RzIHdoZXJlIG5lZWRlZC5cbiAgLy8gSWYgdGhlIGxhc3ROYW1lIHdhcyByZW1vdmVkLCB0aGVuIHRoZSBsYXN0IG9iamVjdCBpcyBub3Qgc2V0IHlldDpcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKyApIHtcbiAgICBiYXNlID0gYmFzZVsgbmFtZXNbaV0gXSA9IGJhc2VbIG5hbWVzW2ldIF0gfHwge307XG4gIH1cblxuICAvLyBJZiBhIHZhbHVlIHdhcyBnaXZlbiwgc2V0IGl0IHRvIHRoZSBsYXN0IG5hbWU6XG4gIGlmKCBsYXN0TmFtZSApIGJhc2UgPSBiYXNlWyBsYXN0TmFtZSBdID0gdmFsdWU7XG5cbiAgLy8gUmV0dXJuIHRoZSBsYXN0IG9iamVjdCBpbiB0aGUgaGllcmFyY2h5OlxuICByZXR1cm4gYmFzZTtcbn1cblxuZnVuY3Rpb24gZ2V0TnVtYmVyT2JqZWN0UHJvcGVydGllcyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xufVxuXG5cbi8vIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTMyMjE4L3BpY2stcmFuZG9tLXByb3BlcnR5LWZyb20tYS1qYXZhc2NyaXB0LW9iamVjdFxuZnVuY3Rpb24gZ2V0UmFuZG9tUHJvcGVydHkgKG9iaikge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIHZhciByYW5kb21Qcm9wZXJ0eSA9IGtleXNbIGtleXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSA8PCAwXTtcbiAgLy9jb25zb2xlLmxvZyhcIlJhbmRvbSBQcm9wZXJ0eTogXCIsIHJhbmRvbVByb3BlcnR5KTtcbiAgLy9yZXR1cm4gcmFuZG9tUHJvcGVydHk7XG4gIC8vcmV0dXJuIHtcInByb3BlcnR5TmFtZVwiOiByYW5kb21Qcm9wZXJ0eSwgXCJwcm9wZXJ0eVZhbHVlXCI6IG9ialtyYW5kb21Qcm9wZXJ0eV19O1xuICByZXR1cm4ge1wicHJvcGVydHlOYW1lXCI6IHJhbmRvbVByb3BlcnR5LCBcInByb3BlcnR5VmFsdWVcIjogb2JqW3JhbmRvbVByb3BlcnR5XX07XG59XG5cblxuZnVuY3Rpb24gcmFuZG9tQXJyYXlFbGVtZW50KGFycmF5KSB7XG4gIHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaXRlbXMubGVuZ3RoKV07XG59XG5cblxuZnVuY3Rpb24gZ2V0U3RlbSh3b3JkKSB7XG4gIHJldHVybiB7XG4gICAgbGFzdDI6IHdvcmQuc2xpY2UoLTIpLFxuICAgIHN0ZW06IHdvcmQuc3Vic3RyaW5nKDAsIHdvcmQubGVuZ3RoLTIpXG4gIH1cbn1cblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzQ4NjQxNzUvODM5MTZcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgIHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xuICB9XG59XG5cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoaW5jbHVkZWQpXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlUXVpeihxdWl6T3B0aW9ucywgcXVpeldvcmRzKSB7XG4gIGNvbnNvbGUubG9nKCdJbiBhY3RpdmF0ZVF1aXooKScpO1xuICBjb25zb2xlLmxvZygncXVpeldvcmRzIGluIGFjdGl2YXRlUXVpeigpJywgcXVpeldvcmRzKTtcblxuICB2YXIgcXVpeiA9ICQoXCIjcXVpelwiKTtcblxuICBudW1Xb3JkcyA9IGdldE51bWJlck9iamVjdFByb3BlcnRpZXMocXVpeldvcmRzKTtcbiAgY29uc29sZS5sb2coXCJOdW1iZXIgb2YgUHJvcGVydGllcyBpbiB0aGUgcXVpeldvcmRzIG9iamVjdDogXCIsIG51bVdvcmRzKTtcblxuICBxdWl6LmZpbmQoXCIucHJvZ3Jlc3NcIikuZmluZChcIi5udW0td29yZHNcIikudGV4dChudW1Xb3Jkcyk7XG5cblxuICB2YXIgY29tcGxldGVkUXVpeldvcmRzID0ge307XG5cbiAgLy8gUG9wdWxhdGUgUXVpeiBvbiBwYWdlIGxvYWRcbiAgcG9wdWxhdGVRdWl6QXJlYShxdWl6T3B0aW9ucy5mdW5jdGlvblRvR2VuZXJhdGVRdWl6UXVlc3Rpb24oKSk7XG5cbiAgJCgnLmpzLXJlc3VsdC1idG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdFN0YXR1cyA9ICQodGhpcykuZGF0YShcInJlc3VsdC1zdGF0dXNcIik7XG5cbiAgICAvLyBEaXNhYmxlIHRoZSByZXN1bHQgYnV0dG9ucyBzbyB0aGUgdXNlciBuZWVkcyB0byBmbGlwIG92ZXIgdGhlIGNhcmQgdG8gY2hlY2sgdGhlIGFuc3dlciBiZWZvcmUgc2VsZWN0aW5nIGEgcmVzdWx0XG4gICAgZGlzYWJsZVJlc3VsdEJ0bnModHJ1ZSk7XG5cbiAgICAvLyBJZiB0aGUgcXVpeiBpcyBzZXQgdXAgdG8gb25seSBzaG93IGtlZXAgc2NvcmUgYW5kIG9ubHkgc2hvdyB1bmFuc3dlcmVkIHF1ZXN0aW9ucyBvciBwcmV2aW91c2x5IGFuc3dlcmVkIGluY29ycmVjdCBxdWVzdGlvbnMsIHRoZW4gY2hlY2sgaWYgaXQgd2FzIGFza2VkIGNvcnJlY3RseSwgYW5kIGlmIHNvIG1vdmUgdGhhdCB3b3JkR3JvdXAgdG8gdGhlIGFuc3dlcmVkV29yZHMgb2JqZWN0XG4gICAgaWYocXVpek9wdGlvbnMub25seVNob3dVbmFuc3dlcmVkUXVlc3Rpb25zID09PSB0cnVlKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgcXVlc3Rpb24gd2FzIGFuc3dlcmVkIGNvcnJlY3RseVxuICAgICAgdmFyIGxhc3RXb3JkS2V5ID0gbGFzdFdvcmRHcm91cC5rZXk7XG5cbiAgICAgIGlmIChyZXN1bHRTdGF0dXMgPT09IFwiY29ycmVjdFwiKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJRdWVzdGlvbiBhbnN3ZXJlZCBjb3JyZWN0bHlcIik7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxhc3RXb3JkS2V5OiBcIiwgbGFzdFdvcmRLZXkpO1xuICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGBhbnN3ZXJBdHRlbXB0ZWRgIHByb3BlcnR5IHRvIHJlY29yZCBob3cgbWFueSB0aW1lcyB0aGlzIHdvcmQgd2FzIGF0dGVtcHRlZFxuICAgICAgICBxdWl6V29yZHNbbGFzdFdvcmRLZXldWydhbnN3ZXJBdHRlbXB0ZWQnXSsrO1xuXG4gICAgICAgIC8vIENoYW5nZSB0aGUgYGFuc3dlckNvcnJlY3RgIHRvIHRydWUgdG8gc2hvdyBpdCB3YXMgYW5zd2VyZWQgY29ycmVjdGx5XG4gICAgICAgIHF1aXpXb3Jkc1tsYXN0V29yZEtleV1bJ2Fuc3dlckNvcnJlY3QnXSA9IHRydWU7XG5cbiAgICAgICAgLy8gQ29weSB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXMgZnJvbSB0aGUgd29yZCBncm91cCB0byB0aGUgYGNvbXBsZXRlZFF1aXpXb3Jkc2Agb2JqZWN0XG4gICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0gPSB7fTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgYGVuZ2xpc2hgIHByb3BlcnR5IGlzIGFuIG9iamVjdChhcyBpbiB0aGUgY2FzZSBvZiBub3VucyB3aGVyZSB0aGUgZW5nbGlzaCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIGBzaW5ndWxhcmAgcHJvcGVydHkgdGhhdCBob2xkcyB0aGUgYWN0dWFsIGVuZ2xpc2ggdmFsdWUpXG4gICAgICAgIGlmKGlzUGxhaW5PYmplY3QocXVpeldvcmRzW2xhc3RXb3JkS2V5XS5lbmdsaXNoKSkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJxdWl6V29yZHNbbGFzdFdvcmRLZXldXCIscXVpeldvcmRzW2xhc3RXb3JkS2V5XSk7XG4gICAgICAgICAgY29tcGxldGVkUXVpeldvcmRzW2xhc3RXb3JkS2V5XS5lbmdsaXNoID0gcXVpeldvcmRzW2xhc3RXb3JkS2V5XS5lbmdsaXNoLnNpbmd1bGFyO1xuICAgICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0uc3BhbmlzaCA9IHF1aXpXb3Jkc1tsYXN0V29yZEtleV0uc3BhbmlzaC5zaW5ndWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNbbGFzdFdvcmRLZXldLmVuZ2xpc2ggPSBxdWl6V29yZHNbbGFzdFdvcmRLZXldLmVuZ2xpc2g7XG4gICAgICAgICAgY29tcGxldGVkUXVpeldvcmRzW2xhc3RXb3JkS2V5XS5zcGFuaXNoID0gcXVpeldvcmRzW2xhc3RXb3JkS2V5XS5zcGFuaXNoO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcGxldGVkUXVpeldvcmRzW2xhc3RXb3JkS2V5XS5hbnN3ZXJBdHRlbXB0ZWQgPSBxdWl6V29yZHNbbGFzdFdvcmRLZXldLmFuc3dlckF0dGVtcHRlZDtcbiAgICAgICAgY29tcGxldGVkUXVpeldvcmRzW2xhc3RXb3JkS2V5XS53b3JkVHlwZSA9IHF1aXpXb3Jkc1tsYXN0V29yZEtleV0ud29yZFR5cGU7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSB3b3JkIGdyb3VwIGZyb20gdGhlIGBxdWl6V29yZHNgIG9iamVjdCBzbyBpdCBpc24ndCBzaG93biBhZ2FpblxuICAgICAgICBkZWxldGUgcXVpeldvcmRzW2xhc3RXb3JkS2V5XTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIFByb2dyZXNzIGJhciBwZXJjZW50YWdlIGFuZCBzY29yZSB2YWx1ZVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY29tcGxldGVkUXVpeldvcmRzOiBcIiwgY29tcGxldGVkUXVpeldvcmRzKTtcbiAgICAgICAgdmFyIG51bVdvcmRzQW5zd2VyZWRDb3JyZWN0ID0gZ2V0TnVtYmVyT2JqZWN0UHJvcGVydGllcyhjb21wbGV0ZWRRdWl6V29yZHMpO1xuICAgICAgICB2YXIgY29ycmVjdFBlcmNlbnRhZ2UgPSAobnVtV29yZHNBbnN3ZXJlZENvcnJlY3QgLyBudW1Xb3JkcykgKiAxMDA7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ251bVdvcmRzQW5zd2VyZWRDb3JyZWN0OiAnLCBudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NvcnJlY3RQZXJjZW50YWdlOiAnLCBjb3JyZWN0UGVyY2VudGFnZSk7XG5cbiAgICAgICAgLy8gU2luY2UgYSBxdWVzdGlvbiB3YXMgbWFya2VkIGFzIGNvcnJlY3QsIHRoZSBwZXJjZW50YWdlLWNvcnJlY3Qgd2lsbCBjaGFuZ2UgYW5kIHRoZXJlZm9yZSB3ZSB0cmlnZ2VyIGEgY3VzdG9tIGV2ZW50IHdoaWNoIHBhc3NlcyBzb21lIGRhdGEgdG8gdGhlIGBwcm9ncmVzcy1iYXIuanNgIGZpbGUgd2hpY2ggaGFzIGEgbGlzdGVuZXIgZm9yIHRoZSBjdXN0b20gZXZlbnQuXG4gICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3Byb2dyZXNzLWNoYW5nZWQnLCBbbnVtV29yZHNBbnN3ZXJlZENvcnJlY3QsIGNvcnJlY3RQZXJjZW50YWdlXSk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIk51bWJlciBvZiBQcm9wZXJ0aWVzIGluIHRoZSBxdWl6V29yZHMgb2JqZWN0OiBcIiwgZ2V0TnVtYmVyT2JqZWN0UHJvcGVydGllcyhxdWl6V29yZHMpKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKCdRdWl6IFdvcmRzIGluIHJlc3VsdFN0YXR1czogJywgcXVpeldvcmRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEluY3JlbWVudCB0aGUgYGFuc3dlckF0dGVtcHRlZGAgcHJvcGVydHkgdG8gcmVjb3JkIGhvdyBtYW55IHRpbWVzIHRoaXMgd29yZCB3YXMgYXR0ZW1wdGVkXG4gICAgICAgIHF1aXpXb3Jkc1tsYXN0V29yZEtleV1bJ2Fuc3dlckF0dGVtcHRlZCddKys7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJRdWVzdGlvbiBhbnN3ZXJlZCBpbmNvcnJlY3RseVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiaXNSZXN1bHRDb3JyZWN0OiBcIiArIGlzUmVzdWx0Q29ycmVjdCArIFwiKFwiICsgdHlwZW9mIGlzUmVzdWx0Q29ycmVjdCArIFwiKVwiKTtcblxuICAgIC8vIEFkZCB0aGUgcHVsc2Ugbm90aWZpY2F0aW9uIHRvIHNob3cgdGhlaXIgcmVzdWx0IGluIGEgdmlzdWFsIHdheVxuICAgICQoXCJkaXYuZmFjZVwiKS5hZGRDbGFzcyhcInB1bHNlLW5vdGlmaWNhdGlvbiBwdWxzZS1ub3RpZmljYXRpb24tXCIgKyByZXN1bHRTdGF0dXMpO1xuXG4gICAgLy8gRm9yY2UgdGhpcyBmdW5jdGlvbiB0byBvbmx5IHJ1biBvbmNlIHBlciBjbGljayBzaW5jZSB0aGUgYW5pbWF0aW9uIGlzIGJlaW5nIGFwcGxpZWQgdG8gYm90aCBgLmZhY2VgIGRpdnMgc28gaXQgd2lsbCBhY3R1YWxseSBkZXRlY3QgaXQgdHdpY2UuXG4gICAgLy8gVE9ETzogRml4IHRoaXMgYnkgYXBwbHlpbmcgdGhlIGAucHVsc2Utbm90aWZpY2F0aW9uYCBjbGFzcyBvbiBvbmx5IHRoZSBgLmZhY2VgIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIHNob3duLlxuICAgIHF1aXoub25lKGFuaW1hdGlvbkV2ZW50LCBcIi5mYWNlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAvLyBTaW5jZSB0aGUgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZCwgcmVtb3ZlIHRoZSBhbmltYXRpb24gY2xhc3NcbiAgICAgICQoXCJkaXYuZmFjZVwiKS5yZW1vdmVDbGFzcyhcInB1bHNlLW5vdGlmaWNhdGlvbiBwdWxzZS1ub3RpZmljYXRpb24tXCIgKyByZXN1bHRTdGF0dXMpO1xuXG4gICAgICAvLyBGYWRlIG91dCB0aGUgY29udGVudCBvbiB0aGUgY2FyZHNcbiAgICAgIHF1aXouZmluZChcIi5mYWNlLmZyb250XCIpLmNoaWxkcmVuKFwiLmpzLWdlbmVyYXRlZC1zZW50ZW5jZVwiKS5mYWRlT3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBxdWVzdGlvbiB0byBzaG93IGlmIHRoZXJlIGFyZSBhbnkgbGVmdCBpbiB0aGUgc2V0XG4gICAgICAgIGlmKGdldE51bWJlck9iamVjdFByb3BlcnRpZXMocXVpeldvcmRzKSA+IDApIHtcbiAgICAgICAgICB2YXIgbmV3V29yZEdyb3VwID0gcXVpek9wdGlvbnMuZnVuY3Rpb25Ub0dlbmVyYXRlUXVpelF1ZXN0aW9uKCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGlzIGlzIG5vdCB0aGUgZmlyc3QgcXVlc3Rpb24sIHJhbmRvbWx5IGRldGVybWluZSBpZiB0aGUgY2FyZCBzaG91bGQgdHVybiAoc2hvdyB0aGUgb3RoZXIgbGFuZ3VhZ2UgdG8ga2VlcCB0aGUgcXVlc3Rpb25zIHVucHJlZGljdGFibGUpXG4gICAgICAgICAgaWYgKGdldFJhbmRvbUludCgwLCAxKSA9PT0gMSAmJiBoYXNGaXJzdFF1ZXN0aW9uUnVuKSB7XG4gICAgICAgICAgICBhbmltYXRlQ2FyZEZsaXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBwb3B1bGF0ZVF1aXpBcmVhKG5ld1dvcmRHcm91cCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdWxhdGVRdWl6QXJlYShuZXdXb3JkR3JvdXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGUgUXVpeiBoYXMgZmluaXNoZWQuIENhbGN1bGF0ZSB0aGUgcmVzdWx0cy5cbiAgICAgICAgICBxdWl6LmZpbmQoXCIucXVlc3Rpb25zXCIpLmZhZGVPdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciByZXN1bHRzQXJlYSA9IHF1aXouZmluZChcIi5yZXN1bHRzXCIpO1xuXG4gICAgICAgICAgICAvLyBGaWxsIGluIHRoZSBudW1iZXIgb2Ygd29yZHMgaW4gdGhlIHF1aXpcbiAgICAgICAgICAgIHJlc3VsdHNBcmVhLmZpbmQoJy5udW0td29yZHMnKS50ZXh0KG51bVdvcmRzKTtcblxuICAgICAgICAgICAgLy8gRmlsbCBpbiBob3cgbWFueSB3b3JkcyB3ZXJlIGNvcnJlY3RseSBhbnN3ZXJlZCBvbiB0aGUgZmlyc3QgdHJ5XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY29tcGxldGVkUXVpeldvcmRzIDE6IFwiLCBjb21wbGV0ZWRRdWl6V29yZHMpO1xuICAgICAgICAgICAgdmFyIG51bUZpcnN0VHJ5Q29ycmVjdCA9IDA7XG5cbiAgICAgICAgICAgICQuZWFjaChjb21wbGV0ZWRRdWl6V29yZHMsIGZ1bmN0aW9uKGluZGV4LCB3b3JkR3JvdXApe1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaW5kZXggaW4gbG9vcFwiLCBpbmRleCk7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ3b3JkR3JvdXAgaW4gbG9vcFwiLCB3b3JkR3JvdXApO1xuICAgICAgICAgICAgICBpZih3b3JkR3JvdXAuYW5zd2VyQXR0ZW1wdGVkID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbnVtRmlyc3RUcnlDb3JyZWN0Kys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXN1bHRzQXJlYS5maW5kKCcuZmlyc3QtdHJ5LWNvcnJlY3QnKS50ZXh0KG51bUZpcnN0VHJ5Q29ycmVjdCk7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgdG9wIDUgd29yZHMgdGhhdCBoYXZlIHRoZSBtb3N0IHRyaWVzIChBZGQgbGF0ZXIpXG5cbiAgICAgICAgICAgIC8vIEdldCBhbGwgdGhlIHdvcmRzIGFsb25nIHdpdGggaG93IG1hbnkgdHJpZXMgdG8gY29tcGxldGUgZWFjaCBvbmVcblxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlZFF1aXpXb3Jkc0FycmF5ID0gW107XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIGNvbXBsZXRlZFF1aXpXb3JkcyBvYmplY3QgdG8gYW4gYXJyYXkgc28gaXQncyBlYXNpZXIgdG8gc29ydCBpdCB3aGVuIG91dHB1dHRpbmcgYWxsIHRoZSB3b3JkcyBhbnN3ZXJlZCBieSB0aGUgbnVtYmVyIG9mIHRyaWVzIGZvciBlYWNoIHdvcmRcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb21wbGV0ZWRRdWl6V29yZHMpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZFF1aXpXb3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVkUXVpeldvcmRzQXJyYXkucHVzaChjb21wbGV0ZWRRdWl6V29yZHNba2V5XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU29ydCBieSBOdW1iZXIgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA2MzAwNy9ob3ctdG8tc29ydC1hbi1hcnJheS1vZi1pbnRlZ2Vycy1jb3JyZWN0bHkpXG4gICAgICAgICAgICAvLyBTb3J0IGJ5IHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGFuc3dlciB3YXMgYXR0ZW1wdGVkIGluIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAgICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc0FycmF5ID0gY29tcGxldGVkUXVpeldvcmRzQXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYi5hbnN3ZXJBdHRlbXB0ZWQgLSBhLmFuc3dlckF0dGVtcHRlZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmRpciggY29tcGxldGVkUXVpeldvcmRzQXJyYXkgKTtcblxuICAgICAgICAgICAgLy92YXIgY29tcGxldGVkUXVpeldvcmROdW0gPSAxO1xuICAgICAgICAgICAgLy92YXIgY29tcGxldGVkUXVpeldvcmRUcmllc1xuXG4gICAgICAgICAgICAvLyBEaXNwbGF5IGVhY2ggb2YgdGhlIGNvbXBsZXRlZCB3b3JkcyBhbmQgdGhlIG51bWJlciBvZiBhdHRlbXB0cyBmb3IgZWFjaCBvbmVcbiAgICAgICAgICAgICQuZWFjaChjb21wbGV0ZWRRdWl6V29yZHNBcnJheSwgZnVuY3Rpb24oaW5kZXgsIHdvcmRHcm91cCl7XG4gICAgICAgICAgICAgIHJlc3VsdHNBcmVhLmZpbmQoJ3RhYmxlLmZ1bGwtc2NvcmUnKS5maW5kKCd0Ym9keScpLmFwcGVuZCgnPHRyPjx0ZD4nICsgd29yZEdyb3VwLnNwYW5pc2ggKyAnPC90ZD48dGQ+JyArIHdvcmRHcm91cC5hbnN3ZXJBdHRlbXB0ZWQgKyAnPC90ZD48L3RyPicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlc3VsdHNBcmVhLmZhZGVJbigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gVE9ETzogRmluZCBhIHdheSB0byBmYWRlIG91dCBib3RoIHRoZSBgLmZhY2VgIGRpdnMgYnV0IG9ubHkgaGF2ZSB0aGUgYWJvdmUgY29kZSBydW4gb25jZSB3aGVuIGJvdGggYXJlIGZpbmlzaGVkLlxuICAgICAgcXVpei5maW5kKFwiLmZhY2UuYmFja1wiKS5jaGlsZHJlbihcIi5qcy1nZW5lcmF0ZWQtc2VudGVuY2VcIikuZmFkZU91dCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gQ3JlYXRlIE9iamVjdCB0aGF0IGhvbGRzIGFsbCB0aGUgd29yZHMgdG8gYmUgYXNrZWQgb24gYSBwYXJ0aWN1bGFyIHF1aXpcbmZ1bmN0aW9uIGNyZWF0ZVF1aXoocXVpek9iamVjdHMsIHF1aXpUeXBlKSB7XG5cbiAgY29uc29sZS5sb2coJ0luIGNyZWF0ZVF1aXooKScpO1xuXG4gIHZhciBxdWl6T3V0cHV0ID0ge307XG5cbiAgaWYocXVpelR5cGUgPT09ICdyZXRlbnRpb24nKSB7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggb2YgdGhlIHdvcmRPYmplY3RzIHByb3ZpZGVkIChleDogbm91bnMsIGFkamVjdGl2ZXMsIGV0Yy4pXG4gICAgJC5lYWNoKHF1aXpPYmplY3RzLCBmdW5jdGlvbiAoaW5kZXgsIHdvcmRPYmplY3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKHdvcmRPYmplY3QpO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBXb3JkR3JvdXBcbiAgICAgICQuZWFjaCh3b3JkT2JqZWN0LnZhbHVlcywgZnVuY3Rpb24gKHdvcmRLZXksIHdvcmRHcm91cCkge1xuICAgICAgICB3b3JkR3JvdXAua2V5ID0gd29yZEtleTtcbiAgICAgICAgd29yZEdyb3VwLndvcmRUeXBlID0gd29yZE9iamVjdC53b3JkVHlwZTtcbiAgICAgICAgd29yZEdyb3VwLmFuc3dlckNvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgd29yZEdyb3VwLmFuc3dlckF0dGVtcHRlZCA9IDA7XG4gICAgICAgIC8vY29uc29sZS5sb2cod29yZEtleSwgd29yZEdyb3VwKTtcblxuICAgICAgICAvLyBBZGQgdGhlIHdvcmRHcm91cCB0byB0aGUgcXVpek91dHB1dCBvYmplY3RcbiAgICAgICAgcXVpek91dHB1dFt3b3JkS2V5XSA9IHdvcmRHcm91cDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYocXVpelR5cGUgPT09ICdjb25qdWdhdGlvbicpIHtcbiAgICAvL2NvbnNvbGUubG9nKHF1aXpPYmplY3RzKTtcblxuICAgIHF1aXpPdXRwdXQud29yZFR5cGVzID0gW107XG4gICAgcXVpek91dHB1dC52YWx1ZXMgPSB7fTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIG9mIHRoZSB3b3JkT2JqZWN0cyBwcm92aWRlZCAoZXg6IG5vdW5zLCBhZGplY3RpdmVzLCBldGMuKVxuICAgICQuZWFjaChxdWl6T2JqZWN0cywgZnVuY3Rpb24gKGluZGV4LCBjb25qdWdhdGlvbk9iamVjdCkge1xuICAgICAgLy9jb25zb2xlLmxvZygnaGVyZTMnLGNvbmp1Z2F0aW9uT2JqZWN0KTtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggV29yZFR5cGUoaS5lLiAnYXInLCAnZXInLCBvciAnaXInIHdvcmRzKVxuICAgICAgJC5lYWNoKGNvbmp1Z2F0aW9uT2JqZWN0LCBmdW5jdGlvbiAod29yZFR5cGVOYW1lLCB3b3JkVHlwZU9iamVjdCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlNCAtIHdvcmRUeXBlTmFtZScsd29yZFR5cGVOYW1lKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaGVyZTQgLSB3b3JkVHlwZU9iamVjdCcsd29yZFR5cGVPYmplY3QpO1xuXG4gICAgICAgICQuZWFjaCh3b3JkVHlwZU9iamVjdCwgZnVuY3Rpb24gKHRlbnNlTmFtZSwgdGVuc2VPYmplY3QpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlNSAtIHRlbnNlTmFtZScsdGVuc2VOYW1lKTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlNSAtIHRlbnNlT2JqZWN0Jyx0ZW5zZU9iamVjdCk7XG5cbiAgICAgICAgICAkLmVhY2godGVuc2VPYmplY3QucGVyc29uLCBmdW5jdGlvbiAocGVyc29uLCBjb25qdWdhdGlvbikge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGVyZTYgLSBwZXJzb24nLHBlcnNvbik7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlNiAtIGNvbmp1Z2F0aW9uJyxjb25qdWdhdGlvbik7XG5cbiAgICAgICAgICAgIHZhciBjb25qdWdhdGlvbkdyb3VwID0ge1xuICAgICAgICAgICAgICBhbnN3ZXJDb3JyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgYW5zd2VyQXR0ZW1wdGVkOiAwLFxuICAgICAgICAgICAgICB3b3JkVHlwZTogd29yZFR5cGVOYW1lLFxuICAgICAgICAgICAgICB0ZW5zZTogdGVuc2VOYW1lLFxuICAgICAgICAgICAgICBhcHBlbmRUbzogdGVuc2VPYmplY3QuYXBwZW5kVG8sXG4gICAgICAgICAgICAgIHBlcnNvbjogcGVyc29uLFxuICAgICAgICAgICAgICBjb25qdWdhdGlvbjogY29uanVnYXRpb25cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uanVnYXRpb25Hcm91cFwiLCBjb25qdWdhdGlvbkdyb3VwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29yZFR5cGVOYW1lXCIsIHdvcmRUeXBlTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgcXVpek91dHB1dC53b3JkVHlwZXMpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNvbmp1Z2F0aW9uIHdvcmRUeXBlIHRvIHRoZSBxdWl6T3V0cHV0IG9iamVjdCBpZiBpdCBpcyBub3QgYWxyZWFkeSBpbiB0aGVyZVxuICAgICAgICAgICAgcHVzaFdvcmRUeXBlVG9BcnJheShxdWl6T3V0cHV0LndvcmRUeXBlcywgd29yZFR5cGVOYW1lKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRoZSBjb25qdWdhdGlvbkdyb3VwIHRvIHRoZSBxdWl6T3V0cHV0IG9iamVjdFxuICAgICAgICAgICAgcXVpek91dHB1dC52YWx1ZXNbd29yZFR5cGVOYW1lICsgJy0nICsgdGVuc2VOYW1lICsgJy0nICsgcGVyc29uXSA9IGNvbmp1Z2F0aW9uR3JvdXA7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcImZpbmFsIHF1aXpPdXRwdXRcIiwgcXVpek91dHB1dCk7XG4gIHJldHVybiBxdWl6T3V0cHV0O1xufVxuXG5mdW5jdGlvbiBwdXNoV29yZFR5cGVUb0FycmF5KHdvcmRUeXBlQXJyYXksIG5ld1dvcmRUeXBlVmFsdWUpIHtcbiAgd29yZFR5cGVBcnJheSA9IHdvcmRUeXBlQXJyYXkgfHwgW107XG5cbiAgaWYod29yZFR5cGVBcnJheS5sZW5ndGggPCAzKSB7XG4gICAgaWYgKCQuaW5BcnJheShuZXdXb3JkVHlwZVZhbHVlLCB3b3JkVHlwZUFycmF5KSA9PSAtMSkge1xuICAgICAgd29yZFR5cGVBcnJheS5wdXNoKG5ld1dvcmRUeXBlVmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coXCJ3b3JkVHlwZUFycmF5XCIsIHdvcmRUeXBlQXJyYXkpO1xuXG4gICAgICByZXR1cm4gd29yZFR5cGVBcnJheTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgLy8gRmxpcCBvdmVyIHRoZSBjYXJkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGl0IHRvIHJldmVhbCB0aGUgYW5zd2VyXG4gICQoJy5mbGlwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIC8vY29uc29sZS5sb2coJ2NhcmQgY2xpY2tlZCcpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhbmltYXRlQ2FyZEZsaXAoKTtcblxuICAgIC8vIEVuYWJsZSB0aGUgcmVzdWx0IGJ1dHRvbnMgbm93IHRoYXQgdGhlIHF1aXogYW5zd2VyIGhhcyBiZWVuIHNob3duXG4gICAgZGlzYWJsZVJlc3VsdEJ0bnMoZmFsc2UpO1xuICB9KTtcbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgaWYgKCAkKCBcIi5qcy1xdWl6LXZlcmItY29uanVnYXRpb25cIiApLmxlbmd0aCApIHtcblxuICAgIGhhc0ZpcnN0UXVlc3Rpb25SdW4gPSBmYWxzZTtcblxuICAgIHZhciBxdWl6T3B0aW9ucyA9IHtcbiAgICAgIG9ubHlTaG93VW5hbnN3ZXJlZFF1ZXN0aW9uczogdHJ1ZSxcbiAgICAgIHF1aXpUeXBlOiAnY29uanVnYXRpb24nLFxuICAgICAgcXVpekNvbmp1Z2F0aW9uczogW3NwYW5pc2hUZW5zZXNdLFxuICAgICAgZnVuY3Rpb25Ub0dlbmVyYXRlUXVpelF1ZXN0aW9uOiBnZW5lcmF0ZVZlcmJDb25qdWdhdGlvblF1aXpRdWVzdGlvblxuICAgIH07XG5cbiAgICAvL2NvbnNvbGUubG9nKCdoZXJlMicsIHF1aXpPcHRpb25zLnF1aXpDb25qdWdhdGlvbnMpO1xuXG4gICAgdmFyIHF1aXpPdXRwdXQgPSBjcmVhdGVRdWl6KHF1aXpPcHRpb25zLnF1aXpDb25qdWdhdGlvbnMsIHF1aXpPcHRpb25zLnF1aXpUeXBlKTtcbiAgICB2YXIgcXVpekNvbmp1Z2F0aW9uV29yZFR5cGVzID0gcXVpek91dHB1dC53b3JkVHlwZXM7XG4gICAgdmFyIHF1aXpDb25qdWdhdGlvbnMgPSBxdWl6T3V0cHV0LnZhbHVlcztcblxuICAgIGNvbnNvbGUubG9nKFwicXVpek91dHB1dFwiLCBxdWl6T3V0cHV0KTtcblxuICAgIC8vZnVuY3Rpb24gZ2V0UmFuZG9tQ29uanVnYXRpb24ocXVpeldvcmRzKSB7XG4gICAgLy8gIC8vIEdldCBhIHJhbmRvbSB2ZXJiIHR5cGUoaS5lLiAtYXIgd29yZHMpLCByYW5kb20gdGVuc2UoaS5lLiBmdXR1cmUpLCBhbmQgYSByYW5kb20gY29uanVnYXRpb24oaS5lLiBlbGxvcylcbiAgICAvL1xuICAgIC8vICAvLyBWYWx1ZXMgaWYgdHJ5aW5nIHRvIHRlc3QgZWFjaCBjb25qdWdhdGlvbiB0eXBlXG4gICAgLy8gICAgdmFyIGNvbmp1Z2F0aW9uR3JvdXAgPSBnZXRSYW5kb21Qcm9wZXJ0eShxdWl6V29yZHMpO1xuICAgIC8vICAgIHZhciB0ZW5zZSA9IGNvbmp1Z2F0aW9uR3JvdXAudGVuc2U7XG4gICAgLy8gICAgdmFyIGFwcGVuZFRvID0gdGVuc2UucHJvcGVydHlWYWx1ZS5hcHBlbmRUbztcbiAgICAvLyAgICB2YXIgY29uanVnYXRpb24gPSBnZXRSYW5kb21Qcm9wZXJ0eSh0ZW5zZS5wcm9wZXJ0eVZhbHVlLnBlcnNvbik7XG4gICAgLy9cbiAgICAvLyAgLy9kZWJ1Z2dlcjtcbiAgICAvL1xuICAgIC8vICAgIHZhciB3b3JkR3JvdXAgPSBnZXRSYW5kb21Qcm9wZXJ0eShxdWl6V29yZHMpWydwcm9wZXJ0eVZhbHVlJ107XG4gICAgLy8gICAgbGFzdFdvcmRHcm91cCA9IHdvcmRHcm91cDtcbiAgICAvL1xuICAgIC8vICBjb25zb2xlLmxvZyhcIndvcmRHcm91cCAtIFwiLCB3b3JkR3JvdXApO1xuICAgIC8vXG4gICAgLy8gIC8vIFZhbHVlcyBpZiB0cnlpbmcgdG8gdGVzdCBlYWNoIHZlcmIgd29yZFxuICAgIC8vICAgIC8vdmFyIHdvcmRUeXBlID0gc3BhbmlzaFRlbnNlc1t3b3JkR3JvdXAuYWRkaXRpb25hbC52ZXJiRW5kaW5nICsgXCJXb3Jkc1wiXTtcbiAgICAvLyAgICAvL3ZhciB0ZW5zZSA9IGdldFJhbmRvbVByb3BlcnR5KHdvcmRUeXBlKTtcbiAgICAvLyAgICAvL3ZhciBhcHBlbmRUbyA9IHRlbnNlLnByb3BlcnR5VmFsdWUuYXBwZW5kVG87XG4gICAgLy8gICAgLy92YXIgY29uanVnYXRpb24gPSBnZXRSYW5kb21Qcm9wZXJ0eSh0ZW5zZS5wcm9wZXJ0eVZhbHVlLnBlcnNvbik7XG4gICAgLy9cbiAgICAvLyAgY29uc29sZS5sb2coXCJ3b3JkVHlwZTogXCIsIHdvcmRUeXBlKTtcbiAgICAvLyAgY29uc29sZS5sb2coXCJ0ZW5zZTogXCIsIHRlbnNlKTtcbiAgICAvLyAgY29uc29sZS5sb2coXCJjb25qdWdhdGlvbjogXCIsIGNvbmp1Z2F0aW9uKTtcbiAgICAvLyAgLy9jb25zb2xlLmxvZyhcInJhbmRvbVdvcmQ6IFwiLCByYW5kb21Xb3JkKTtcbiAgICAvL1xuICAgIC8vICAvL2RlYnVnZ2VyO1xuICAgIC8vICAvL1xuICAgIC8vICAvLy8vIEdyYWIgYSByYW5kb20gcHJvcGVydHkgZnJvbSB0aGUgdGVuc2UgYW5kIGlmIHRoZSBjb25qdWdhdGlvbiB0aGF0IHdhcyBjaG9zZW4gaXMgYWN0dWFsbHkgdGhlIFwiYXBwZW5kVG9cIiBwcm9wZXJ0eSwgdGhlbiBydW4gdGhlIGZ1bmN0aW9uIGFzIG1hbnkgdGltZXMgYXMgbmVjZXNzYXJ5IHRvIGdldCBhbiBhY3R1YWwgY29uanVnYXRpb24gdmFsdWVcbiAgICAvLyAgLy92YXIgcmFuZG9tVGVuc2VDb25qdWdhdGlvbktleTtcbiAgICAvLyAgLy9kbyB7XG4gICAgLy8gIC8vICByYW5kb21UZW5zZUNvbmp1Z2F0aW9uS2V5ID0gZ2V0UmFuZG9tUHJvcGVydHkocmFuZG9tVGVuc2UucHJvcGVydHlWYWx1ZSk7XG4gICAgLy8gIC8vICAvL2NvbnNvbGUubG9nKFwicmFuZG9tVGVuc2VDb25qdWdhdGlvbktleTogXCIsIHJhbmRvbVRlbnNlQ29uanVnYXRpb25LZXkpO1xuICAgIC8vICAvL31cbiAgICAvLyAgLy93aGlsZSAocmFuZG9tVGVuc2VDb25qdWdhdGlvbktleS5wcm9wZXJ0eU5hbWUgPT09IFwiYXBwZW5kVG9cIik7XG4gICAgLy9cbiAgICAvLyAgLy9jb25zb2xlLmxvZyhcIlJhbmRvbSBXb3JkIFR5cGUgaW4gU3BhbmlzaCBUZW5zZXM6IFwiLCByYW5kb21Xb3JkVHlwZSk7XG4gICAgLy8gIC8vY29uc29sZS5sb2coXCJSYW5kb20gVGVuc2UgaW4gXCIgKyByYW5kb21Xb3JkVHlwZS5wcm9wZXJ0eU5hbWUsIHJhbmRvbVRlbnNlKTtcbiAgICAvLyAgLy9jb25zb2xlLmxvZyhcIlJhbmRvbSBUZW5zZSBDb25qdWdhdGlvbiBLZXkgaW4gXCIgKyByYW5kb21UZW5zZS5wcm9wZXJ0eU5hbWUsIHJhbmRvbVRlbnNlQ29uanVnYXRpb25LZXkpO1xuICAgIC8vXG4gICAgLy8gIHJldHVybiB7XG4gICAgLy8gICAgdmVyYlR5cGU6IHdvcmRUeXBlLFxuICAgIC8vICAgIHdvcmQ6IHdvcmRHcm91cCxcbiAgICAvLyAgICB0ZW5zZTogdGVuc2UsXG4gICAgLy8gICAgY29uanVnYXRpb246IGNvbmp1Z2F0aW9uLFxuICAgIC8vICAgIGFwcGVuZFRvOiBhcHBlbmRUb1xuICAgIC8vICB9O1xuICAgIC8vfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVWZXJiQ29uanVnYXRpb25RdWl6UXVlc3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnUXVlc3Rpb24gR2VuZXJhdGVkJyk7XG5cbiAgICAgIHZhciBlbmdsaXNoVHlwZTtcbiAgICAgIHZhciBwZXJzb247XG4gICAgICB2YXIgY29ubmVjdG9yU3RyaW5nO1xuICAgICAgdmFyIHBvc3NpYmxlUGVyc29ucztcbiAgICAgIHZhciBzcGFuaXNoRmlyc3RQYXJ0O1xuXG4gICAgICAvLyBHZXQgYSByYW5kb20gdmVyYiB0eXBlKGkuZS4gLWFyIHdvcmRzKSwgcmFuZG9tIHRlbnNlKGkuZS4gZnV0dXJlKSwgYW5kIGEgcmFuZG9tIGNvbmp1Z2F0aW9uKGkuZS4gZWxsb3MpXG4gICAgICAgIC8vIEV4YW1wbGUgb3V0cHV0OlxuICAgICAgICAvL1wiYXItcHJlc2VudC15b1wiOiB7XG4gICAgICAgIC8vICAgIFwiYW5zd2VyQ29ycmVjdFwiOmZhbHNlLFxuICAgICAgICAvLyAgICBcImFuc3dlckF0dGVtcHRlZFwiOjAsXG4gICAgICAgIC8vICAgIFwid29yZFR5cGVcIjpcImFyV29yZHNcIixcbiAgICAgICAgLy8gICAgXCJ0ZW5zZVwiOlwicHJlc2VudFwiLFxuICAgICAgICAvLyAgICBcImFwcGVuZFRvXCI6XCJzdGVtXCIsXG4gICAgICAgIC8vICAgIFwicGVyc29uXCI6XCJ5b1wiLFxuICAgICAgICAvLyAgICBcImNvbmp1Z2F0aW9uXCI6XCJvXCJcbiAgICAgICAgLy8gIH1cblxuICAgICAgdmFyIGdlbmVyYXRlZENvbmp1Z2F0aW9uR3JvdXAgPSBnZXRSYW5kb21Qcm9wZXJ0eShxdWl6Q29uanVnYXRpb25zKTtcbiAgICAgIHZhciBjb25qdWdhdGlvbkdyb3VwTmFtZSA9IGdlbmVyYXRlZENvbmp1Z2F0aW9uR3JvdXAucHJvcGVydHlOYW1lO1xuICAgICAgdmFyIGNvbmp1Z2F0aW9uR3JvdXAgPSBnZW5lcmF0ZWRDb25qdWdhdGlvbkdyb3VwLnByb3BlcnR5VmFsdWU7XG5cbiAgICAgIC8vIEJlZm9yZSBnZXR0aW5nIGEgd29yZCB0byBjb25qdWdhdGUgb24sIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IGF0IGxlYXN0IG9uZSB3b3JkIGZyb20gdGhlIGN1cnJlbnQgd29yZCB0eXBlIChhciwgZXIsIGlyKSBpcyBhdmFpbGFibGUgaW4gdGhlIHZlcmJzIG9iamVjdCBiZWluZyBwYXNzZWQgaW5cbiAgICAgIGNvbnNvbGUubG9nKFwidmVyYnMudmFsdWVzXCIsIHZlcmJzLnZhbHVlcyk7XG4gICAgICB2YXIgdmVyYnNXb3JkVHlwZXMgPSBbXTtcbiAgICAgICQuZWFjaCh2ZXJicy52YWx1ZXMsIGZ1bmN0aW9uIChpbmRleCwgd29yZCkge1xuICAgICAgICAvLyBBZGQgdGhlIHZlcmIgd29yZFR5cGUgdG8gdGhlIHZlcmJzV29yZFR5cGVzIGFycmF5IGlmIHRoZSB3b3JkVHlwZSBpcyBub3QgYWxyZWFkeSBpbiB0aGVyZVxuICAgICAgICB2ZXJic1dvcmRUeXBlcyA9IHB1c2hXb3JkVHlwZVRvQXJyYXkodmVyYnNXb3JkVHlwZXMsIHdvcmQuYWRkaXRpb25hbC52ZXJiRW5kaW5nKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInZlcmJzV29yZFR5cGVzXCIsIHZlcmJzV29yZFR5cGVzKTtcblxuICAgICAgdmFyIG5vdFN1cHBvcnRlZFdvcmRUeXBlcyA9IFtdO1xuICAgICAgJC5lYWNoKHF1aXpDb25qdWdhdGlvbldvcmRUeXBlcywgZnVuY3Rpb24gKGluZGV4LCBjb25qdWdhdGlvbldvcmRUeXBlKSB7XG4gICAgICAgIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSBlYWNoIHdvcmQgdHlwZSB0aGF0IGlzIGJlaW5nIHVzZWQgZm9yIHRoZSBjb25qdWdhdGlvbnMgaXMgYWxzbyBhdmFpbGFibGUgaW4gdGhlIHZlcmJzIHdvcmQgdHlwZXNcbiAgICAgICAgaWYgKCQuaW5BcnJheShjb25qdWdhdGlvbldvcmRUeXBlLCB2ZXJic1dvcmRUeXBlcykgPT0gLTEpIHtcbiAgICAgICAgICBub3RTdXBwb3J0ZWRXb3JkVHlwZXMucHVzaChjb25qdWdhdGlvbldvcmRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKG5vdFN1cHBvcnRlZFdvcmRUeXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFsZXJ0KCdUaGUgdmVyYiBzZXQgY29uZmlndXJlZCBmb3IgdGhpcyBxdWl6IGRvZXNuXFwndCBoYXZlIGFsbCB0aGUgbmVjZXNzYXJ5IHdvcmQgdHlwZXMgYXZhaWxhYmxlLiBQbGVhc2UgZW5zdXJlIHlvdSBoYXZlIHNldmVyYWwgd29yZHMgZnJvbSB0aGUgZm9sbG93aW5nIHdvcmQgdHlwZXMgaW4geW91ciBzZXQ6ICcgKyBub3RTdXBwb3J0ZWRXb3JkVHlwZXMuam9pbignIGFuZCAnKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBhIHJhbmRvbSB2ZXJiIHRvIHRlc3QgdGhlIGNvbmp1Z2F0aW9uIHdpdGhcbiAgICAgIHZhciB3b3JkR3JvdXAgPSBnZXRSYW5kb21Qcm9wZXJ0eSh2ZXJicy52YWx1ZXMpWydwcm9wZXJ0eVZhbHVlJ107XG4gICAgICBsYXN0V29yZEdyb3VwID0gd29yZEdyb3VwO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImNvbmp1Z2F0aW9uR3JvdXA6IFwiLCBjb25qdWdhdGlvbkdyb3VwKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidmVyYnM6IFwiLCB2ZXJicyk7XG4gICAgICBjb25zb2xlLmxvZyhcIndvcmRHcm91cDogXCIsIHdvcmRHcm91cCk7XG5cbiAgICAgIC8vIEJhc2VkIG9uIHRoZSBSYW5kb20gQ29uanVnYXRpb24gdGhhdCB3YXMgZGV0ZXJtaW5lZCAoaS5lLiB5bywgdHUsIGVsLCBub3NvdHJvcywgb3IgZWxsb3MpLCBkZXRlcm1pbmUgd2hpY2ggdmFyaWF0aW9uIHRvIHVzZSBpZiBhcHBsaWNhYmxlIChhcyBpbiBlbCB3aGljaCBjYW4gYmUgc3Vic3RpdHV0ZWQgd2l0aCBlbGxhIG9yIHVkLCBvciBhcyBpbiBlbGxvcyB3aGljaCBjYW4gYmUgc3Vic3RpdHV0ZWQgd2l0aCBlbGxhcyBvciB1ZHMpXG4gICAgICBzd2l0Y2goY29uanVnYXRpb25Hcm91cC5wZXJzb24pIHtcbiAgICAgICAgY2FzZSBcInlvXCI6XG4gICAgICAgICAgcGVyc29uID0ge1xuICAgICAgICAgICAgZW5nbGlzaDogXCJJXCIsXG4gICAgICAgICAgICBzcGFuaXNoOiBcInlvXCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidHVcIjpcbiAgICAgICAgICBwZXJzb24gPSB7XG4gICAgICAgICAgICBlbmdsaXNoOiBcInlvdSAoaW5mb3JtYWwpXCIsXG4gICAgICAgICAgICBzcGFuaXNoOiBcInTDulwiXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImVsXCI6XG4gICAgICAgICAgcG9zc2libGVQZXJzb25zID0ge1xuICAgICAgICAgICAgZWw6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJoZVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcImVsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGxhOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwic2hlXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiZWxsYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdWQ6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJ5b3UgKGZvcm1hbClcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJ1ZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUm9zYToge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcIlJvc2FcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJSb3NhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBLZXZpbjoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcIktldmluXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiS2V2aW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBQaWNrIGEgcmFuZG9tIHBlcnNvbiB0byBkaXNwbGF5IGZvciB0aGUgcXVpeiAoZWwsIGVsbGEsIG9yIHVkKVxuICAgICAgICAgIHBlcnNvbiA9IGdldFJhbmRvbVByb3BlcnR5KHBvc3NpYmxlUGVyc29ucykucHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5vc290cm9zXCI6XG4gICAgICAgICAgcG9zc2libGVQZXJzb25zID0ge1xuICAgICAgICAgICAgbm9zb3Ryb3M6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJ3ZVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcIm5vc290cm9zXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5b3VfYW5kX2k6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJZb3UgYW5kIElcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJ0w7ogeSB5b1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFBpY2sgYSByYW5kb20gcGVyc29uIHRvIGRpc3BsYXkgZm9yIHRoZSBxdWl6IChub3NvdHJvcyBvciB0w7ogeSB5bylcbiAgICAgICAgICBwZXJzb24gPSBnZXRSYW5kb21Qcm9wZXJ0eShwb3NzaWJsZVBlcnNvbnMpLnByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlbGxvc1wiOlxuICAgICAgICAgIHBvc3NpYmxlUGVyc29ucyA9IHtcbiAgICAgICAgICAgIGVsbG9zOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwidGhleSAobWFsZSBvciBtaXhlZClcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJlbGxvc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxsYXM6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJ0aGV5IChmZW1hbGUpXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiZWxsYXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVkczoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcInlvdSBhbGxcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJ1ZHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvdXJ0eW5pbmVyczoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcIlRoZSA0OWVyc1wiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcIkxvcyA0OWVyc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JvdXBfb2ZfY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJUaGUgY2hpbGRyZW4gKGZlbWFsZSlcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJMYXMgbmnDsWFzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gUGljayBhIHJhbmRvbSBwZXJzb24gdG8gZGlzcGxheSBmb3IgdGhlIHF1aXogKGVsbG9zLCBlbGxhcywgb3IgdWRzKVxuICAgICAgICAgIHBlcnNvbiA9IGdldFJhbmRvbVByb3BlcnR5KHBvc3NpYmxlUGVyc29ucykucHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZW5nbGlzaFR5cGUgLSBUaGUgY29uanVnYXRpb24gdGhhdCBpcyB0byBiZSB1c2VkIHRoYXQgY29ycmVsYXRlcyB3aXRoIHRoZSBzcGFuaXNoIGNvbmp1Z2F0aW9uIC0gaS5lIGZvciB0aGUgd29yZCBcInRvIHJ1blwiLCB0aGUgMyB2YXJpYXRpb25zIGFyZSBydW4gKHByZXNlbnQpLCBydW5zIChwcmVzZW50M3JkUGVyc29uKSwgb3IgcmFuKHBhc3QpXG4gICAgICBpZiAoY29uanVnYXRpb25Hcm91cC50ZW5zZSA9PT0gXCJwcmVzZW50XCIgJiYgY29uanVnYXRpb25Hcm91cC5jb25qdWdhdGlvbiA9PT0gXCJlbFwiKSB7XG4gICAgICAgIGVuZ2xpc2hUeXBlID0gXCJwcmVzZW50M3JkUGVyc29uXCI7XG4gICAgICB9IGVsc2UgaWYgKGNvbmp1Z2F0aW9uR3JvdXAudGVuc2UgPT09IFwicGFzdFwiKSB7XG4gICAgICAgIGVuZ2xpc2hUeXBlID0gXCJwYXN0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmdsaXNoVHlwZSA9IFwicHJlc2VudFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25uZWN0b3JTdHJpbmcgLSBUaGUgY29ubmVjdG9yIHdvcmQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBxdWl6IGluIHRoZSBlbmdsaXNoIHNlbnRlbmNlIHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdHJhbnNsYXRlZCAoT25seSBhcHBsaWVzIHRvIHRoZSBjb25kaXRpb25hbCwgZnV0dXJlLCBhbmQgaW1wZXJmZWN0IHRlbnNlcykuIGkuZS4gZm9yIHRoZSBzZW50ZW5jZSBKaW1teSB3aWxsIHJ1biAoZnV0dXJlKSwgSmltbXkgd291bGQgcnVuIChjb25kaXRpb25hbCksIG9yIEppbW15IHVzZWQgdG8gcnVuIChpbXBlcmZlY3QpXG4gICAgICBpZiAoY29uanVnYXRpb25Hcm91cC50ZW5zZSA9PT0gXCJjb25kaXRpb25hbFwiKSB7XG4gICAgICAgIGNvbm5lY3RvclN0cmluZyA9IFwid291bGRcIjtcbiAgICAgIH0gZWxzZSBpZiAoY29uanVnYXRpb25Hcm91cC50ZW5zZSA9PT0gXCJmdXR1cmVcIikge1xuICAgICAgICBjb25uZWN0b3JTdHJpbmcgPSBcIndpbGxcIjtcbiAgICAgIH0gZWxzZSBpZiAoY29uanVnYXRpb25Hcm91cC50ZW5zZSA9PT0gXCJpbXBlcmZlY3RcIikge1xuICAgICAgICBjb25uZWN0b3JTdHJpbmcgPSBcInVzZWQgdG9cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbm5lY3RvclN0cmluZyA9IFwiIFwiO1xuICAgICAgfVxuXG4gICAgICBpZihjb25uZWN0b3JTdHJpbmcgIT09IFwiIFwiKSB7XG4gICAgICAgIGNvbm5lY3RvclN0cmluZyA9IFwiIFwiICsgY29ubmVjdG9yU3RyaW5nICsgXCIgXCI7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvbmp1Z2F0aW9uR3JvdXAuYXBwZW5kVG8gPT09IFwic3RlbVwiKSB7XG4gICAgICAgIHNwYW5pc2hGaXJzdFBhcnQgPSBnZXRTdGVtKHdvcmRHcm91cC5zcGFuaXNoKS5zdGVtO1xuICAgICAgfSBlbHNlIGlmKGNvbmp1Z2F0aW9uR3JvdXAuYXBwZW5kVG8gPT09IFwiaW5maW5pdGl2ZVwiKSB7XG4gICAgICAgIHNwYW5pc2hGaXJzdFBhcnQgPSB3b3JkR3JvdXAuc3BhbmlzaDtcbiAgICAgIH1cblxuXG4gICAgICAvL2NvbnNvbGUubG9nKFwiUGVyc29uOiBcIiwgcGVyc29uKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJlbmdsaXNoVHlwZTogXCIsIGVuZ2xpc2hUeXBlKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJjb25uZWN0b3JTdHJpbmc6IFwiLCBjb25uZWN0b3JTdHJpbmcpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInJhbmRvbVdvcmQ6IFwiLCByYW5kb21Xb3JkKTtcbiAgICAgIC8vXG4gICAgICAvL2NvbnNvbGUubG9nKFwiU2VudGVuY2UgdG8gb3V0cHV0IGluIEVuZ2xpc2g6IFwiLCBwZXJzb24uZW5nbGlzaCArIGNvbm5lY3RvclN0cmluZyArIHJhbmRvbVdvcmRbJ2VuZ2xpc2gnXVtlbmdsaXNoVHlwZV0pO1xuICAgICAgLy9jb25zb2xlLmxvZyhcIlNlbnRlbmNlIHRvIG91dHB1dCBpbiBTcGFuaXNoOiBcIiwgcGVyc29uLnNwYW5pc2ggKyBcIiBcIiArIHNwYW5pc2hGaXJzdFBhcnQgKyByYW5kb21Db25qdWdhdGlvbi5jb25qdWdhdGlvbi5wcm9wZXJ0eVZhbHVlKTtcblxuXG4gICAgICAvLyBSZXR1cm5pbmcgc2VudGVuY2UgdG8gYmUgZGlzcGxheWVkIChpLmUuIFNoZSB3aWxsIGVhdCkgaW4gYm90aCBsYW5ndWFnZXNcblxuICAgICAgLy9yZXR1cm4ge1xuICAgICAgLy8gIGVuZ2xpc2g6IHBlcnNvbi5lbmdsaXNoICsgY29ubmVjdG9yU3RyaW5nICsgcmFuZG9tQ29uanVnYXRpb24ud29yZFsnZW5nbGlzaCddW2VuZ2xpc2hUeXBlXSxcbiAgICAgIC8vICBzcGFuaXNoOiBwZXJzb24uc3BhbmlzaCArIFwiIFwiICsgc3BhbmlzaEZpcnN0UGFydCArIHJhbmRvbUNvbmp1Z2F0aW9uLmNvbmp1Z2F0aW9uLnByb3BlcnR5VmFsdWVcbiAgICAgIC8vfVxuXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZ2xpc2g6IHBlcnNvbi5lbmdsaXNoICsgY29ubmVjdG9yU3RyaW5nICsgd29yZEdyb3VwLmFkZGl0aW9uYWwuZW5nbGlzaFZhcmlhdGlvbnNbZW5nbGlzaFR5cGVdLFxuICAgICAgICBzcGFuaXNoOiBwZXJzb24uc3BhbmlzaCArIFwiIFwiICsgc3BhbmlzaEZpcnN0UGFydCArIGNvbmp1Z2F0aW9uR3JvdXAuY29uanVnYXRpb25cbiAgICAgIH1cblxuICAgIH1cblxuXG5cblxuICAgIC8vIENyZWF0ZSBPYmplY3QgdG8ga2VlcCB0cmFjayBvZiBxdWVzdGlvbnMgdGhhdCB3ZXJlIGFscmVhZHkgYXNrZWQgYW5kIGlmIHRoZSB1c2VyIGFscmVhZHkgZ290IHRoZW0gcmlnaHQgc28gdGhleSBkb24ndCBhc2sgdGhlbSBhZ2FpblxuICAgIC8vdmFyIHF1aXpTY29yZSA9IHt9O1xuICAgIC8vdmFyIHF1aXpRdWVzdGlvbjtcbiAgICAvL1xuICAgIC8vJC5lYWNoKHNwYW5pc2hUZW5zZXMsIGZ1bmN0aW9uICh2ZXJiVHlwZSwgdGVuc2VzKSB7XG4gICAgLy8gICQuZWFjaCh0ZW5zZXMsIGZ1bmN0aW9uICh0ZW5zZSwgdGVuc2VDb25qdWdhdGlvbnMpIHtcbiAgICAvLyAgICAkLmVhY2godGVuc2VDb25qdWdhdGlvbnMsIGZ1bmN0aW9uICh0ZW5zZUNvbmp1Z2F0aW9uS2V5LCB0ZW5zZUNvbmp1Z2F0aW9uVmFsdWUpIHtcbiAgICAvLyAgICAgIGlmICh0ZW5zZUNvbmp1Z2F0aW9uS2V5ID09PSBcImFwcGVuZFRvXCIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAvLyAgICAgIGNyZWF0ZU5lc3RlZE9iamVjdCggcXVpelNjb3JlLCBbdmVyYlR5cGUsIHRlbnNlLCB0ZW5zZUNvbmp1Z2F0aW9uS2V5XSwgZmFsc2UgKTtcbiAgICAvLyAgICAgIC8vIEV4YW1wbGUgb3V0cHV0OiBxdWl6U2NvcmUuYXJXb3Jkcy5wcmVzZW50LmVsbG9zOiBmYWxzZVxuICAgIC8vICAgIH0pO1xuICAgIC8vICB9KTtcbiAgICAvL30pO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcInF1aXpTY29yZTpcIiwgcXVpelNjb3JlKTtcblxuXG5cbiAgICAvLyBBY3RpdmF0ZSB0aGUgcXVpeiB3aXRoIHRoZSBjaG9zZW4gb3B0aW9uc1xuICAgIGFjdGl2YXRlUXVpeihxdWl6T3B0aW9ucywgcXVpekNvbmp1Z2F0aW9ucyk7XG4gIH1cblxuXG5cblxuXG5cblxuXG5cbn0pO1xuXG5cblxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuXG5cbiAgaWYgKCAkKCBcIi5qcy1xdWl6LXdvcmQtcmV0ZW50aW9uXCIgKS5sZW5ndGggKSB7XG4gICAgaGFzRmlyc3RRdWVzdGlvblJ1biA9IGZhbHNlO1xuXG4gICAgdmFyIHF1aXpPcHRpb25zID0ge1xuICAgICAgb25seVNob3dVbmFuc3dlcmVkUXVlc3Rpb25zOiB0cnVlLFxuICAgICAgcXVpelR5cGU6ICdyZXRlbnRpb24nLFxuICAgICAgcXVpeldvcmRzOiBbbWVtb3JpemVTZXQxXSxcbiAgICAgIGZ1bmN0aW9uVG9HZW5lcmF0ZVF1aXpRdWVzdGlvbjogZ2VuZXJhdGVXb3JkUmV0ZW50aW9uUXVpelF1ZXN0aW9uXG4gICAgfTtcblxuICAgIHZhciBxdWl6V29yZHMgPSBjcmVhdGVRdWl6KHF1aXpPcHRpb25zLnF1aXpXb3JkcywgcXVpek9wdGlvbnMucXVpelR5cGUpO1xuXG4gICAgY29uc29sZS5sb2coXCJxdWl6V29yZHNcIiwgcXVpeldvcmRzKTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlV29yZFJldGVudGlvblF1aXpRdWVzdGlvbigpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ1F1ZXN0aW9uIEdlbmVyYXRlZCcpO1xuXG4gICAgICB2YXIgcmFuZG9tV29yZEdyb3VwID0gZ2V0UmFuZG9tUHJvcGVydHkocXVpeldvcmRzKVsncHJvcGVydHlWYWx1ZSddO1xuICAgICAgY29uc29sZS5sb2coJ3JhbmRvbVdvcmRHcm91cCcsIHJhbmRvbVdvcmRHcm91cCk7XG5cbiAgICAgIGxhc3RXb3JkR3JvdXAgPSByYW5kb21Xb3JkR3JvdXA7XG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyBsYXN0V29yZEdyb3VwOiBcIiwgbGFzdFdvcmRHcm91cCk7XG4gICAgICAvL0V4YW1wbGUgT3V0cHV0OlxuICAgICAgLy97XG4gICAgICAvLyAgZW5nbGlzaDoge1xuICAgICAgLy8gICAgcGx1cmFsOiBcImZhdGhlcnNcIixcbiAgICAgIC8vICAgICAgc2luZ3VsYXI6IFwiZmF0aGVyXCJcbiAgICAgIC8vICB9LFxuICAgICAgLy8gIHNwYW5pc2g6IHtcbiAgICAgIC8vICAgIHBsdXJhbDogXCJwYWRyZXNcIixcbiAgICAgIC8vICAgICAgc2luZ3VsYXI6IFwicGFkcmVcIlxuICAgICAgLy8gIH0sXG4gICAgICAvLyAgZ2VuZGVyOiBcIm1hbGVcIlxuICAgICAgLy99XG5cbiAgICAgIGlmKHJhbmRvbVdvcmRHcm91cC53b3JkVHlwZSAhPT0gXCJub3VuXCIpIHtcbiAgICAgICAgdmFyIGVuZ2xpc2hPdXRwdXQgPSByYW5kb21Xb3JkR3JvdXAuZW5nbGlzaDtcbiAgICAgICAgdmFyIHNwYW5pc2hPdXRwdXQgPSByYW5kb21Xb3JkR3JvdXAuc3BhbmlzaDtcbiAgICAgIH1cblxuICAgICAgaWYocmFuZG9tV29yZEdyb3VwLndvcmRUeXBlID09PSBcIm5vdW5cIikge1xuICAgICAgICB2YXIgcXVhbnRpdHlUeXBlO1xuICAgICAgICB2YXIgd29yZFRoZUVuZ2xpc2g7XG4gICAgICAgIHZhciB3b3JkQUVuZ2xpc2g7XG4gICAgICAgIHZhciB3b3JkVGhlU3BhbmlzaDtcbiAgICAgICAgdmFyIHdvcmRBU3BhbmlzaDtcbiAgICAgICAgdmFyIGxlYWRXb3JkRW5nbGlzaDtcbiAgICAgICAgdmFyIGxlYWRXb3JkU3BhbmlzaDtcblxuICAgICAgICB2YXIgcmFuZG9tV29yZEdlbmRlciA9IHJhbmRvbVdvcmRHcm91cFsnZ2VuZGVyJ107XG5cbiAgICAgICAgLy8gSWYgdGhlIHBsdXJhbCBwcm9wZXJ0eSBpcyBtaXNzaW5nLCBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHBsdXJhbCBmb3JtIG9mIHRoZSBub3VuIGlzIHNpbXBseSB0aGUgc2luZ3VsYXIgdmVyc2lvbiB3aXRoIGFuIFwic1wiIGF0IHRoZSBlbmQuIEV4OiBcIm5pw7FvXCIgYW5kIFwibmnDsW9zXCIgJiBcImJveVwiIGFuZCBcImJveXNcIlxuICAgICAgICBpZighcmFuZG9tV29yZEdyb3VwLmVuZ2xpc2guaGFzT3duUHJvcGVydHkoXCJwbHVyYWxcIikpIHtcbiAgICAgICAgICByYW5kb21Xb3JkR3JvdXAuZW5nbGlzaC5wbHVyYWwgPSByYW5kb21Xb3JkR3JvdXAuZW5nbGlzaC5zaW5ndWxhciArIFwic1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHBsdXJhbCBwcm9wZXJ0eSBpcyBtaXNzaW5nLCBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHBsdXJhbCBmb3JtIG9mIHRoZSBub3VuIGlzIHNpbXBseSB0aGUgc2luZ3VsYXIgdmVyc2lvbiB3aXRoIGFuIFwic1wiIGF0IHRoZSBlbmQuIEV4OiBcIm5pw7FvXCIgYW5kIFwibmnDsW9zXCIgJiBcImJveVwiIGFuZCBcImJveXNcIlxuICAgICAgICBpZighcmFuZG9tV29yZEdyb3VwLnNwYW5pc2guaGFzT3duUHJvcGVydHkoXCJwbHVyYWxcIikpIHtcbiAgICAgICAgICByYW5kb21Xb3JkR3JvdXAuc3BhbmlzaC5wbHVyYWwgPSByYW5kb21Xb3JkR3JvdXAuc3BhbmlzaC5zaW5ndWxhciArIFwic1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdldFJhbmRvbUludCgwLCAxKSA9PT0gMSkge1xuICAgICAgICAgIHF1YW50aXR5VHlwZSA9IFwic2luZ3VsYXJcIjtcblxuICAgICAgICAgIGlmIChyYW5kb21Xb3JkR2VuZGVyID09PSBcIm1hbGVcIikge1xuICAgICAgICAgICAgd29yZFRoZVNwYW5pc2ggPSBcImVsXCI7XG4gICAgICAgICAgICB3b3JkQVNwYW5pc2ggPSBcInVuXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21Xb3JkR2VuZGVyID09PSBcImZlbWFsZVwiKSB7XG4gICAgICAgICAgICB3b3JkVGhlU3BhbmlzaCA9IFwibGFcIjtcbiAgICAgICAgICAgIHdvcmRBU3BhbmlzaCA9IFwidW5hXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd29yZFRoZUVuZ2xpc2ggPSBcInRoZVwiO1xuICAgICAgICAgIHdvcmRBRW5nbGlzaCA9IFwiYVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1YW50aXR5VHlwZSA9IFwicGx1cmFsXCI7XG5cbiAgICAgICAgICBpZiAocmFuZG9tV29yZEdlbmRlciA9PT0gXCJtYWxlXCIpIHtcbiAgICAgICAgICAgIHdvcmRUaGVTcGFuaXNoID0gXCJsb3NcIjtcbiAgICAgICAgICAgIHdvcmRBU3BhbmlzaCA9IFwidW5vc1wiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmFuZG9tV29yZEdlbmRlciA9PT0gXCJmZW1hbGVcIikge1xuICAgICAgICAgICAgd29yZFRoZVNwYW5pc2ggPSBcImxhc1wiO1xuICAgICAgICAgICAgd29yZEFTcGFuaXNoID0gXCJ1bmFzXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd29yZFRoZUVuZ2xpc2ggPSBcInRoZVwiO1xuICAgICAgICAgIHdvcmRBRW5nbGlzaCA9IFwic29tZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhbmRvbVdvcmRFbmdsaXNoID0gcmFuZG9tV29yZEdyb3VwWydlbmdsaXNoJ11bcXVhbnRpdHlUeXBlXTtcbiAgICAgICAgdmFyIHJhbmRvbVdvcmRTcGFuaXNoID0gcmFuZG9tV29yZEdyb3VwWydzcGFuaXNoJ11bcXVhbnRpdHlUeXBlXTtcblxuICAgICAgICAvLyBSYW5kb21seSBzaG93IGVpdGhlciB0aGUgXCJ0aGVcIiBvciBcImFcIiBsZWFkIHdvcmRcbiAgICAgICAgaWYgKGdldFJhbmRvbUludCgwLCAxKSA9PT0gMSkge1xuICAgICAgICAgIGxlYWRXb3JkRW5nbGlzaCA9IHdvcmRUaGVFbmdsaXNoO1xuICAgICAgICAgIGxlYWRXb3JkU3BhbmlzaCA9IHdvcmRUaGVTcGFuaXNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlYWRXb3JkRW5nbGlzaCA9IHdvcmRBRW5nbGlzaDtcbiAgICAgICAgICBsZWFkV29yZFNwYW5pc2ggPSB3b3JkQVNwYW5pc2g7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZW5nbGlzaE91dHB1dCA9IGxlYWRXb3JkRW5nbGlzaCArIFwiIFwiICsgcmFuZG9tV29yZEVuZ2xpc2g7XG4gICAgICAgIHZhciBzcGFuaXNoT3V0cHV0ID0gbGVhZFdvcmRTcGFuaXNoICsgXCIgXCIgKyByYW5kb21Xb3JkU3BhbmlzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5nbGlzaDogZW5nbGlzaE91dHB1dCxcbiAgICAgICAgc3BhbmlzaDogc3BhbmlzaE91dHB1dFxuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvLyBBY3RpdmF0ZSB0aGUgcXVpeiB3aXRoIHRoZSBjaG9zZW4gb3B0aW9uc1xuICAgIGFjdGl2YXRlUXVpeihxdWl6T3B0aW9ucywgcXVpeldvcmRzKTtcbiAgfVxuXG59KTtcblxuXG5cbiIsIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgaWYgKCAkKCBcIi5qcy13b3Jkc1wiICkubGVuZ3RoICkge1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb25qdWdhdGlvblRhYmxlKHdvcmQsIHRlbnNlKSB7XG4gICAgICB2YXIgbGFzdDIgPSBnZXRTdGVtKHdvcmQpLmxhc3QyO1xuICAgICAgdmFyIHN0ZW0gPSBnZXRTdGVtKHdvcmQpLnN0ZW07XG5cbiAgICAgIHZhciBjdXJyZW50VGVuc2UgPSBzcGFuaXNoVGVuc2VzW2xhc3QyICsgXCJXb3Jkc1wiXVt0ZW5zZV07XG4gICAgICB2YXIgYXBwZW5kVG8gPSBjdXJyZW50VGVuc2UuYXBwZW5kVG87XG5cbiAgICAgIGZ1bmN0aW9uIGNvbmp1Z2F0ZVdvcmQoY29uanVnYXRpb25QZXJzb24pIHtcbiAgICAgICAgaWYgKGFwcGVuZFRvID09PSBcInN0ZW1cIikge1xuICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdhcHBlbmQtdG8nPlwiICsgc3RlbSArIFwiPC9zcGFuPlwiICsgY3VycmVudFRlbnNlW2Nvbmp1Z2F0aW9uUGVyc29uXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nYXBwZW5kLXRvJz5cIiArIHdvcmQgKyBcIjwvc3Bhbj5cIiArIGN1cnJlbnRUZW5zZVtjb25qdWdhdGlvblBlcnNvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHlvID0gY29uanVnYXRlV29yZChcInlvXCIpO1xuICAgICAgdmFyIHR1ID0gY29uanVnYXRlV29yZChcInR1XCIpO1xuICAgICAgdmFyIGVsID0gY29uanVnYXRlV29yZChcImVsXCIpO1xuICAgICAgdmFyIG5vc290cm9zID0gY29uanVnYXRlV29yZChcIm5vc290cm9zXCIpO1xuICAgICAgdmFyIGVsbG9zID0gY29uanVnYXRlV29yZChcImVsbG9zXCIpO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKFwid29yZDogXCIsIHdvcmQpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcImxhc3QyOiBcIiwgbGFzdDIpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInN0ZW06IFwiLCBzdGVtKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRUbzogXCIsIGFwcGVuZFRvKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ5bzogXCIsIHlvKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0dTogXCIsIHR1KTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJlbDogXCIsIGVsKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJub3NvdHJvczogXCIsIG5vc290cm9zKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJlbGxvczogXCIsIGVsbG9zKTtcblxuICAgICAgdmFyIGdlbmVyYXRlZFRhYmxlID0gXCI8aDM+XCIgKyB0ZW5zZSArIFwiIFRlbnNlPC9oMz5cIjtcbiAgICAgIGdlbmVyYXRlZFRhYmxlICs9IFwiPHRhYmxlPlwiICtcbiAgICAgICAgXCI8dHI+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi1wZXJzb24nPnlvPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgeW8gKyBcIjwvdGQ+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi1wZXJzb24nPm5vc290cm9zPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgbm9zb3Ryb3MgKyBcIjwvdGQ+PC90cj5cIiArXG4gICAgICAgIFwiPHRyPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz50w7o8L3RkPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tdGVybSc+XCIgKyB0dSArIFwiPC90ZD48dGQgY2xhc3M9J2Rpc2FibGVkJz48L3RkPjx0ZCBjbGFzcz0nZGlzYWJsZWQnPjwvdGQ+PC90cj5cIiArXG4gICAgICAgIFwiPHRyPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz5lbC9lbGxhL1VkLjwvdGQ+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi10ZXJtJz5cIiArIGVsICsgXCI8L3RkPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz5lbGxvcy9lbGxhcy9VZHMuPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgZWxsb3MgKyBcIjwvdGQ+PC90cj5cIiArXG4gICAgICAgIFwiPC90YWJsZT5cIjtcblxuICAgICAgcmV0dXJuIGdlbmVyYXRlZFRhYmxlO1xuICAgIH1cblxuICAgIC8vZ2VuZXJhdGVDb25qdWdhdGlvblRhYmxlKFwiYXByZW5kZXJcIiwgXCJwYXN0XCIpO1xuXG5cblxuICAgIC8vIEVtcHR5IHRoZSBjb250YWluZXIgZm9yIHRoZSBjb25qdWdhdGlvbiB3b3JkcyB0YWJsZVxuICAgICQoXCIuanMtY29uanVnYXRpb24td29yZHMtY2hhcnRcIikuaHRtbChcIlwiKTtcblxuICAgIC8vIENyZWF0ZSBhIHRhYmxlIG9mIHdvcmRzXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSB2ZXJicyBvYmplY3RcbiAgICAkLmVhY2godmVyYnMsIGZ1bmN0aW9uICh2ZXJiVHlwZSwgd29yZHMpIHtcbiAgICAgIHZhciB3b3Jkc1RhYmxlID0gXCI8dGFibGUgY2xhc3M9J3dvcmRzJz5cIjtcblxuICAgICAgLy9jb25zb2xlLmxvZyh2ZXJiVHlwZSArIFwiOiBcIiArIHdvcmRzKTtcbiAgICAgIC8vIEZvciBlYWNoIHRhYmxlIGNvbHVtbiwgdXNlIHRoZSB2ZXJiVHlwZSAoaS5lLiBhcldvcmRzLCBlcldvcmRzLCBvciBpcldvcmRzKSBhcyB0aGUgaGVhZGVyXG4gICAgICB3b3Jkc1RhYmxlICs9IFwiPHRyPjx0aD5cIiArIHZlcmJUeXBlICsgXCI8L3RoPlwiO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCB3b3JkIGZvciB0aGUgY3VycmVudCB2ZXJiVHlwZVxuICAgICAgJC5lYWNoKHdvcmRzLCBmdW5jdGlvbiAoaW5kZXgsIHdvcmQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbmRleCArIFwiOiBcIiArIHdvcmQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiU3BhbmlzaCBXb3JkOiBcIiwgd29yZC5zcGFuaXNoLndvcmQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyByb3cgdGhhdCBjb250YWlucyB0aGUgd29yZCBpbiBzcGFuaXNoIHdpdGggYSBsaW5rIHRvIG9wZW4gYSBtb2RhbCB3aW5kb3cgdGhhdCBkaXNwbGF5cyBhbGwgdGhlIGRpZmZlcmVudCBjb25qdWdhdGlvbiB0YWJsZXMgZm9yIHRoYXQgc3BlY2lmaWMgd29yZFxuICAgICAgICB3b3Jkc1RhYmxlICs9IFwiPHRyPjx0ZD48YSBjbGFzcz0nZmFuY3lib3gnIGhyZWY9JyN3b3JkLWRldGFpbHMnPlwiICsgd29yZC5zcGFuaXNoLndvcmQgKyBcIjwvYT48L3RkPlwiO1xuICAgICAgfSk7XG5cbiAgICAgIHdvcmRzVGFibGUgKz0gXCI8L3RhYmxlPlwiO1xuXG4gICAgICAvLyBBZGQgdGhlIG5ld2x5IGNyZWF0ZWQgdGFibGUgdG8gdGhlIGNvbmp1Z2F0aW9uIHdvcmRzIHRhYmxlIGNvbnRhaW5lclxuICAgICAgJChcIi5qcy1jb25qdWdhdGlvbi13b3Jkcy1jaGFydFwiKS5hcHBlbmQod29yZHNUYWJsZSk7XG5cbiAgICB9KTtcblxuICAgIC8vJCgnLmZhbmN5Ym94JykuZmFuY3lib3goKTtcblxuXG4gICAgLy8gTG9hZCB0aGUgd29yZCBkZXRhaWxzIGRpdiB3aXRoIHRoZSBjb3JyZWN0IGNvbnRlbnQgd2hlbiBhIHdvcmQgaXMgY2xpY2tlZFxuICAgIC8vIEN1cnJlbnRseSB0aGlzIGlzIGxvb3BpbmcgdGhyb3VnaCBhbGwgdGhlIHdvcmRzIGF2YWlsYWJsZSBpbiBvcmRlciB0byBmaW5kIGEgbWF0Y2ggdG8gdGhlIHdvcmQgdGhhdCB3YXMgY2xpY2tlZCBhbmQgd2lsbCB0aGVuIGxvYWQgdXAgdGhlIGNvcnJlY3QgaW5mbyBpbnRvIHRoZSBtb2RhbCB3aW5kb3cgYW5kIG9wZW5zIGl0XG4gICAgLy8gVE9ETzogVXNlIGEgZGVlcCBnZXQgZnVuY3Rpb25hbGl0eSB0byBmaW5kIHRoZSBvYmplY3QgZm9yIHRoZSB3b3JkIGluc3RlYWQgb2YgbG9vcGluZyB0aHJvdWdoIGV2ZXJ5dGhpbmdcbiAgICAkKCdhW2hyZWY9XCIjd29yZC1kZXRhaWxzXCJdJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIHNwYW5pc2hXb3JkQ2xpY2tlZCA9ICQodGhpcykudGV4dCgpO1xuXG4gICAgICAkLmVhY2godmVyYnMsIGZ1bmN0aW9uICh2ZXJiVHlwZSwgd29yZHMpIHtcbiAgICAgICAgJC5lYWNoKHdvcmRzLCBmdW5jdGlvbiAoaW5kZXgsIHdvcmQpIHtcbiAgICAgICAgICBpZiAod29yZC5zcGFuaXNoLndvcmQgPT09IHNwYW5pc2hXb3JkQ2xpY2tlZCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzcGFuaXNoV29yZENsaWNrZWQgKyAnIHdhcyBmb3VuZCcpO1xuICAgICAgICAgICAgJChcIiN3b3JkLWRldGFpbHNcIikuY2hpbGRyZW4oXCJoMlwiKS5odG1sKHdvcmQuc3BhbmlzaC53b3JkICsgXCIgLSA8c3BhbiBjbGFzcz0nZW5nbGlzaC1kZWZpbml0aW9uJz5cIiArIHdvcmQuZW5nbGlzaC5kZWZpbml0aW9uICsgXCI8L3NwYW4+XCIpO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHNwYW5pc2hUZW5zZXMgb2JqZWN0IHRvIGdldCBlYWNoIGNvbmp1Z2F0aW9uIHRlbnNlIHN1cHBvcnRlZCBmb3IgdGhlIGN1cnJlbnQgdmVyYiB0eXBlIChpLmUuIC1hciB3b3JkcykgYW5kIHRoZW4gY3JlYXRlIGNvbmp1Z2F0aW9uIHRhYmxlcyBmb3IgdGhlIGN1cnJlbnQgd29yZCBhbmQgdGhlIHN1cHBvcnRlZCB0ZW5zZXNcbiAgICAgICAgICAgIHZhciB0ZW5zZVRhYmxlcyA9IFwiXCI7XG4gICAgICAgICAgICAkLmVhY2goc3BhbmlzaFRlbnNlc1t2ZXJiVHlwZV0sIGZ1bmN0aW9uICh0ZW5zZSwgcHJvcGVydGllc09iamVjdCkge1xuICAgICAgICAgICAgICB0ZW5zZVRhYmxlcyArPSBnZW5lcmF0ZUNvbmp1Z2F0aW9uVGFibGUod29yZC5zcGFuaXNoLndvcmQsIHRlbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmpzLWNvbmp1Z2F0aW9uLXRhYmxlc1wiKS5odG1sKHRlbnNlVGFibGVzKTtcblxuICAgICAgICAgICAgLy8gQnJlYWsgb3V0IG9mICQuZWFjaCBsb29wIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3ODQ3ODAvaG93LXRvLWJyZWFrLW91dC1vZi1qcXVlcnktZWFjaC1sb29wKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIH0pLmZhbmN5Ym94KCk7XG4gIH1cblxufSk7IiwiLy8gRnJvbTogaHR0cDovL2NvZGVwZW4uaW8vemVja2R1ZGUvcGVuL0VLQkp5UlxuXG4vLyBvbiBwYWdlIGxvYWQuLi5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBtb3ZlUHJvZ3Jlc3NCYXIoKTtcbn0pO1xuXG4vLyBvbiBicm93c2VyIHJlc2l6ZS4uLlxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgbW92ZVByb2dyZXNzQmFyKCk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ3Byb2dyZXNzLWNoYW5nZWQnLCBmdW5jdGlvbihldmVudCwgbnVtV29yZHNBbnN3ZXJlZENvcnJlY3QsIGNvcnJlY3RQZXJjZW50YWdlKSB7XG4gIC8vY29uc29sZS5sb2coJ251bVdvcmRzQW5zd2VyZWRDb3JyZWN0OiAnLCBudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdCk7XG4gIC8vY29uc29sZS5sb2coJ2NvcnJlY3RQZXJjZW50YWdlOiAnLCBjb3JyZWN0UGVyY2VudGFnZSk7XG5cbiAgLy8gVXBkYXRlIHRoZSBwcm9ncmVzcyBwZXJjZW50YWdlIG9uIHRoZSBlbGVtZW50XG4gICQoJy5wcm9ncmVzcy13cmFwJykuZGF0YSgncHJvZ3Jlc3MtcGVyY2VudCcsIGNvcnJlY3RQZXJjZW50YWdlKTtcbiAgbW92ZVByb2dyZXNzQmFyKCk7XG5cbiAgLy8gVXBkYXRlIHRoZSBzY29yZSBpbiB0aGUgcHJvZ3Jlc3MgYmFyXG4gICQoJy5wcm9ncmVzcycpLmZpbmQoJy5udW0tYW5zd2VyZWQtY29ycmVjdCcpLnRleHQobnVtV29yZHNBbnN3ZXJlZENvcnJlY3QpO1xufSk7XG5cbi8vIFNJR05BVFVSRSBQUk9HUkVTU1xuZnVuY3Rpb24gbW92ZVByb2dyZXNzQmFyKCkge1xuICAvL2NvbnNvbGUubG9nKFwibW92ZVByb2dyZXNzQmFyXCIpO1xuICB2YXIgZ2V0UGVyY2VudCA9ICgkKCcucHJvZ3Jlc3Mtd3JhcCcpLmRhdGEoJ3Byb2dyZXNzLXBlcmNlbnQnKSAvIDEwMCk7XG4gIHZhciBnZXRQcm9ncmVzc1dyYXBXaWR0aCA9ICQoJy5wcm9ncmVzcy13cmFwJykud2lkdGgoKTtcbiAgdmFyIHByb2dyZXNzVG90YWwgPSBnZXRQZXJjZW50ICogZ2V0UHJvZ3Jlc3NXcmFwV2lkdGg7XG4gIHZhciBhbmltYXRpb25MZW5ndGggPSAyNTAwO1xuXG4gIC8vY29uc29sZS5sb2coXCJnZXRQZXJjZW50OiBcIiwgZ2V0UGVyY2VudCk7XG5cbiAgLy8gb24gcGFnZSBsb2FkLCBhbmltYXRlIHBlcmNlbnRhZ2UgYmFyIHRvIGRhdGEgcGVyY2VudGFnZSBsZW5ndGhcbiAgLy8gLnN0b3AoKSB1c2VkIHRvIHByZXZlbnQgYW5pbWF0aW9uIHF1ZXVlaW5nXG4gICQoJy5wcm9ncmVzcy1iYXInKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgbGVmdDogcHJvZ3Jlc3NUb3RhbFxuICB9LCBhbmltYXRpb25MZW5ndGgpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
