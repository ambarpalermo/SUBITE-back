const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/jsontrenes", (req, res) => {
    console.log(req.body);
    const {hum, temp, people, air, sound, Linea, IDvagon} = req.body;
});

app.listen(5000, () => {
    console.log('Server on port 5000');
});