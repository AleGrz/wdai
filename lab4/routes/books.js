const express = require("express");
const router = express.Router();
const { Books } = require("../init_db.js");
const authenticate = require("../auth.js");

router.get("/", async function (_, res) {
  try {
    let books = await Books.findAll();
    res.json(books);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "server error" });
  }
});

router.get("/:id", async function (req, res) {
  try {
    let book = await Books.findByPk(req.params.id);
    if (book === null) {
      return res.status(404).json({ message: "book not found" });
    }
    res.json(book);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "server error" });
  }
});

router.post("/", authenticate, async function (req, res) {
  try {
    let book = await Books.create(req.body);
    res.json({ id: book.id });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "server error" });
  }
});

router.delete("/:id", authenticate, async function (req, res) {
  try {
    const book = await Books.findByPk(req.params.id);
    if (book === null) {
      return res.status(404).json({ message: "book not found" });
    }
    await book.destroy();
    res.json({ message: `deleted ${req.params.id}` });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
