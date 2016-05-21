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



