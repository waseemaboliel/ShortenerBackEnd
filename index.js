const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');



//Connect to database
connectDB();

app.use(express.json({ extented: false }));// allows us to accept json data into our api
app.use(cors());

// Define Routes

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

