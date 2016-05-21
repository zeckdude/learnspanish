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