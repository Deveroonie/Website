const ex = require("express")
const app = ex()

app.set('view engine', 'ejs')

app.use('/assets', ex.static('assets'))

app.get("/", (req,res) => {
    res.render("pages/index")
})

app.listen("443", () => {
    console.log("Started! http://localhost:443")
})