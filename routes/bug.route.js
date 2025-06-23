const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bug.controller');
const bugValidator = require('../middlewares/bug.validator');
const auth = require('../middlewares/auth.middleware');


router.post('/project/:projectId', auth, bugController.createBugForProject);
router.get('/project/:projectId', auth, bugController.getBugsByProject);
router.get('/:bugId', auth, bugController.getBugById);
router.put('/:bugId',  auth, bugController.updateBug);
router.delete('/:bugId', auth, bugController.deleteBug);

module.exports = router;
