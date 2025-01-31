const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
    res.send('Nodejs Backend Saying Hello!');
});

app.listen(port, () => {
    console.log(`Server is running on  http://localhost${port}`);
});

/*
Modify server.js to allow external connections
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});

trying to access the backend from another device in network (e.g., http://192.168.0.77:5000),
// ensure that the backend is configured to accept requests from external IPs.
*/ 