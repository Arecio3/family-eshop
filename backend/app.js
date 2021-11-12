const express = require('express');
const app = express();

// specify inital route
app.get('/', (req, res) => {
    res.send('Hello API!')
})

// Run server with msg on success
app.listen(3000, () => {
    console.log('Backend Server running on http://localhost:3000')
})