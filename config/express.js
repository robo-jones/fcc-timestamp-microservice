import express from 'express';
import timestampRouter from '../routes/timestamp.routes.js';

let app = express();
timestampRouter(app);

export default app;