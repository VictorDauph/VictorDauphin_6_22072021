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

À partir de la version 4.16 d'Express, bodyparser est inclus et vous
n'avez pas besoin de l'installer.
Utilisez ( express.json() ) pour analyser le corps de la requête.

Lancer le serveur: depuis le terminal dans le dossier backend:

nodemon server

Si le serveur fonctionne le terminal doit afficher
"Listening on port 3000"