
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