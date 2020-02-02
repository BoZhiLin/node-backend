var express = require('express');
var router = express.Router();

const PostController = require('../controllers/post');

postController = new PostController();

router.get('/', postController.index.bind(postController));
router.get('/:id', postController.show.bind(postController));
router.post('/', postController.store.bind(postController));
router.put('/:id', postController.update.bind(postController));
router.delete('/:id', postController.destroy.bind(postController));

module.exports = router;
