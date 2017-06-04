import timestamp from '../controllers/timestamp.controller.js';

export default function(app) {
    app.get('/', function(req, res) {
        res.end('Hello, World!');
    });
    app.get('/api/:date', timestamp.parseDate);
}