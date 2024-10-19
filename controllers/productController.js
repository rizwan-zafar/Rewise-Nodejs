const Product = require('../models/product')

exports.getAddProduct = (req, resp, next) => {
  resp.render("add-product", {
    docTitle: "Add Products",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, resp, next) => {
  const product=new Product(req.body.title)
  product.save()
  resp.redirect("/");
};

exports.getAllProducts = async (req, resp, next) => {
  Product.fetchAll(product => {
    resp.render("shop", {
      products: product,  
      docTitle: "Shops",
      path: "/",
    });
  })
 
 
};
