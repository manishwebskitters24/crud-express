const express = require("express");
const mongoose = require("mongoose");
const productsRoute = require("./routes/product.route");
const app = express();
const PORT = process.env.PORT || 3030;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

mongoose
  .connect(
    "mongodb+srv://manishpauldev:yZDq8vBPs2kL1HgO@projectcrud.u7655yv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ProjectCRUD"
  )
  .then(() => {
    console.log("Connected to DB.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
