import timestamp from '../controllers/timestamp.controller.js';

export default function(app) {
    app.get('/api/:date', timestamp.parseDate);
}