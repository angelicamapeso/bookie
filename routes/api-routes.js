const router = require("express").Router();
const mongoose = require("mongoose");
const { Book } = require("../models");

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ data: books });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.post("/books", async (req, res) => {
  try {
    const result = await Book.findOneAndUpdate(
      {
        booksId: req.body.booksId,
      },
      req.body,
      { upsert: true }
    );
    res.status(201).json({ data: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.delete("/books/:id", async (req, res) => {
  try {
    const _id = mongoose.Types.ObjectId(req.params.id);
    const result = await Book.deleteOne({ _id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ err: "Book not found in database." });
    }
    res.status(200).json({ data: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
