const con = require("../config/dataBase");

module.exports.getAllEnseignant = async (req, res) => {
    con.query("SELECT * FROM enseignant", function(err, results) {
        if(err) throw err
        res.status(200).json(results)
    })
}

module.exports.addEnseignant = async (req, res) => {
    try {
        console.log(req.body)
        var post = {
            numens: req.body.numens,
            nom: req.body.nom, 
            nbheures: req.body.nbheures,
            tauxhoraires: req.body.tauxhoraires
        }

        var sql = "INSERT INTO enseignant SET ?"
        con.query(sql, post, function(error, result){
            if(error) throw error
            res.status(200).json(result)
        })
    } catch (error) {
        throw(error)
    }
}

module.exports.updateEnseignant = async (req, res) => {
    try {
        console.log(req.body)
        var post = {
            nom: req.body.nom, 
            nbheures: req.body.nbheures,
            tauxhoraires: req.body.tauxhoraires
        }
        var sql = "UPDATE enseignant SET ? WHERE numens= ?"
        con.query(sql, [post, req.body.num], function(error, result){
            if(error) throw error
            res.status(200).json(result)
        })
    } catch (error) {
        throw error
    }
}

module.exports.deleteEnseignant = async(req, res)=> {
    try {
        var sql = "DELETE FROM enseignant WHERE numens = ?"
        con.query(sql, req.params.num, function(error, results, fields){
            if(error) throw error
            res.status(200).send({message: 'enseignant deleted'})
        })
    } catch (error) {
        throw error
    }
}