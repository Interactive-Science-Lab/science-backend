//Prepare the server
const express = require('express');
const server = express();
require('dotenv').config();

const cors = require('cors');
server.use(cors());

server.use(express.json());

//gets the Site Component ready
const Site = require('./components/asteroid/site')
let site = new Site()

//InitializeResources is a call that calls the DB to get all of the information for the Resources
site.initializeResources().then(site => {

  server.get('/', (req, res) => {
    res.send("Your API is successfully connected");
  })

  //This attaches all the main routes 
  server.use('/api', site.retrieveServer())

  //This returns the key information that goes straight the front end.
  server.get('/api/site', (req, res) => {
    res.json(site)
  })

  //This is the code for authorizing login and logout.
  server.use('/api/auth', site.attachAuth())

  //Finally actually start the server
  const PORT = process.env.PORT || 4001
  server.listen(PORT, () => { console.log("Server active.") });

})

module.exports = site