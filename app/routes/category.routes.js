module.exports = (app) => {
  const categories = require("../controllers/category.controller.js");

  var router = require("express").Router();

  // Create a new Category
  router.post("/", categories.create);

  // Retrieve all categories
  router.get("/", categories.findAll);

  // Retrieve a single category with id
  router.get("/:id", categories.findOne);

  // Update a category with id
  router.put("/:id", categories.update);

  // Delete a category with id
  router.delete("/:id", categories.delete);

  // Delete all categories
  router.delete("/", categories.deleteAll);

  // Retrieve all products with category name
  router.get("/display/a", categories.findAllWithCategoryName);

  // Retrieve a all products for particular category id
  router.get("/display/:id", categories.findAllForCategoryId);

  app.use("/api/categories", router);
};
