// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

const browse = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((cat) =>
      cat.name.includes(req.query.q)
    );
    if (filteredCategories.length === 0) {
      res.send("aucune catégorie trouvée");
    } else {
      res.json(filteredCategories);
    }
  } else {
    res.json(categories);
  }
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const category = categories.find((cat) => cat.id === id);

  if (category != null) {
    res.json(category);
  } else {
    res.send("aucune catégorie trouvée").Status(404);
  }
};
/* Here you code */

// Export them to import them somewhere else

module.exports = {
  browse,
  read,
  /* Here you export */
};
