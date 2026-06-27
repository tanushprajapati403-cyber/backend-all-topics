const express = require("express");
const {
  createProductController,
  allProductsController,
  updatedProductController,
  singleProductController,
  deleteProductController,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/create", createProductController);
router.get("/", allProductsController);
router.patch("/update/:productId", updatedProductController);
router.get("/:productId", singleProductController);
router.delete("/delete/:productId", deleteProductController);


module.exports = router;