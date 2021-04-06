
const express = require('express');
const router = express.Router();
const { create, list, read, remove } = require('../controllers/category');

// validators
const { runValidation } = require('../validators');
const { categoryCreateValidator } = require('../validators/category');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post('/category', categoryCreateValidator, runValidation, requireSignin, adminMiddleware, create);
router.get('/categories', list);
router.get('/category/:slug', read);        //in the address bar we see numeric ids, here we use slug for SEO
router.delete('/category/:slug', requireSignin, adminMiddleware, remove);   //not using update method because in SEO each blog would be indexed by google, when we update all the old blogs become unavailable
//and adding the adminMiddleware so that no other can delete our category
module.exports = router;