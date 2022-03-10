const express= require('express');
const router = express.Router();
const users_controller=require('../controllers/users.js');
const cards_controller=require('../controllers/cards.js');


router.get('/users', users_controller.getusers);
router.post('/users', users_controller.postusers);
router.put('/users/:id', users_controller.putusers);
router.get('/cards', cards_controller.getcards);
router.post('/cards', cards_controller.postcards);

 
module.exports = router;




