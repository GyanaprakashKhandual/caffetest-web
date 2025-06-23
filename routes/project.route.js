const projectController = require('../controllers/project.controller');
const projectValidator = require('../middlewares/project.validator');
const auth = require('../middlewares/auth.middleware');
const express = require('express');

const router = express.Router();

router.post('/create', auth, projectValidator, projectController.createProject);
router.get('/all', auth, projectController.getAllProjects);

module.exports = router;

