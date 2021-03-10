// Require Modules
const express = require('express');
// We'll require it like this
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

// Create the Express App
const app = express();


// Configure the App (app.set)

// We'll use the ejs view engine
app.set('view engine', 'ejs'); 

// Mount Middleware (app.use)
app.use('/', indexRouter);
app.use('/todos', todosRouter);

// Mount Routes
app.use('/', indexRouter);

// Tell the App to Listen on Port 3000
app.listen(3000, function() {
    console.log('Express is listening on port 3000');
});
