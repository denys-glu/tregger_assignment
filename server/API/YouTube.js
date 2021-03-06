const axios = require("axios");
const YOUTUBE_API_KEY = process.env.API_KEY || "AIzaSyCvgaZ8VF3Q_H_mDq7XJCzUeeF5jfyUsng";

module.exports.YouTube = async(req, channelId = "UClqhvGmHcvWL9w3R48t9QXQ", searchTerm = "") => {

  try {
    const response = await axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          key: YOUTUBE_API_KEY,
          maxResults: req.params.amount || 12,
          type: 'video',
          channelId: req.params.channelId || channelId,
          q: req.params.searchTerm || searchTerm,
          part: 'snippet',
          order: 'date',
          pageToken: req.params.pageToken || ""
        }
      })

    return ({
      status: 'Success',
      videos: response.data.items,
      prevPageToken: response.data.prevPageToken,
      nextPageToken: response.data.nextPageToken
    })
  } catch (err) {
    return { status: 'Error', message: err, data: [] }
  }
}