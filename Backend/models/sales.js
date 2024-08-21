const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Ensure this matches the model name
      required: false,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Ensure this matches the model name
      required: false,
    },
    storeID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store", // Ensure this matches the model name
      required: false,
    },
    stockSold: {
      type: Number,
      required: false,
    },
    saleDate: {
      type: Date,
      required: false,
    },
    totalSaleAmount: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const Sales = mongoose.model("Sales", SaleSchema); // Model name in PascalCase
module.exports = Sales;
