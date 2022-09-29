require('dotenv').config();
const path = require('path');
const express = require('express'); // npm installed
const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
// other configuration...
app.listen(3000);