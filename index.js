const express = require('express');
const cors = require('cors');
const driverRouter = require('./routes/driver.routes');
const parkingRouter = require('./routes/parking.routes');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api', driverRouter);
app.use('/api', parkingRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
