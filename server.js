const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static(`${__dirname}/build`));

const port = process.env.PORT || 5001;

let protected = fs.readdirSync(`${__dirname}/build`, 'utf-8');

app.get("*", (req, res) => {
    let path = req.params['0'].substring(1)

    if (protected.includes(path)) {
        res.sendFile(`${__dirname}/build/${path}`);
    } else {
        res.sendFile(`${__dirname}/build/index.html`);
    }
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});