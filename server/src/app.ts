import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running 🚀' });
});

export default app;
