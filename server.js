const express = require('express');
const app = express();
const cors = require('cors');

const port = 8000;

app.use(cors(), express.json(), express.urlencoded({extended: true}));

require("./server/config/mongoose.config");

require("./server/routes/authors.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port} 🍡🍡🍡`));