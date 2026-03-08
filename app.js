const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const words = [
  { word: "apple", partOfSpeech: "noun", definition: "a fruit" },
  { word: "run", partOfSpeech: "verb", definition: "to move quickly" },
  { word: "happy", partOfSpeech: "adjective", definition: "feeling pleasure" }
];

app.get('/', (req, res) => {
  const sortedWords = words.sort((a, b) => a.word.localeCompare(b.word));
  res.render('allwords', { words: sortedWords });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});