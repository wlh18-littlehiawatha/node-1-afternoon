const products = require('../products.json')

const getProduct = (req, res) => {

   const item = products.find(e => e.id === +req.params.id);
   if (item) {
      res.status(200).send(item);
   } else {
   return res.status(500).send("item not in list");
}


}

module.exports = getProduct 