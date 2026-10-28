const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.send('First Express Application!');
});

// Hello route
router.get('/hello', (req, res) => {
    res.send('Hello!');
});

// Route parameter: name
router.get('/user/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`);
});

// Country, state and city
router.get('/country/:country/state/:state/city/:city', (req, res) => {
    const { country, state, city } = req.params;

    res.json({
        country: country,
        state: state,
        city: city
    });
});

module.exports = router;
