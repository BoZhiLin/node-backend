const PostRepository = require('../repositories/post');

module.exports = class PostService {
    constructor() {
        this.repository = new PostRepository;
    }

    getPosts() {
        return this.repository.index();
    }
    
    getPost(id) {
        return this.repository.find(id);
    }

    storePost(data) {
        return this.repository.create(data);
    }

    updatePost(id, data) {
        return this.repository.update(id, data);
    }

    deletePost(id) {
        return this.repository.delete(id);
    }
}
