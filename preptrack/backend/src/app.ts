import express, { Request, Response } from "express";

const app = express();

const port: number = 8080;

// REST API exposed as a GET HTTP Method on API Path = "/products"
app.get("/products", (request: Request, response: Response) => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
      description: "High-performance laptop with latest specifications",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
      description: "Latest smartphone with advanced camera features",
      inStock: true,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 199.99,
      category: "Electronics",
      description: "Noise-cancelling wireless headphones",
      inStock: false,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 89.99,
      category: "Home & Kitchen",
      description: "Programmable coffee maker with timer",
      inStock: true,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 129.99,
      category: "Sports",
      description: "Comfortable running shoes for daily workouts",
      inStock: true,
      rating: 4.6,
    },
  ];

  response.status(200).json({
    success: true,
    data: products,
    total: products.length,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
