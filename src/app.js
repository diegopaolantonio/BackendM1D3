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
}

const productManager = new ProductManager();

app.get("/products", (req, res) => {
  const products = productManager.getProducts();
  res.send(products);
});

app.listen(8080, () => {
  console.log("Servidor montado en direccion 8080");
});
