const express = require('express');
const router = express.Router();
const auth = require('./auth/index'),
      blog = require('./blog/index'),
      effects = require('./effects/index'),
      replications = require('./replications/index'),
      users = require('./users/index'),
      invitations = require('./invitations/index');


router.use('/auth', auth)
      .use('/blog', blog)
      .use('/effects', effects)
      .use('/replications', replications)
      .use('/users', users)
      .use('/invitations', invitations)
      
      .use(function (err, req, res, next) {

      if (err['type'] === 'API') {
            let error = { name: err['name'], message: err['message'] };
            res.status(400).send({ error });
      } else {
            console.log(err);
            res.status(500).send(err);
      }

});

module.exports = router;