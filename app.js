const express = require("express");
const app = express();
port = 9000;

app.set("view engine", "hbs");
app.set("views", "./view");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/login1", (req, res) => {
    const { iden, pass} = req.query;
    if(iden == "admin" && pass == '123') {
        res.render("admin");
    }
    else
        res.render("login", {check: true});
});

app.get("/withdraw", (req, res) => {
    res.render("admin", {with: true, pause: false, check: false, unpause: false, total: false, max: false});
});

app.get("/paused", (req, res) => {
    res.render("home", {with: false, pause: false, check: true, unpause: false, total: false, max: false});
});

app.get("/paused1", (req, res) => {
    res.render("admin", {with: false, pause: false, check: true, unpause: false, total: false, max: false});
});

app.get("/pause", (req, res) => {
    res.render("admin", {with: false, pause: true, check: false, unpause: false, total: false, max: false});
});

app.get("/unpause", (req, res) => {
    res.render("admin", {with: false, pause: false, check: false, unpause: true, total: false, max: false});
});

app.get("/total", (req, res) => {
    res.render("home", {with: false, pause: false, check: false, unpause: false, total: true, max: false});
});

app.get("/total1", (req, res) => {
    res.render("admin", {with: false, pause: false, check: false, unpause: false, total: true, max: false});
});

app.get("/max", (req, res) => {
    res.render("home", {with: false, pause: false, check: false, unpause: false, total: false, max: true});
});

app.get("/max1", (req, res) => {
    res.render("admin", {with: false, pause: false, check: false, unpause: false, total: false, max: true});
});

app.get("/owner", (req, res) => {
    const {token} = req.query;
    if(token > 0)
        res.render("home", {own: true, data: token});
    else
        res.render("home", {token: true});
});

app.get("/owner1", (req, res) => {
    const {token} = req.query;
    if(token > 0)
        res.render("admin", {own: true, data: token});
    else
        res.render("admin", {token: true});
});

app.get("/clear", (req, res) => {
    res.render("home", {with: false, pause: false, check: false, unpause: false, total: false, max: false});
});

app.get("/clear1", (req, res) => {
    res.render("admin", {with: false, pause: false, check: false, unpause: false, total: false, max: false});
});

app.get("/logout", (req, res) => {
    res.render("home");
});

app.listen(port, (err) => {
    if (err) throw err;
    else console.log("THE PORT NUMBER RUNNING IS %d", port);
});