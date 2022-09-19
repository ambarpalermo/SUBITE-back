const Sequelize = require('sequelize')

const bd = new Sequelize("proyecto_subite", "root", "rootroot", {
    host: "localhost",
    dialect: "mysql"
})

export default bd