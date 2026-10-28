
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Use routes.js
app.use('/routes', routes);

// Get a user by ID
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// New post
app.get('/new', (req, res) => {
    res.send('New Post');
});

// Edit a post
app.get('/edit/:id', (req, res) => {
    res.send(`Edit Post ${req.params.id}`);
});

// Country, state and city
app.get('/country/:country/state/:state/city/:city', (req, res) => {
    const { country, state, city } = req.params;

    res.json({
        country: country,
        state: state,
        city: city
    });
});

// Basic response
app.get('/response', (req, res) => {
    res.send('Application response');
});

// HTTP status code
app.get('/not-found', (req, res) => {
    res.status(404).send('Resource not found');
});

// HTTP headers
app.get('/headers', (req, res) => {
    res
        .status(200)
        .set('Content-Type', 'text/plain; charset=utf-8')
        .set('X-Custom-Message', 'Custom response header')
        .send('HTTP header example');
});

// Plain text
app.get('/text', (req, res) => {
    res.type('text/plain');
    res.send('Plain text response');
});

// HTML
app.get('/html', (req, res) => {
    res.type('html');
    res.send('<h2>Welcome to Express</h2>');
});

// JSON
app.get('/json', (req, res) => {
    res.json({
        message: 'This is a JSON response'
    });
});

// Content negotiation
app.get('/format', (req, res) => {
    res.format({
        'text/plain': () => {
            res.send('Plain text response');
        },
        'text/html': () => {
            res.send('<h2>Welcome</h2>');
        },
        'application/json': () => {
            res.json({ message: 'Welcome' });
        },
        default: () => {
            res.status(406).send('Not Acceptable');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
