import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async(term) => {
    const response = await youtube.get(`/${term}`);
    console.log(`response`, response)
    setVideos(response.data.data);
  };

  return [videos, search];
};

export default useVideos;