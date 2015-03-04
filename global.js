function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
   return array;
}

var question_one = {
  question: "What is 2 + 2?",
  choices: [3, 4, 7, 9],
  answer: 4
}

var question_two = {
  question: "What is 3 + 2?",
  choices: [8, 4, 5, 2],
  answer: 5
}

var question_three = {
  question: "What is 6 + 7?",
  choices: [33, 14, 13, 9],
  answer: 13
}

var question_four = {
  question: "What is 5 - 2?",
  choices: [3, 8, 0, 11],
  answer: 3
}

var question_five = {
  question: "What is 5 + 5?",
  choices: [23, 1, 10, 11],
  answer: 10
}

var question_list = [question_one, question_two, question_three, question_four,
  question_five];
  
var questions = shuffleArray(question_list);
var score;
score = 0;
while (questions.length > 0){
  var question = questions.pop();
  var user_answer = prompt(question.question + "\nchoices: " + question.choices);
  if (user_answer == question.answer){
    score++;
  }
}
  
alert("Your score was:" + score);