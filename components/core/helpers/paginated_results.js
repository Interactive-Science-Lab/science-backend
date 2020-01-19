const paginate = require('jw-paginate')

function results(req, items){
    // get page from query params or default to first page
    const page = parseInt(req.query.page) || 1;

    // get pager object for specified page
    const pageSize = 6;
    const pager = paginate(items.length, page, pageSize);

    // get page of site_blogs from site_blogs array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    //return pager object and current page of site_blogs
    return {pager, pageOfItems}
}

module.exports = {results}