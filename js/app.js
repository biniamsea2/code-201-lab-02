'use strict';

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
    } else {
      console.log('But what I said is true. As an athlete, I want to workout, so I can be healthy');
    }
  } else if (i === 1) {
    if (answer === 'y') {
      console.log('You\'re right! As I like to eat healthy food, I want to diet, so I can be slim');
    } else {
      console.log('But what I said is true. As I like to eat healthy food, I want to diet, so I can be slim');
    }
  } else if (i === 2) {
    if (answer === 'y') {
      console.log('You\'re right! As I want to be a good reader, I want to read books, so I can read great writing effortlessly');
    } else {
      console.log('But what I said is true. As I want to be a good reader, I want to read books, so I can read great writing effortlessly');
    }
  } else if (i === 3) {
    if (answer === 'y') {
      console.log('No. What I said is: \"As I want to live on Mars, I want to be an astronaut, so I can work on Mars\", but what I said isn\'t true');
    } else {
      console.log('You\'re right. I wasn\'t really telling the truth');
    }
  } else if (i === 4) {
    if (answer === 'y') {
      console.log('No. What I said is: \"As I like to play badminton regularly on Sunday nights, I want to keep my racket strung strongly, so I can string through the night\", but what I said isn\'t true');
    } else {
      console.log('You\'re right. What I said is: \"As I like to play badminton regularly on Sunday nights, I want to keep my racket strung strongly, so I can string through the night\", which isn\'t true');
    }
  }
}