import express from 'express';
import path from 'path';
import { responses } from './responses/responses.mjs';
import { middleware } from './middlewares/middleware.mjs';
import { fileURLToPath } from 'url';
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import mongoose from 'mongoose';

const port = 3000;

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

middleware(app);
responses(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});