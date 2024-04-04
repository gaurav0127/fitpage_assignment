const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/', index);
app.use('/api/reviews', reviewRoutes);

// Start server
const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
