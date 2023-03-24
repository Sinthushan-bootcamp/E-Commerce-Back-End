const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// route get all tag GET: http://localhost:3001/api/tags/:id
router.get('/', async (req, res) => {
  try {
    // when we get the tags we also want to see all products belonging to the product so we "include" model Product
    const tags = await Tag.findAll({include: [{model: Product}]});
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});
// route to get a specific tag GET: http://localhost:3001/api/tags/:id
router.get('/:id', async (req, res) => {
  try {
    // when we get the tag we also want to see all products belonging to the product so we "include" model Product
    const tag = await Tag.findByPk(req.params.id, {include: [{model: Product}]});
    if (!tag) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});
// route to add a new tag POST: http://localhost:3001/api/tags
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});
// route to update a tag PUT: http://localhost:3001/api/tags/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedTag[0]) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
// route to delete a tag DELETE: http://localhost:3001/api/tags/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedTag) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(deletedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
