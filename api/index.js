//Prepare the server
const express = require('express');
const server = express();
require('dotenv').config();

const cors = require('cors');

// Configure CORS with proper options including production domain
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Allow these origins
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001', 
      'http://localhost:8080',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001',
      'http://127.0.0.1:8080',
      'https://interactivelabscience-duplicate.netlify.app',
      'http://interactivelabscience-duplicate.netlify.app',
      'https://interactivelabscience-demo-duplicate.netlify.app/',
      'http://interactivelabscience-demo-duplicate.netlify.app/',
      'https://homeschoollabsdemo.com',
      'http://homeschoollabsdemo.com'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies and authentication headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

server.use(cors(corsOptions));

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