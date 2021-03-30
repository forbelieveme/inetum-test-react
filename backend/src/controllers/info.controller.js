const questionController = {};

fs = require("fs");

questionController.getQuestions = async (req, res) => {
  fs.readFile(process.env.OFERTAS_PATH, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    res.json(JSON.parse(data));
  });
};

module.exports = questionController;
