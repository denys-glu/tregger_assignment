import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect, columns, setShowModal }) => {

  const renderedList = videos.map(video => {
    return (
      <div key={video.id.videoId} className={`col-sm-6 col-md-${columns} p-1 d-flex justify-content-center`}>
        <VideoItem
          onVideoSelect={onVideoSelect}
          video={video}
          setShowModal={setShowModal}
        />
      </div>
    );
  });

  return (
    <div className="row mt-3">
      {renderedList}
    </div>
  );
};

export default VideoList;
