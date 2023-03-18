import express, { Express } from 'express';
import config from 'config';
import connectDB from './db/db.connect';

const port = config.get<number>('port');
const app: Express = express();

app.listen(port, async () => {
  console.log(`TS: server is running on port 🚀 ${port}`);
  await connectDB();
});
