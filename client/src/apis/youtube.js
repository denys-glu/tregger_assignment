import axios from 'axios';
const NODE_YOUTUBE_API = process.env.NODE_YOUTUBE_API

export default axios.create({
  baseURL: NODE_YOUTUBE_API
});