import React from 'react';

const VideoItem = ({ video, onVideoSelect, setShowModal }) => {
  const markUp = () => {
    return {__html: video.snippet.title}
  }
  return (
    <React.Fragment>
      <div className="card " style={{ width: 18 + "rem" }} onClick={() => { onVideoSelect(video); setShowModal(true) }} >
        <img src={video.snippet.thumbnails.medium.url} className="card-img-top" alt={video.snippet.title} />
        <div className="card-body">
          <h5 className="card-title" dangerouslySetInnerHTML={markUp()}></h5>
          <p className="card-text">{video.snippet.description}</p>
        </div>
      </div>
    </React.Fragment>
  )
};

export default VideoItem;
