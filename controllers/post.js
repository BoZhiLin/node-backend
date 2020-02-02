const PostService = require('../services/post');

class PostController {
    constructor() {
        this.service = new PostService;
    }

    index(req, res, next) {
        this.service.getPosts().then(posts => {
            res.json(posts);
        })
    }

    show(req, res, next) {
        this.service.getPost(req.params.id).then(post => {
            res.json(post);
        })
    }

    store(req, res, next) {
        this.service.storePost(req.body).then(post => {
            res.json(post);
        })
    }

    update(req, res, next) {
        this.service.updatePost(req.params.id, req.body).then(result => {
            res.json({
                status: 0
            });
        })
    }

    destroy(req, res, next) {
        this.service.deletePost(req.params.id).then(result => {
            res.json({
                status: 0
            });
        })
    }
}

module.exports = PostController;
