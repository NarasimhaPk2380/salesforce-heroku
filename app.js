const express = require("express");
const app = express();

app.get("*", (req, res) => {
    res.json({ text: "Hello salesforce" })
})

app.listen(process.env.PORT || 4444, () => {
    console.log(`listening at ${process.env.PORT || 4444}`)
})