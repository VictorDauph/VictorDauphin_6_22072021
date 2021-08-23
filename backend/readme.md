Si vous avez reçue l'application en format .zip pour évaluation:

Lancer le serveur: depuis le terminal dans le dossier backend:

nodemon server

Si le serveur fonctionne le terminal doit afficher
"Listening on port 3000"

--------------------------------------------------------------------------------
Si vous avez téléchargée l'application depuis le repo github.
L'API a besoin de plusieurs modules pour fonctionner correctement, elle est basée sur un server node et utilise le framework Express pour gérer le serveur et Mongoose pour gérer la Base de données. 

Dans le dossier backend, depuis le terminal:

1) Installer node.js et npm:
npm install

2) installer toutes les dépendances présentes dans ./package.json

3) créer un fichier nommé ".env" à la racine du dossier qui contient les variables:

    DB_STRING = #string de connection à la BDD
    PORT = #Port du serveur backend (3000 par défaut)
    SECRET_KEY = #Une clé secrète et aléatoire propre à l'environnement pour crypter les tokens
    MAX_REQUESTS = #nombre max de requêtes autorisées par adresses IP 100 par défauts sur un serveur de développement (sur une période de 15min)
    TOKEN_VALIDITY = "24h" #validité des tokens d'identification (24h par défaut)


Lancer le serveur: depuis le terminal dans le dossier backend:

nodemon server

Si le serveur fonctionne le terminal doit afficher
"Listening on port 3000"