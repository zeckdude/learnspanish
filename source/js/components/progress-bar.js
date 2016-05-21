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