const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// model, no padrão mvc, é um schema no banco de dados.


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true }
);
require('./models/Product');

//const Product = mongoose.model('Product');

// Para que o schema seja carregado no banco de dados preciso acessar a rota da aplicação!!!!

app.use('/api', require('./routes/routes'));


app.listen(3002, () => {
  console.log('server started!');
})
