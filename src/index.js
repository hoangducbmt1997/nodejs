const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const path = require('path');

const port = 3000

const app = express();
app.use(morgan('combined'));

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));



// Create Route
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
  });

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
