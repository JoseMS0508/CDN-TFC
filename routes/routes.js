import express from "express";
import { Controller } from "../controller/controller.js";
const router = express.Router();
const controller = new Controller();
// router.use(express.json());

router.post('/createObject',(req, res)=>{controller.creteObject(req, res)});
router.post('/helloWorld',(req, res)=>{controller.holaMundo(req,res)})


export default router
