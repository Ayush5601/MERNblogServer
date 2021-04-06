//we create such new files to be able to use them consistently without the need of writing same
//code in otherr files. Here we would have had various authentications, so this one snippet works for all
const { validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array()[0].msg });
    }
    next();
};
