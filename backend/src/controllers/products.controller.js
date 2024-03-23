import { Product } from "../models/Product.js";

export async function createProduct(req, res) {
  try {
    const { name, quantity, price, description, model } = req.body;
    const currentDate = new Date();
    const newProduct = await Product.create({
      name,
      quantity,
      price,
      description,
      model,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getProducts(_req, res) {
  try {
    const products = await Product.findAll({
      attributes: [
        "id",
        "name",
        "description",
        "price",
        "model",
        "quantity",
        "createdAt",
      ],
      order: [["id", "ASC"]],
    });
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id },
    });
    product.set(req.body);
    await product.save();

    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
