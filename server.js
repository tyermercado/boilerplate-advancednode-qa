'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const session = require('express-session');
const passport = require('passport');
<<<<<<< HEAD
const routes = require('./routes.js');
const auth = require('./auth.js');
=======
>>>>>>> 8e2eef5aa6027d5f0547115a136c5101ca0c4ad7

const app = express();
app.set('view engine', 'pug');

<<<<<<< HEAD
app.set('view engine', 'pug');
app.set('views', './views/pug');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

=======
>>>>>>> 8e2eef5aa6027d5f0547115a136c5101ca0c4ad7
fccTesting(app); // For fCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  routes(app, myDataBase);
  auth(app, myDataBase);
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to connect to database' });
  });
});
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
=======
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

app.route('/').get((req, res) => {
  // Change the response to render the Pug template
  res.render(process.cwd() + '/views/pug/index', { title: 'Hello', message: 'Please login' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port ' + process.env.PORT);
>>>>>>> 8e2eef5aa6027d5f0547115a136c5101ca0c4ad7
});