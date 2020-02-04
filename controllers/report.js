const ReportService = require('../services/report');

class PostController {
    constructor() {
        this.service = new ReportService;
    }

    index(req, res, next) {
        this.service.getReports().then(data => {
            res.json(data);
        })
    }
}

module.exports = PostController;
