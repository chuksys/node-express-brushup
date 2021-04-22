const express = require('express');
const router = express.Router();

const landing = require('../controllers/landing');
const user = require('../controllers/user');

const { isLoggedIn, isAdmin } = require('../middleware/hasAuth');

//show login page
router.get('/login', user.show_login);

//show signup page
router.get('/signup', user.show_signup);

//login user
router.post('/login', user.login_user);

//signup user
router.post('/signup', user.signup_user);

//logout user
router.get('/logout', user.logout_user);
router.post('/logout', user.logout_user);

//get home page
router.get('/', landing.get_landing);

//submit lead
router.post('/', landing.submit_lead);

//show all submited leads
router.get('/leads', isAdmin, landing.show_leads);

//show lead details
router.get('/lead/:id', isAdmin, landing.show_lead);

//show edit lead view
router.get('/lead/:id/edit', isAdmin, landing.show_edit_lead);

//edit lead
router.post('/lead/:id/edit', isAdmin, landing.edit_lead);

//delete lead
router.post('/lead/:id/delete',  isAdmin, landing.delete_lead);

//delete lead and return json response - intended for ajax calls
router.post('/lead/:id/delete-json', isAdmin, landing.delete_lead_json);

module.exports = router;
