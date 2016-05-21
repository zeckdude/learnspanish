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
function createQuiz(wordObjectsArray) {

  var quizOutput = {};

  // Loop through each of the wordObjects provided (ex: nouns, adjectives, etc.)
  $.each(wordObjectsArray, function(index, wordObject){
    //console.log(wordObject);

    // Loop through each WordGroup
    $.each(wordObject.values, function(wordKey, wordGroup){
      wordGroup.key = wordKey;
      wordGroup.wordType = wordObject.wordType;
      wordGroup.answerCorrect = false;
      wordGroup.answerAttempted = 0;
      //console.log(wordKey, wordGroup);

      // Add the wordGroup to the quizOutput object
      quizOutput[wordKey] = wordGroup;
    });
  });

  console.log("final quizOutput", quizOutput);
  return quizOutput;
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

    function getRandomConjugation() {
      // Get a random verb type(i.e. -ar words), random tense(i.e. future), and a random conjugation(i.e. ellos)
      var randomWordType = getRandomProperty(spanishTenses);
      var randomTense = getRandomProperty(randomWordType.propertyValue);
      var appendTo = randomTense.propertyValue.appendTo;
      var randomWord = getRandomWord(randomWordType.propertyName);

      //console.log("randomWordType: ", randomWordType);
      //console.log("randomTense: ", randomTense);
      //console.log("randomWord: ", randomWord);

      // Grab a random property from the tense and if the conjugation that was chosen is actually the "appendTo" property, then run the function as many times as necessary to get an actual conjugation value
      var randomTenseConjugationKey;
      do {
        randomTenseConjugationKey = getRandomProperty(randomTense.propertyValue);
        //console.log("randomTenseConjugationKey: ", randomTenseConjugationKey);
      }
      while (randomTenseConjugationKey.propertyName === "appendTo");

      //console.log("Random Word Type in Spanish Tenses: ", randomWordType);
      //console.log("Random Tense in " + randomWordType.propertyName, randomTense);
      //console.log("Random Tense Conjugation Key in " + randomTense.propertyName, randomTenseConjugationKey);

      return {
        verbType: randomWordType,
        word: randomWord,
        tense: randomTense,
        conjugation: randomTenseConjugationKey,
        appendTo: appendTo
      };
    }

    function getRandomWord(verbType) {
      // Get a random word and its properties
      var randomWordGroup = getRandomProperty(verbs[verbType]);

      //console.log("Random Word Type in Spanish Tenses: ", randomWordType);
      //console.log("Random Word Group in " + verbType, randomWordGroup.propertyValue);

      // Properties of Random Word
      return randomWordGroup.propertyValue;
    }

    function generateVerbConjugationQuizQuestion() {
      console.log('Question Generated');

      var randomConjugation;
      var englishType;
      var person;
      var connectorString;
      var possiblePersons;
      var spanishFirstPart;

      // Get a random verb type(i.e. -ar words), random tense(i.e. future), and a random conjugation(i.e. ellos)
      randomConjugation = getRandomConjugation();

      //console.log("randomConjugation: ", randomConjugation);

      // Based on the Random Conjugation that was determined (i.e. yo, tu, el, nosotros, or ellos), determine which variation to use if applicable (as in el which can be substituted with ella or ud, or as in ellos which can be substituted with ellas or uds)
      switch(randomConjugation.conjugation.propertyName) {
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
      if (randomConjugation.tense.propertyName === "present" && randomConjugation.conjugation.propertyName === "el") {
        englishType = "present3rdPerson";
      } else if (randomConjugation.tense.propertyName === "past") {
        englishType = "past";
      } else {
        englishType = "present";
      }

      // connectorString - The connector word to be displayed in the quiz in the english sentence that is supposed to be translated (Only applies to the conditional, future, and imperfect tenses). i.e. for the sentence Jimmy will run (future), Jimmy would run (conditional), or Jimmy used to run (imperfect)
      if (randomConjugation.tense.propertyName === "conditional") {
        connectorString = "would";
      } else if (randomConjugation.tense.propertyName === "future") {
        connectorString = "will";
      } else if (randomConjugation.tense.propertyName === "imperfect") {
        connectorString = "used to";
      } else {
        connectorString = " ";
      }

      if(connectorString !== " ") {
        connectorString = " " + connectorString + " ";
      }

      //console.log("randomConjugation in quiz builder: ", randomConjugation);
      var randomWord = 'dsdsdsd';

      if(randomConjugation.appendTo === "stem") {
        spanishFirstPart = getStem(randomConjugation.word.spanish.word).stem;
      } else if(randomConjugation.appendTo === "infinitive") {
        spanishFirstPart = randomConjugation.word.spanish.word;
      }


      //console.log("Person: ", person);
      //console.log("englishType: ", englishType);
      //console.log("connectorString: ", connectorString);
      //console.log("randomWord: ", randomWord);
      //
      //console.log("Sentence to output in English: ", person.english + connectorString + randomWord['english'][englishType]);
      //console.log("Sentence to output in Spanish: ", person.spanish + " " + spanishFirstPart + randomConjugation.conjugation.propertyValue);


      // Returning sentence to be displayed (i.e. She will eat) in both languages
      return {
        english: person.english + connectorString + randomConjugation.word['english'][englishType],
        spanish: person.spanish + " " + spanishFirstPart + randomConjugation.conjugation.propertyValue
      }

    }




    // Create Object to keep track of questions that were already asked and if the user already got them right so they don't ask them again
    var quizScore = {};
    var quizQuestion;

    $.each(spanishTenses, function (verbType, tenses) {
      $.each(tenses, function (tense, tenseConjugations) {
        $.each(tenseConjugations, function (tenseConjugationKey, tenseConjugationValue) {
          if (tenseConjugationKey === "appendTo") { return true; }
          createNestedObject( quizScore, [verbType, tense, tenseConjugationKey], false );
          // Example output: quizScore.arWords.present.ellos: false
        });
      });
    });

    //console.log("quizScore:", quizScore);



    // Populate Quiz on page load
    populateQuizArea(generateVerbConjugationQuizQuestion());

    // Activate the button functionality and have it load in a new verb conjugation set
    activateQuiz(generateVerbConjugationQuizQuestion);
  }









});




