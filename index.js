const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
require('dotenv').config();

// DB Connect
mongoose
  .connect(
    `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${
      process.env.MONGO_DB_DB
    }`,
    { useNewUrlParser: true }
  )
  .catch(err => {
    console.error('Error connecting to MLAB -->', err);
  });

const db = mongoose.connection;

//check connection
db.once('open', () => {
  console.log('Connected To MongoDB');
});

//init app
const app = express();

// Express Session Middleware
app.use(
  session({
    secret: 'DUHbOKq811bbEDahaz1xHs8t6',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: db,
      autoRemove: 'interval',
      autoRemoveInterval: 30, // In minutes. Default
      ttl: 1 * 8 * 60 * 60 // = 8 hours
    })
  })
);

// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

//start server
app.listen(process.env.PORT, () => {
  console.info('Server started on port 3000....');
});
