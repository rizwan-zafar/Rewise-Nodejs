const Product = require("../models/product");
const Cart = require("../models/cart");

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

exports.postCart = (req, resp, next) => {
  const productId = req.params.id;
  Product.findById(productId, (product) => {
    Cart.addToCart(req.params.id, Number(product.price));
    resp.redirect("/cart");
  });
};

///////////////// Cart Function //////////////
