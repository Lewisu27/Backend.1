const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

const authRoutes = require('./route/authRoutes');
const userRoutes = require('./route/userRoutes');

app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.get('/',function(req,res){
    res.send("Lewis Rey, BSCS");
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

const PORT = 8000;
app.listen(PORT, ()=> {
    console.log('Server is running on port ${PORT}');
});