//STEP ONE: SET UP DATA IN DATA FOLDER, MAKE AND SET UP INDEX TOUCHPOINTS FOR MODELS/CONTROLLERS/ROUTES/VIEWS ALONG WITH NPM INIT AND INSTALLING PACKAGES AND SERVER.JS

//STEP TWO: SET UP EXPRESS AND SANITY CHECK WITH PORT LISTENING AND HOMEPAGE HELLO

//STEP THRE: CONNECT DB TO MODELS TO GET ALL SNAILS, THEN BRING THAT DATA ALL THE WAY DOWN TO THE SNAILS PAGE

//STEP FOUR: MAKE A NEW ROUTE FOR :ID, PASS ID INTO SNAILS LINK

//STEP FIVE: FOLLOW THE DATA UP FROM ROUTE TO CONTROLLER TO MODEL TO GET 1 SNAIL

//STEP SIX: MAKE 404 ROUTE FOR ALL OTHER LINKS



//EXTERNAL MODULES 
const express = require('express');

//SYSTEM VARIABLES
const PORT = 5000;

//MIDDLEWARE
const app = express();
// Sets EJS as the view engine
app.set('view engine', 'ejs');
// Specifies the location of the static assets folder
app.use(express.static('static'));
// Sets up body-parser for parsing form data
app.use(express.urlencoded({ extended: false }));
// sets up public folder for style assets
app.use("/public", express.static(__dirname + '/public'))


//show snails route
app.use('/snails', require("./routes/snails"))
//render the home routes
app.get("/", (req, res) => {
    res.render("home")
})
//render 404 is any other route is hit
app.get('*', (req, res) => {
    res.render("404")
})

//LISTEN FOR THE PORT
app.listen(PORT, (req, res) => {
    console.log("Listening to those sweet beats on port: " + PORT)
})