var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

const startingMinutes = 5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown,1000);



function updateCountdown(){
    const minutes = Math.floor(time/60)
    let seconds = time % 60;
    seconds = seconds < 10? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
   if (time < 0) {clearInterval
}}
window.onload = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {
          'What\'s the name of the school in the first Tokimeki Memorial game?' : ['Habataki', 'Hanegasaki', 'Kirameki', 2],
          
          'What kind of music does Shiori Fujisaki like?' : ['Classical', 'Pop' , 'Rock', 0],
          
          'What does Saki Nijino go to college for? ' : ['Baseball', 'Cooking', 'Soccer', 1],
 
          'Which company published the Tokimeki Memorial series?' : ['Konami', 'Sega' , 'Namco', 0],

          'Which stat needs to be raised to impress Mio Kisaragi?' : ['Math', 'Literature' , 'Fitness', 1],

          'Which of the following events is not a way to meet Megumi Mikihara?' : ['Sports Festival', 'Valentines Day' , 'Christmas Party', 0],

          'What system was Tokimeki Memorial first published for?' : ['Playstation', 'SNES' , 'Personal computer', 2],

          'Which of the spinoff games has Ayako Katagiri as the protagonist?' : ['Nijiro no Seishun', 'Irodori no Love Song' , 'Tabidachi no Uta', 1],

          'What animal attacks Yuina Himoo at the zoo?' : ['Tiger', 'Gorilla' , 'Koala', 2],

          'What kind of game hasn\'t there been a Tokimeki Memorial version of?' : ['Fighting game', 'Puzzle game' , 'Typing game', 0],

          'Which club is Yukari Koshiki in?' : ['Music', 'Drama' , 'Tennis', 2],

          'Which amusement park attraction does Mira Kagami hate?' : ['Roller Coaster', 'Haunted House' , 'Ferris Wheel', 1],

          'Which of the following series has not had a tokimeki memorial cameo?' : ['Bomberman', 'TwinBee' , 'Dance Dance Revolution', 2],

          'What happens if you complete Nozomi Kiyokawa\'s route twice?' : ['She has longer hair the second time', 'She reveals a secret' , 'Hint towards the sequel', 0],

          'How many times do you meet Yuko Asahina before learning her name?' : ['Once', 'Twice' , 'Three times', 2],

          'How many episodes does the original Tokimeki Memorial anime have?' : ['One movie', 'Two episodes' , 'Ten episodes', 1],

          'When do you meet Yumi Saotome?' : ['Joining baseball club', 'Socializing 5 times in a row' , 'At the beginning of second year', 2],

          'Which day will Miharu Tatebayashi ask you out?' : ['February 22nd', 'July 12th' , 'October 31st', 0],
          
        };   
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is sams as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.
      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          addChecker(false);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionArea.innerHTML = 'Done';
          answerArea.innerHTML = '';
        }
                                
      };
    }
    
    function addChecker(bool) {
    // This function adds a div element to the page
    // Used to see if it was correct or false
    
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    
    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);
    
  };

