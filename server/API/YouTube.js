const axios = require("axios");
module.exports.YouTube = async(req, channelId = "UClqhvGmHcvWL9w3R48t9QXQ", searchTerm = "") => {
  console.log(`req.params.searchTerm`, req.params.searchTerm)
  try {
    const response = await axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          key: 'AIzaSyCvgaZ8VF3Q_H_mDq7XJCzUeeF5jfyUsng',
          maxResults: req.params.amount || 12,
          type: 'video',
          channelId: req.params.channelId || channelId,
          q: req.params.searchTerm || searchTerm,
          part: 'snippet',
          order: 'date',
          pageToken: req.params.pageToken || ""
        }
      })
    console.log(`response.data`, response.data)
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