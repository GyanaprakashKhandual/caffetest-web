const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.route');
const projectRoutes = require('./routes/project.route');
const bugRoutes = require('./routes/bug.route');



dotenv.config();

const app = express();
app.use(express.json());


const allowedOrigins = ['http://localhost:3000', 'https://nexorium.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

app.use(cookieParser());



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/bugs', bugRoutes);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Running On http://localhost:${PORT}`);
});