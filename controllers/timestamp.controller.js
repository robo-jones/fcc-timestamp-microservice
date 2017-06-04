const parseDate = function(req, res) {
    let queryString = req.url.params;
    let date = new Date(queryString);
    
    if (date) {
        res.json({
            unix: date.valueOf(),
            natural: date.toDateString()
        });
    } else {
        res.json({
            unix: undefined,
            natural: undefined
        })
    }
}

export default {
    parseDate
};