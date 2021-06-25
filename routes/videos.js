var express = require('express');
var router = express.Router();
var Video = require('../database/schema/video');



router.get('/', function(req, res, next) {
  res.render('alexion', { title: 'Express' });
});


router.get("/createSchema",function(req,res) {
  const video = new Video();
  Video.findById(1,function(err,inst) {
    console.log(err);
    console.log(inst);
    if(inst) {
      res.json({msg : "instance already existe",obj : inst})
      return ;
    };
    video.save(function(err) {
      res.json({msg : "create new instance of video",obj : video})
    }) 
  })
})

router.get('/clickedLink',function(req,res){
  Video.findByIdAndUpdate(1,{$inc : {clickedLink : 1}},function(err,video){
    res.json({msg : err,obj : video})
  }) ;

})

router.get('/openVideo',function(req,res) {
  Video.findByIdAndUpdate(1,{$inc : {openedVideo : 1}},function(err,video){
    res.json({msg : err,obj : video})
  }) ;
})

router.get('/seenPreviewVideo',function(req,res) {
  Video.findByIdAndUpdate(1,{$inc : {seenPreviewVideo : 1}},function(err,video){
    res.json({msg : err,obj : video})
  }) ;
})

router.get('/endVideo',function(req,res) {
  Video.findByIdAndUpdate(1,{$inc : {endVideo : 1}},function(err,video){
    res.json({msg : err,obj : video})
  }) ;
})


module.exports = router;
