const { body } = require('express-validator');

const projectValidator = [
  body('name')
    .notEmpty().withMessage('Project name is required')
    .isLength({ min: 3 }).withMessage('Project name must be at least 3 characters long')
    .trim(),

  body('description')
    .optional()
    .isLength({ max: 500 }).withMessage('Description can be up to 500 characters long')
    .trim()
];

module.exports = projectValidator;
