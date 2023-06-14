const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config');
app.use(cors({origin: 'http://localhost:3000',}));
app.use(express.json());
app.use(express.urlencoded({ extend: true }));
require('./routes/inventory.routes')(app);
const port = 8000;

app.listen(port, () => console.log(`Holla if you hear me on port: ${port}.`));
