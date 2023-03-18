import express, { Express } from 'express';

const app: Express = express();

app.listen(4000, () => {
  console.log('TS: server is running on port 🚀 4000.');
});
