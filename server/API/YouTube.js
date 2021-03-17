const axios = require("axios");
module.exports.YouTube = async(req, channelId = "UC-4H50_RIqgXol2GlEdhxQQ", searchTerm = "") => {
  try {
    const response = await axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          key: 'AIzaSyAJZRMJD08mXDZKMkAFolSOjpM1gk4I9c4',
          maxResults: req.params.amount || 12,
          type: 'video',
          channelId: req.params.channelId || channelId,
          q: req.params.searchTerm || searchTerm,
          part: 'snippet'
        }
      })
      // console.log(`response,data`, response.data)

    return { status: 'Success', data: response.data.items }
    // if (response.data.items.length > 0) {
    //   res.json({ status: 'Success', data: response.data.items })
    // } else {
    //   res.json({ status: 'Error', data: [], message: 'No videos were found' })
    // }

  } catch (err) {
    return { status: 'Error', message: err, data: [] }
    // res.json({ status: 'Error', message: err })
  }
}