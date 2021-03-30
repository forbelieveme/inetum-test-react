const { Router } = require('express');
const router = Router();

const { getQuestions, createQuestion } = require('../controllers/info.controller');

router.route('/').get(getQuestions);

module.exports = router;
