const express = require('express');
const routes = require('./router');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen( process.env.PORT ?? 3334,
    ()=> process.env.PORT? console.log(process.env.PORT) :  console.log('Servidor ON na porta 3334')
);