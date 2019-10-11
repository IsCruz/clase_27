const express = require('express');
const app = express();


app.post('/users', function(req, res) {
    res.status(200).json({
        result: 'success',
        status: 200
    });
});

app.listen(3000, () => {
    console.log('server is running on Port 3000');
});