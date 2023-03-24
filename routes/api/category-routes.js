const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// route to get all categories GET: http://localhost:3001/api/categories
router.get('/', async (req, res) => {
  try {
    // when we get the categories we also want to see all products belonging to the category so we "include" model Product
    const categories = await Category.findAll({include: [{model: Product}]}); 
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});
// route to get a specific category GET: http://localhost:3001/api/categories/:id
router.get('/:id', async (req, res) => {
  try {
    // when we get the category we also want to see all products belonging to the category so we "include" model Product
    const category = await Category.findByPk(req.params.id, {include: [{model: Product}]});
    if (!category) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});
// route to add a new category POST: http://localhost:3001/api/categories
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});
// route to update a category PUT: http://localhost:3001/api/categories/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
// route to delete a category DELETE: http://localhost:3001/api/categories/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedCategory) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
