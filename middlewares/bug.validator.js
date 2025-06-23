const { body } = require('express-validator');

const bugValidator = [

    body('module')
        .optional()
        .isString().withMessage('Module must be a string'),

    body('type')
        .notEmpty().withMessage('Bug type is required')
        .isIn(['Functional', 'User Interface', 'Load', 'Stress', 'Performance', 'Spike', 'Soak', 'Security', 'Misc.'])
        .withMessage('Invalid bug type'),

    body('description')
        .notEmpty().withMessage('Description is required')
        .isString().withMessage('Description must be a string'),

    body('requirement')
        .notEmpty().withMessage('Requirement is required')
        .isString().withMessage('Requirement must be a string'),

    body('reference')
        .optional()
        .isURL().withMessage('Reference must be a valid URL'),

    body('severity')
        .notEmpty().withMessage('Severity is required')
        .isIn(['Critical', 'High', 'Medium', 'Low']).withMessage('Invalid severity level'),

    body('priority')
        .notEmpty().withMessage('Priority is required')
        .isIn(['Critical', 'High', 'Medium', 'Low']).withMessage('Invalid priority level'),

    body('status')
        .notEmpty().withMessage('Status is required')
        .isIn(['Open', 'Ongoing', 'Solved', 'Reopened', 'Resolved', 'Closed']).withMessage('Invalid status'),

    body('comment')
        .optional()
        .isString().withMessage('Comment must be a string'),
];

module.exports = bugValidator;
