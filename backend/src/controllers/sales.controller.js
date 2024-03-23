import { Sale } from "../models/Sale.js";
import { Product } from "../models/Product.js";

export async function createSale(req, res) {
  try {
    const { quantity, userId, productId } = req.body;

    const newSale = await Sale.create({
      quantity,
      userId,
      productId,
      date: new Date(),
    });

    const product = await Product.findOne({
      where: { id: productId },
    });
    product.set({ quantity: product.quantity - quantity });
    await product.save();

    res.json(newSale);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

export async function getSales(_req, res) {
  try {
    const sales = await Sale.findAll({
      attributes: ["id", "quantity", "date"],
      include: [
        {
          association: "product",
          attributes: ["id", "name", "description", "model", "price"],
        },
        {
          association: "user",
          attributes: ["id", "name", "idNumber"],
        },
      ],
    });
    res.json(sales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateSale(req, res) {
  const { id } = req.params;
  try {
    const sale = await Sale.findOne({
      where: { id },
    });
    sale.set(req.body);
    await sale.save();

    res.json(sale);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getSalesByUser(req, res) {
  const { id } = req.params;
  try {
    const sales = await Sale.findAll({
      attributes: ["id", "quantity", "date"],
      where: { userId: id },
      include: [
        {
          association: "product",
          attributes: ["id", "name", "description", "model", "price"],
        },
        {
          association: "user",
          attributes: ["id", "name", "idNumber"],
        },
      ],
    });
    res.json(sales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getSalesByProduct(req, res) {
  const { id } = req.params;
  try {
    const sales = await Sale.findAll({
      attributes: ["id", "quantity", "date"],
      where: { productId: id },
      include: [
        {
          association: "product",
          attributes: ["id", "name", "description", "model", "price"],
        },
        {
          association: "user",
          attributes: ["id", "name", "idNumber"],
        },
      ],
    });
    res.json(sales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
