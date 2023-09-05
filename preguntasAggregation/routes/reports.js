const express = require('express');
const router = express.Router();
const reportsController = require("../controllers/reports")

router.get('/', reportsController.answersReports)

module.exports = router;