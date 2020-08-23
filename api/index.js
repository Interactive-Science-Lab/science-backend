//Initializes the server for use, including any functional routes
const server = require('./core.js');

//gets a Site Component ready
const Site = require('./components/asteroid/site')
let site = new Site()


//InitializeResources is a call that calls the DB to get all of the information for the Resources
site.initializeResources().then(site => {

  //This attaches all the main routes 
  server.use('/api', site.retrieveServer())

  //This returns the key information that goes straight the front end.
  server.get('/api/site', (req, res) => {
    res.json(site)
  })

  //Actually start the server
  const PORT = process.env.PORT || 4001
  server.listen(PORT, () => { console.log("Server active.") });

})

