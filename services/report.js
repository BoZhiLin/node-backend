const ReportRepository = require('../repositories/report');

module.exports = class ReportService {
    constructor() {
        this.repository = new ReportRepository;
    }

    getReports() {
        return this.repository.index();
    }
}
