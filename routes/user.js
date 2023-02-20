const express = require('express');
const {getAllUser,getUser,deleteUser,updateUser} = require('../controllers/user');
const {verifyAdmin, verifyUser} = require('../utlis/verifyToken');

const router = express.Router();

//UPDATE
router.put("/user/:id",verifyUser,updateUser)
//DELETE
router.delete("/user/:id", verifyUser,deleteUser)
//GET
router.get("/user/:id",verifyUser, getUser)
//GET ALL
router.get("/user/getAllUser", verifyAdmin ,getAllUser)

module.exports = router