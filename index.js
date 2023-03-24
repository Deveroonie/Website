const ex = require("express")
const app = ex()

app.set('view engine', 'ejs')

app.use('/assets', ex.static('assets'))

app.get("/", (req,res) => {
    res.render("pages/index")
})

app.get("/projects", (req,res) => {
    res.render("pages/projects")
})

app.get("/about", (req,res) => {
    res.render("pages/about")
})

app.get("/privacy", (req,res) => {
    res.render("pages/privacy")
})

app.listen("3000", () => {
    console.log("Started! http://localhost:3000")
})