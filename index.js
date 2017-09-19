const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/mongodb');

require('./dbModels/User');
require('./services/passport');

mongoose.connect(dbConnect.mongoURI);



const app = express('');
require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;

app.listen(PORT);
