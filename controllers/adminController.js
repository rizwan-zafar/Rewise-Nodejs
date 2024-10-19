const Product = require('../models/product')

exports.getAddProduct = (req, resp, next) => {
  resp.render("admin/add-product", {
    docTitle: "Add Products",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, resp, next) => {
  const product=new Product(req.body.title)
  product.save()
  resp.redirect("/");
};

