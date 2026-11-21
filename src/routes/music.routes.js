const express = require("express");
const musicController =  require("../controllers/music.controller")
const multer = require("multer");
const authMiddleware = require("../middlewares/auth.middleware");

const upload = multer({storage : multer.memoryStorage()});

const router =  express.Router();

router.post("/music", authMiddleware.authArtist, upload.single("music"), musicController.createMusic );
router.post("/album", authMiddleware.authArtist, musicController.createAlbum);

router.get("/", authMiddleware.authUser, musicController.getAllMusic);
//using this the normal user can see all the musics which has been created till now
router.get("/albums", authMiddleware.authUser, musicController.getAllAlbums);
module.exports =  router;