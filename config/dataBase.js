const mysql = require("mysql")
const con = mysql.createPool({
    host:"localhost",
    port: "3306",
    database:"gestionenseignant",
    user:"root",
    password:""
})

module.exports = con