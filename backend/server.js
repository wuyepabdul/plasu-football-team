import express from 'express';
import morgan from 'morgan';
import dbConnection from './config/dbConnection.js';
import dotenv from 'dotenv';
import userRoutes from './routes/authroute.js';
import competitionRoutes from './routes/competitonRoute.js';

dotenv.config();

const app = express();

dbConnection();

app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));

app.use('/api/auth', userRoutes);
app.use('/api/competition', competitionRoutes);

app.get('/', (req, res) => {
  res.json({ plasu_sports_team: 'Welcome to Plasu-Sports-Team' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
