//Cette ligne importe Mongoose (on a besoin de Mongoose car Mongoose permet de créer des schémas de données.)
const mongoose = require('mongoose');

//Ce code permet de créer un schéma de données exploitable: chaque instance représente un like ou un dislike.
const likeSchema = mongoose.Schema({
    userId: {type:String, required:true},
    like: {type:Number, required:true},
});

//Cette ligne exporte le schéma de données comme modèle exploitable dans le projet (nomDuModele,variableDuSchema)
module.exports = mongoose.model('Like', likeSchema); 