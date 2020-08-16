const Site = require('./components/asteroid/site')
let site = new Site()


let initSite = async () => {
    site = site.initializeResources()
    return site
}



module.exports = initSite