var conjugationWords = {
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

$(document).ready(function(){
  if ( $( ".js-words" ).length ) {

    // Empty the container for the conjugation words table
    $(".js-conjugation-words-chart").html("");

    // Create a table of words
    // Loop through the conjugationWords object
    $.each(conjugationWords, function (wordType, words) {
      var wordsTable = "<table class='words'>";

      //console.log(wordType + ": " + words);
      // For each table column, use the wordType (i.e. arWords, erWords, or irWords) as the header
      wordsTable += "<tr><th>" + wordType + "</th>";

      // Loop through each word for the current wordType
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

      $.each(conjugationWords, function (wordType, words) {
        $.each(words, function (index, word) {
          if (word.spanish.word === spanishWordClicked) {
            //console.log(spanishWordClicked + ' was found');
            $("#word-details").children("h2").html(word.spanish.word + " - <span class='english-definition'>" + word.english.definition + "</span>");

            // Loop through the spanishTenses object to get each conjugation tense supported for the current word type (i.e. -ar words) and then create conjugation tables for the current word and the supported tenses
            var tenseTables = "";
            $.each(spanishTenses[wordType], function (tense, propertiesObject) {
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


  if ( $( ".js-quiz" ).length ) {

    // Create Object to keep track of questions that were already asked and if the user already got them right so they don't ask them again
    var quizScore = {};
    var quizQuestion;

    $.each(spanishTenses, function (wordType, tenses) {
      $.each(tenses, function (tense, tenseConjugations) {
        $.each(tenseConjugations, function (tenseConjugationKey, tenseConjugationValue) {
          if (tenseConjugationKey === "appendTo") { return true; }
          createNestedObject( quizScore, [wordType, tense, tenseConjugationKey], false );
          // Example output: quizScore.arWords.present.ellos: false
        });
      });
    });

    //console.log("quizScore:", quizScore);

    // From: http://www.regextester.com/?fam=94730
    // From: http://stackoverflow.com/a/15747789/83916
    function wrapParenthesisContent(string, tag, className) {
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

      console.log("flip card begin");

      // Flip the card
      $("#quiz").find(".card").toggleClass("flipped");

      // Run a callback when the CSS animation has finished if it has been provided as an argument
      if(callback) {
        console.log("A callback was provided");

        // Wait for the flipping animation to complete before running callback
        $("#quiz").one(transitionEvent, ".card", function (event) {
          console.log("flip card end");
          callback();
        });
      }

    }

    var hasFirstQuestionRun = false;

    function populateQuizArea() {
      console.log("Populate Quiz Area");

      var quizQuestion = generateQuizQuestion();
      var quiz = $("#quiz");

      // Change out the question being shown
      console.log("Fade in the content on the cards");
      quiz.find(".face.front").children(".js-generated-sentence").html(wrapParenthesisContent(quizQuestion.english, 'small')).fadeIn();
      quiz.find(".face.back").children(".js-generated-sentence").html(quizQuestion.spanish).fadeIn();

      // If this is the first time the quiz has been populated, save that status so we can flip the card at random to display different sides before loading in the sentence
      if(!hasFirstQuestionRun) { hasFirstQuestionRun = true; }
    }

    // Flip over the card when the user clicks on it to reveal the answer
    $('.flip').click(function(e) {
      console.log('card clicked');
      e.preventDefault();
      animateCardFlip();

      // Enable the result buttons now that the quiz answer has been shown
      disableResultBtns(false);
    });

    function disableResultBtns(enableStatus) {
      $(".js-result-btn").prop("disabled", enableStatus);
    }

    // Populate Quiz on page load
    populateQuizArea();

    // TODO: Save the value that was chosen and adjust the quiz score so the same questions are not asked again if it was correct
    $('.js-result-btn').click(function() {
      //alert('clicked');

      var resultStatus = $(this).data("result-status");
      var quiz = $("#quiz");

      // Disable the result buttons so the user needs to flip over the card to check the answer before selecting a result
      disableResultBtns(true);

      //console.log("isResultCorrect: " + isResultCorrect + "(" + typeof isResultCorrect + ")");

      // Add the pulse notification to show their result in a visual way
      $("div.face").addClass("pulse-notification pulse-notification-" + resultStatus);

      // Force this function to only run once per click since the animation is being applied to both `.face` divs so it will actually detect it twice.
      // TODO: Fix this by applying the `.pulse-notification` class on only the `.face` that is currently being shown.
      quiz.one(animationEvent, ".face", function (event) {

        // Since the animation has finished, remove the animation class
        $("div.face").removeClass("pulse-notification pulse-notification-" + resultStatus);

        // Fade out the content on the cards
        quiz.find(".face.front").children(".js-generated-sentence").fadeOut(function(){
          // If this is not the first question, randomly determine if the card should turn (show the other language to keep the questions unpredictable)
          if(getRandomInt(0,1) === 1 && hasFirstQuestionRun) {
            animateCardFlip(function(){
              populateQuizArea();
            });
          } else {
            populateQuizArea();
          }
        });

        // TODO: Find a way to fade out both the `.face` divs but only have the above code run once when both are finished.
        quiz.find(".face.back").children(".js-generated-sentence").fadeOut();
      });
    });
  }

  // Returns a random integer between min (included) and max (included)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomConjugation() {
    // Get a random word type(i.e. -ar words), random tense(i.e. future), and a random conjugation(i.e. ellos)
    var randomWordType = randomProperty(spanishTenses);
    var randomTense = randomProperty(randomWordType.propertyValue);
    var appendTo = randomTense.propertyValue.appendTo;
    var randomWord = getRandomWord(randomWordType.propertyName);

    //console.log("randomWordType: ", randomWordType);
    //console.log("randomTense: ", randomTense);
    //console.log("randomWord: ", randomWord);

    // Grab a random property from the tense and if the conjugation that was chosen is actually the "appendTo" property, then run the function as many times as necessary to get an actual conjugation value
    var randomTenseConjugationKey;
    do {
      randomTenseConjugationKey = randomProperty(randomTense.propertyValue);
      //console.log("randomTenseConjugationKey: ", randomTenseConjugationKey);
    }
    while (randomTenseConjugationKey.propertyName === "appendTo");

    //console.log("Random Word Type in Spanish Tenses: ", randomWordType);
    //console.log("Random Tense in " + randomWordType.propertyName, randomTense);
    //console.log("Random Tense Conjugation Key in " + randomTense.propertyName, randomTenseConjugationKey);

    return {
      wordType: randomWordType,
      word: randomWord,
      tense: randomTense,
      conjugation: randomTenseConjugationKey,
      appendTo: appendTo
    };
  }

  function getRandomWord(wordType) {
    // Get a random word and its properties
    var randomWordGroup = randomProperty(conjugationWords[wordType]);

    //console.log("Random Word Type in Spanish Tenses: ", randomWordType);
    //console.log("Random Word Group in " + wordType, randomWordGroup.propertyValue);

    // Properties of Random Word
    return randomWordGroup.propertyValue;
  }

  function generateQuizQuestion() {
    console.log('Question Generated');

    var randomConjugation;
    var englishType;
    var person;
    var connectorString;
    var possiblePersons;
    var spanishFirstPart;

    // Get a random word type(i.e. -ar words), random tense(i.e. future), and a random conjugation(i.e. ellos)
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
        person = randomProperty(possiblePersons).propertyValue;
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
        person = randomProperty(possiblePersons).propertyValue;
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
        person = randomProperty(possiblePersons).propertyValue;
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

  // From http://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
  function randomProperty (obj) {
    var keys = Object.keys(obj);
    var randomProperty = keys[ keys.length * Math.random() << 0];
    //console.log("Random Property: ", randomProperty);
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


});



