var express = require('express');
var router = express.Router();

const ReportController = require('../controllers/report');

reportController = new ReportController();

router.get('/', reportController.index.bind(reportController));

module.exports = router;
