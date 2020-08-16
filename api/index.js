const server = require('./server.js');

const PORT = process.env.PORT || 4001;

const initializeSite = require('./site.js')

initializeSite().then(site => {
  server.use('/api', site.retrieveServer())
  server.get('/api/site', (req, res) => {
    res.json(site)
  })
  server.listen(PORT, () => { console.log("Server active.")});
})

