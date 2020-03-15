const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(parser.json());
app.use(express.static(path.join(__dirname, './dist')));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
