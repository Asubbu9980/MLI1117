const express = require('express');
const router = express.Router();
const { getTopics, createTopic } = require('../controller/notebookcon')

router.get('/', getTopics);
router.post('/', createTopic);



module.exports = router;