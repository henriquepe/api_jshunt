// quem lida com as operações em determinado model

const mongoose = require('mongoose');

const Product = mongoose.model('Product', 'products');

module.exports = {
  async index(req, res){
    const { page=1 } = req.query;

    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  async store(req, res) {
    const {title, description, url} = req.body
    const product = {
      title,
      description,
      url
    }
    await Product.create(product);
    return res.json(product);
  },

  async show(req, res){
    const {id} = req.params;

    const product = await Product.findById(id);

    return res.json(product);
  },

  async update(req, res){
    const { title, description, url} = req.body;

    const product = {
      title, 
      description,
      url
    }

    await Product.findByIdAndUpdate(req.params.id, product, {new: true});

    return res.json({
      message: "Updated",
      product
    });

  },

  async destroy(req, res){
    try{
    const product = await Product.findById(req.params.id);

    if(!product){
      throw new Error;
    }

    await Product.findByIdAndRemove(req.params.id);

    return res.json({message: "Deleted", product});}
    catch(err){
      res.json({error: "This product was not found, please try another(correct) id"});
    }
  },

  async destroyAll(req, res) {
    
    //await Product.remove();
    await Product.deleteMany();

    res.json({message: "All data was deleted!"});
  }
}