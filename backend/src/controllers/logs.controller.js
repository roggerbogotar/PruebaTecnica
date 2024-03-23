import { Log } from "../models/Log.js";

export async function createLog(req, res) {
  try {
    const { action, userId } = req.body;

    const newLog = await Log.create({
      action,
      userId,
      date: new Date(),
    });
    res.json(newLog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getLogs(_req, res) {
  try {
    const logs = await Log.findAll({
      attributes: ["id", "action", "date"],
      include: [
        {
          association: "user",
          attributes: ["id", "name", "idNumber"],
        },
      ],
    });
    res.json(logs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getLogsByUser(req, res) {
  const { id } = req.params;
  try {
    const logs = await Log.findAll({
      attributes: ["id", "action", "date"],
      where: { userId: id },
      include: [
        {
          association: "user",
          attributes: ["id", "name", "idNumber"],
        },
      ],
    });
    res.json(logs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
