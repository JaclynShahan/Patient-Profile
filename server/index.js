const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
const r = require('rethinkdb');
require('dotenv').config()

app = express();
app.use(bodyParser.json());
app.use(cors());

let connection;
r.connect( {
    host: `${process.env.serverip}`, 
    port:  `${process.env. rethinkdbport}`,    
    db: 'jaclyn',
    user: `${process.env.rethinkdbuser}`,
    password: `${process.env.rethinkdbpw}`
    }, function(err, conn) {
    if (err) console.log('error in connection: ', err)
    console.log(`here is conn: ${conn}`)
    connection = conn;
    app.set('reThinkDB', conn)
})

setTimeout(() => {
    console.log('Connected to rethinkdb server: ', connection.host)
}, 3000)

getPatients = (res) => {
    r.table('patients').run(connection, (err, cursor) => {
        if (err) console.log(err)
        cursor.toArray(
            (err, data) => {
                res.status(200).send(data)
            }
        )
    })
}

let patients = [];

app.get('/api/test', (req, res) => {
    res.status(200).send({message: 'It works'})
})

app.get(`/api/getPatients`, (req, res) => {
    getPatients(res)
})
app.get('/api/getCharges' , (req, res) => {
    getCharges(res)
})

app.get('/api/patientSearch', (req, res) => {
    console.log(req.query)
   patients.map((patient) => {
       return (patient)
   })
})

app.post('/api/addPatient', (req, res) => {
    console.log(req.body)
    // patients.push(req.body.patient)
    r.table('patients').insert(req.body.patient)
    .run(connection, (err, data) => {
        console.log(data)
        getPatients(res)
    })

})

app.post('/api/addCharge', (req, res) => {
    console.log(req.body)
    // patients.push(req.body.patient)
    r.table('charges').insert(req.body.charge)
    .run(connection, (err, data) => {
        console.log(data)
        getCharges(res)
    })

})

app.delete('/api/deletePatient/:id', (req, res) => {
    console.log(req.params)
r.table('patients').get(req.params.id).delete().run(connection, (err, data) => {
    console.log(data)
    getPatients(res)
})
   // patients.splice(req.params.id, 1)
})

app.delete('api/deleteCharge/:id', (req, res) => {
    console.log(req.params)
    r.table('charges').get(req.params.id).delete().run(connection, (err, data) => {
        console.log(data)
        getCharges(res)
    })
})
const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));