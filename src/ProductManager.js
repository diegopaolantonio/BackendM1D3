import fs from "fs";

export default class ProductManager {
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
