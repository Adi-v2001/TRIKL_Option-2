const express = require('express');
const controller = require('../Controller/control');
const router = express.Router();

router.post("/", controller.createData);
router.get("/", controller.getData);
router.patch("/:name", controller.updateData);
router.delete("/:name", controller.deleteData);


exports.routes = router;