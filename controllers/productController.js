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

exports.getAllProducts = (req, resp, next) => {
  resp.render("shop", {
    products: Product.fetchAll(), // static method directly called with Class not with its instance
    docTitle: "Shops",
    path: "/",
  });
};
