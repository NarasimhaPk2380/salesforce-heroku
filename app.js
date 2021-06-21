const express = require("express");
const app = express();
const pg = require('pg');
const pool = new pg.Pool()


app.get("*", (req, res) => {
    // res.json({ text: "Hello salesforce" })

    pool.connect(process.env.DATABASE_URL, function (err, conn, done) {
        // watch for any connect issues
        if (err) console.log(err);
        conn.query(
            'SELECT * FROM salesforce.contact',
            function (err, result) {
                done();
                res.json(result);
            }
        );
    });
})

app.listen(process.env.PORT || 4444, () => {
    console.log(`listening at ${process.env.PORT || 4444}`)
})