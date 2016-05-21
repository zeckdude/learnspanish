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



