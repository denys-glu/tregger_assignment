import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_NODE_YOUTUBE_API
});