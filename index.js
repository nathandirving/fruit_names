const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

const fruits = [
  "apple", "apricot", "banana", "blackberry", "blackcurrant", "blueberry", "currant",
  "cherry", "clementine", "durian", "elderberry", "gooseberry", "grape", "grapefruit",
  "guava", "huckleberry", "jackfruit", "kiwi", "kumquat", "lemon", "lime", "lychee",
  "mango", "melon", "cantaloupe", "honeydew melon", "watermelon", "nectarine", "orange",
  "peach", "pear", "plum", "pineapple", "pomegranate", "raspberry", "star fruit",
  "strawberry", "tangerine"
];

const movies = [
  "The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction",
  "The Lord of the Rings: The Return of the King", "Forrest Gump", "Inception",
  "The Matrix", "Star Wars: Episode IV - A New Hope", "The Lord of the Rings: The Fellowship of the Ring",
  "The Godfather: Part II", "The Dark Knight Rises", "Interstellar", "Fight Club", "Goodfellas",
  "The Lord of the Rings: The Two Towers", "The Silence of the Lambs", "The Green Mile", "Seven",
  "Gladiator", "The Departed", "Saving Private Ryan", "Avatar", "The Avengers", "The Lion King",
  "Inglourious Basterds", "The Prestige", "Django Unchained", "The Usual Suspects", "The Terminator",
  "The Empire Strikes Back", "The Sixth Sense", "Back to the Future", "Alien", "The Godfather: Part III",
  "The Grand Budapest Hotel", "Casablanca", "The Good, the Bad and the Ugly", "The Shining",
  "The Breakfast Club", "Eternal Sunshine of the Spotless Mind", "No Country for Old Men",
  "The Social Network", "Raiders of the Lost Ark", "The Wizard of Oz", "Jurassic Park", "Titanic", "Gone with the Wind",
  "Shrek"
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

app.get('/', (req, res) => {
  const index = Math.floor(Math.random() * movies.length);
  const movie = movies[index];
  res.send(movie);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
