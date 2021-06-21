const express = require("express");
const app = express();
const { Client } = require('pg')
const client = new Client({
    host: 'ec2-107-21-10-179.compute-1.amazonaws.com',
    port: 5432,
    user: 'xducephjlnjuon',
    password: '8da6c1fb84f2d71f541f4fc80c5409bc97503742d631df371b52761422b5efa6',
    connectionString: 'postgres://xducephjlnjuon:8da6c1fb84f2d71f541f4fc80c5409bc97503742d631df371b52761422b5efa6@ec2-107-21-10-179.compute-1.amazonaws.com:5432/d5v88rtqervvkb'
})
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