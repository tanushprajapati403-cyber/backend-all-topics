const ProductModel = require("../models/product.model");

const createProductController = async (req, res) => {
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
};

const allProductsController = async (req, res) => {
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
};

const updatedProductController = async (req, res) => {
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
};

const singleProductController = async (req, res) => {
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
};

const deleteProductController = async (req, res) => {
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
};

module.exports = {
  createProductController,
  allProductsController,
  updatedProductController,
  singleProductController,
  deleteProductController,
};
