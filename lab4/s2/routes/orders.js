const express = require("express");
const router = express.Router();
const { Orders } = require("../init_db.js");
const authenticate = require("../auth.js");
const { response } = require("../../s1/app.js");

router.get("/:id", async function (req, res) {
  try {
    let order = await Orders.findByPk(req.params.id);
    if (order === null) {
      return res.status(404).json({ message: "order not found" });
    }
    return res.json(order);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "server error" });
  }
});

router.post("/", authenticate, async function (req, res) {
  try {
    let response = await fetch(
      "http://localhost:3000/api/books/" + req.body.book_id
    );
    if (!response.ok) {
      return res.status(404).json({ message: "book not found" });
    }
    let order = await Orders.create(req.body);
    return res.json({ id: order.id });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "server error" });
  }
});

router.delete("/:id", authenticate, async function (req, res) {
  try {
    let order = await Orders.findByPk(req.params.id);
    if (order === null) {
      return res.status(404).json({ message: "order not found" });
    }
    await order.destroy();
    res.json({ message: `deleted ${order.id}` });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "server error" });
  }
});

router.patch("/:id", authenticate, async function (req, res) {
  try {
    let order = await Orders.findByPk(req.params.id);
    if (order === null) {
      return res.status(404).json({ message: "order not found" });
    }
    order.update(req.body);
    res.json({ message: `updated ${order.id}` });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
