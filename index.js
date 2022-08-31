// npm install chalk;

// npm i chalk@4.1.2  //use it in the shell
var chalk = require('chalk');

console.log(chalk.blue('General Knowledge Quiz App\n\n'));

var readlineSync = require('readline-sync');

var userName = readlineSync.question("May we know your name please? \n");

console.log(chalk.blue("\nHello " + userName + " to the neog.camp fun quiz game!!\n"));

console.log(chalk.bgGreen("Please answer 4 questions correctly to reach Level 1 of the game,7 to reach Level 2 of the game, and 9 to reach Level 3 of the game.\nALL THE BEST :) \n\n"));


var currentScore = 0;
var highScores =
{
  azhar: 10,
  bhargav: 7
};

function ask(question, answer) {
  var userAnswer = readlineSync.question(question + "\n");
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.greenBright("Correct!!"));
    currentScore++;
    console.log("score: ", currentScore + "\n");
  }
  else {
    console.log(chalk.red("Wrong!!"));
    console.log("score: ", currentScore + "\n");
    return;
  }
  if (currentScore >= 4 && currentScore < 5) {
    console.log(chalk.redBright("Congrats!! You entered LEVEL 1 of the game!!\n"))
  }
  if (currentScore >= 7 && currentScore < 8) {
    console.log(chalk.cyanBright("Congrats!! You entered LEVEL 2 of the game!!\n"));
  }
  if (currentScore >= 9 && currentScore < 10) {
    console.log(chalk.greenBright("Congrats!! You entered LEVEL 3 of the game!! Yippeee  ;)\n  "))
  }
}

var questions =
  [
    {
      question: "What is the capital of INDIA? ",
      answer: "New Delhi"
    },
    {
      question: "What is the full name of MS Dhoni? ",
      answer: "Mahendra Singh Dhoni"
    },
    {
      question: "Who founded Amazon ?",
      answer: "Jeff Bezos"
    },
    {
      question: "Which is the largest country in Asia? ",
      answer: "China"
    },
    {
      question: "How many sides does a quadrilateral have? ",
      answer: "4"
    },
    {
      question: "Which Indian Cricketer did hit six sixes in six balls against England in 2007? ",
      answer: "Yuvraj Singh"
    },
    {
      question: "What is the full form of CS GO? ",
      answer: "Counter Strike Global Offensive"
    },
    {
      question: "How many players are there in a football team excluding the goal keeper? ",
      answer: "10"
    },
    {
      question: "Which language is called the mother of all programming languages?",
      answer: "C"
    },
    {
      question: "What is the name of the highest mountain in the world? ",
      answer: "Mount Everest"
    }
  ];


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  ask(currentQuestion.question, currentQuestion.answer);
}



console.log(chalk.bgYellowBright("\nYour final score is : ", currentScore + "  \n"));

if (currentScore >= highScores.azhar) {
  console.log(chalk.bgBlackBright("Congratulations!! You are the new highest scorer!! Kindly send the screenshot of the score to us. \nThank You  \n\n"));

  console.log(chalk.bgBlue("High Scores :- \n" + userName + ": " + currentScore + " \nAzhar : " + highScores.azhar + " \nBhargav : " + highScores.bhargav + " "));
}

else {
  console.log(chalk.bgRed("Oops!! You failed to beat the highest scorer!!\nBetter Luck Next Time  \n\n"));

  console.log(chalk.bgBlue("High Scores :- \n" + "Azhar : " + highScores.azhar + " \nBhargav : " + highScores.bhargav + " "));
}



