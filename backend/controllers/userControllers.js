//importation du package bcrypt pour cryptage mots de passe
const bcrypt = require('bcrypt');
//importation du package de génération de tokens
const jwt = require('jsonwebtoken');

//importation schéma de données
const User = require('../models/userModels');

//fonction de création de compte
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) //méthode asynchrone de cryptage du mot de passe
    .then( hash => {
        const user = new User ({ //User est le schéma de données créé dans userModels, hash est le hash du mot de passe crée et crypté
            email:req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({message: 'utilisateur créé'}))
        .catch(error => res.status(400).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};

//Fonction de login utilisateur
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if(!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé'});
        }
        bcrypt.compare(req.body.password, user.password)
        .then( valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de pass invalide'})
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId:user._id}, //permet d'encoder l'information du user Id dans le token. Ce qui permettra de vérifier le user ID à la modification d'objets.
                    'SuuPthNrUjrN', //clé secrète d'encodage
                    { expiresIn: '24h'} //configuration d'expiration du token.
                )
            });
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status.status(500).json({ error }))
};
