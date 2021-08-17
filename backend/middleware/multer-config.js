//importation de multure, package de gestion des fichiers
const multer = require('multer');

//dictionnaire des extensions de fichiers
const MIME_TYPES = { 
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  };

const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, 'images') //images est le dossier de destination
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension );
    }
});

module.exports = multer({storage}).single('image');