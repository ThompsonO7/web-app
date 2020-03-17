const express = require('express');
js
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const students = [{
        "name": "THOMPSON",
        "dob": "1/1/91",
        "program": "BSC CS",
        "level": "400",
        "image": "/images/thompson.jpg"
    },
    {
        "name": "MARY JAMES",
        "dob": "1/1/93",
        "program": "BSC CS",
        "level": "200",
        "image": "/images/mary.jpg"
    },
    {
        "name": "KELVIN OHENE",
        "dob": "10/10/2000",
        "program": "BSC MIS",
        "level": "300",
        "image": "/images/kelvin.jpg"
    }
]


app.get('/', (req, res) => {
    res.render("home", {
        students
    });
});

//This is a route to a single student
app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    const student = students[id];
    res.render("details", {
        student,
        title: 'Details'
    });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});