// "Routes" to forward the supported requests (and any information encoded in request URLs) to 
// the appropriate controller functions.

const express = require('express');
const router = express.Router();
const { signup, signin, signout, requireSignin, forgotPassword, resetPassword,  googleLogin} = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const {
    userSignupValidator,
    userSigninValidator,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);
// google login
router.post('/google-login', googleLogin);


module.exports = router;