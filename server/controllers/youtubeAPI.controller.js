const { YouTube } = require('../API/YouTube');

module.exports.getAllVideos = async(req, res) => {
  const response = await YouTube(req);

  if (response.status === 'Success') {
    res.json(response)
  } else if (response.data.length === 0 && response.status === 'Error') {
    res.json({ status: 'Error', data: [], message: 'No videos were found' })
  } else {
    res.json({ status: 'Error', message: err })
  }
};

module.exports.getSomeVideos = async(req, res) => {
  const response = await YouTube(req);

  if (response.status === 'Success') {
    res.json(response)
  } else if (response.data.length === 0 && response.status === 'Error') {
    res.json({ status: 'Error', data: [], message: 'No videos were found' })
  } else {
    res.json({ status: 'Error', message: err })
  }
};

module.exports.getSpecificVideos = async(req, res) => {
  const response = await YouTube(req);

  if (response.status === 'Success') {
    res.json(response)
  } else if (response.data.length === 0 && response.status === 'Error') {
    res.json({ status: 'Error', data: [], message: 'No videos were found' })
  } else {
    res.json({ status: 'Error', message: err })
  }
};