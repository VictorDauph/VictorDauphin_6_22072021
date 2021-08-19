//Cette ligne importe Mongoose (on a besoin de Mongoose car Mongoose permet de créer des schémas de données.)
const mongoose = require('mongoose');

//Ce code permet de créer un schéma de données exploitable: chaque instance représente une sauce.
const saucesSchema = mongoose.Schema({
    userId: {type:String, required:true},
    name: {type:String, required:true},
    manufacturer: {type:String, required:true},
    description: {type:String, required:true},
    mainPepper: {type:String, required:true},
    imageUrl: {type:String, required:true},
    heat: {type:Number, required:true},
    likes: {type:Number, required:true},
    dislikes: {type:Number, required:true},
    usersLiked: {type:Array, required:true},
    usersDisliked: {type:Array, required:true},
});

//Cette ligne exporte le schéma de données comme modèle exploitable dans le projet (nomDuModele,variableDuSchema)
module.exports = mongoose.model('Sauce', saucesSchema);

