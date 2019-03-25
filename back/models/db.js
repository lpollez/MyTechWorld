var mongoose = require('mongoose');

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true // deprecated à terme
}

mongoose.connect('mongodb://lpollez:lpollez35@ds149479.mlab.com:49479/mytechworld',
    options,
    function(err) { // cette fonction s'execute à la connexion (erreur ou pas)
      console.log(err);
    }
);
