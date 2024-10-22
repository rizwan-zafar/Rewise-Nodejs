const { checkPrimeSync } = require("crypto");
const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "../", "data", "cart.json");

module.exports = class Product {
  static addToCart(productID,productPrice) {
    console.log("price", typeof productPrice, productPrice)
    fs.readFile(p, (error, fileContent) => {
      let cart = { products: [], GrandTotalPrice: 0 };

      try {
        if (!error) {
          cart = JSON.parse(fileContent);
        }

        // analize previous data,
        const existingProductIndex = cart.products.findIndex(
          (product) => product.id.toString() === productID
        );
        let updateProduct;
        if (existingProductIndex >= 0) {
          const exitingProduct = cart.products[existingProductIndex];
          exitingProduct.qty = exitingProduct.qty + 1;
          cart.products[existingProductIndex] = exitingProduct;
        } else {
          cart.products.push({ id: productID, qty: 1 });
        }
        cart.GrandTotalPrice=cart.GrandTotalPrice+productPrice

        fs.writeFile(p, JSON.stringify(cart), (error) => {
          console.log("error", error);
        });
      } catch (err) {
        cart = [];
      }
    });
  }
};

// fetch previous product
//  analyze the cart =>  find existing product
// add new product/incess quantity
