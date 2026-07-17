const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./src/config/db");
const ProductModel = require("./src/models/product.model");

connectDB();

const app = express();

app.use(express.json());

// creation
app.post("/api/product/create", async (req, res) => {
  try {
    const { productName, price, category, description, imageUrl } = req.body;

    if (
      !productName ||
      !price ||
      !price.currency ||
      !price.amount ||
      !imageUrl ||
      !category
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newProduct = await ProductModel.create({
      productName,
      description,
      category,
      price,
      imageUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Product created",
      data: newProduct,
    });
  } catch (error) {
    console.log("error in create api", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.get("/api/product", async (req, res) => {
  try {
    let allProducts = await ProductModel.find();

    return res.status(200).json({
      success: true,
      message: "All products fetched",
      data: allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
