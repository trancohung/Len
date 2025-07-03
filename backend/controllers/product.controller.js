import { get } from "mongoose";

const productController = {
  getAllProducts: async (req, res) => {
    try {
      res.send("Get all products");
    } catch (error) {
      console.error("Error fetching products: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getProductById: async (req, res) => {
    try {
      const productId = req.params.id;
      res.send(`Get product with ID: ${productId}`);
    } catch (error) {
      console.error("Error fetching product: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  createProduct: async (req, res) => {
    try {
      const { name, cateId, description } = req.body;
      res.send(`Create product with name: ${name}`);
    } catch (error) {
      console.error("Error creating product: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const { name, cateId, description } = req.body;
      res.send(`Update product with ID: ${productId}`);
    } catch (error) {
      console.error("Error updating product: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      res.send(`Delete product with ID: ${productId}`);
    } catch (error) {
      console.error("Error deleting product: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default productController;
