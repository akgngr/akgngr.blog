const express = require("express")
const app = express()
const port = 3030

app.get("/", (req, res) => res.send("Express on Vercel"))

app.listen(port, () =>
  console.log("Server ready on " + `${"http://localhost:" + port}`)
)

module.exports = app
