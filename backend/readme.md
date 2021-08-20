Si vous avez téléchargée l'application depuis le repo github.
L'API a besoin de plusieurs modules pour fonctionner correctement, elle est basée sur un server node et utilise le framework Express pour gérer le serveur et Mongoose pour gérer la Base de données. 

Dans le dossier backend, depuis le terminal:

1) Installer node.js et npm:
npm install

2)installer nodemon
npm install -g nodemon

3) installer Express
npm install --save express

4) installer Mongoose
npm install --save mongoose

5) installer bcrypt
npm install bcrypt

6) installer json webtoken
npm install jsonwebtoken

7) installer mongoose unique validator
npm install --save mongoose-unique-validator

8) installer Multer pour la gestion des images:
npm install --save multer

9) installer dotenv (sécurisation environnement)
    9.1) npm i dotenv
    9.2) créer un fichier nommé ".env" à la racine du dossier qui contient les variables:

    DB_STRING = #string de connection à la BDD
    PORT = #Port du serveur backend (3000 par défaut)
    SECRET_KEY = #Une clé secrète et aléatoire propre à l'environnement pour crypter les tokens
    MAX_REQUESTS = #nombre max de requêtes autorisées par adresses IP 100 par défauts sur un serveur de développement (sur une période de 15min)

10) installer helmet.js
npm install helmet --save

11) installer password-validator
npm install password-validator

12) installer express-mongo-sanitize
npm install express-mongo-sanitize

13) installer express Rate Limit
npm install --save express-rate-limit

À partir de la version 4.16 d'Express, bodyparser est inclus et vous
n'avez pas besoin de l'installer.
Utilisez ( express.json() ) pour analyser le corps de la requête.

Lancer le serveur: depuis le terminal dans le dossier backend:

nodemon server

Si le serveur fonctionne le terminal doit afficher
"Listening on port 3000"