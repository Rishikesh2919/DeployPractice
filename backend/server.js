const express = require('express');
const  mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const authRouter=require('./routes/auth');
app.use('/auth', authRouter);

const uri = 'mongodb://localhost:27017/mydatabase';
mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});