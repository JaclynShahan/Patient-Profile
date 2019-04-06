const express = require('express');
const cors = require('cors');
const bodyParser = require(body-parser);
const massive = require('massive');
const axios = require('axios');

app = express();
app.use(bodyParser.json());
app.use(cors());


const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));