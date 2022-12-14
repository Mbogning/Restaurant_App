const {check} = require('express-validator')

exports.roleCreateValidator = [
    check('name')
        .notEmpty()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name must be a string')
]
