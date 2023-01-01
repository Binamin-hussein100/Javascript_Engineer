import {Router} from 'express';

const router  = Router();

// All product routes "user stories"
router.get('/product',(req, res) => {
    res.json({message: req.shhh_secret})
})
router.get('/product/:id',() =>{})
router.put('/product/:id',() =>{})
router.delete('/product/:id',() =>{})
router.post('/product/:id',() =>{})


// all update user stories

router.get('/update',() => {})
router.get('/update/:id',() =>{})
router.put('/update/:id',() =>{})
router.delete('/update/:id',() =>{})
router.post('/update/:id',() =>{})


// all updatePoint user stories

router.get('/updatepoint',() => {})
router.get('/updatepoint/:id',() =>{})
router.put('/updatepoint/:id',() =>{})
router.delete('/updatepoint/:id',() =>{})
router.post('/updatepoint/:id',() =>{})

export default router