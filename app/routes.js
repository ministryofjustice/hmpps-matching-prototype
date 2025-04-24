const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
require('./routes/v7/routing.js')(router);
require('./routes/v9/routing.js')(router);
require('./routes/v10/routing.js')(router);
require('./routes/v12/routing.js')(router);
require('./routes/v13/routing.js')(router);
require('./routes/v14/routing.js')(router);
require('./routes/v15/routing.js')(router);
require('./routes/v16/routing.js')(router);




module.exports = router
