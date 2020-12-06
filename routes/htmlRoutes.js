var path = require("path");

module.exports = function(app) {
    // This is called when New Workout or Continue Workout button is clicked
    app.get("/exercise", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // GET route for index
    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}