import { User } from "../models/User.js";

export async function createUser(req, res) {
  try {
    const { name, idNumber, password, roleId } = req.body;
    const currentDate = new Date();

    const newUser = await User.create(
      {
        name,
        idNumber,
        password,
        roleId,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        include: [
          {
            association: "role",
            attributes: ["id", "name"],
          },
        ],
      }
    );
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUsers(_req, res) {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "idNumber", "createdAt"],
      include: [
        {
          association: "role",
          attributes: ["id", "name"],
        },
      ],
    });
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      attributes: ["id", "name", "idNumber", "createdAt"],
      where: { id },
      include: [
        {
          association: "role",
          attributes: ["id", "name"],
        },
      ],
    });
    user.set({ ...req.body, updatedAt: new Date() });
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await User.destroy({
      where: { id },
    });
    return res.status(200).json({ message: "Eliminado satisfactoriamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUsersByRole(req, res) {
  const { id } = req.params;
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "idNumber", "createdAt"],
      where: { roleId: id },
      include: [
        {
          association: "role",
          attributes: ["id", "name"],
        },
      ],
    });
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function loginUser(req, res) {
  try {
    const { idNumber, password } = req.body;

    const user = await User.findOne({
      where: { idNumber, password },
      attributes: ["id", "name", "idNumber", "createdAt"],
      include: [
        {
          association: "role",
          attributes: ["id", "name"],
        },
      ],
    });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
