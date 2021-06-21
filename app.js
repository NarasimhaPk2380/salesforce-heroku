const express = require("express");
const app = express();
const { Client } = require('pg')
const client = new Client()
client.connect();

app.get("*", (req, res) => {
    // res.json({ text: "Hello salesforce" })
    client.query('SELECT * FROM salesforce.contact', (err, result) => {
        //console.log(err ? err.stack : res.rows[0].message) // Hello World!
        console.log(err, result);
        client.end()
        res.json(result);
    })
})

app.listen(process.env.PORT || 4444, () => {
    console.log(`listening at ${process.env.PORT || 4444}`)
})