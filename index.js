import ProductManager from "./ProductManager.js";

const productManager = new ProductManager();

const func = async () => {
  // Imprime el array inicial
  let primerConsulta = await productManager.getProducts(); // Imprime el array vacio ya que no se agrego ningun producto todavia
  console.log(primerConsulta);

  // Producto 1
  let product = {
    title: "M221",
    description: "PLC",
    price: 220,
    thumbnail:
      "https://download.schneider-electric.com/files?p_Doc_Ref=PF130224&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
    code: "SchneireM221",
    stock: 250,
  };

  // agrega el Producto 1 al archivo
  let agregar = await productManager.addProduct(product); // Producto 1
  console.log(agregar);

  // Producto sin un campo
  product = {
    //   title: "M221",
    description: "PLC",
    price: 220,
    thumbnail:
      "https://download.schneider-electric.com/files?p_Doc_Ref=PF130224&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
    code: "SchneireM221",
    stock: 250,
  };

  // no agrega el Producto al archivo por faltar datos
  agregar = await productManager.addProduct(product); // Producto 1
  console.log(agregar);

  // Producto 2
  product = {
    title: "M241",
    description: "PLC",
    price: 450,
    thumbnail:
      "https://cdn.bpsolucioneselectricas.com.ar/uploads/1591999559_UEYxMzAyMjBfNDAwMHg0MDAwLnBuZw==.jpg",
    code: "SchneireM241",
    stock: 100,
  };

  // agrega el Producto 2 al archivo
  agregar = await productManager.addProduct(product); // Producto 1
  console.log(agregar);

  // Producto repetido
  product = {
    title: "M241",
    description: "PLC",
    price: 450,
    thumbnail:
      "https://cdn.bpsolucioneselectricas.com.ar/uploads/1591999559_UEYxMzAyMjBfNDAwMHg0MDAwLnBuZw==.jpg",
    code: "SchneireM241",
    stock: 100,
  };

  // no agrega el Producto repetido al archivo
  agregar = await productManager.addProduct(product); // Producto 1
  console.log(agregar);

  // Producto 3
  product = {
    title: "Zelio",
    description: "Programmable relay",
    price: 135,
    thumbnail:
      "https://download.schneider-electric.com/files?p_Doc_Ref=SR_531_CPFJR16030&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
    code: "SchneireZelio",
    stock: 685,
  };

  // agrega el Producto 3 al archivo
  agregar = await productManager.addProduct(product);
  console.log(agregar);

  // Imprime el array completo
  let segundaConsulta = await productManager.getProducts();
  console.log(segundaConsulta);

  // busca e imprime el elemento con id = 2
  let buscarId = await productManager.getProductById(2);
  console.log(buscarId);

  // busca e imprime el elemento con id = 4
  buscarId = await productManager.getProductById(4);
  console.log(buscarId);

  // Modifica el un elemento del array por el id y el campo a actualizar
  let actualizado = await productManager.updateProduct(3, {
    description: "otra descripcion",
  });
  console.log(actualizado);

  // Modifica el un elemento del array por el id y el campo a actualizar
  actualizado = await productManager.updateProduct(7, {
    title: "otro titulo",
  });
  console.log(actualizado);

  // elimina un producto del array por el id
  let eliminados = await productManager.deleteProduct(1);
  console.log(eliminados);

  // elimina un producto del array por el id
  eliminados = await productManager.deleteProduct(10);
  console.log(eliminados);
};

func();
