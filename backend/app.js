const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000; 


const userRoutes = require('./routes/user');
const followingRoutes = require('./routes/followerInfo');
const postRoutes = require('./routes/postInformation');
const loginRegisterRoutes = require('./routes/loginRegister');

app.use(cors({
    origin: ['http://localhost:3000', 'https://shoe-media.vercel.app'],
    credentials: true
  }));
//app.use(express.json());

app.get('/', (req, res) => {
    res.send('hi')
});

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use('/postInfo', postRoutes);
app.use('/followingInfo', followingRoutes);
app.use('/users', userRoutes);
app.use('/loginActions', loginRegisterRoutes);
// added app.js instead of just /

/*
app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
});*/

module.exports = app;
