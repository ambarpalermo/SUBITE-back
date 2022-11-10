const express = require('express');
const app = express();
const Sequelize = require('sequelize')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const path = require('path');

app.use(express.static('../front-subite'))

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

app.get('/', (req, res) => {
    res.sendFile(path.resolve('../front-subite/index.html'));
});

app.get('/tren', (req, res) => {
    res.sendFile(path.resolve('../front-subite/ProximoTren.html'));
});

// funcion para que te de el url e info 
function logger(req, res, next) {
    console.log(`Route Recieved: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(express.json());
app.use(logger);


// RUTAS DE LINEAS --------------------------------------------------------------
app.get('/linea_a', (req, res) => {
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

app.get('/linea_b', (req, res) => {
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

app.get('/linea_c', (req, res) => {
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

app.get('/linea_d', (req, res) => {
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

app.get('/linea_e', (req, res) => {
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

app.get('/linea_h', (req, res) => {
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

app.get('/trenes', (req, res) => {
    con.query("SELECT * FROM json", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
});

// INSERTAR TODA LA BASE DE DATOS 
/* const vagonesxtren = 8;
const trenesxlinea = 4;
const lineas = 6; 
const totalvagones = vagonesxtren * trenesxlinea * lineas;
 
for (var i = 0; i < totalvagones; i++){
    const id_linea = Math.floor(i/(totalvagones/lineas));
    const tren_id = Math.floor(i/vagonesxtren);
    const id_vagon = i
    const valores = [];

    valores[i] = id_linea

    if(valores[i] === 0) {
        valores[i] = "linea_a"

    }

    if(valores[i] === 1) {
        valores[i] = "linea_b"

    }

    if(valores[i] === 2) {
        valores[i] = "linea_c"

    }

    if(valores[i] === 3) {
        valores[i] = "linea_d"

    }

    if(valores[i] === 4) {
        valores[i] = "linea_e"

    }

    if(valores[i] === 5) {
        valores[i] = "linea_h"

    }

    con.query("INSERT INTO json (humedad, temperatura, cant_de_personas, calidad_de_aire, nivel_de_sonido, ID_Vagon, Linea, IDtren, Estacion, Terminal) VALUES ('"+ null +"', '"+ null +"', '"+ null +"', '"+ null +"', '"+ null +"', "+id_vagon+", '"+valores[i]+"', "+tren_id+", '"+ null +"', '"+ null +"') " , (err, res_db) => {
        if (err) throw err;
    console.log(res_db);
    //res.json(res_db);
    });  */

//}


//aca recibo los datos del json de pipe y ls guardo en la base de datos
app.post("/jsontrenes", (req, res) => {
    console.log(req.body)
    const { hum, temp, people, air, sound, Linea, IDvagon, estacion, terminal, IDtren } = req.body;
    //HACER UN UPDATE
    con.query("UPDATE json SET (humedad = '" + hum + "', temperatura = '" + temp + "', cant_de_personas = '" + people + "', calidad_de_aire = '" + air + "', nivel_de_sonido = '" + sound + "', Estacion = '" + estacion + "', Terminal = '" + terminal + "') WHERE (IDlinea = '" + Linea + "', IDvagon = '" + IDvagon + "', IDtren = '" + IDtren + "' ) ", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
})

//aca levanto los datos del json de pipe de la base de datos, que KELMAN los agarre
app.get("/infotrenes", (req, res) => {
    con.query("SELECT humedad, temperatura, cant_de_personas, calidad_de_aire, nivel_de_sonido, Linea, IDvagon FROM json", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
})

app.get("/rutas", (req, res) => {
    con.query("SELECT temp FROM json WHERE ")
})

// INSERTAR TODA LA BASE DE DATOS 

function create_DB_vagones(vagonesxtren, trenesxlinea, arr_lineas) {
    const cant_lineas = arr_lineas.length;
    const totalvagones = vagonesxtren * trenesxlinea * cant_lineas;

    for (var i = 0; i < totalvagones; i++) {
        const id_linea = Math.floor(i / (totalvagones / cant_lineas));
        const tren_id = Math.floor(i / vagonesxtren);
        const id_vagon = i
        const linea = arr_lineas[id_linea];

        con.query("INSERT INTO json (humedad, temperatura, cant_de_personas, calidad_de_aire, nivel_de_sonido, ID_Vagon, Linea, IDtren, Estacion, Terminal) VALUES ('" + null + "', '" + null + "', '" + null + "', '" + null + "', '" + null + "', " + id_vagon + ", '" + linea + "', " + tren_id + ", '" + null + "', '" + null + "') ", (err, res_db) => {
            if (err) throw err;
            console.log(res_db);
            //res.json(res_db);
        });
    }
}

// create_DB_vagones(8, 4, ["A", "B", "C", "D", "E", "H"])

//aca recibo los datos del json de pipe y ls guardo en la base de datos
app.post("/jsontrenes", (req, res) => {
    console.log(req.body)
    const { hum, temp, people, air, sound, Linea, IDvagon } = req.body;
    //HACER UN UPDATE
    con.query("UPDATE json SET (humedad = '" + hum + "', temperatura = '" + temp + "', cant_de_personas = '" + people + "', calidad_de_aire = '" + air + "', nivel_de_sonido = '" + sound + "', Estacion = '" + estacion + "', Terminal = '" + terminal + "') WHERE (IDlinea = '" + Linea + "', IDvagon = '" + IDvagon + "', IDtren = '" + IDtren + "' ) ", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
})

//aca levanto los datos del json de pipe de la base de datos, que KELMAN los agarre
app.get("/infotrenes", (req, res) => {
    con.query("SELECT humedad, temperatura, cant_de_personas, calidad_de_aire, nivel_de_sonido, Linea, IDvagon FROM json", (err, res_db) => {
        if (err) throw err;
        console.log(res_db);
        res.json(res_db);
    })
})

//haciendo.....
app.get("/info", (req, res) => {
    const linea = req.query.linea;
    const estacion = req.query.estacion;
    const terminal = req.query.terminal;
    console.log({ linea, estacion, terminal })
    let corte;
    let ests = [];

    con.query(`SELECT Estaciones FROM ${linea}`, (err, res_db) => {
        if (err) {
            throw err;
        } else {
            arr = []
            res_db.forEach(R => {
                arr.push(R.Estaciones)
            })
            console.log(res_db)
            console.log(arr)

            // corte = res_db.indexOf(estacion);
            // if (ests.indexOf(terminal) === 0) {
            //     ests = res_db.slice(corte, res_db.length)
            // } else {
            //     ests = res_db.slice(0, corte).reverse()
            // }
            corte = res_db.indexOf(estacion)

            if (arr.indexOf(terminal) === 0) {
                ests = arr.slice(corte, arr.length)
            } else {
                ests = arr.slice(0, corte).reverse()
            }
            let sql_tren = `
            SELECT IDtren AS SelectedTrain
                FROM json
                WHERE Linea = ? 
                    AND Terminal = ?
                    AND Estacion IN (`;

            const params = [linea, terminal];
            console.log({ TodasEstaciones: ests })
            ests.forEach((e, i) => {
                console.log(e, i)
                sql_tren += i < ests.length - 1 ? "?, " : "?)";
                params.push(e);
            })

            sql_tren += " ORDER BY Estacion LIMIT 1";

            console.log("SQL_Trenes: " + sql_tren);

            // Hacer la query
            const results = con.query(sql_tren, req.params, (error, results) => {
                if (error) {
                  res.status(404)
                  console.log("error")
                } else {
                  res.json(results)
                }
              })
              
              console.log({ ParamsSQLTrenes: params });
    
              const sql_vagones = `
                  SELECT * FROM json
                  WHERE IDtren = '` + results + "';"
  
              console.log({ SQLVagones: sql_vagones, SQLParams: params })
              ////////hasta aca 
              con.query(sql_vagones, req.params, (err, res_vagones) => {
                  console.log({ Vagones: res_vagones })
                  console.log(err)
                  res.json(res_vagones)
              })
            }

               
            }

    )
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../front-subite/index.html'));
})

//hola
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
