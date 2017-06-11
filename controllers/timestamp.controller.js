const parseDate = function(req, res) {
    let queryString = req.params.date;
    let date;
    
    if (/\d{9}/.test(queryString)) {
        date = new Date(Number(queryString));
    } else {
        date = new Date(queryString);
    }
    console.log(date);
    
    if (date.toDateString() !== 'Invalid Date') {
        res.json({
            unix: date.valueOf(),
            natural: date.toDateString()
        });
    } else {
        res.json({
            unix: null,
            natural: null
        })
    }
}

export default {
    parseDate
};