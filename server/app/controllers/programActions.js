// Some data to make the trick
const tables = require("../../database/tables");

// Declare the action

const browse = async (req, res, next) => {
  try {
    // Fetch all programs from the database
    const programs = await tables.program.readAll();

    // Respond with the programs in JSON format
    res.status(200).json(programs);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch a specific program from the database based on the provided ID
    const program = await tables.program.read(req.params.id);

    // If the program is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the program in JSON format
    if (program == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(program);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// Export it to import it somewhere else

module.exports = { browse, read };
