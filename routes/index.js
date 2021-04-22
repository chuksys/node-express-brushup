var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let user = require('../controllers/user');

//show login page
router.get('/login', user.show_login);

//show signup page
router.get('/signup', user.show_signup);

//get home page
router.get('/', landing.get_landing);

//submit lead
router.post('/', landing.submit_lead);

//show all submited leads
router.get('/leads', landing.show_leads);

//show lead details
router.get('/lead/:id', landing.show_lead);

//show edit lead view
router.get('/lead/:id/edit', landing.show_edit_lead);

//edit lead
router.post('/lead/:id/edit', landing.edit_lead);

//delete lead
router.post('/lead/:id/delete', landing.delete_lead);

//delete lead and return json response - intended for ajax calls
router.post('/lead/:id/delete-json', landing.delete_lead_json);

module.exports = router;
