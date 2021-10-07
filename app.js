const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let teachers = [{
    firstName: 'Ghli',
    lastName: 'Shangol',
    id: 7788
},
{
    firstName: 'Kobra',
    lastName: 'Mangool',
    id: 6677
},
{
    firstName: 'Soghra',
    lastName: 'Mangool',
    id: 6678
},
]

app.get("/", (req, res) => res.send(teachers));
app.post("/add", (req, res) => {
    teachers.push(req.body);
    res.sendStatus(200);
} )

const port = process.env.PORT || 3001;
app.listen(port);
console.log(`listeing on port ${port} ...`)