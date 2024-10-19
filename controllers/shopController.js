
const Product = require('../models/product')

exports.getAllProducts =  (req, resp, next) => {
    Product.fetchAll(product => {
      resp.render("shop/product-list", {
        products: product,  
        docTitle: "Products",
        path: "/products",
      });
    })
  };

  exports.getIndex = ((req,resp,send)=>{
    resp.render('shop/index', {
        docTitle: "Shop",
        path: "/",
      })
  })