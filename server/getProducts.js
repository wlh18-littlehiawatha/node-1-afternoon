const products = require('../products.json');  // why is this not ../server/getProducts ?

const getProducts = (req, res) => {
   
   if (req.query.price){
      const items = products.filter(e => e.price >= +req.query.price);
      return res.status(200).send(items);
   }

   res.status(200).send(products);
}

module.exports = getProducts;





