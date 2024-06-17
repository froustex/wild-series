// Some data to make the trick
const tables = require("../../database/tables");
// Declare the actions

const browse = async (req, res, next) => {
  try {
    // Fetch all categories from the database
    const categories = await tables.category.readAll();

    // Respond with the categories in JSON format
    res.status(200).json(categories);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch a specific category from the database based on the provided ID
    const category = await tables.category.read(req.params.id);

    // If the category is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the category in JSON format
    if (category == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
/* Here you code */

// Export them to import them somewhere else

module.exports = {
  browse,
  read,
  /* Here you export */
};
