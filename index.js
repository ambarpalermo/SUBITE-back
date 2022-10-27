const express = require('express');
const app = express();
const Sequelize = require('sequelize')
const mysql = require('mysql')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

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

//aca recibo los datos del json de pipe y ls guardo en la base de datos
app.post("/jsontrenes", (req, res) => {
    console.log(req.body)
    const {hum, temp, people, air, sound, Linea, IDvagon} = req.body;
    con.query("INSERT INTO json (humedad, temperatura, cant_de_personas, calidad_de_aire, nivel_de_sonido, Linea, ID_Vagon) VALUES ('"+hum+"', '"+temp+"', '"+people+"', '"+air+"', '"+sound+"', '"+Linea+"', '"+IDvagon+"')", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
})

//aca levanto los datos del json de pipe de la base de datos, que KELMAN los agarre
app.post("/infotrenes", (req, res) => {
    con.query("SELECT humedad, temperatura, cant_de_personas, calidad_de_aire, nivel_de_sonido, Linea, IDvagon FROM json", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/front-subite/index.html'));
})


//HASTA ACA --------------------------------------------------
/* app.get('/test' , (req, res) => {
    res.send('<h1>TEST</h1>');
}); */

app.use(express.static('public'));

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
