const router = require("express").Router();
const { Book } = require("../models");

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ data: books });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
