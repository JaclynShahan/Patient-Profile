const express = require('express');
const cors = require('cors');
const bodyParser = require(body-parser);
const massive = require('massive');
const axios = require('axios');

app = express();
app.use(bodyParser.json());
app.use(cors());

let patients = [];

app.get('/api/test', (req, res) => {
    res.status(200).send({message: 'It works'})
})

app.get('/api/patientSearch', (req, res) => {
    console.log(req.query)
   patients.map((patient) => {
       return (patient)
   })
})

app.post('/api/addPatient', (req, res) => {
    console.log(req.body)
    patients.push(req.body.patient)
    res.status(200).send(patients)
})

app.delete('/api/deleteUser/:id', (req, res) => {
    console.log(req.params)
    patients.splice(req.params.id, 1)
    res.status(200).send(patients)
})
const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));