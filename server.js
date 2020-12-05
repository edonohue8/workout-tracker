const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// Require routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// MongoDB connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
);

// Listen
app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});