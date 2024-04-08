const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Try again!');
});

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
