const YoutubeAPIController = require("../controllers/youtubeAPI.controller");

module.exports = app => {
  app.get("/api/videos", YoutubeAPIController.getAllVideos);

  app.get("/api/videos/:amount/:pages", YoutubeAPIController.getSomeVideos);

  app.get("/api/videos/:searchTerm", YoutubeAPIController.getSpecificVideos);

};