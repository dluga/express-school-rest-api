const createError = require('http-errors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './config/.env') });
const express = require('express');
const bodyParser = require('body-parser');
const log = require('./helpers/logger')(module);
const TeacherRouter = require('./routes/Teacher');

const app = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Express school rest api');
});

app.use('/api', TeacherRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.SERVER_PORT, () => {
  log.info(`App listening on port ${process.env.SERVER_PORT}`);
});
