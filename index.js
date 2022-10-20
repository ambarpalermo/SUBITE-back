const express = require('express');
const app = express();
const Sequelize = require('sequelize')
const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "proyecto_subite"
})

con.connect((err) => {
    if (err) throw err;
    console.log("Se conecto MySql")
})

//conexion con base de datos
const bd = new Sequelize("proyecto_subite", "root", "rootroot", {
    host: "localhost",
    dialect: "mysql"
})

// funcion para que te de el url e info 
function logger(req, res, next) {
    console.log(`Route Recieved: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(express.json());
app.use(logger);

/* //funcion a realizar antes de que pase por /user
app.all('/user', (req, res, next) => {
    console.log('User: Por aqui paso');
    next();
});
 */

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
//HASTA ACA --------------------------------------------------

// RUTAS DE LINEAS --------------------------------------------------------------
app.get('/lineaA', (req, res) => {
    con.query("SELECT Estaciones FROM linea_a", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })

});
app.get('/lineaAdire', (req, res) => {
    con.query("SELECT A_San_Pedrito, A_Plaza_De_Mayo FROM linea_a", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});

app.get('/lineaB', (req, res) => {
    con.query("SELECT Estaciones FROM linea_b", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});
app.get('/lineaBdire', (req, res) => {
    con.query("SELECT A_Rosas, A_Alem FROM linea_b", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});

app.get('/lineaC', (req, res) => {
    con.query("SELECT Estaciones FROM linea_c", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});
app.get('/lineaCdire', (req, res) => {
    con.query("SELECT A_Constitucion, A_Retiro FROM linea_c", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});

app.get('/lineaD', (req, res) => {
    con.query("SELECT Estaciones FROM linea_d", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});
app.get('/lineaDdire', (req, res) => {
    con.query("SELECT A_Congreso, A_Catedral FROM linea_d", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    }) 
});

app.get('/lineaE', (req, res) => {
    con.query("SELECT Estaciones FROM linea_e", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});
app.get('/lineaEdire', (req, res) => {
    con.query("SELECT A_Plaza_De_Los_Virreyes, A_Retiro FROM linea_e", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});

app.get('/lineaH', (req, res) => {
    con.query("SELECT Estaciones FROM linea_h", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});
app.get('/lineaHdire', (req, res) => {
    con.query("SELECT A_Hospitales, A_Facultad_De_Derecho FROM linea_h", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});

app.get("/jsontrenes", (req, res) => {
    const {hum, temp, people, air, sound, Linea, IDvagon} = req.body;
    console.log(vagon);

    con.query("INSERT INTO json (humedad, temperatura, cant_de_personas, calidad_de_aire, nivel_de_sonido, Linea, IDvagon) VALUES ('"+hum+"', '"+temp+"', '"+people+"', '"+air+"', '"+sound+"', '"+Linea+"', '"+IDvagon+"')", (err, res_db) => {
        if (err) throw err;
})



//HASTA ACA --------------------------------------------------
/* app.get('/test' , (req, res) => {
    res.send('<h1>TEST</h1>');
}); */

app.use(express.static('public'));

//PRUEBA POSTMAN ------------------------------------------------------------------
app.post('/prueba', (req,res) => {
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
});

app.listen(5000, () => {
    console.log('Server on port 5000');
});
try {
    bd.authenticate()
    console.log("se conecto correctamente")

    console.log(bd.models)
} catch (error) {
    console.log("Hubo un error", error)
}
