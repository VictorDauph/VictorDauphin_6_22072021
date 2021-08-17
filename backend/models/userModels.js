//Cette ligne importe Mongoose (on a besoin de Mongoose car Mongoose permet de créer des schémas de données.)
const mongoose = require('mongoose');

//Apelle le package unique-validator qui gère les doublons d'email
const uniqueValidator = require('mongoose-unique-validator');

//Ce code permet de créer un schéma de données exploitable
const userSchema = mongoose.Schema({
    email: {type:String, required:true, unique:true}, //unique:true, pour éviter que plusieurs utilisateurs aient la même adresse email
    password: {type:String, required:true},
});

//Utilise le package unique Validator sur le schema de données pour mieux gérer les erreurs.
userSchema.plugin(uniqueValidator);

//Cette ligne exporte le schéma de données comme modèle exploitable dans le projet (nomDuModele,variableDuSchema)
module.exports = mongoose.model('User', userSchema);