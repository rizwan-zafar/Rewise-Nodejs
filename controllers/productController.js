const products = [];

exports.getAddProduct = (req, resp, next) => {
  resp.render("add-product", {
    docTitle: "Add Products",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, resp, next) => {
  products.push({ title: req.body.title });
  resp.redirect("/");
};

exports.getAllProducts = (req, resp, next) => {
  resp.render("shop", {
    products: products,
    docTitle: "Shops",
    path: "/",
  });
};
