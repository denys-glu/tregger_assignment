import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async(term, action = "") => {
    // TODO: handle empty term

    let response;
    if (action) {
      console.log(`data[action]`, data[action])
      response = await youtube.get(`/${term}/${data[action]}`);
    } else {
      response = await youtube.get(`/${term}`);
    }

    setData(response.data);
  };

  return [data, search];
};

export default useVideos;