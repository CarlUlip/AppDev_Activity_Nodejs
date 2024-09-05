const express = require('express');
const path = require('path');
const app = express();
const PORT = 5435;

const carlRoute = require('./routes/carl');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const ulipRoute = require('./routes/ulip');

app.use(express.static(path.join(__dirname, 'router')));

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.use('/carl', carlRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/ulip', ulipRoute);

app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});