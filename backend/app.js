// Cette ligne intègre express au projet
const express = require('express');

//Cette ligne importe Mongoose
const mongoose = require('mongoose');

// Cette ligne indique qu'on peut appeler Express avec la constante app
const app = express();

//Ce code sert à se connecter au serveur MongoDB Atlas qui gère la bAse de Donnée
mongoose.connect("mongodb+srv://Victor:Victor@piiquante.iqjgk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Ce middleware indique dans la console du serveur qu'une requête a été reçue.
app.use((req, res, next) => {
    console.log('Requête reçue!');
    next();
});

//ce middleware génère des headers pour gérer la sécurité CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Ce middleware parse le body de toutes les requêtes en JSON pour être utilisables.
app.use(express.json());

//Ce middleware créé une route POST pour ajouter des objets.
app.post('/api/stuff', (req, res, next) =>{
    console.log(req.body,"post reçue");
    res.status(201).json({
        message:'objet créé!'
    });
});

// /api/stuff est l'URI route. app.use traite tous les types de requêtes CRUD par défaut. Les objets stuff sont formatés selon ce qui est attendu par le front-end.
app.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });
module.exports = app;
