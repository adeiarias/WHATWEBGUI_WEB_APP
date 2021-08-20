const router = require('express').Router();
let Scan = require('../models/scan.model');

router.route('/').get((req, res) => {
    Scan.find()
    .then(scans => res.json(scans))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;  