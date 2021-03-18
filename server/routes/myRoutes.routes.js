const YoutubeAPIController = require("../controllers/youtubeAPI.controller");

module.exports = app => {

  app.get("/api/videos/:searchTerm", YoutubeAPIController.getSpecificVideos);

  app.get("/api/videos/:searchTerm/:pageToken", YoutubeAPIController.getSomeVideos);

};