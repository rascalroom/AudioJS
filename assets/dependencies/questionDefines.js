// Global Define
var data = {
  feed: 0,		// <- pattern[feedOrigin]
  feedOrigin: 0,	// <- 1 > 2 > 3 > 4 ...
  max: 0,		// <- Number of max question
  choiceSelect: 0,	// <- Selected choice
  answerNumber: 0,	// <- Number of answer
  point: 0,		// <- Sum Number of right answer
  pointResult: 0,	// <- sum point
  pattern: [],		// <- questions random pattern
  seen: true,		// <- question/choice <-> description
  preFinish: false,	// <- Last description view
  finish: false,	// <- Finished all answer
  answerResult: 'clear'	// <- icon name
}

// Functions
function scoreCheck(choice, feed) {
  if(data.seen) {
    var url = new URL(window.location.href);
    var questions = new COLLECTION('question');

    var categoryID = url.getParam('id');
    var questionOneFeed = new QUESTION(questions.Read('category', categoryID), feed);

    data.choiceSelect = choice;

    seenSwitch();

    answerCheck(questionOneFeed.Score(choice));
  }
}

function answerCheck(score) {
  score.then(function(info) {
    data.answerNumber = info[1];
    if(info[0]) {
      data.answerResult = 'panorama_fish_eye';	// <- O
      pointPlus();
    } else {
      data.answerResult = 'clear';		// <- X
    }
  });
}

function feedNext() {
  var feedOrigin = data.feedOrigin;
  var pattern = data.pattern;
  feedOrigin++;
  data.feed = pattern[feedOrigin];
  data.feedOrigin = feedOrigin;
}

function seenSwitch() {
  if(data.seen) {
    data.seen = false;
  } else {
    data.seen = true;
  }
  if(data.feedOrigin==data.max) {
    data.preFinish = true;
  }
}

function finishSwitch() {
  data.finish = true;
}

function pointPlus() {
  var point = data.point;
  point++;
  data.point = point;
  data.pointResult = 100*point/(data.max+1);
}
