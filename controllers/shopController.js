const Product = require("../models/product");

exports.getAllProducts = (req, resp, next) => {
  Product.fetchAll((product) => {
    resp.render("shop/product-list", {
      products: product,
      docTitle: "Products",
      path: "/products",
    });
  });
};

exports.getIndex = (req, resp, send) => {
  resp.render("shop/index", {
    docTitle: "Shop",
    path: "/",
  });
};

exports.getProductDetail = (req, resp, send) => {
  const productId = req.params.id;
  Product.findById(productId, (product) => {
    resp.render("shop/product-detail", {
      docTitle: product.title,
      path: "/products",
      product: product,
    });
  });
};

exports.getMyCart = (req, resp, next) => {
  resp.render("shop/cart", { docTitle: "Cart", path: "/cart" });
};

exports.postCart=(req, resp, next) => {
    console.log("add to card", req.params.id);
  }

///////////////// Cart Function //////////////