$(document).ready(function(){



  if ( $( ".js-quiz-word-retention" ).length ) {
    hasFirstQuestionRun = false;

    var quantityType;
    var wordTheEnglish;
    var wordAEnglish;
    var wordTheSpanish;
    var wordASpanish;
    var leadWordEnglish;
    var leadWordSpanish;

    var englishOutput;
    var spanishOutput;

    //quizWordsToInclude: [nouns, adjectives, words]

    var quizOptions = {
      onlyShowUnansweredQuestions: true,
      quizWordsToInclude: [nouns, adjectives, words],
      functionToGenerateQuizQuestion: generateWordRetentionQuizQuestion
    };

    var quizWords = createQuiz(quizOptions.quizWordsToInclude);

    function generateWordRetentionQuizQuestion() {
      //console.log('Question Generated');

      // Get the word group which defines the english and spanish versions of the word in singular and plural form, as well as the noun gender

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
        englishOutput = randomWordGroup.english;
        spanishOutput = randomWordGroup.spanish;
      }

      if(randomWordGroup.wordType === "noun") {
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

        englishOutput = leadWordEnglish + " " + randomWordEnglish;
        spanishOutput = leadWordSpanish + " " + randomWordSpanish;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcmlhYmxlcy5qcyIsImZ1bmN0aW9ucy5qcyIsInF1aXotdmVyYi1jb25qdWdhdGlvbi5qcyIsInF1aXotd29yZC1yZXRlbnRpb24uanMiLCJ3b3Jkcy5qcyIsInByb2dyZXNzLWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHdvcmRzID0ge1xuICB3b3JkVHlwZTogXCJ3b3JkXCIsXG4gIHZhbHVlczoge1xuICAgIGN1YW5kbzoge1xuICAgICAgc3BhbmlzaDogXCJjdWFuZG9cIixcbiAgICAgIGVuZ2xpc2g6IFwid2hlblwiXG4gICAgfSxcbiAgICBob2xhOiB7XG4gICAgICBzcGFuaXNoOiBcImhvbGFcIixcbiAgICAgIGVuZ2xpc2g6IFwiaGVsbG9cIlxuICAgIH0sXG4gICAgdGFtcG9jbzoge1xuICAgICAgc3BhbmlzaDogXCJ0YW1wb2NvXCIsXG4gICAgICBlbmdsaXNoOiBcIm5laXRoZXIvbm9yXCJcbiAgICB9LFxuICAgIHRhbWJpZW46IHtcbiAgICAgIHNwYW5pc2g6IFwidGFtYmllblwiLFxuICAgICAgZW5nbGlzaDogXCJhbHNvL3Rvby9hcyB3ZWxsXCJcbiAgICB9LFxuXG4gIH1cbn07XG5cbnZhciBhZGplY3RpdmVzID0ge1xuICB3b3JkVHlwZTogXCJhZGplY3RpdmVcIixcbiAgdmFsdWVzOiB7XG4gICAgbmFjbzoge1xuICAgICAgc3BhbmlzaDogXCJuYWNvXCIsXG4gICAgICBlbmdsaXNoOiBcInRhY2t5XCJcbiAgICB9LFxuICAgIHBvY286IHtcbiAgICAgIHNwYW5pc2g6IFwicG9jb1wiLFxuICAgICAgZW5nbGlzaDogXCJsaXR0bGUgKHF1YW50aXR5KVwiXG4gICAgfSxcbiAgICBtdWNobzoge1xuICAgICAgc3BhbmlzaDogXCJtdWNob1wiLFxuICAgICAgZW5nbGlzaDogXCJtdWNoXCJcbiAgICB9LFxuICAgIGNoaWNvOiB7XG4gICAgICBzcGFuaXNoOiBcImNoaWNvXCIsXG4gICAgICBlbmdsaXNoOiBcInNtYWxsXCJcbiAgICB9LFxuICAgIG1lZGlhbm86IHtcbiAgICAgIHNwYW5pc2g6IFwibWVkaWFub1wiLFxuICAgICAgZW5nbGlzaDogXCJub3JtYWwvc3RhbmRhcmQvbWVkaXVtXCJcbiAgICB9LFxuICAgIGdyYW5kZToge1xuICAgICAgc3BhbmlzaDogXCJncmFuZGVcIixcbiAgICAgIGVuZ2xpc2g6IFwibGFyZ2VcIlxuICAgIH0sXG4gICAgYWx0bzoge1xuICAgICAgc3BhbmlzaDogXCJhbHRvXCIsXG4gICAgICBlbmdsaXNoOiBcInRhbGxcIlxuICAgIH1cbiAgfVxufTtcblxudmFyIG5vdW5zID0ge1xuICB3b3JkVHlwZTogXCJub3VuXCIsXG4gIHZhbHVlczoge1xuICAgIG11amVyOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm11amVyXCIsXG4gICAgICAgIHBsdXJhbDogXCJtdWplcmVzXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIndvbWFuXCIsXG4gICAgICAgIHBsdXJhbDogXCJ3b21lblwiXG4gICAgICB9LFxuICAgICAgZ2VuZGVyOiBcImZlbWFsZVwiXG4gICAgfSxcbiAgICBob21icmU6IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwiaG9tYnJlXCIsXG4gICAgICAgIHBsdXJhbDogXCJob21icmVzXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm1hblwiLFxuICAgICAgICBwbHVyYWw6IFwibWVuXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwibWFsZVwiXG4gICAgfSxcbiAgICBuacOxbzoge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJuacOxb1wiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJib3lcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJtYWxlXCJcbiAgICB9LFxuICAgIG5pw7FhOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcIm5pw7FhXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcImdpcmxcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuICAgIH0sXG4gICAgcGFkcmU6IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwicGFkcmVcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwiZmF0aGVyXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwibWFsZVwiXG4gICAgfSxcbiAgICBtYWRyZToge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJtYWRyZVwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJtb3RoZXJcIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuICAgIH0sXG4gICAgY3VhcnRvOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcImN1YXJ0b1wiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBzaW5ndWxhcjogXCJiZWRyb29tXCJcbiAgICAgIH0sXG4gICAgICBnZW5kZXI6IFwibWFsZVwiXG4gICAgfSxcbiAgICBzYWxhOiB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHNpbmd1bGFyOiBcInNhbGFcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgc2luZ3VsYXI6IFwibGl2aW5nIHJvb21cIlxuICAgICAgfSxcbiAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuICAgIH0sXG4gIH1cbn07XG5cblxuLy92YXIgbm91bnMgPSB7XG4vLyAgd29yZFR5cGU6IFwibm91blwiLFxuLy8gIHZhbHVlczoge1xuLy8gICAgbmnDsW86IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcIm5pw7FvXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcImJveVwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJtYWxlXCJcbi8vICAgIH0sXG4vLyAgICBuacOxYToge1xuLy8gICAgICBzcGFuaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwibmnDsWFcIlxuLy8gICAgICB9LFxuLy8gICAgICBlbmdsaXNoOiB7XG4vLyAgICAgICAgc2luZ3VsYXI6IFwiZ2lybFwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuLy8gICAgfSxcbi8vICAgIHBhZHJlOiB7XG4vLyAgICAgIHNwYW5pc2g6IHtcbi8vICAgICAgICBzaW5ndWxhcjogXCJwYWRyZVwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGVuZ2xpc2g6IHtcbi8vICAgICAgICBzaW5ndWxhcjogXCJmYXRoZXJcIlxuLy8gICAgICB9LFxuLy8gICAgICBnZW5kZXI6IFwibWFsZVwiXG4vLyAgICB9LFxuLy8gICAgbWFkcmU6IHtcbi8vICAgICAgc3BhbmlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcIm1hZHJlXCJcbi8vICAgICAgfSxcbi8vICAgICAgZW5nbGlzaDoge1xuLy8gICAgICAgIHNpbmd1bGFyOiBcIm1vdGhlclwiXG4vLyAgICAgIH0sXG4vLyAgICAgIGdlbmRlcjogXCJmZW1hbGVcIlxuLy8gICAgfSxcbi8vICB9XG4vL307XG5cblxudmFyIHZlcmJzID0ge1xuICBhcldvcmRzOiBbXG4gICAgaGFibGFyID0ge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICB3b3JkOiBcImhhYmxhclwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBkZWZpbml0aW9uOiBcInRvIHNwZWFrICh0YWxrKVwiLFxuICAgICAgICBwcmVzZW50OiBcInNwZWFrXCIsXG4gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwic3BlYWtzXCIsXG4gICAgICAgIHBhc3Q6IFwic3Bva2VcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcHJlZ3VudGFyID0ge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICB3b3JkOiBcInByZWd1bnRhclwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBkZWZpbml0aW9uOiBcInRvIGFza1wiLFxuICAgICAgICBwcmVzZW50OiBcImFza1wiLFxuICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcImFza3NcIixcbiAgICAgICAgcGFzdDogXCJhc2tlZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBlc3R1ZGlhciA9IHtcbiAgICAgIHNwYW5pc2g6IHtcbiAgICAgICAgd29yZDogXCJlc3R1ZGlhclwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBkZWZpbml0aW9uOiBcInRvIHN0dWR5XCIsXG4gICAgICAgIHByZXNlbnQ6IFwic3R1ZHlcIixcbiAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJzdHVkaWVzXCIsXG4gICAgICAgIHBhc3Q6IFwic3R1ZGllZFwiXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBlcldvcmRzOiBbXG4gICAgYXByZW5kZXIgPSB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHdvcmQ6IFwiYXByZW5kZXJcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBsZWFyblwiLFxuICAgICAgICBwcmVzZW50OiBcImxlYXJuXCIsXG4gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwibGVhcm5zXCIsXG4gICAgICAgIHBhc3Q6IFwibGVhcm5lZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB2ZW5kZXIgPSB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHdvcmQ6IFwidmVuZGVyXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIGRlZmluaXRpb246IFwidG8gc2VsbFwiLFxuICAgICAgICBwcmVzZW50OiBcInNlbGxcIixcbiAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJzZWxsc1wiLFxuICAgICAgICBwYXN0OiBcInNvbGRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcm9tcGVyID0ge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICB3b3JkOiBcInJvbXBlclwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBkZWZpbml0aW9uOiBcInRvIGJyZWFrXCIsXG4gICAgICAgIHByZXNlbnQ6IFwiYnJlYWtcIixcbiAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJicmVha3NcIixcbiAgICAgICAgcGFzdDogXCJicm9rZVwiXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBpcldvcmRzOiBbXG4gICAgdmVuaXIgPSB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHdvcmQ6IFwiYWJyaXJcIlxuICAgICAgfSxcbiAgICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgZGVmaW5pdGlvbjogXCJ0byBvcGVuXCIsXG4gICAgICAgIHByZXNlbnQ6IFwib3BlblwiLFxuICAgICAgICBwcmVzZW50M3JkUGVyc29uOiBcIm9wZW5zXCIsXG4gICAgICAgIHBhc3Q6IFwib3BlbmVkXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpdmlyID0ge1xuICAgICAgc3BhbmlzaDoge1xuICAgICAgICB3b3JkOiBcInZpdmlyXCJcbiAgICAgIH0sXG4gICAgICBlbmdsaXNoOiB7XG4gICAgICAgIGRlZmluaXRpb246IFwidG8gbGl2ZVwiLFxuICAgICAgICBwcmVzZW50OiBcImxpdmVcIixcbiAgICAgICAgcHJlc2VudDNyZFBlcnNvbjogXCJsaXZlc1wiLFxuICAgICAgICBwYXN0OiBcImxpdmVkXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlY2liaXIgPSB7XG4gICAgICBzcGFuaXNoOiB7XG4gICAgICAgIHdvcmQ6IFwicmVjaWJpclwiXG4gICAgICB9LFxuICAgICAgZW5nbGlzaDoge1xuICAgICAgICBkZWZpbml0aW9uOiBcInRvIHJlY2VpdmVcIixcbiAgICAgICAgcHJlc2VudDogXCJyZWNlaXZlXCIsXG4gICAgICAgIHByZXNlbnQzcmRQZXJzb246IFwicmVjZWl2ZXNcIixcbiAgICAgICAgcGFzdDogXCJyZWNlaXZlZFwiXG4gICAgICB9XG4gICAgfVxuICBdXG59O1xuXG52YXIgc3BhbmlzaFRlbnNlcyA9IHtcbiAgYXJXb3Jkczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHlvOiBcIm9cIixcbiAgICAgIHR1OiBcImFzXCIsXG4gICAgICBlbDogXCJhXCIsXG4gICAgICBub3NvdHJvczogXCJhbW9zXCIsXG4gICAgICBlbGxvczogXCJhblwiXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBhcHBlbmRUbzogXCJzdGVtXCIsXG4gICAgICB5bzogXCJlXCIsXG4gICAgICB0dTogXCJhc3RlXCIsXG4gICAgICBlbDogXCLDs1wiLFxuICAgICAgbm9zb3Ryb3M6IFwiYW1vc1wiLFxuICAgICAgZWxsb3M6IFwiYXJvblwiXG4gICAgfSxcbiAgICBpbXBlcmZlY3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHlvOiBcImFiYVwiLFxuICAgICAgdHU6IFwiYWJhc1wiLFxuICAgICAgZWw6IFwiYWJhXCIsXG4gICAgICBub3NvdHJvczogXCLDoWJhbW9zXCIsXG4gICAgICBlbGxvczogXCJhYmFuXCJcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgYXBwZW5kVG86IFwiaW5maW5pdGl2ZVwiLFxuICAgICAgeW86IFwiw6lcIixcbiAgICAgIHR1OiBcIsOhc1wiLFxuICAgICAgZWw6IFwiw6FcIixcbiAgICAgIG5vc290cm9zOiBcImVtb3NcIixcbiAgICAgIGVsbG9zOiBcIsOhblwiXG4gICAgfSxcbiAgICBjb25kaXRpb25hbDoge1xuICAgICAgYXBwZW5kVG86IFwiaW5maW5pdGl2ZVwiLFxuICAgICAgeW86IFwiw61hXCIsXG4gICAgICB0dTogXCLDrWFzXCIsXG4gICAgICBlbDogXCLDrWFcIixcbiAgICAgIG5vc290cm9zOiBcIsOtYW1vc1wiLFxuICAgICAgZWxsb3M6IFwiw61hblwiXG4gICAgfVxuICB9LFxuICBlcldvcmRzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgeW86IFwib1wiLFxuICAgICAgdHU6IFwiZXNcIixcbiAgICAgIGVsOiBcImVcIixcbiAgICAgIG5vc290cm9zOiBcImVtb3NcIixcbiAgICAgIGVsbG9zOiBcImVuXCJcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHlvOiBcIsOtXCIsXG4gICAgICB0dTogXCJpc3RlXCIsXG4gICAgICBlbDogXCJpw7NcIixcbiAgICAgIG5vc290cm9zOiBcImltb3NcIixcbiAgICAgIGVsbG9zOiBcImllcm9uXCJcbiAgICB9LFxuICAgIGltcGVyZmVjdDoge1xuICAgICAgYXBwZW5kVG86IFwic3RlbVwiLFxuICAgICAgeW86IFwiw61hXCIsXG4gICAgICB0dTogXCLDrWFzXCIsXG4gICAgICBlbDogXCLDrWFcIixcbiAgICAgIG5vc290cm9zOiBcIsOtYW1vc1wiLFxuICAgICAgZWxsb3M6IFwiw61hblwiXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIGFwcGVuZFRvOiBcImluZmluaXRpdmVcIixcbiAgICAgIHlvOiBcIsOpXCIsXG4gICAgICB0dTogXCLDoXNcIixcbiAgICAgIGVsOiBcIsOhXCIsXG4gICAgICBub3NvdHJvczogXCJlbW9zXCIsXG4gICAgICBlbGxvczogXCLDoW5cIlxuICAgIH0sXG4gICAgY29uZGl0aW9uYWw6IHtcbiAgICAgIGFwcGVuZFRvOiBcImluZmluaXRpdmVcIixcbiAgICAgIHlvOiBcIsOtYVwiLFxuICAgICAgdHU6IFwiw61hc1wiLFxuICAgICAgZWw6IFwiw61hXCIsXG4gICAgICBub3NvdHJvczogXCLDrWFtb3NcIixcbiAgICAgIGVsbG9zOiBcIsOtYW5cIlxuICAgIH1cbiAgfSxcbiAgaXJXb3Jkczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHlvOiBcIm9cIixcbiAgICAgIHR1OiBcImVzXCIsXG4gICAgICBlbDogXCJlXCIsXG4gICAgICBub3NvdHJvczogXCJpbW9zXCIsXG4gICAgICBlbGxvczogXCJlblwiXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBhcHBlbmRUbzogXCJzdGVtXCIsXG4gICAgICB5bzogXCLDrVwiLFxuICAgICAgdHU6IFwiaXN0ZVwiLFxuICAgICAgZWw6IFwiacOzXCIsXG4gICAgICBub3NvdHJvczogXCJpbW9zXCIsXG4gICAgICBlbGxvczogXCJpZXJvblwiXG4gICAgfSxcbiAgICBpbXBlcmZlY3Q6IHtcbiAgICAgIGFwcGVuZFRvOiBcInN0ZW1cIixcbiAgICAgIHlvOiBcIsOtYVwiLFxuICAgICAgdHU6IFwiw61hc1wiLFxuICAgICAgZWw6IFwiw61hXCIsXG4gICAgICBub3NvdHJvczogXCLDrWFtb3NcIixcbiAgICAgIGVsbG9zOiBcIsOtYW5cIlxuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBhcHBlbmRUbzogXCJpbmZpbml0aXZlXCIsXG4gICAgICB5bzogXCLDqVwiLFxuICAgICAgdHU6IFwiw6FzXCIsXG4gICAgICBlbDogXCLDoVwiLFxuICAgICAgbm9zb3Ryb3M6IFwiZW1vc1wiLFxuICAgICAgZWxsb3M6IFwiw6FuXCJcbiAgICB9LFxuICAgIGNvbmRpdGlvbmFsOiB7XG4gICAgICBhcHBlbmRUbzogXCJpbmZpbml0aXZlXCIsXG4gICAgICB5bzogXCLDrWFcIixcbiAgICAgIHR1OiBcIsOtYXNcIixcbiAgICAgIGVsOiBcIsOtYVwiLFxuICAgICAgbm9zb3Ryb3M6IFwiw61hbW9zXCIsXG4gICAgICBlbGxvczogXCLDrWFuXCJcbiAgICB9XG4gIH1cbn07IiwiLy8gRnJvbTogaHR0cDovL3d3dy5yZWdleHRlc3Rlci5jb20vP2ZhbT05NDczMFxuLy8gRnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTU3NDc3ODkvODM5MTZcbmZ1bmN0aW9uIHdyYXBQYXJlbnRoZXNpc0NvbnRlbnQoc3RyaW5nLCB0YWcsIGNsYXNzTmFtZSkge1xuICAvL2NvbnNvbGUubG9nKFwic3RyaW5nOiBcIiwgc3RyaW5nKTtcbiAgLy9jb25zb2xlLmxvZyhcInRhZzogXCIsIHRhZyk7XG4gIC8vY29uc29sZS5sb2coXCJjbGFzc05hbWU6IFwiLCBjbGFzc05hbWUpO1xuXG4gIHZhciBjbGFzc0RlZjtcblxuICBpZighdGFnKSB7IHRhZyA9IFwic3BhblwiIH1cbiAgaWYoY2xhc3NOYW1lKSB7XG4gICAgY2xhc3NEZWYgPSAnIGNsYXNzPVwiJytjbGFzc05hbWUrJ1wiJztcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0RlZiA9ICcnO1xuICB9XG5cbiAgdmFyIG9wZW5UYWcgPSAnPCcrdGFnK2NsYXNzRGVmKyc+JztcblxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhcXCguKj9cXCkpLyAsIG9wZW5UYWcrJyQmPC8nK3RhZysnPicpO1xufVxuXG5cblxuLy8gRGV0ZWN0IHdoaWNoIENTUyBldmVudHMgYXJlIHN1cHBvcnRlZCBieSB0aGUgdXNlcidzIGJyb3dzZXIgYW5kIG9ubHkgcmV0dXJuIHRoZSBmaXJzdCBvbmUgaWYgc2V2ZXJhbCBtYXRjaCAoc3VjaCBhcyBgdHJhbnNpdGlvbmVuZGAgYW5kIGB3ZWJraXRUcmFuc2l0aW9uRW5kYCBmb3IgQ2hyb21lIHNvIHlvdSBjYW4gbGlzdGVuIGZvciB0aGUgZW5kIG9mIGEgQ1NTIGV2ZW50IGFuZCB0aGVuIHBlcmZvcm0gYW4gYWN0aW9uIGJhc2VkIG9uIHRoYXQpIChodHRwczovL2pvbnN1aC5jb20vYmxvZy9kZXRlY3QtdGhlLWVuZC1vZi1jc3MtYW5pbWF0aW9ucy1hbmQtdHJhbnNpdGlvbnMtd2l0aC1qYXZhc2NyaXB0LylcbmZ1bmN0aW9uIGJyb3dzZXJTdXBwb3J0ZWRFdmVudHMoKXtcbiAgdmFyIHQsXG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmFrZWVsZW1lbnRcIiksXG4gICAgYnJvd3NlclN1cHBvcnRlZEV2ZW50cyA9IHt9O1xuXG4gIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICBcInRyYW5zaXRpb25cIiAgICAgIDogXCJ0cmFuc2l0aW9uZW5kXCIsXG4gICAgXCJPVHJhbnNpdGlvblwiICAgICA6IFwib1RyYW5zaXRpb25FbmRcIixcbiAgICBcIk1velRyYW5zaXRpb25cIiAgIDogXCJ0cmFuc2l0aW9uZW5kXCIsXG4gICAgXCJXZWJraXRUcmFuc2l0aW9uXCI6IFwid2Via2l0VHJhbnNpdGlvbkVuZFwiXG4gIH07XG5cbiAgdmFyIGFuaW1hdGlvbnMgPSB7XG4gICAgXCJhbmltYXRpb25cIiAgICAgIDogXCJhbmltYXRpb25lbmRcIixcbiAgICBcIk9BbmltYXRpb25cIiAgICAgOiBcIm9BbmltYXRpb25FbmRcIixcbiAgICBcIk1vekFuaW1hdGlvblwiICAgOiBcImFuaW1hdGlvbmVuZFwiLFxuICAgIFwiV2Via2l0QW5pbWF0aW9uXCI6IFwid2Via2l0QW5pbWF0aW9uRW5kXCJcbiAgfTtcblxuICBmb3IgKHQgaW4gdHJhbnNpdGlvbnMpe1xuICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIC8vY29uc29sZS5sb2codHJhbnNpdGlvbnNbdF0pO1xuICAgICAgYnJvd3NlclN1cHBvcnRlZEV2ZW50cy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbnNbdF07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmb3IgKGEgaW4gYW5pbWF0aW9ucyl7XG4gICAgaWYgKGVsLnN0eWxlW2FdICE9PSB1bmRlZmluZWQpe1xuICAgICAgLy9jb25zb2xlLmxvZyhhbmltYXRpb25zW2FdKTtcbiAgICAgIGJyb3dzZXJTdXBwb3J0ZWRFdmVudHMuYW5pbWF0aW9uID0gYW5pbWF0aW9uc1thXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBicm93c2VyU3VwcG9ydGVkRXZlbnRzO1xufVxuXG52YXIgc3VwcG9ydGVkRXZlbnRzID0gYnJvd3NlclN1cHBvcnRlZEV2ZW50cygpO1xudmFyIHRyYW5zaXRpb25FdmVudCA9IHN1cHBvcnRlZEV2ZW50cy50cmFuc2l0aW9uO1xudmFyIGFuaW1hdGlvbkV2ZW50ID0gc3VwcG9ydGVkRXZlbnRzLmFuaW1hdGlvbjtcblxuXG5cbmZ1bmN0aW9uIGFuaW1hdGVDYXJkRmxpcChjYWxsYmFjaykge1xuICAvLyBMZXQncyBtYWtlIHRoZSBjYWxsYmFjayBvcHRpb25hbFxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XG5cbiAgLy9jb25zb2xlLmxvZyhcImZsaXAgY2FyZCBiZWdpblwiKTtcblxuICAvLyBGbGlwIHRoZSBjYXJkXG4gICQoXCIjcXVpelwiKS5maW5kKFwiLmNhcmRcIikudG9nZ2xlQ2xhc3MoXCJmbGlwcGVkXCIpO1xuXG4gIC8vIFJ1biBhIGNhbGxiYWNrIHdoZW4gdGhlIENTUyBhbmltYXRpb24gaGFzIGZpbmlzaGVkIGlmIGl0IGhhcyBiZWVuIHByb3ZpZGVkIGFzIGFuIGFyZ3VtZW50XG4gIGlmKGNhbGxiYWNrKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkEgY2FsbGJhY2sgd2FzIHByb3ZpZGVkXCIpO1xuXG4gICAgLy8gV2FpdCBmb3IgdGhlIGZsaXBwaW5nIGFuaW1hdGlvbiB0byBjb21wbGV0ZSBiZWZvcmUgcnVubmluZyBjYWxsYmFja1xuICAgICQoXCIjcXVpelwiKS5vbmUodHJhbnNpdGlvbkV2ZW50LCBcIi5jYXJkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy9jb25zb2xlLmxvZyhcImZsaXAgY2FyZCBlbmRcIik7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG5mdW5jdGlvbiBwb3B1bGF0ZVF1aXpBcmVhKHF1aXpRdWVzdGlvbikge1xuICAvL2NvbnNvbGUubG9nKFwiUG9wdWxhdGUgUXVpeiBBcmVhXCIpO1xuXG4gIHZhciBxdWl6ID0gJChcIiNxdWl6XCIpO1xuXG4gIC8vIENoYW5nZSBvdXQgdGhlIHF1ZXN0aW9uIGJlaW5nIHNob3duXG4gIC8vY29uc29sZS5sb2coXCJGYWRlIGluIHRoZSBjb250ZW50IG9uIHRoZSBjYXJkc1wiKTtcbiAgcXVpei5maW5kKFwiLmZhY2UuZnJvbnRcIikuY2hpbGRyZW4oXCIuanMtZ2VuZXJhdGVkLXNlbnRlbmNlXCIpLmh0bWwod3JhcFBhcmVudGhlc2lzQ29udGVudChxdWl6UXVlc3Rpb24uZW5nbGlzaCwgJ3NtYWxsJykpLmZhZGVJbigpO1xuICBxdWl6LmZpbmQoXCIuZmFjZS5iYWNrXCIpLmNoaWxkcmVuKFwiLmpzLWdlbmVyYXRlZC1zZW50ZW5jZVwiKS5odG1sKHF1aXpRdWVzdGlvbi5zcGFuaXNoKS5mYWRlSW4oKTtcblxuICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSBxdWl6IGhhcyBiZWVuIHBvcHVsYXRlZCwgc2F2ZSB0aGF0IHN0YXR1cyBzbyB3ZSBjYW4gZmxpcCB0aGUgY2FyZCBhdCByYW5kb20gdG8gZGlzcGxheSBkaWZmZXJlbnQgc2lkZXMgYmVmb3JlIGxvYWRpbmcgaW4gdGhlIHNlbnRlbmNlXG4gIGlmKCFoYXNGaXJzdFF1ZXN0aW9uUnVuKSB7IGhhc0ZpcnN0UXVlc3Rpb25SdW4gPSB0cnVlOyB9XG59XG5cblxuXG5mdW5jdGlvbiBkaXNhYmxlUmVzdWx0QnRucyhlbmFibGVTdGF0dXMpIHtcbiAgJChcIi5qcy1yZXN1bHQtYnRuXCIpLnByb3AoXCJkaXNhYmxlZFwiLCBlbmFibGVTdGF0dXMpO1xufVxuXG5cblxuLy8gRnVuY3Rpb246IGNyZWF0ZU5lc3RlZE9iamVjdCggYmFzZSwgbmFtZXNbLCB2YWx1ZV0gKVxuLy8gICBiYXNlOiB0aGUgb2JqZWN0IG9uIHdoaWNoIHRvIGNyZWF0ZSB0aGUgaGllcmFyY2h5XG4vLyAgIG5hbWVzOiBhbiBhcnJheSBvZiBzdHJpbmdzIGNvbnRhbmluZyB0aGUgbmFtZXMgb2YgdGhlIG9iamVjdHNcbi8vICAgdmFsdWUgKG9wdGlvbmFsKTogaWYgZ2l2ZW4sIHdpbGwgYmUgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBoaWVyYXJjaHlcbi8vIFJldHVybnM6IHRoZSBsYXN0IG9iamVjdCBpbiB0aGUgaGllcmFyY2h5XG4vLyBGcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMTQzMzA2Ny84MzkxNlxuZnVuY3Rpb24gY3JlYXRlTmVzdGVkT2JqZWN0KCBiYXNlLCBuYW1lcywgdmFsdWUgKSB7XG4gIC8vIElmIGEgdmFsdWUgaXMgZ2l2ZW4sIHJlbW92ZSB0aGUgbGFzdCBuYW1lIGFuZCBrZWVwIGl0IGZvciBsYXRlcjpcbiAgdmFyIGxhc3ROYW1lID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMyA/IG5hbWVzLnBvcCgpIDogZmFsc2U7XG5cbiAgLy8gV2FsayB0aGUgaGllcmFyY2h5LCBjcmVhdGluZyBuZXcgb2JqZWN0cyB3aGVyZSBuZWVkZWQuXG4gIC8vIElmIHRoZSBsYXN0TmFtZSB3YXMgcmVtb3ZlZCwgdGhlbiB0aGUgbGFzdCBvYmplY3QgaXMgbm90IHNldCB5ZXQ6XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgYmFzZSA9IGJhc2VbIG5hbWVzW2ldIF0gPSBiYXNlWyBuYW1lc1tpXSBdIHx8IHt9O1xuICB9XG5cbiAgLy8gSWYgYSB2YWx1ZSB3YXMgZ2l2ZW4sIHNldCBpdCB0byB0aGUgbGFzdCBuYW1lOlxuICBpZiggbGFzdE5hbWUgKSBiYXNlID0gYmFzZVsgbGFzdE5hbWUgXSA9IHZhbHVlO1xuXG4gIC8vIFJldHVybiB0aGUgbGFzdCBvYmplY3QgaW4gdGhlIGhpZXJhcmNoeTpcbiAgcmV0dXJuIGJhc2U7XG59XG5cbmZ1bmN0aW9uIGdldE51bWJlck9iamVjdFByb3BlcnRpZXMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcbn1cblxuXG4vLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjUzMjIxOC9waWNrLXJhbmRvbS1wcm9wZXJ0eS1mcm9tLWEtamF2YXNjcmlwdC1vYmplY3RcbmZ1bmN0aW9uIGdldFJhbmRvbVByb3BlcnR5IChvYmopIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICB2YXIgcmFuZG9tUHJvcGVydHkgPSBrZXlzWyBrZXlzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkgPDwgMF07XG4gIC8vY29uc29sZS5sb2coXCJSYW5kb20gUHJvcGVydHk6IFwiLCByYW5kb21Qcm9wZXJ0eSk7XG4gIC8vcmV0dXJuIHJhbmRvbVByb3BlcnR5O1xuICAvL3JldHVybiB7XCJwcm9wZXJ0eU5hbWVcIjogcmFuZG9tUHJvcGVydHksIFwicHJvcGVydHlWYWx1ZVwiOiBvYmpbcmFuZG9tUHJvcGVydHldfTtcbiAgcmV0dXJuIHtcInByb3BlcnR5TmFtZVwiOiByYW5kb21Qcm9wZXJ0eSwgXCJwcm9wZXJ0eVZhbHVlXCI6IG9ialtyYW5kb21Qcm9wZXJ0eV19O1xufVxuXG5cbmZ1bmN0aW9uIHJhbmRvbUFycmF5RWxlbWVudChhcnJheSkge1xuICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKml0ZW1zLmxlbmd0aCldO1xufVxuXG5cbmZ1bmN0aW9uIGdldFN0ZW0od29yZCkge1xuICByZXR1cm4ge1xuICAgIGxhc3QyOiB3b3JkLnNsaWNlKC0yKSxcbiAgICBzdGVtOiB3b3JkLnN1YnN0cmluZygwLCB3b3JkLmxlbmd0aC0yKVxuICB9XG59XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM0ODY0MTc1LzgzOTE2XG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbiAgfVxufVxuXG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVF1aXoocXVpek9wdGlvbnMsIHF1aXpXb3Jkcykge1xuICB2YXIgcXVpeiA9ICQoXCIjcXVpelwiKTtcblxuICBudW1Xb3JkcyA9IGdldE51bWJlck9iamVjdFByb3BlcnRpZXMocXVpeldvcmRzKTtcbiAgY29uc29sZS5sb2coXCJOdW1iZXIgb2YgUHJvcGVydGllcyBpbiB0aGUgcXVpeldvcmRzIG9iamVjdDogXCIsIG51bVdvcmRzKTtcblxuICBxdWl6LmZpbmQoXCIucHJvZ3Jlc3NcIikuZmluZChcIi5udW0td29yZHNcIikudGV4dChudW1Xb3Jkcyk7XG5cblxuICB2YXIgY29tcGxldGVkUXVpeldvcmRzID0ge307XG5cbiAgLy8gUG9wdWxhdGUgUXVpeiBvbiBwYWdlIGxvYWRcbiAgcG9wdWxhdGVRdWl6QXJlYShxdWl6T3B0aW9ucy5mdW5jdGlvblRvR2VuZXJhdGVRdWl6UXVlc3Rpb24oKSk7XG5cbiAgJCgnLmpzLXJlc3VsdC1idG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdFN0YXR1cyA9ICQodGhpcykuZGF0YShcInJlc3VsdC1zdGF0dXNcIik7XG5cbiAgICAvLyBEaXNhYmxlIHRoZSByZXN1bHQgYnV0dG9ucyBzbyB0aGUgdXNlciBuZWVkcyB0byBmbGlwIG92ZXIgdGhlIGNhcmQgdG8gY2hlY2sgdGhlIGFuc3dlciBiZWZvcmUgc2VsZWN0aW5nIGEgcmVzdWx0XG4gICAgZGlzYWJsZVJlc3VsdEJ0bnModHJ1ZSk7XG5cbiAgICAvLyBJZiB0aGUgcXVpeiBpcyBzZXQgdXAgdG8gb25seSBzaG93IGtlZXAgc2NvcmUgYW5kIG9ubHkgc2hvdyB1bmFuc3dlcmVkIHF1ZXN0aW9ucyBvciBwcmV2aW91c2x5IGFuc3dlcmVkIGluY29ycmVjdCBxdWVzdGlvbnMsIHRoZW4gY2hlY2sgaWYgaXQgd2FzIGFza2VkIGNvcnJlY3RseSwgYW5kIGlmIHNvIG1vdmUgdGhhdCB3b3JkR3JvdXAgdG8gdGhlIGFuc3dlcmVkV29yZHMgb2JqZWN0XG4gICAgaWYocXVpek9wdGlvbnMub25seVNob3dVbmFuc3dlcmVkUXVlc3Rpb25zID09PSB0cnVlKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgcXVlc3Rpb24gd2FzIGFuc3dlcmVkIGNvcnJlY3RseVxuICAgICAgdmFyIGxhc3RXb3JkS2V5ID0gbGFzdFdvcmRHcm91cC5rZXk7XG5cbiAgICAgIGlmIChyZXN1bHRTdGF0dXMgPT09IFwiY29ycmVjdFwiKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJRdWVzdGlvbiBhbnN3ZXJlZCBjb3JyZWN0bHlcIik7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxhc3RXb3JkS2V5OiBcIiwgbGFzdFdvcmRLZXkpO1xuICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGBhbnN3ZXJBdHRlbXB0ZWRgIHByb3BlcnR5IHRvIHJlY29yZCBob3cgbWFueSB0aW1lcyB0aGlzIHdvcmQgd2FzIGF0dGVtcHRlZFxuICAgICAgICBxdWl6V29yZHNbbGFzdFdvcmRLZXldWydhbnN3ZXJBdHRlbXB0ZWQnXSsrO1xuXG4gICAgICAgIC8vIENoYW5nZSB0aGUgYGFuc3dlckNvcnJlY3RgIHRvIHRydWUgdG8gc2hvdyBpdCB3YXMgYW5zd2VyZWQgY29ycmVjdGx5XG4gICAgICAgIHF1aXpXb3Jkc1tsYXN0V29yZEtleV1bJ2Fuc3dlckNvcnJlY3QnXSA9IHRydWU7XG5cbiAgICAgICAgLy8gQ29weSB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXMgZnJvbSB0aGUgd29yZCBncm91cCB0byB0aGUgYGNvbXBsZXRlZFF1aXpXb3Jkc2Agb2JqZWN0XG4gICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0gPSB7fTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgYGVuZ2xpc2hgIHByb3BlcnR5IGlzIGFuIG9iamVjdChhcyBpbiB0aGUgY2FzZSBvZiBub3VucyB3aGVyZSB0aGUgZW5nbGlzaCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIGBzaW5ndWxhcmAgcHJvcGVydHkgdGhhdCBob2xkcyB0aGUgYWN0dWFsIGVuZ2xpc2ggdmFsdWUpXG4gICAgICAgIGlmKGlzUGxhaW5PYmplY3QocXVpeldvcmRzW2xhc3RXb3JkS2V5XS5lbmdsaXNoKSkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJxdWl6V29yZHNbbGFzdFdvcmRLZXldXCIscXVpeldvcmRzW2xhc3RXb3JkS2V5XSk7XG4gICAgICAgICAgY29tcGxldGVkUXVpeldvcmRzW2xhc3RXb3JkS2V5XS5lbmdsaXNoID0gcXVpeldvcmRzW2xhc3RXb3JkS2V5XS5lbmdsaXNoLnNpbmd1bGFyO1xuICAgICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0uc3BhbmlzaCA9IHF1aXpXb3Jkc1tsYXN0V29yZEtleV0uc3BhbmlzaC5zaW5ndWxhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNbbGFzdFdvcmRLZXldLmVuZ2xpc2ggPSBxdWl6V29yZHNbbGFzdFdvcmRLZXldLmVuZ2xpc2g7XG4gICAgICAgICAgY29tcGxldGVkUXVpeldvcmRzW2xhc3RXb3JkS2V5XS5zcGFuaXNoID0gcXVpeldvcmRzW2xhc3RXb3JkS2V5XS5zcGFuaXNoO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0uYW5zd2VyQXR0ZW1wdGVkID0gcXVpeldvcmRzW2xhc3RXb3JkS2V5XS5hbnN3ZXJBdHRlbXB0ZWQ7XG4gICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc1tsYXN0V29yZEtleV0ud29yZFR5cGUgPSBxdWl6V29yZHNbbGFzdFdvcmRLZXldLndvcmRUeXBlO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgd29yZCBncm91cCBmcm9tIHRoZSBgcXVpeldvcmRzYCBvYmplY3Qgc28gaXQgaXNuJ3Qgc2hvd24gYWdhaW5cbiAgICAgICAgZGVsZXRlIHF1aXpXb3Jkc1tsYXN0V29yZEtleV07XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBQcm9ncmVzcyBiYXIgcGVyY2VudGFnZSBhbmQgc2NvcmUgdmFsdWVcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNvbXBsZXRlZFF1aXpXb3JkczogXCIsIGNvbXBsZXRlZFF1aXpXb3Jkcyk7XG4gICAgICAgIHZhciBudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdCA9IGdldE51bWJlck9iamVjdFByb3BlcnRpZXMoY29tcGxldGVkUXVpeldvcmRzKTtcbiAgICAgICAgdmFyIGNvcnJlY3RQZXJjZW50YWdlID0gKG51bVdvcmRzQW5zd2VyZWRDb3JyZWN0IC8gbnVtV29yZHMpICogMTAwO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdDogJywgbnVtV29yZHNBbnN3ZXJlZENvcnJlY3QpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdjb3JyZWN0UGVyY2VudGFnZTogJywgY29ycmVjdFBlcmNlbnRhZ2UpO1xuXG4gICAgICAgIC8vIFNpbmNlIGEgcXVlc3Rpb24gd2FzIG1hcmtlZCBhcyBjb3JyZWN0LCB0aGUgcGVyY2VudGFnZS1jb3JyZWN0IHdpbGwgY2hhbmdlIGFuZCB0aGVyZWZvcmUgd2UgdHJpZ2dlciBhIGN1c3RvbSBldmVudCB3aGljaCBwYXNzZXMgc29tZSBkYXRhIHRvIHRoZSBgcHJvZ3Jlc3MtYmFyLmpzYCBmaWxlIHdoaWNoIGhhcyBhIGxpc3RlbmVyIGZvciB0aGUgY3VzdG9tIGV2ZW50LlxuICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdwcm9ncmVzcy1jaGFuZ2VkJywgW251bVdvcmRzQW5zd2VyZWRDb3JyZWN0LCBjb3JyZWN0UGVyY2VudGFnZV0pO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJOdW1iZXIgb2YgUHJvcGVydGllcyBpbiB0aGUgcXVpeldvcmRzIG9iamVjdDogXCIsIGdldE51bWJlck9iamVjdFByb3BlcnRpZXMocXVpeldvcmRzKSk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZygnUXVpeiBXb3JkcyBpbiByZXN1bHRTdGF0dXM6ICcsIHF1aXpXb3Jkcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGBhbnN3ZXJBdHRlbXB0ZWRgIHByb3BlcnR5IHRvIHJlY29yZCBob3cgbWFueSB0aW1lcyB0aGlzIHdvcmQgd2FzIGF0dGVtcHRlZFxuICAgICAgICBxdWl6V29yZHNbbGFzdFdvcmRLZXldWydhbnN3ZXJBdHRlbXB0ZWQnXSsrO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUXVlc3Rpb24gYW5zd2VyZWQgaW5jb3JyZWN0bHlcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmxvZyhcImlzUmVzdWx0Q29ycmVjdDogXCIgKyBpc1Jlc3VsdENvcnJlY3QgKyBcIihcIiArIHR5cGVvZiBpc1Jlc3VsdENvcnJlY3QgKyBcIilcIik7XG5cbiAgICAvLyBBZGQgdGhlIHB1bHNlIG5vdGlmaWNhdGlvbiB0byBzaG93IHRoZWlyIHJlc3VsdCBpbiBhIHZpc3VhbCB3YXlcbiAgICAkKFwiZGl2LmZhY2VcIikuYWRkQ2xhc3MoXCJwdWxzZS1ub3RpZmljYXRpb24gcHVsc2Utbm90aWZpY2F0aW9uLVwiICsgcmVzdWx0U3RhdHVzKTtcblxuICAgIC8vIEZvcmNlIHRoaXMgZnVuY3Rpb24gdG8gb25seSBydW4gb25jZSBwZXIgY2xpY2sgc2luY2UgdGhlIGFuaW1hdGlvbiBpcyBiZWluZyBhcHBsaWVkIHRvIGJvdGggYC5mYWNlYCBkaXZzIHNvIGl0IHdpbGwgYWN0dWFsbHkgZGV0ZWN0IGl0IHR3aWNlLlxuICAgIC8vIFRPRE86IEZpeCB0aGlzIGJ5IGFwcGx5aW5nIHRoZSBgLnB1bHNlLW5vdGlmaWNhdGlvbmAgY2xhc3Mgb24gb25seSB0aGUgYC5mYWNlYCB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBzaG93bi5cbiAgICBxdWl6Lm9uZShhbmltYXRpb25FdmVudCwgXCIuZmFjZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgLy8gU2luY2UgdGhlIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQsIHJlbW92ZSB0aGUgYW5pbWF0aW9uIGNsYXNzXG4gICAgICAkKFwiZGl2LmZhY2VcIikucmVtb3ZlQ2xhc3MoXCJwdWxzZS1ub3RpZmljYXRpb24gcHVsc2Utbm90aWZpY2F0aW9uLVwiICsgcmVzdWx0U3RhdHVzKTtcblxuICAgICAgLy8gRmFkZSBvdXQgdGhlIGNvbnRlbnQgb24gdGhlIGNhcmRzXG4gICAgICBxdWl6LmZpbmQoXCIuZmFjZS5mcm9udFwiKS5jaGlsZHJlbihcIi5qcy1nZW5lcmF0ZWQtc2VudGVuY2VcIikuZmFkZU91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgcXVlc3Rpb24gdG8gc2hvdyBpZiB0aGVyZSBhcmUgYW55IGxlZnQgaW4gdGhlIHNldFxuICAgICAgICBpZihnZXROdW1iZXJPYmplY3RQcm9wZXJ0aWVzKHF1aXpXb3JkcykgPiAwKSB7XG4gICAgICAgICAgdmFyIG5ld1dvcmRHcm91cCA9IHF1aXpPcHRpb25zLmZ1bmN0aW9uVG9HZW5lcmF0ZVF1aXpRdWVzdGlvbigpO1xuXG4gICAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIGZpcnN0IHF1ZXN0aW9uLCByYW5kb21seSBkZXRlcm1pbmUgaWYgdGhlIGNhcmQgc2hvdWxkIHR1cm4gKHNob3cgdGhlIG90aGVyIGxhbmd1YWdlIHRvIGtlZXAgdGhlIHF1ZXN0aW9ucyB1bnByZWRpY3RhYmxlKVxuICAgICAgICAgIGlmIChnZXRSYW5kb21JbnQoMCwgMSkgPT09IDEgJiYgaGFzRmlyc3RRdWVzdGlvblJ1bikge1xuICAgICAgICAgICAgYW5pbWF0ZUNhcmRGbGlwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcG9wdWxhdGVRdWl6QXJlYShuZXdXb3JkR3JvdXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcHVsYXRlUXVpekFyZWEobmV3V29yZEdyb3VwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlIFF1aXogaGFzIGZpbmlzaGVkLiBDYWxjdWxhdGUgdGhlIHJlc3VsdHMuXG4gICAgICAgICAgcXVpei5maW5kKFwiLnF1ZXN0aW9uc1wiKS5mYWRlT3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgcmVzdWx0c0FyZWEgPSBxdWl6LmZpbmQoXCIucmVzdWx0c1wiKTtcblxuICAgICAgICAgICAgLy8gRmlsbCBpbiB0aGUgbnVtYmVyIG9mIHdvcmRzIGluIHRoZSBxdWl6XG4gICAgICAgICAgICByZXN1bHRzQXJlYS5maW5kKCcubnVtLXdvcmRzJykudGV4dChudW1Xb3Jkcyk7XG5cbiAgICAgICAgICAgIC8vIEZpbGwgaW4gaG93IG1hbnkgd29yZHMgd2VyZSBjb3JyZWN0bHkgYW5zd2VyZWQgb24gdGhlIGZpcnN0IHRyeVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNvbXBsZXRlZFF1aXpXb3JkcyAxOiBcIiwgY29tcGxldGVkUXVpeldvcmRzKTtcbiAgICAgICAgICAgIHZhciBudW1GaXJzdFRyeUNvcnJlY3QgPSAwO1xuXG4gICAgICAgICAgICAkLmVhY2goY29tcGxldGVkUXVpeldvcmRzLCBmdW5jdGlvbihpbmRleCwgd29yZEdyb3VwKXtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImluZGV4IGluIGxvb3BcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid29yZEdyb3VwIGluIGxvb3BcIiwgd29yZEdyb3VwKTtcbiAgICAgICAgICAgICAgaWYod29yZEdyb3VwLmFuc3dlckF0dGVtcHRlZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIG51bUZpcnN0VHJ5Q29ycmVjdCsrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzdWx0c0FyZWEuZmluZCgnLmZpcnN0LXRyeS1jb3JyZWN0JykudGV4dChudW1GaXJzdFRyeUNvcnJlY3QpO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHRvcCA1IHdvcmRzIHRoYXQgaGF2ZSB0aGUgbW9zdCB0cmllcyAoQWRkIGxhdGVyKVxuXG4gICAgICAgICAgICAvLyBHZXQgYWxsIHRoZSB3b3JkcyBhbG9uZyB3aXRoIGhvdyBtYW55IHRyaWVzIHRvIGNvbXBsZXRlIGVhY2ggb25lXG5cbiAgICAgICAgICAgIHZhciBjb21wbGV0ZWRRdWl6V29yZHNBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb21wbGV0ZWRRdWl6V29yZHMgb2JqZWN0IHRvIGFuIGFycmF5IHNvIGl0J3MgZWFzaWVyIHRvIHNvcnQgaXQgd2hlbiBvdXRwdXR0aW5nIGFsbCB0aGUgd29yZHMgYW5zd2VyZWQgYnkgdGhlIG51bWJlciBvZiB0cmllcyBmb3IgZWFjaCB3b3JkXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29tcGxldGVkUXVpeldvcmRzKSB7XG4gICAgICAgICAgICAgIGlmIChjb21wbGV0ZWRRdWl6V29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZFF1aXpXb3Jkc0FycmF5LnB1c2goY29tcGxldGVkUXVpeldvcmRzW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNvcnQgYnkgTnVtYmVyIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNjMwMDcvaG93LXRvLXNvcnQtYW4tYXJyYXktb2YtaW50ZWdlcnMtY29ycmVjdGx5KVxuICAgICAgICAgICAgLy8gU29ydCBieSB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBhbnN3ZXIgd2FzIGF0dGVtcHRlZCBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICAgICAgICBjb21wbGV0ZWRRdWl6V29yZHNBcnJheSA9IGNvbXBsZXRlZFF1aXpXb3Jkc0FycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGIuYW5zd2VyQXR0ZW1wdGVkIC0gYS5hbnN3ZXJBdHRlbXB0ZWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5kaXIoIGNvbXBsZXRlZFF1aXpXb3Jkc0FycmF5ICk7XG5cbiAgICAgICAgICAgIC8vdmFyIGNvbXBsZXRlZFF1aXpXb3JkTnVtID0gMTtcbiAgICAgICAgICAgIC8vdmFyIGNvbXBsZXRlZFF1aXpXb3JkVHJpZXNcblxuICAgICAgICAgICAgLy8gRGlzcGxheSBlYWNoIG9mIHRoZSBjb21wbGV0ZWQgd29yZHMgYW5kIHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMgZm9yIGVhY2ggb25lXG4gICAgICAgICAgICAkLmVhY2goY29tcGxldGVkUXVpeldvcmRzQXJyYXksIGZ1bmN0aW9uKGluZGV4LCB3b3JkR3JvdXApe1xuICAgICAgICAgICAgICByZXN1bHRzQXJlYS5maW5kKCd0YWJsZS5mdWxsLXNjb3JlJykuZmluZCgndGJvZHknKS5hcHBlbmQoJzx0cj48dGQ+JyArIHdvcmRHcm91cC5zcGFuaXNoICsgJzwvdGQ+PHRkPicgKyB3b3JkR3JvdXAuYW5zd2VyQXR0ZW1wdGVkICsgJzwvdGQ+PC90cj4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXN1bHRzQXJlYS5mYWRlSW4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFRPRE86IEZpbmQgYSB3YXkgdG8gZmFkZSBvdXQgYm90aCB0aGUgYC5mYWNlYCBkaXZzIGJ1dCBvbmx5IGhhdmUgdGhlIGFib3ZlIGNvZGUgcnVuIG9uY2Ugd2hlbiBib3RoIGFyZSBmaW5pc2hlZC5cbiAgICAgIHF1aXouZmluZChcIi5mYWNlLmJhY2tcIikuY2hpbGRyZW4oXCIuanMtZ2VuZXJhdGVkLXNlbnRlbmNlXCIpLmZhZGVPdXQoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIENyZWF0ZSBPYmplY3QgdGhhdCBob2xkcyBhbGwgdGhlIHdvcmRzIHRvIGJlIGFza2VkIG9uIGEgcGFydGljdWxhciBxdWl6XG5mdW5jdGlvbiBjcmVhdGVRdWl6KHdvcmRPYmplY3RzQXJyYXkpIHtcblxuICB2YXIgcXVpek91dHB1dCA9IHt9O1xuXG4gIC8vIExvb3AgdGhyb3VnaCBlYWNoIG9mIHRoZSB3b3JkT2JqZWN0cyBwcm92aWRlZCAoZXg6IG5vdW5zLCBhZGplY3RpdmVzLCBldGMuKVxuICAkLmVhY2god29yZE9iamVjdHNBcnJheSwgZnVuY3Rpb24oaW5kZXgsIHdvcmRPYmplY3Qpe1xuICAgIC8vY29uc29sZS5sb2cod29yZE9iamVjdCk7XG5cbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBXb3JkR3JvdXBcbiAgICAkLmVhY2god29yZE9iamVjdC52YWx1ZXMsIGZ1bmN0aW9uKHdvcmRLZXksIHdvcmRHcm91cCl7XG4gICAgICB3b3JkR3JvdXAua2V5ID0gd29yZEtleTtcbiAgICAgIHdvcmRHcm91cC53b3JkVHlwZSA9IHdvcmRPYmplY3Qud29yZFR5cGU7XG4gICAgICB3b3JkR3JvdXAuYW5zd2VyQ29ycmVjdCA9IGZhbHNlO1xuICAgICAgd29yZEdyb3VwLmFuc3dlckF0dGVtcHRlZCA9IDA7XG4gICAgICAvL2NvbnNvbGUubG9nKHdvcmRLZXksIHdvcmRHcm91cCk7XG5cbiAgICAgIC8vIEFkZCB0aGUgd29yZEdyb3VwIHRvIHRoZSBxdWl6T3V0cHV0IG9iamVjdFxuICAgICAgcXVpek91dHB1dFt3b3JkS2V5XSA9IHdvcmRHcm91cDtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJmaW5hbCBxdWl6T3V0cHV0XCIsIHF1aXpPdXRwdXQpO1xuICByZXR1cm4gcXVpek91dHB1dDtcbn1cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAvLyBGbGlwIG92ZXIgdGhlIGNhcmQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gaXQgdG8gcmV2ZWFsIHRoZSBhbnN3ZXJcbiAgJCgnLmZsaXAnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgLy9jb25zb2xlLmxvZygnY2FyZCBjbGlja2VkJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFuaW1hdGVDYXJkRmxpcCgpO1xuXG4gICAgLy8gRW5hYmxlIHRoZSByZXN1bHQgYnV0dG9ucyBub3cgdGhhdCB0aGUgcXVpeiBhbnN3ZXIgaGFzIGJlZW4gc2hvd25cbiAgICBkaXNhYmxlUmVzdWx0QnRucyhmYWxzZSk7XG4gIH0pO1xufSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICBpZiAoICQoIFwiLmpzLXF1aXotdmVyYi1jb25qdWdhdGlvblwiICkubGVuZ3RoICkge1xuXG4gICAgaGFzRmlyc3RRdWVzdGlvblJ1biA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ29uanVnYXRpb24oKSB7XG4gICAgICAvLyBHZXQgYSByYW5kb20gdmVyYiB0eXBlKGkuZS4gLWFyIHdvcmRzKSwgcmFuZG9tIHRlbnNlKGkuZS4gZnV0dXJlKSwgYW5kIGEgcmFuZG9tIGNvbmp1Z2F0aW9uKGkuZS4gZWxsb3MpXG4gICAgICB2YXIgcmFuZG9tV29yZFR5cGUgPSBnZXRSYW5kb21Qcm9wZXJ0eShzcGFuaXNoVGVuc2VzKTtcbiAgICAgIHZhciByYW5kb21UZW5zZSA9IGdldFJhbmRvbVByb3BlcnR5KHJhbmRvbVdvcmRUeXBlLnByb3BlcnR5VmFsdWUpO1xuICAgICAgdmFyIGFwcGVuZFRvID0gcmFuZG9tVGVuc2UucHJvcGVydHlWYWx1ZS5hcHBlbmRUbztcbiAgICAgIHZhciByYW5kb21Xb3JkID0gZ2V0UmFuZG9tV29yZChyYW5kb21Xb3JkVHlwZS5wcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKFwicmFuZG9tV29yZFR5cGU6IFwiLCByYW5kb21Xb3JkVHlwZSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwicmFuZG9tVGVuc2U6IFwiLCByYW5kb21UZW5zZSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwicmFuZG9tV29yZDogXCIsIHJhbmRvbVdvcmQpO1xuXG4gICAgICAvLyBHcmFiIGEgcmFuZG9tIHByb3BlcnR5IGZyb20gdGhlIHRlbnNlIGFuZCBpZiB0aGUgY29uanVnYXRpb24gdGhhdCB3YXMgY2hvc2VuIGlzIGFjdHVhbGx5IHRoZSBcImFwcGVuZFRvXCIgcHJvcGVydHksIHRoZW4gcnVuIHRoZSBmdW5jdGlvbiBhcyBtYW55IHRpbWVzIGFzIG5lY2Vzc2FyeSB0byBnZXQgYW4gYWN0dWFsIGNvbmp1Z2F0aW9uIHZhbHVlXG4gICAgICB2YXIgcmFuZG9tVGVuc2VDb25qdWdhdGlvbktleTtcbiAgICAgIGRvIHtcbiAgICAgICAgcmFuZG9tVGVuc2VDb25qdWdhdGlvbktleSA9IGdldFJhbmRvbVByb3BlcnR5KHJhbmRvbVRlbnNlLnByb3BlcnR5VmFsdWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmFuZG9tVGVuc2VDb25qdWdhdGlvbktleTogXCIsIHJhbmRvbVRlbnNlQ29uanVnYXRpb25LZXkpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHJhbmRvbVRlbnNlQ29uanVnYXRpb25LZXkucHJvcGVydHlOYW1lID09PSBcImFwcGVuZFRvXCIpO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKFwiUmFuZG9tIFdvcmQgVHlwZSBpbiBTcGFuaXNoIFRlbnNlczogXCIsIHJhbmRvbVdvcmRUeXBlKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJSYW5kb20gVGVuc2UgaW4gXCIgKyByYW5kb21Xb3JkVHlwZS5wcm9wZXJ0eU5hbWUsIHJhbmRvbVRlbnNlKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJSYW5kb20gVGVuc2UgQ29uanVnYXRpb24gS2V5IGluIFwiICsgcmFuZG9tVGVuc2UucHJvcGVydHlOYW1lLCByYW5kb21UZW5zZUNvbmp1Z2F0aW9uS2V5KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmVyYlR5cGU6IHJhbmRvbVdvcmRUeXBlLFxuICAgICAgICB3b3JkOiByYW5kb21Xb3JkLFxuICAgICAgICB0ZW5zZTogcmFuZG9tVGVuc2UsXG4gICAgICAgIGNvbmp1Z2F0aW9uOiByYW5kb21UZW5zZUNvbmp1Z2F0aW9uS2V5LFxuICAgICAgICBhcHBlbmRUbzogYXBwZW5kVG9cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tV29yZCh2ZXJiVHlwZSkge1xuICAgICAgLy8gR2V0IGEgcmFuZG9tIHdvcmQgYW5kIGl0cyBwcm9wZXJ0aWVzXG4gICAgICB2YXIgcmFuZG9tV29yZEdyb3VwID0gZ2V0UmFuZG9tUHJvcGVydHkodmVyYnNbdmVyYlR5cGVdKTtcblxuICAgICAgLy9jb25zb2xlLmxvZyhcIlJhbmRvbSBXb3JkIFR5cGUgaW4gU3BhbmlzaCBUZW5zZXM6IFwiLCByYW5kb21Xb3JkVHlwZSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiUmFuZG9tIFdvcmQgR3JvdXAgaW4gXCIgKyB2ZXJiVHlwZSwgcmFuZG9tV29yZEdyb3VwLnByb3BlcnR5VmFsdWUpO1xuXG4gICAgICAvLyBQcm9wZXJ0aWVzIG9mIFJhbmRvbSBXb3JkXG4gICAgICByZXR1cm4gcmFuZG9tV29yZEdyb3VwLnByb3BlcnR5VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVWZXJiQ29uanVnYXRpb25RdWl6UXVlc3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnUXVlc3Rpb24gR2VuZXJhdGVkJyk7XG5cbiAgICAgIHZhciByYW5kb21Db25qdWdhdGlvbjtcbiAgICAgIHZhciBlbmdsaXNoVHlwZTtcbiAgICAgIHZhciBwZXJzb247XG4gICAgICB2YXIgY29ubmVjdG9yU3RyaW5nO1xuICAgICAgdmFyIHBvc3NpYmxlUGVyc29ucztcbiAgICAgIHZhciBzcGFuaXNoRmlyc3RQYXJ0O1xuXG4gICAgICAvLyBHZXQgYSByYW5kb20gdmVyYiB0eXBlKGkuZS4gLWFyIHdvcmRzKSwgcmFuZG9tIHRlbnNlKGkuZS4gZnV0dXJlKSwgYW5kIGEgcmFuZG9tIGNvbmp1Z2F0aW9uKGkuZS4gZWxsb3MpXG4gICAgICByYW5kb21Db25qdWdhdGlvbiA9IGdldFJhbmRvbUNvbmp1Z2F0aW9uKCk7XG5cbiAgICAgIC8vY29uc29sZS5sb2coXCJyYW5kb21Db25qdWdhdGlvbjogXCIsIHJhbmRvbUNvbmp1Z2F0aW9uKTtcblxuICAgICAgLy8gQmFzZWQgb24gdGhlIFJhbmRvbSBDb25qdWdhdGlvbiB0aGF0IHdhcyBkZXRlcm1pbmVkIChpLmUuIHlvLCB0dSwgZWwsIG5vc290cm9zLCBvciBlbGxvcyksIGRldGVybWluZSB3aGljaCB2YXJpYXRpb24gdG8gdXNlIGlmIGFwcGxpY2FibGUgKGFzIGluIGVsIHdoaWNoIGNhbiBiZSBzdWJzdGl0dXRlZCB3aXRoIGVsbGEgb3IgdWQsIG9yIGFzIGluIGVsbG9zIHdoaWNoIGNhbiBiZSBzdWJzdGl0dXRlZCB3aXRoIGVsbGFzIG9yIHVkcylcbiAgICAgIHN3aXRjaChyYW5kb21Db25qdWdhdGlvbi5jb25qdWdhdGlvbi5wcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgY2FzZSBcInlvXCI6XG4gICAgICAgICAgcGVyc29uID0ge1xuICAgICAgICAgICAgZW5nbGlzaDogXCJJXCIsXG4gICAgICAgICAgICBzcGFuaXNoOiBcInlvXCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidHVcIjpcbiAgICAgICAgICBwZXJzb24gPSB7XG4gICAgICAgICAgICBlbmdsaXNoOiBcInlvdSAoaW5mb3JtYWwpXCIsXG4gICAgICAgICAgICBzcGFuaXNoOiBcInTDulwiXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImVsXCI6XG4gICAgICAgICAgcG9zc2libGVQZXJzb25zID0ge1xuICAgICAgICAgICAgZWw6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJoZVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcImVsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGxhOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwic2hlXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiZWxsYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdWQ6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJ5b3UgKGZvcm1hbClcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJ1ZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUm9zYToge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcIlJvc2FcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJSb3NhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBLZXZpbjoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcIktldmluXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiS2V2aW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBQaWNrIGEgcmFuZG9tIHBlcnNvbiB0byBkaXNwbGF5IGZvciB0aGUgcXVpeiAoZWwsIGVsbGEsIG9yIHVkKVxuICAgICAgICAgIHBlcnNvbiA9IGdldFJhbmRvbVByb3BlcnR5KHBvc3NpYmxlUGVyc29ucykucHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5vc290cm9zXCI6XG4gICAgICAgICAgcG9zc2libGVQZXJzb25zID0ge1xuICAgICAgICAgICAgbm9zb3Ryb3M6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJ3ZVwiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcIm5vc290cm9zXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5b3VfYW5kX2k6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJZb3UgYW5kIElcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJ0w7ogeSB5b1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFBpY2sgYSByYW5kb20gcGVyc29uIHRvIGRpc3BsYXkgZm9yIHRoZSBxdWl6IChub3NvdHJvcyBvciB0w7ogeSB5bylcbiAgICAgICAgICBwZXJzb24gPSBnZXRSYW5kb21Qcm9wZXJ0eShwb3NzaWJsZVBlcnNvbnMpLnByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlbGxvc1wiOlxuICAgICAgICAgIHBvc3NpYmxlUGVyc29ucyA9IHtcbiAgICAgICAgICAgIGVsbG9zOiB7XG4gICAgICAgICAgICAgIGVuZ2xpc2g6IFwidGhleSAobWFsZSBvciBtaXhlZClcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJlbGxvc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxsYXM6IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJ0aGV5IChmZW1hbGUpXCIsXG4gICAgICAgICAgICAgIHNwYW5pc2g6IFwiZWxsYXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVkczoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcInlvdSBhbGxcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJ1ZHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvdXJ0eW5pbmVyczoge1xuICAgICAgICAgICAgICBlbmdsaXNoOiBcIlRoZSA0OWVyc1wiLFxuICAgICAgICAgICAgICBzcGFuaXNoOiBcIkxvcyA0OWVyc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JvdXBfb2ZfY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgZW5nbGlzaDogXCJUaGUgY2hpbGRyZW4gKGZlbWFsZSlcIixcbiAgICAgICAgICAgICAgc3BhbmlzaDogXCJMYXMgbmnDsWFzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gUGljayBhIHJhbmRvbSBwZXJzb24gdG8gZGlzcGxheSBmb3IgdGhlIHF1aXogKGVsbG9zLCBlbGxhcywgb3IgdWRzKVxuICAgICAgICAgIHBlcnNvbiA9IGdldFJhbmRvbVByb3BlcnR5KHBvc3NpYmxlUGVyc29ucykucHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZW5nbGlzaFR5cGUgLSBUaGUgY29uanVnYXRpb24gdGhhdCBpcyB0byBiZSB1c2VkIHRoYXQgY29ycmVsYXRlcyB3aXRoIHRoZSBzcGFuaXNoIGNvbmp1Z2F0aW9uIC0gaS5lIGZvciB0aGUgd29yZCBcInRvIHJ1blwiLCB0aGUgMyB2YXJpYXRpb25zIGFyZSBydW4gKHByZXNlbnQpLCBydW5zIChwcmVzZW50M3JkUGVyc29uKSwgb3IgcmFuKHBhc3QpXG4gICAgICBpZiAocmFuZG9tQ29uanVnYXRpb24udGVuc2UucHJvcGVydHlOYW1lID09PSBcInByZXNlbnRcIiAmJiByYW5kb21Db25qdWdhdGlvbi5jb25qdWdhdGlvbi5wcm9wZXJ0eU5hbWUgPT09IFwiZWxcIikge1xuICAgICAgICBlbmdsaXNoVHlwZSA9IFwicHJlc2VudDNyZFBlcnNvblwiO1xuICAgICAgfSBlbHNlIGlmIChyYW5kb21Db25qdWdhdGlvbi50ZW5zZS5wcm9wZXJ0eU5hbWUgPT09IFwicGFzdFwiKSB7XG4gICAgICAgIGVuZ2xpc2hUeXBlID0gXCJwYXN0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmdsaXNoVHlwZSA9IFwicHJlc2VudFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25uZWN0b3JTdHJpbmcgLSBUaGUgY29ubmVjdG9yIHdvcmQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBxdWl6IGluIHRoZSBlbmdsaXNoIHNlbnRlbmNlIHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgdHJhbnNsYXRlZCAoT25seSBhcHBsaWVzIHRvIHRoZSBjb25kaXRpb25hbCwgZnV0dXJlLCBhbmQgaW1wZXJmZWN0IHRlbnNlcykuIGkuZS4gZm9yIHRoZSBzZW50ZW5jZSBKaW1teSB3aWxsIHJ1biAoZnV0dXJlKSwgSmltbXkgd291bGQgcnVuIChjb25kaXRpb25hbCksIG9yIEppbW15IHVzZWQgdG8gcnVuIChpbXBlcmZlY3QpXG4gICAgICBpZiAocmFuZG9tQ29uanVnYXRpb24udGVuc2UucHJvcGVydHlOYW1lID09PSBcImNvbmRpdGlvbmFsXCIpIHtcbiAgICAgICAgY29ubmVjdG9yU3RyaW5nID0gXCJ3b3VsZFwiO1xuICAgICAgfSBlbHNlIGlmIChyYW5kb21Db25qdWdhdGlvbi50ZW5zZS5wcm9wZXJ0eU5hbWUgPT09IFwiZnV0dXJlXCIpIHtcbiAgICAgICAgY29ubmVjdG9yU3RyaW5nID0gXCJ3aWxsXCI7XG4gICAgICB9IGVsc2UgaWYgKHJhbmRvbUNvbmp1Z2F0aW9uLnRlbnNlLnByb3BlcnR5TmFtZSA9PT0gXCJpbXBlcmZlY3RcIikge1xuICAgICAgICBjb25uZWN0b3JTdHJpbmcgPSBcInVzZWQgdG9cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbm5lY3RvclN0cmluZyA9IFwiIFwiO1xuICAgICAgfVxuXG4gICAgICBpZihjb25uZWN0b3JTdHJpbmcgIT09IFwiIFwiKSB7XG4gICAgICAgIGNvbm5lY3RvclN0cmluZyA9IFwiIFwiICsgY29ubmVjdG9yU3RyaW5nICsgXCIgXCI7XG4gICAgICB9XG5cbiAgICAgIC8vY29uc29sZS5sb2coXCJyYW5kb21Db25qdWdhdGlvbiBpbiBxdWl6IGJ1aWxkZXI6IFwiLCByYW5kb21Db25qdWdhdGlvbik7XG4gICAgICB2YXIgcmFuZG9tV29yZCA9ICdkc2RzZHNkJztcblxuICAgICAgaWYocmFuZG9tQ29uanVnYXRpb24uYXBwZW5kVG8gPT09IFwic3RlbVwiKSB7XG4gICAgICAgIHNwYW5pc2hGaXJzdFBhcnQgPSBnZXRTdGVtKHJhbmRvbUNvbmp1Z2F0aW9uLndvcmQuc3BhbmlzaC53b3JkKS5zdGVtO1xuICAgICAgfSBlbHNlIGlmKHJhbmRvbUNvbmp1Z2F0aW9uLmFwcGVuZFRvID09PSBcImluZmluaXRpdmVcIikge1xuICAgICAgICBzcGFuaXNoRmlyc3RQYXJ0ID0gcmFuZG9tQ29uanVnYXRpb24ud29yZC5zcGFuaXNoLndvcmQ7XG4gICAgICB9XG5cblxuICAgICAgLy9jb25zb2xlLmxvZyhcIlBlcnNvbjogXCIsIHBlcnNvbik7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiZW5nbGlzaFR5cGU6IFwiLCBlbmdsaXNoVHlwZSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiY29ubmVjdG9yU3RyaW5nOiBcIiwgY29ubmVjdG9yU3RyaW5nKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJyYW5kb21Xb3JkOiBcIiwgcmFuZG9tV29yZCk7XG4gICAgICAvL1xuICAgICAgLy9jb25zb2xlLmxvZyhcIlNlbnRlbmNlIHRvIG91dHB1dCBpbiBFbmdsaXNoOiBcIiwgcGVyc29uLmVuZ2xpc2ggKyBjb25uZWN0b3JTdHJpbmcgKyByYW5kb21Xb3JkWydlbmdsaXNoJ11bZW5nbGlzaFR5cGVdKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJTZW50ZW5jZSB0byBvdXRwdXQgaW4gU3BhbmlzaDogXCIsIHBlcnNvbi5zcGFuaXNoICsgXCIgXCIgKyBzcGFuaXNoRmlyc3RQYXJ0ICsgcmFuZG9tQ29uanVnYXRpb24uY29uanVnYXRpb24ucHJvcGVydHlWYWx1ZSk7XG5cblxuICAgICAgLy8gUmV0dXJuaW5nIHNlbnRlbmNlIHRvIGJlIGRpc3BsYXllZCAoaS5lLiBTaGUgd2lsbCBlYXQpIGluIGJvdGggbGFuZ3VhZ2VzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmdsaXNoOiBwZXJzb24uZW5nbGlzaCArIGNvbm5lY3RvclN0cmluZyArIHJhbmRvbUNvbmp1Z2F0aW9uLndvcmRbJ2VuZ2xpc2gnXVtlbmdsaXNoVHlwZV0sXG4gICAgICAgIHNwYW5pc2g6IHBlcnNvbi5zcGFuaXNoICsgXCIgXCIgKyBzcGFuaXNoRmlyc3RQYXJ0ICsgcmFuZG9tQ29uanVnYXRpb24uY29uanVnYXRpb24ucHJvcGVydHlWYWx1ZVxuICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG4gICAgLy8gQ3JlYXRlIE9iamVjdCB0byBrZWVwIHRyYWNrIG9mIHF1ZXN0aW9ucyB0aGF0IHdlcmUgYWxyZWFkeSBhc2tlZCBhbmQgaWYgdGhlIHVzZXIgYWxyZWFkeSBnb3QgdGhlbSByaWdodCBzbyB0aGV5IGRvbid0IGFzayB0aGVtIGFnYWluXG4gICAgdmFyIHF1aXpTY29yZSA9IHt9O1xuICAgIHZhciBxdWl6UXVlc3Rpb247XG5cbiAgICAkLmVhY2goc3BhbmlzaFRlbnNlcywgZnVuY3Rpb24gKHZlcmJUeXBlLCB0ZW5zZXMpIHtcbiAgICAgICQuZWFjaCh0ZW5zZXMsIGZ1bmN0aW9uICh0ZW5zZSwgdGVuc2VDb25qdWdhdGlvbnMpIHtcbiAgICAgICAgJC5lYWNoKHRlbnNlQ29uanVnYXRpb25zLCBmdW5jdGlvbiAodGVuc2VDb25qdWdhdGlvbktleSwgdGVuc2VDb25qdWdhdGlvblZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRlbnNlQ29uanVnYXRpb25LZXkgPT09IFwiYXBwZW5kVG9cIikgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgIGNyZWF0ZU5lc3RlZE9iamVjdCggcXVpelNjb3JlLCBbdmVyYlR5cGUsIHRlbnNlLCB0ZW5zZUNvbmp1Z2F0aW9uS2V5XSwgZmFsc2UgKTtcbiAgICAgICAgICAvLyBFeGFtcGxlIG91dHB1dDogcXVpelNjb3JlLmFyV29yZHMucHJlc2VudC5lbGxvczogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vY29uc29sZS5sb2coXCJxdWl6U2NvcmU6XCIsIHF1aXpTY29yZSk7XG5cblxuXG4gICAgLy8gUG9wdWxhdGUgUXVpeiBvbiBwYWdlIGxvYWRcbiAgICBwb3B1bGF0ZVF1aXpBcmVhKGdlbmVyYXRlVmVyYkNvbmp1Z2F0aW9uUXVpelF1ZXN0aW9uKCkpO1xuXG4gICAgLy8gQWN0aXZhdGUgdGhlIGJ1dHRvbiBmdW5jdGlvbmFsaXR5IGFuZCBoYXZlIGl0IGxvYWQgaW4gYSBuZXcgdmVyYiBjb25qdWdhdGlvbiBzZXRcbiAgICBhY3RpdmF0ZVF1aXooZ2VuZXJhdGVWZXJiQ29uanVnYXRpb25RdWl6UXVlc3Rpb24pO1xuICB9XG5cblxuXG5cblxuXG5cblxuXG59KTtcblxuXG5cbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblxuXG4gIGlmICggJCggXCIuanMtcXVpei13b3JkLXJldGVudGlvblwiICkubGVuZ3RoICkge1xuICAgIGhhc0ZpcnN0UXVlc3Rpb25SdW4gPSBmYWxzZTtcblxuICAgIHZhciBxdWFudGl0eVR5cGU7XG4gICAgdmFyIHdvcmRUaGVFbmdsaXNoO1xuICAgIHZhciB3b3JkQUVuZ2xpc2g7XG4gICAgdmFyIHdvcmRUaGVTcGFuaXNoO1xuICAgIHZhciB3b3JkQVNwYW5pc2g7XG4gICAgdmFyIGxlYWRXb3JkRW5nbGlzaDtcbiAgICB2YXIgbGVhZFdvcmRTcGFuaXNoO1xuXG4gICAgdmFyIGVuZ2xpc2hPdXRwdXQ7XG4gICAgdmFyIHNwYW5pc2hPdXRwdXQ7XG5cbiAgICAvL3F1aXpXb3Jkc1RvSW5jbHVkZTogW25vdW5zLCBhZGplY3RpdmVzLCB3b3Jkc11cblxuICAgIHZhciBxdWl6T3B0aW9ucyA9IHtcbiAgICAgIG9ubHlTaG93VW5hbnN3ZXJlZFF1ZXN0aW9uczogdHJ1ZSxcbiAgICAgIHF1aXpXb3Jkc1RvSW5jbHVkZTogW25vdW5zLCBhZGplY3RpdmVzLCB3b3Jkc10sXG4gICAgICBmdW5jdGlvblRvR2VuZXJhdGVRdWl6UXVlc3Rpb246IGdlbmVyYXRlV29yZFJldGVudGlvblF1aXpRdWVzdGlvblxuICAgIH07XG5cbiAgICB2YXIgcXVpeldvcmRzID0gY3JlYXRlUXVpeihxdWl6T3B0aW9ucy5xdWl6V29yZHNUb0luY2x1ZGUpO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVXb3JkUmV0ZW50aW9uUXVpelF1ZXN0aW9uKCkge1xuICAgICAgLy9jb25zb2xlLmxvZygnUXVlc3Rpb24gR2VuZXJhdGVkJyk7XG5cbiAgICAgIC8vIEdldCB0aGUgd29yZCBncm91cCB3aGljaCBkZWZpbmVzIHRoZSBlbmdsaXNoIGFuZCBzcGFuaXNoIHZlcnNpb25zIG9mIHRoZSB3b3JkIGluIHNpbmd1bGFyIGFuZCBwbHVyYWwgZm9ybSwgYXMgd2VsbCBhcyB0aGUgbm91biBnZW5kZXJcblxuICAgICAgdmFyIHJhbmRvbVdvcmRHcm91cCA9IGdldFJhbmRvbVByb3BlcnR5KHF1aXpXb3JkcylbJ3Byb3BlcnR5VmFsdWUnXTtcbiAgICAgIGNvbnNvbGUubG9nKCdyYW5kb21Xb3JkR3JvdXAnLCByYW5kb21Xb3JkR3JvdXApO1xuXG4gICAgICBsYXN0V29yZEdyb3VwID0gcmFuZG9tV29yZEdyb3VwO1xuICAgICAgY29uc29sZS5sb2coXCJOZXcgbGFzdFdvcmRHcm91cDogXCIsIGxhc3RXb3JkR3JvdXApO1xuICAgICAgLy9FeGFtcGxlIE91dHB1dDpcbiAgICAgIC8ve1xuICAgICAgLy8gIGVuZ2xpc2g6IHtcbiAgICAgIC8vICAgIHBsdXJhbDogXCJmYXRoZXJzXCIsXG4gICAgICAvLyAgICAgIHNpbmd1bGFyOiBcImZhdGhlclwiXG4gICAgICAvLyAgfSxcbiAgICAgIC8vICBzcGFuaXNoOiB7XG4gICAgICAvLyAgICBwbHVyYWw6IFwicGFkcmVzXCIsXG4gICAgICAvLyAgICAgIHNpbmd1bGFyOiBcInBhZHJlXCJcbiAgICAgIC8vICB9LFxuICAgICAgLy8gIGdlbmRlcjogXCJtYWxlXCJcbiAgICAgIC8vfVxuXG4gICAgICBpZihyYW5kb21Xb3JkR3JvdXAud29yZFR5cGUgIT09IFwibm91blwiKSB7XG4gICAgICAgIGVuZ2xpc2hPdXRwdXQgPSByYW5kb21Xb3JkR3JvdXAuZW5nbGlzaDtcbiAgICAgICAgc3BhbmlzaE91dHB1dCA9IHJhbmRvbVdvcmRHcm91cC5zcGFuaXNoO1xuICAgICAgfVxuXG4gICAgICBpZihyYW5kb21Xb3JkR3JvdXAud29yZFR5cGUgPT09IFwibm91blwiKSB7XG4gICAgICAgIHZhciByYW5kb21Xb3JkR2VuZGVyID0gcmFuZG9tV29yZEdyb3VwWydnZW5kZXInXTtcblxuICAgICAgICAvLyBJZiB0aGUgcGx1cmFsIHByb3BlcnR5IGlzIG1pc3NpbmcsIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgcGx1cmFsIGZvcm0gb2YgdGhlIG5vdW4gaXMgc2ltcGx5IHRoZSBzaW5ndWxhciB2ZXJzaW9uIHdpdGggYW4gXCJzXCIgYXQgdGhlIGVuZC4gRXg6IFwibmnDsW9cIiBhbmQgXCJuacOxb3NcIiAmIFwiYm95XCIgYW5kIFwiYm95c1wiXG4gICAgICAgIGlmKCFyYW5kb21Xb3JkR3JvdXAuZW5nbGlzaC5oYXNPd25Qcm9wZXJ0eShcInBsdXJhbFwiKSkge1xuICAgICAgICAgIHJhbmRvbVdvcmRHcm91cC5lbmdsaXNoLnBsdXJhbCA9IHJhbmRvbVdvcmRHcm91cC5lbmdsaXNoLnNpbmd1bGFyICsgXCJzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgcGx1cmFsIHByb3BlcnR5IGlzIG1pc3NpbmcsIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgcGx1cmFsIGZvcm0gb2YgdGhlIG5vdW4gaXMgc2ltcGx5IHRoZSBzaW5ndWxhciB2ZXJzaW9uIHdpdGggYW4gXCJzXCIgYXQgdGhlIGVuZC4gRXg6IFwibmnDsW9cIiBhbmQgXCJuacOxb3NcIiAmIFwiYm95XCIgYW5kIFwiYm95c1wiXG4gICAgICAgIGlmKCFyYW5kb21Xb3JkR3JvdXAuc3BhbmlzaC5oYXNPd25Qcm9wZXJ0eShcInBsdXJhbFwiKSkge1xuICAgICAgICAgIHJhbmRvbVdvcmRHcm91cC5zcGFuaXNoLnBsdXJhbCA9IHJhbmRvbVdvcmRHcm91cC5zcGFuaXNoLnNpbmd1bGFyICsgXCJzXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0UmFuZG9tSW50KDAsIDEpID09PSAxKSB7XG4gICAgICAgICAgcXVhbnRpdHlUeXBlID0gXCJzaW5ndWxhclwiO1xuXG4gICAgICAgICAgaWYgKHJhbmRvbVdvcmRHZW5kZXIgPT09IFwibWFsZVwiKSB7XG4gICAgICAgICAgICB3b3JkVGhlU3BhbmlzaCA9IFwiZWxcIjtcbiAgICAgICAgICAgIHdvcmRBU3BhbmlzaCA9IFwidW5cIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbVdvcmRHZW5kZXIgPT09IFwiZmVtYWxlXCIpIHtcbiAgICAgICAgICAgIHdvcmRUaGVTcGFuaXNoID0gXCJsYVwiO1xuICAgICAgICAgICAgd29yZEFTcGFuaXNoID0gXCJ1bmFcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3b3JkVGhlRW5nbGlzaCA9IFwidGhlXCI7XG4gICAgICAgICAgd29yZEFFbmdsaXNoID0gXCJhXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVhbnRpdHlUeXBlID0gXCJwbHVyYWxcIjtcblxuICAgICAgICAgIGlmIChyYW5kb21Xb3JkR2VuZGVyID09PSBcIm1hbGVcIikge1xuICAgICAgICAgICAgd29yZFRoZVNwYW5pc2ggPSBcImxvc1wiO1xuICAgICAgICAgICAgd29yZEFTcGFuaXNoID0gXCJ1bm9zXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21Xb3JkR2VuZGVyID09PSBcImZlbWFsZVwiKSB7XG4gICAgICAgICAgICB3b3JkVGhlU3BhbmlzaCA9IFwibGFzXCI7XG4gICAgICAgICAgICB3b3JkQVNwYW5pc2ggPSBcInVuYXNcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3b3JkVGhlRW5nbGlzaCA9IFwidGhlXCI7XG4gICAgICAgICAgd29yZEFFbmdsaXNoID0gXCJzb21lXCI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmFuZG9tV29yZEVuZ2xpc2ggPSByYW5kb21Xb3JkR3JvdXBbJ2VuZ2xpc2gnXVtxdWFudGl0eVR5cGVdO1xuICAgICAgICB2YXIgcmFuZG9tV29yZFNwYW5pc2ggPSByYW5kb21Xb3JkR3JvdXBbJ3NwYW5pc2gnXVtxdWFudGl0eVR5cGVdO1xuXG4gICAgICAgIC8vIFJhbmRvbWx5IHNob3cgZWl0aGVyIHRoZSBcInRoZVwiIG9yIFwiYVwiIGxlYWQgd29yZFxuICAgICAgICBpZiAoZ2V0UmFuZG9tSW50KDAsIDEpID09PSAxKSB7XG4gICAgICAgICAgbGVhZFdvcmRFbmdsaXNoID0gd29yZFRoZUVuZ2xpc2g7XG4gICAgICAgICAgbGVhZFdvcmRTcGFuaXNoID0gd29yZFRoZVNwYW5pc2g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVhZFdvcmRFbmdsaXNoID0gd29yZEFFbmdsaXNoO1xuICAgICAgICAgIGxlYWRXb3JkU3BhbmlzaCA9IHdvcmRBU3BhbmlzaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuZ2xpc2hPdXRwdXQgPSBsZWFkV29yZEVuZ2xpc2ggKyBcIiBcIiArIHJhbmRvbVdvcmRFbmdsaXNoO1xuICAgICAgICBzcGFuaXNoT3V0cHV0ID0gbGVhZFdvcmRTcGFuaXNoICsgXCIgXCIgKyByYW5kb21Xb3JkU3BhbmlzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5nbGlzaDogZW5nbGlzaE91dHB1dCxcbiAgICAgICAgc3BhbmlzaDogc3BhbmlzaE91dHB1dFxuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvLyBBY3RpdmF0ZSB0aGUgcXVpeiB3aXRoIHRoZSBjaG9zZW4gb3B0aW9uc1xuICAgIGFjdGl2YXRlUXVpeihxdWl6T3B0aW9ucywgcXVpeldvcmRzKTtcbiAgfVxuXG59KTtcblxuXG5cbiIsIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgaWYgKCAkKCBcIi5qcy13b3Jkc1wiICkubGVuZ3RoICkge1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb25qdWdhdGlvblRhYmxlKHdvcmQsIHRlbnNlKSB7XG4gICAgICB2YXIgbGFzdDIgPSBnZXRTdGVtKHdvcmQpLmxhc3QyO1xuICAgICAgdmFyIHN0ZW0gPSBnZXRTdGVtKHdvcmQpLnN0ZW07XG5cbiAgICAgIHZhciBjdXJyZW50VGVuc2UgPSBzcGFuaXNoVGVuc2VzW2xhc3QyICsgXCJXb3Jkc1wiXVt0ZW5zZV07XG4gICAgICB2YXIgYXBwZW5kVG8gPSBjdXJyZW50VGVuc2UuYXBwZW5kVG87XG5cbiAgICAgIGZ1bmN0aW9uIGNvbmp1Z2F0ZVdvcmQoY29uanVnYXRpb25QZXJzb24pIHtcbiAgICAgICAgaWYgKGFwcGVuZFRvID09PSBcInN0ZW1cIikge1xuICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdhcHBlbmQtdG8nPlwiICsgc3RlbSArIFwiPC9zcGFuPlwiICsgY3VycmVudFRlbnNlW2Nvbmp1Z2F0aW9uUGVyc29uXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nYXBwZW5kLXRvJz5cIiArIHdvcmQgKyBcIjwvc3Bhbj5cIiArIGN1cnJlbnRUZW5zZVtjb25qdWdhdGlvblBlcnNvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHlvID0gY29uanVnYXRlV29yZChcInlvXCIpO1xuICAgICAgdmFyIHR1ID0gY29uanVnYXRlV29yZChcInR1XCIpO1xuICAgICAgdmFyIGVsID0gY29uanVnYXRlV29yZChcImVsXCIpO1xuICAgICAgdmFyIG5vc290cm9zID0gY29uanVnYXRlV29yZChcIm5vc290cm9zXCIpO1xuICAgICAgdmFyIGVsbG9zID0gY29uanVnYXRlV29yZChcImVsbG9zXCIpO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKFwid29yZDogXCIsIHdvcmQpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcImxhc3QyOiBcIiwgbGFzdDIpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInN0ZW06IFwiLCBzdGVtKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRUbzogXCIsIGFwcGVuZFRvKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ5bzogXCIsIHlvKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0dTogXCIsIHR1KTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJlbDogXCIsIGVsKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJub3NvdHJvczogXCIsIG5vc290cm9zKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJlbGxvczogXCIsIGVsbG9zKTtcblxuICAgICAgdmFyIGdlbmVyYXRlZFRhYmxlID0gXCI8aDM+XCIgKyB0ZW5zZSArIFwiIFRlbnNlPC9oMz5cIjtcbiAgICAgIGdlbmVyYXRlZFRhYmxlICs9IFwiPHRhYmxlPlwiICtcbiAgICAgICAgXCI8dHI+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi1wZXJzb24nPnlvPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgeW8gKyBcIjwvdGQ+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi1wZXJzb24nPm5vc290cm9zPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgbm9zb3Ryb3MgKyBcIjwvdGQ+PC90cj5cIiArXG4gICAgICAgIFwiPHRyPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz50w7o8L3RkPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tdGVybSc+XCIgKyB0dSArIFwiPC90ZD48dGQgY2xhc3M9J2Rpc2FibGVkJz48L3RkPjx0ZCBjbGFzcz0nZGlzYWJsZWQnPjwvdGQ+PC90cj5cIiArXG4gICAgICAgIFwiPHRyPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz5lbC9lbGxhL1VkLjwvdGQ+PHRkIGNsYXNzPSdjb25qdWdhdGlvbi10ZXJtJz5cIiArIGVsICsgXCI8L3RkPjx0ZCBjbGFzcz0nY29uanVnYXRpb24tcGVyc29uJz5lbGxvcy9lbGxhcy9VZHMuPC90ZD48dGQgY2xhc3M9J2Nvbmp1Z2F0aW9uLXRlcm0nPlwiICsgZWxsb3MgKyBcIjwvdGQ+PC90cj5cIiArXG4gICAgICAgIFwiPC90YWJsZT5cIjtcblxuICAgICAgcmV0dXJuIGdlbmVyYXRlZFRhYmxlO1xuICAgIH1cblxuICAgIC8vZ2VuZXJhdGVDb25qdWdhdGlvblRhYmxlKFwiYXByZW5kZXJcIiwgXCJwYXN0XCIpO1xuXG5cblxuICAgIC8vIEVtcHR5IHRoZSBjb250YWluZXIgZm9yIHRoZSBjb25qdWdhdGlvbiB3b3JkcyB0YWJsZVxuICAgICQoXCIuanMtY29uanVnYXRpb24td29yZHMtY2hhcnRcIikuaHRtbChcIlwiKTtcblxuICAgIC8vIENyZWF0ZSBhIHRhYmxlIG9mIHdvcmRzXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSB2ZXJicyBvYmplY3RcbiAgICAkLmVhY2godmVyYnMsIGZ1bmN0aW9uICh2ZXJiVHlwZSwgd29yZHMpIHtcbiAgICAgIHZhciB3b3Jkc1RhYmxlID0gXCI8dGFibGUgY2xhc3M9J3dvcmRzJz5cIjtcblxuICAgICAgLy9jb25zb2xlLmxvZyh2ZXJiVHlwZSArIFwiOiBcIiArIHdvcmRzKTtcbiAgICAgIC8vIEZvciBlYWNoIHRhYmxlIGNvbHVtbiwgdXNlIHRoZSB2ZXJiVHlwZSAoaS5lLiBhcldvcmRzLCBlcldvcmRzLCBvciBpcldvcmRzKSBhcyB0aGUgaGVhZGVyXG4gICAgICB3b3Jkc1RhYmxlICs9IFwiPHRyPjx0aD5cIiArIHZlcmJUeXBlICsgXCI8L3RoPlwiO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCB3b3JkIGZvciB0aGUgY3VycmVudCB2ZXJiVHlwZVxuICAgICAgJC5lYWNoKHdvcmRzLCBmdW5jdGlvbiAoaW5kZXgsIHdvcmQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbmRleCArIFwiOiBcIiArIHdvcmQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiU3BhbmlzaCBXb3JkOiBcIiwgd29yZC5zcGFuaXNoLndvcmQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyByb3cgdGhhdCBjb250YWlucyB0aGUgd29yZCBpbiBzcGFuaXNoIHdpdGggYSBsaW5rIHRvIG9wZW4gYSBtb2RhbCB3aW5kb3cgdGhhdCBkaXNwbGF5cyBhbGwgdGhlIGRpZmZlcmVudCBjb25qdWdhdGlvbiB0YWJsZXMgZm9yIHRoYXQgc3BlY2lmaWMgd29yZFxuICAgICAgICB3b3Jkc1RhYmxlICs9IFwiPHRyPjx0ZD48YSBjbGFzcz0nZmFuY3lib3gnIGhyZWY9JyN3b3JkLWRldGFpbHMnPlwiICsgd29yZC5zcGFuaXNoLndvcmQgKyBcIjwvYT48L3RkPlwiO1xuICAgICAgfSk7XG5cbiAgICAgIHdvcmRzVGFibGUgKz0gXCI8L3RhYmxlPlwiO1xuXG4gICAgICAvLyBBZGQgdGhlIG5ld2x5IGNyZWF0ZWQgdGFibGUgdG8gdGhlIGNvbmp1Z2F0aW9uIHdvcmRzIHRhYmxlIGNvbnRhaW5lclxuICAgICAgJChcIi5qcy1jb25qdWdhdGlvbi13b3Jkcy1jaGFydFwiKS5hcHBlbmQod29yZHNUYWJsZSk7XG5cbiAgICB9KTtcblxuICAgIC8vJCgnLmZhbmN5Ym94JykuZmFuY3lib3goKTtcblxuXG4gICAgLy8gTG9hZCB0aGUgd29yZCBkZXRhaWxzIGRpdiB3aXRoIHRoZSBjb3JyZWN0IGNvbnRlbnQgd2hlbiBhIHdvcmQgaXMgY2xpY2tlZFxuICAgIC8vIEN1cnJlbnRseSB0aGlzIGlzIGxvb3BpbmcgdGhyb3VnaCBhbGwgdGhlIHdvcmRzIGF2YWlsYWJsZSBpbiBvcmRlciB0byBmaW5kIGEgbWF0Y2ggdG8gdGhlIHdvcmQgdGhhdCB3YXMgY2xpY2tlZCBhbmQgd2lsbCB0aGVuIGxvYWQgdXAgdGhlIGNvcnJlY3QgaW5mbyBpbnRvIHRoZSBtb2RhbCB3aW5kb3cgYW5kIG9wZW5zIGl0XG4gICAgLy8gVE9ETzogVXNlIGEgZGVlcCBnZXQgZnVuY3Rpb25hbGl0eSB0byBmaW5kIHRoZSBvYmplY3QgZm9yIHRoZSB3b3JkIGluc3RlYWQgb2YgbG9vcGluZyB0aHJvdWdoIGV2ZXJ5dGhpbmdcbiAgICAkKCdhW2hyZWY9XCIjd29yZC1kZXRhaWxzXCJdJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIHNwYW5pc2hXb3JkQ2xpY2tlZCA9ICQodGhpcykudGV4dCgpO1xuXG4gICAgICAkLmVhY2godmVyYnMsIGZ1bmN0aW9uICh2ZXJiVHlwZSwgd29yZHMpIHtcbiAgICAgICAgJC5lYWNoKHdvcmRzLCBmdW5jdGlvbiAoaW5kZXgsIHdvcmQpIHtcbiAgICAgICAgICBpZiAod29yZC5zcGFuaXNoLndvcmQgPT09IHNwYW5pc2hXb3JkQ2xpY2tlZCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzcGFuaXNoV29yZENsaWNrZWQgKyAnIHdhcyBmb3VuZCcpO1xuICAgICAgICAgICAgJChcIiN3b3JkLWRldGFpbHNcIikuY2hpbGRyZW4oXCJoMlwiKS5odG1sKHdvcmQuc3BhbmlzaC53b3JkICsgXCIgLSA8c3BhbiBjbGFzcz0nZW5nbGlzaC1kZWZpbml0aW9uJz5cIiArIHdvcmQuZW5nbGlzaC5kZWZpbml0aW9uICsgXCI8L3NwYW4+XCIpO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHNwYW5pc2hUZW5zZXMgb2JqZWN0IHRvIGdldCBlYWNoIGNvbmp1Z2F0aW9uIHRlbnNlIHN1cHBvcnRlZCBmb3IgdGhlIGN1cnJlbnQgdmVyYiB0eXBlIChpLmUuIC1hciB3b3JkcykgYW5kIHRoZW4gY3JlYXRlIGNvbmp1Z2F0aW9uIHRhYmxlcyBmb3IgdGhlIGN1cnJlbnQgd29yZCBhbmQgdGhlIHN1cHBvcnRlZCB0ZW5zZXNcbiAgICAgICAgICAgIHZhciB0ZW5zZVRhYmxlcyA9IFwiXCI7XG4gICAgICAgICAgICAkLmVhY2goc3BhbmlzaFRlbnNlc1t2ZXJiVHlwZV0sIGZ1bmN0aW9uICh0ZW5zZSwgcHJvcGVydGllc09iamVjdCkge1xuICAgICAgICAgICAgICB0ZW5zZVRhYmxlcyArPSBnZW5lcmF0ZUNvbmp1Z2F0aW9uVGFibGUod29yZC5zcGFuaXNoLndvcmQsIHRlbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmpzLWNvbmp1Z2F0aW9uLXRhYmxlc1wiKS5odG1sKHRlbnNlVGFibGVzKTtcblxuICAgICAgICAgICAgLy8gQnJlYWsgb3V0IG9mICQuZWFjaCBsb29wIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3ODQ3ODAvaG93LXRvLWJyZWFrLW91dC1vZi1qcXVlcnktZWFjaC1sb29wKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIH0pLmZhbmN5Ym94KCk7XG4gIH1cblxufSk7IiwiLy8gRnJvbTogaHR0cDovL2NvZGVwZW4uaW8vemVja2R1ZGUvcGVuL0VLQkp5UlxuXG4vLyBvbiBwYWdlIGxvYWQuLi5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBtb3ZlUHJvZ3Jlc3NCYXIoKTtcbn0pO1xuXG4vLyBvbiBicm93c2VyIHJlc2l6ZS4uLlxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgbW92ZVByb2dyZXNzQmFyKCk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ3Byb2dyZXNzLWNoYW5nZWQnLCBmdW5jdGlvbihldmVudCwgbnVtV29yZHNBbnN3ZXJlZENvcnJlY3QsIGNvcnJlY3RQZXJjZW50YWdlKSB7XG4gIC8vY29uc29sZS5sb2coJ251bVdvcmRzQW5zd2VyZWRDb3JyZWN0OiAnLCBudW1Xb3Jkc0Fuc3dlcmVkQ29ycmVjdCk7XG4gIC8vY29uc29sZS5sb2coJ2NvcnJlY3RQZXJjZW50YWdlOiAnLCBjb3JyZWN0UGVyY2VudGFnZSk7XG5cbiAgLy8gVXBkYXRlIHRoZSBwcm9ncmVzcyBwZXJjZW50YWdlIG9uIHRoZSBlbGVtZW50XG4gICQoJy5wcm9ncmVzcy13cmFwJykuZGF0YSgncHJvZ3Jlc3MtcGVyY2VudCcsIGNvcnJlY3RQZXJjZW50YWdlKTtcbiAgbW92ZVByb2dyZXNzQmFyKCk7XG5cbiAgLy8gVXBkYXRlIHRoZSBzY29yZSBpbiB0aGUgcHJvZ3Jlc3MgYmFyXG4gICQoJy5wcm9ncmVzcycpLmZpbmQoJy5udW0tYW5zd2VyZWQtY29ycmVjdCcpLnRleHQobnVtV29yZHNBbnN3ZXJlZENvcnJlY3QpO1xufSk7XG5cbi8vIFNJR05BVFVSRSBQUk9HUkVTU1xuZnVuY3Rpb24gbW92ZVByb2dyZXNzQmFyKCkge1xuICAvL2NvbnNvbGUubG9nKFwibW92ZVByb2dyZXNzQmFyXCIpO1xuICB2YXIgZ2V0UGVyY2VudCA9ICgkKCcucHJvZ3Jlc3Mtd3JhcCcpLmRhdGEoJ3Byb2dyZXNzLXBlcmNlbnQnKSAvIDEwMCk7XG4gIHZhciBnZXRQcm9ncmVzc1dyYXBXaWR0aCA9ICQoJy5wcm9ncmVzcy13cmFwJykud2lkdGgoKTtcbiAgdmFyIHByb2dyZXNzVG90YWwgPSBnZXRQZXJjZW50ICogZ2V0UHJvZ3Jlc3NXcmFwV2lkdGg7XG4gIHZhciBhbmltYXRpb25MZW5ndGggPSAyNTAwO1xuXG4gIC8vY29uc29sZS5sb2coXCJnZXRQZXJjZW50OiBcIiwgZ2V0UGVyY2VudCk7XG5cbiAgLy8gb24gcGFnZSBsb2FkLCBhbmltYXRlIHBlcmNlbnRhZ2UgYmFyIHRvIGRhdGEgcGVyY2VudGFnZSBsZW5ndGhcbiAgLy8gLnN0b3AoKSB1c2VkIHRvIHByZXZlbnQgYW5pbWF0aW9uIHF1ZXVlaW5nXG4gICQoJy5wcm9ncmVzcy1iYXInKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgbGVmdDogcHJvZ3Jlc3NUb3RhbFxuICB9LCBhbmltYXRpb25MZW5ndGgpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
