const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
const axios = require('axios')
const r = require('rethinkdb')
require('dotenv').config()

app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(`${__dirname}/../build`))

let connection
r.connect(
  {
    host: `${process.env.serverip}`,
    port: `${process.env.rethinkdbport}`,
    db: 'jaclyn',
    user: `${process.env.rethinkdbuser}`,
    password: `${process.env.rethinkdbpw}`
  },
  function (err, conn) {
    if (err) console.log('error in connection: ', err)
    console.log(`here is conn: ${conn}`)
    connection = conn
    app.set('reThinkDB', conn)
  }
)

setTimeout(() => {
  console.log('Connected to rethinkdb server: ', connection.host)
}, 3000)

getPatients = res => {
  r.table('patients').run(connection, (err, cursor) => {
    if (err) console.log(err)
    cursor.toArray((err, data) => {
      res.status(200).send(data)
    })
  })
}

let patients = []

app.get('/api/test', (req, res) => {
  res.status(200).send({ message: 'It works' })
})

app.get(`/api/getPatients`, (req, res) => {
  getPatients(res)
})
app.get('/api/getCharges', (req, res) => {
  getPatients(res)
})

app.get('/api/patientSearch', (req, res) => {
  console.log(req.query)
  patients.map(patient => {
    return patient
  })
})

app.post('/api/addPatient', (req, res) => {
  console.log(req.body)
  // patients.push(req.body.patient)
  r.table('patients')
    .insert(req.body.patient)
    .run(connection, (err, data) => {
      console.log(data)
      getPatients(res)
    })
})

app.post('/api/addCharge', (req, res) => {
  console.log(req.body)
  r.table('charges')
    .insert(req.body.charge)
    .run(connection, (err, data) => {
      console.log(data)
      getPatients(res)
    })
})

app.put('/api/updateCharges', (req, res) => {
  console.log(req.body) // this is the request body coming through
  r.table('patients')
    .get(req.body.id)
    .update({ charges: req.body.tempArr }) // target patients table, get patient that you want to update by id, then update charges array
    .run(connection, (err, data) => {
      console.log(data)
      getPatients(res)
    }) // send the response back using reusable function
})

app.delete('/api/deletePatient/:id', (req, res) => {
  console.log(req.params)
  r.table('patients')
    .get(req.params.id)
    .delete()
    .run(connection, (err, data) => {
      console.log(data)
      getPatients(res)
    })
})

app.delete('api/deleteCharge/:id', (req, res) => {
  console.log(req.params)
  r.table('charges')
    .get(req.params.id)
    .delete()
    .run(connection, (err, data) => {
      console.log(data)
      getPatients(res)
    })
})

const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"))
})

const port = 4000
app.listen(port, () => console.log(`Server listening on port ${port}`))
