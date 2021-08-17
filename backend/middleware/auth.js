const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'SuuPthNrUjrN'); //clé de cryptage. elle doit correspondre à la clé utilisée dans la fonction login.
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId){ // S'il y'a un user Id dans la requête et qu'il est différent de celui contenu dans le token
            throw 'User Id non valable';
        } else {
            next(); //Ce middleware est utilisé par d'autres middlewares avant de faire quoi que se soit. si l'authentification rate, alors il bloque le processus. Sinon il passe au middleware suivant.
         }
    } catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée'});
    }
};