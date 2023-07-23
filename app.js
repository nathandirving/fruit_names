const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

const fruits = [
  "apple", "apricot", "banana", "blackberry", "blackcurrant", "blueberry", "currant",
  "cherry", "clementine", "durian", "elderberry", "gooseberry", "grape", "grapefruit",
  "guava", "huckleberry", "jackfruit", "kiwi", "kumquat", "lemon", "lime", "lychee",
  "mango", "melon", "cantaloupe", "honeydew melon", "watermelon", "nectarine", "orange",
  "peach", "pear", "plum", "pineapple", "pomegranate", "raspberry", "star fruit",
  "strawberry", "tangerine"
];

app.get('/fruit', (req, res) => {
  const index = parseInt(req.query.index);
  if (isNaN(index) || index < 0 || index >= fruits.length) {
	const random_index = Math.floor(Math.random() * fruits.length);
	const fruit = fruits[random_index];
    return res.json({ fruit });
  }
  const fruit = fruits[index];
  res.json({ fruit });
});

app.get('/fruit', (req, res) => {
  const index = parseInt(req.query.index);
  if (isNaN(index) || index < 0 || index >= fruits.length) {
	const random_index = Math.floor(Math.random() * fruits.length);
	const fruit = fruits[random_index];
    return res.json({ fruit });
  }

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
