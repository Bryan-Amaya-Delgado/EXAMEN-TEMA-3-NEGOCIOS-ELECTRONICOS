const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

// Creamos El Usuario.
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// Obtenemos Todos los Usuarios
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Obtenemos Un Usuario Especifico.
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Eliminamos Al Usuario Por ID.
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Actualizamos Al Usuario Por ID.
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { Nombre, Edad, Correo_Electronico } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { Nombre, Edad, Correo_Electronico } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;