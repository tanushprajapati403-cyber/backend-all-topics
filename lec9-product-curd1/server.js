const express = require("express");
const connectDB = require("./src/config/db");
const ProductModel = require("./src/models/product.model");

const app = express();

app.use(express.json());

connectDB();

// create :
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
        message: "all fileds are required",
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
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//send after the post and data show : 
app.get("/api/product", async (req, res) => {
  try {
    let allProducts = await ProductModel.find();

    return res.status(200).json({
      success: true,
      message: "All product fatched",
      data: allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//update data :
app.patch("/api/product/update/:productId", async (req, res) => {
  try {
    let { productId } = req.params;

    let { productName, description, category, imageUrl, currency, amount } =
      req.body;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      {
        productName,
        description,
        category,
        imageUrl,
        price: {
          currency,
          amount,
        },
      },
      {
        new: true,
        runValidators: true,
      },
    );

    return res.status(200).json({
      success: true,
      message: "Product updated",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//jo ide likhe ga boo hee ide hame dekhe gii bass:
app.get("/api/product/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await ProductModel.findById(productId);

    return res.status(200).json({
      success: true,
      message: "product fetched",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//ess me jo ide lekhne gae bo ide se he delete hooga:
app.delete("/api/product/delete/:productId", async (req, res) => {
  try {
    let { productId } = req.params;

    await ProductModel.findByIdAndDelete(productId);

    return res.status(204).json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});     


