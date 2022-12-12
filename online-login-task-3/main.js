
const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.NODE_PORT || 3000;

const server = express();
server.use(bodyParser.urlencoded({ extended: true }))

server.set("view engine", "ejs");
server.set('views', __dirname + '/view'); // default is views


server.get("/", (req, res) => {
    res.render("home");
    res.render("home", { head: "MyApp" });
});

server.get("/login", (req, res) => {
    res.render("login", { e: "" });
});

server.post("/post-login", (req, res) => {
    console.log("in post login");
    console.log(req.body);

    if (!!req.body.user && req.body.user === req.body.pass) {
        res.render('Welcome', { head: "Welcome", username: req.body.user })
    } else {
        res.render("login", { e: "Something bad happened" });
    }
    // find username and password, if username and password are same and not empty
    // show welcome page
    // else
    // show login page with error


    // res.redirect('/')
});




server.listen(port, function () {
    console.log("App is running at: " + port);
})
