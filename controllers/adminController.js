const Product = require('../models/product')

exports.getAddProduct = (req, resp, next) => {
  resp.render("admin/add-product", {
    docTitle: "Add Products",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, resp, next) => {
  const productData={
    title:req.body.title,
    price:req.body.price,
    description:req.body.description,
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kjiAPB0HjVXFTmD-uKxcphqm_qN3P2UC4g&s'
  }
  const product=new Product(productData)
  product.save()
  resp.redirect("/");
};




exports.getAllProducts =  (req, resp, next) => {
    Product.fetchAll(product => {
      resp.render("admin/product-list", {
        products: product,  
        docTitle: "Admin - Product List",
        path: "/admin/product-list",
      });
    })
  };
