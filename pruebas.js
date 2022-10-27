/* const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/jsontrenes", (req, res) => {
    console.log(req.body);
    const {hum, temp, people, air, sound, Linea, IDvagon} = req.body;
});

app.listen(5000, () => {
    console.log('Server on port 5000');
}); */

//PRUEBA POSTMAN ------------------------------------------------------------------
/* app.post('/prueba', (req,res) => {
    console.log(req.body);
    res.send('POST REQUEST RECIEVED');
});

app.post('/user/:id' , (req, res) => {
    console.log(req.body);
    console.log(req.params)
    res.send('POST REQUEST RECIVED');
});

app.delete('/user/:userID', (req, res) => {
    res.send(`User ${req.params.userID} deleted`);
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});
 */

/* //funcion a realizar antes de que pase por /user
app.all('/user', (req, res, next) => {
    console.log('User: Por aqui paso');
    next();
});
 */
/* 
//INFO USUARIOS ------------------------------------------------
app.get('/user', (req, res) => {
    res.json({ 
        username:'Ambar',
        lastname: 'Palermo',
        age: '16 años',
        nivel_de_conidad: '8,5'
    }) 
});

app.get('/hola', (req, res) => {
    res.json({ 
        username:'Bruno',
        lastname: 'Mendiburu',
        age: '16 años',
        nivel_de_conidad: '9 solido',
    }) 
});

app.get('/caf', (req, res) => {
    res.json({ 
        username:'Thiago',
        lastname: 'Cafaro',
        age: '16 años',
        nivel_de_conidad: 'rompe niveles',
    }) 
});
//HASTA ACA -------------------------------------------------- */
