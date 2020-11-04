const express = require('express'); // allows the web page/server to use express code
const app = express(); // uses the express framework
const port = 3000; // ports the information to this localhost server 
const path = require('path'); // allows the web page/server to use the path
const bodyParser = require("body-parser"); // allows web page/server to use the body-parser code

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => { /* sends a request to the server for response and then sends the information below to the screen */
  res.send('Welcome to DataRepresentation & Querying!'); 
})

app.get('/hello/:name', (req, res)=>{ /*sends a request to the server for response and then sends the information to both the screen in the url and the console window with your inputted name */
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})


app.get('/api/movies', (req, res)=>{ /*sends a request to the server for response and then sends the json data below to the screen */
    const mymovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    res.json({movies:mymovies}); // ensures the server responds and sends the json data to the screen under the /api/movies url
});

app.get('/test', (req, res)=>{ /* sends the request to the index.html for response under the /test url for the get and post forms */
    res.sendFile(__dirname + '/index.html');
})

app.get('/name', (req, res)=>{ /* sends the request to the web page/server and ouputs the submitted details to the url */
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

app.post('/name', (req, res)=>{ /* sends the request to the web page/server and ouputs the submitted details to the web page */
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

app.listen(port, () => { /* gets the app to listen and output the functionality and information to the screen */
  console.log(`Example app listening at http://localhost:${port}`)
})