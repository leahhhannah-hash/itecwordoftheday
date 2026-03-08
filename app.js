const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port = 3000;

let words = [
  { word: "apple", partOfSpeech: "noun", definition: "a fruit" },
  { word: "brave", partOfSpeech: "adjective", definition: "showing courage" },
  { word: "create", partOfSpeech: "verb", definition: "to make something" }
];

app.get('/', (req, res) => {
  res.send("Word of the Day Project");
});

app.get('/words/allwords', (req, res) => {
  const sortedWords = [...words].sort((a, b) => a.word.localeCompare(b.word));
  res.render('allwords', { words: sortedWords });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});