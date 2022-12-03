const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");

// Configuraciones Generales De La Aplicacion.
const app = express();
const port = process.env.PORT || 9000;

// middlewares (API)
app.use(express.json());
app.use("/api", userRoute);

// Ruta General Del Proyecto.
app.get("/", (req, res) => {
  res.send("Bienvenido Bryan");
});

// Conexion a MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado Al Cluster de MongoDB Atlas"))
  .catch((error) => console.error(error));

// Servidor En Escucha Por El Puerto 9000.
app.listen(port, () => console.log("El servidor Esta Escuchando Por el Puerto", port));

