const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "../", "data", "product.json");
const products = [];

module.exports = class Product {
  constructor(t) {
    this.id = t.id;
    this.title = t.title;
    this.price=t.price;
    this.description=t.description;
    this.imageUrl=t.imageUrl
  }
  save() {

    // first we are reading content from file then adding new object and writing file
  
    fs.readFile(p, (error, fileContent) => {
      let products = [];
      try {
        if (!error) {
          products = JSON.parse(fileContent);
        }
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (error) => {
          console.log(error);
        });
      } catch (error) {
        products = [];
      }
    });
  }

  static fetchAll(cb) {

    fs.readFile(p,(error,fileContent)=>{
        if(error)
        {
            cb([])
        }

       cb(JSON.parse(fileContent))
    })
  }
};
