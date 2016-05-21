$(document).ready(function(){



  if ( $( ".js-quiz-verb-conjugation" ).length ) {

    var hasFirstQuestionRun = false;

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













    // Populate Quiz on page load
    populateQuizArea(generateVerbConjugationQuizQuestion());

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
              populateQuizArea(generateVerbConjugationQuizQuestion());
            });
          } else {
            populateQuizArea(generateVerbConjugationQuizQuestion());
          }
        });

        // TODO: Find a way to fade out both the `.face` divs but only have the above code run once when both are finished.
        quiz.find(".face.back").children(".js-generated-sentence").fadeOut();
      });
    });
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
    var randomWordGroup = randomProperty(verbs[wordType]);

    //console.log("Random Word Type in Spanish Tenses: ", randomWordType);
    //console.log("Random Word Group in " + wordType, randomWordGroup.propertyValue);

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







});



