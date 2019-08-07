'use strict';

/**
 * Code 201 Lab 02 Ask user for their name.
 * Keep tally of correct answers the user gives to questions.
 */

var name = prompt('Hi what\'s your name?');
var tally = 0;
var QUESTIONS = 7;

/**
 * Code 201 Lab 02 'About Me' statements.
 */

var aboutMe = [
  'As an athlete, I want to workout, so I can be healthy',
  'As I like to eat healthy food, I want to diet, so I can be slim',
  'As I want to be a good reader, I want to read books, so I can read great writing effortlessly',
  'As I want to live on Mars, I want to be an astronaut, so I can work on Mars',
  'As I like to play badminton regularly on Sunday nights, I want to keep my racket strung strongly, so I can string through the night'
];

for (var i = 0; i < aboutMe.length; i++) {
  var text = aboutMe[i] + '. I\'m telling the truth. Do you agree? Type \'Y\', \'N\' or yes/no.';
  var answer = prompt(text);

  if (answer) {
    answer = answer.toLowerCase()[0];
  } else {
    console.log('You didn\'t give me an answer');
    continue;
  }

  if (i === 0) {
    if (answer === 'y') {
      console.log('You\'re right! As an athlete, I want to workout, so I can be healthy');
      tally++;
    } else {
      console.log('But what I said is true. As an athlete, I want to workout, so I can be healthy');
    }
  } else if (i === 1) {
    if (answer === 'y') {
      console.log('You\'re right! As I like to eat healthy food, I want to diet, so I can be slim');
      tally++;
    } else {
      console.log('But what I said is true. As I like to eat healthy food, I want to diet, so I can be slim');
    }
  } else if (i === 2) {
    if (answer === 'y') {
      console.log('You\'re right! As I want to be a good reader, I want to read books, so I can read great writing effortlessly');
      tally++;
    } else {
      console.log('But what I said is true. As I want to be a good reader, I want to read books, so I can read great writing effortlessly');
    }
  } else if (i === 3) {
    if (answer === 'y') {
      console.log('No. What I said is: \"As I want to live on Mars, I want to be an astronaut, so I can work on Mars\", but what I said isn\'t true');
      tally++;
    } else {
      console.log('You\'re right. I wasn\'t really telling the truth');
    }
  } else if (i === 4) {
    if (answer === 'y') {
      console.log('No. What I said is: \"As I like to play badminton regularly on Sunday nights, I want to keep my racket strung strongly, so I can string through the night\", but what I said isn\'t true');
      tally++;
    } else {
      console.log('You\'re right. What I said is: \"As I like to play badminton regularly on Sunday nights, I want to keep my racket strung strongly, so I can string through the night\", which isn\'t true');
    }
  }
}

/**
 * Code 201 Lab 03 Guessing my favorite number.
 */

var favoriteNumber = 5;
var FAVORITE_NUMBER_MAX_GUESSES = 4;

for (var i = 1; i <= FAVORITE_NUMBER_MAX_GUESSES; i++) {
  var guess = prompt('Can you guess my favorite number? You have ' + (FAVORITE_NUMBER_MAX_GUESSES - i + 1) + ' guesses to guess my favorite number.');

  if (isNaN(parseInt(guess))) {
    alert('You need to guess a number.');
    i--;
    continue;
  }

  guess = parseInt(guess);

  if (guess === favoriteNumber) {
    alert('You guessed my favorite number right on guess number ' + i + '!');
    tally++;
    break;
  } else if (guess < favoriteNumber) {
    alert('You guessed a number less than my favorite number on guess number ' + i + '. You have ' + (FAVORITE_NUMBER_MAX_GUESSES - i) + ' guesses left to guess my favorite number.');
  } else {
    alert('You guessed a number greater than my favorite number on guess number ' + i + '. You have ' + (FAVORITE_NUMBER_MAX_GUESSES - i) + ' guesses left to guess my favorite number.');
  }

  if (i === FAVORITE_NUMBER_MAX_GUESSES) {
    alert('You didn\'t guess my favorite number. My favorite number is 5.');
  }
}

/**
 * Code 201 Lab 03 Guessing a city I've lived in
 */

var citiesHoused = ['Portland', 'St. Johns', 'St. Louis'];
var CITIES_HOUSED_MAX_GUESSES = 6;

for (var i = 1; i <= CITIES_HOUSED_MAX_GUESSES; i++) {
  var guess = prompt('Can you guess a city I\'ve lived in other than Seattle? You have ' + (CITIES_HOUSED_MAX_GUESSES - i + 1) + ' guesses to guess a city I\'ve lived in other than Seattle.');

  if (!isNaN(parseInt(guess))) {
    alert('You can\'t guess with a number.');
    i--;
    continue;
  }

  if (guess === '') {
    alert('You need to guess a city.');
    i--;
    continue;
  }

  if (guess === 'Seattle') {
    alert('You need to guess a city other than Seattle.');
    i--;
    continue;
  }

  var rightGuess = false;

  for (var j = 0; j < citiesHoused.length; j++) {
    if (guess === citiesHoused[j]) {
      alert('You guessed a city I\'ve lived in other than Seattle! You guessed ' + guess + ' and you\'re right! You guessed right on guess number ' + i + '.');
      tally++;
      rightGuess = true;
      break;
    }
  }

  if (rightGuess) {
    break;
  } else {
    if (i === CITIES_HOUSED_MAX_GUESSES) {
      alert('You didn\'t guess another city I\'ve lived in other than Seattle. The cities I\'ve lived in other than Seattle are Portland, St. Johns and St. Louis.');
    } else {
      alert(guess + ' isn\'t a city I\'ve lived in.');
    }
  }
}

alert('Thank you for playing my About Me game. You guessed ' + tally + '/' + QUESTIONS + ' questions right.');