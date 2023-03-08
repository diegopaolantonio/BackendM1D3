import ProductManager from "./ProductManager.js";
import express from "express";

const app = express();
const productManager = new ProductManager();

app.get("/products", async (req, res) => {
  const limit = req.query.limit;
  const products = await productManager.getProducts();
  if (!limit) {
    res.send(products);
  } else {
    let productsLimit = [];
    for (let i = 0; i < limit && i < products.length; i++) {
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
