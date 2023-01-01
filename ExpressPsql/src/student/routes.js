
// const router = require('express').Router()
// import Router from 'express';
const {  Router } = require('express');
const controller = require('./controller');

const router = Router()

router.get('/',controller.getStudents)
router.post("/",controller.addStudents)
router.get('/:id',controller.getStudentById)
router.delete('/:id', controller.deleteStudentById)
router.put('/:id',controller.editStudent)

module.exports = router;