const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const words = [
  { word: "apple", partOfSpeech: "noun", definition: "a fruit" },
  { word: "brave", partOfSpeech: "adjective", definition: "showing courage" },
  { word: "create", partOfSpeech: "verb", definition: "to make something new" }
];

app.get('/', (req, res) => {
  const sortedWords = words.sort((a, b) => a.word.localeCompare(b.word));
  res.render('allwords', { words: sortedWords });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});