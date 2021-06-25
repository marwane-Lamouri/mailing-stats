var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
  _id: {type : Number, default : 1},  
  clickedLink: { type: Number, default: 0 },
  openedVideo: { type: Number, default: 0 },
  seenPreviewVideo: { type: Number, default: 0 },
  endVideo: { type: Number, default: 0 },
});


module.exports = mongoose.model("VideoModel", VideoSchema);

