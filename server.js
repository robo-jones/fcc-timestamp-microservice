import app from './config/express';

const url = process.env.PORT;

app.listen(url);
console.log('Server running on port ' + url);