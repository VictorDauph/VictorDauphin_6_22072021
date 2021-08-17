//importation framework express
const express = require('express');

//chargement du middleware niveau router
const router = express.Router();

//importation fichier controlleur
const userCtrl = require('../controllers/userControllers');

//on utilise des routes post car les requêtes doivent contenir des informations: email et mdp 
router.post('/signup',userCtrl.signup);
router.post('/login',userCtrl.login);

module.exports = router;