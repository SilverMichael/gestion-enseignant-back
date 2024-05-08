const router = require("express").Router()
const controller = require("../controllers/enseignant.controllers")

router.get('/', controller.getAllEnseignant)
router.post('/add', controller.addEnseignant)
router.put('/update', controller.updateEnseignant)
router.delete('/delete/:num', controller.deleteEnseignant)

module.exports = router