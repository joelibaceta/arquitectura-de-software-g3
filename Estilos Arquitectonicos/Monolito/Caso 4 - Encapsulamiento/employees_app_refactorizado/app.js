const express = require('express');
const app = express();
app.use(express.json());

const employeeRoutes = require('./employees');
app.use('/employees', employeeRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));