const fs = require("fs");

const express = require("express");

const app = express();


class ProductManager {
  constructor() {
    this.path = "./files/fileproducts.json";
  }

  getProducts = async () => {
    if (fs.existsSync(this.path)) {
      const fileData = await fs.promises.readFile(this.path, "utf-8");
      const result = JSON.parse(fileData);
      return result;
    } else {
      return [];
    }
  };

  getProductById = async (productId) => {
    const products = await this.getProducts();

    const productIndex = products.findIndex(
      (product) => product.id === productId
    );

    if (productIndex === -1) {
      return "Not found";
    }
    return products[productIndex];
  };
}


const productManager = new ProductManager();


app.get("/products", async (req, res) => {
  const limit = req.query.limit;
  const products = await productManager.getProducts();
  if (!limit) {
    res.send(products);
  } else {
    let productsLimit = [];
    for (i = 0; i < limit && i < products.length; i++) {
      productsLimit.push(products[i]);
    }
    res.send(productsLimit);
  }
});


app.get("/products/:pid", async (req, res) => {
  const pid = parseInt(req.params.pid);
  const product = await productManager.getProductById(pid);
  res.send(product);
});


app.listen(8080, () => {
  console.log("Servidor montado en direccion 8080");
});
