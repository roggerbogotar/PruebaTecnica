
import { Role } from "../models/Role.js";

export async function createRole(req, res) {
  try {
    const { name } = req.body;
    const newRole = await Role.create({name});
    res.json(newRole);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getRoles(_req, res) {
  try {
    const roles = await Role.findAll({
      attributes: ["id", "name"],
      order: [["id", "ASC"]],
    });
    res.json(roles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateRole(req, res) {
  const { id } = req.params;
  try {
    const role = await Role.findOne({
      attributes: ["name", "id"],
      where: { id },
    });
    role.set(req.body);
    await role.save();

    res.json(role);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteRole(req, res) {
  const { id } = req.params;
  try {
    await Role.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getRole(req, res) {
  const { id } = req.params;
  try {
    const role = await Role.findOne({
      where: { id },
      attributes: ["id", "name"],
    });
    res.json(role);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
