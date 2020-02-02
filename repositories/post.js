const entity = require('../models');

module.exports = class PostRepository {
    constructor() {
        this.entity = entity.Post;
    }

    index() {
        return this.entity.findAll();
    }

    find(id) {
        return this.entity.findByPk(id);
    }

    create(data) {
        return this.entity.create(data);
    }

    update(id, data) {
        return this.entity.update(data, {
            where: {
                id: id
            }
        });
    }

    delete(id) {
        return this.entity.destroy({
            where: {
                id: id
            }
        });
    }
}
