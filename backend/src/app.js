import express from "express";
import morgan from "morgan";

const app = express();

import salesRoutes from "./routes/sales.routes.js";
import usersRoutes from "./routes/users.routes.js";
import productRoutes from "./routes/products.routes.js";
import rolesRoutes from "./routes/roles.routes.js";
import logsRoutes from "./routes/logs.routes.js";

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/sales", salesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/logs", logsRoutes);

export default app;
