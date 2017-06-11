import express from 'express';
import timestampRouter from '../routes/timestamp.routes.js';

let app = express();
timestampRouter(app);

app.use(express.static('public'));

export default app;