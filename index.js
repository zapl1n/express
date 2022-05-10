const express = require('express');
const app = express();



app.get('/user/:username', (req, res) => {
    let user = req.params.username;
    res.render('index.ejs',{username : user});
});


app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`);
});