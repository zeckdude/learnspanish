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



