import React, { useState } from 'react';

//Components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import Button from './Button';
import Modal from './MyModal';

//Custom Hooks
import useVideos from '../hooks/useVideos';

const Dashboard = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Porsche');
  const [columns, setColumns] = useState("3");
  const [showModal, setShowModal] = useState(false);

  const updateColumnsAmount = () => {
    if (columns === "3") {
      setColumns("4")
    } else {
      setColumns("3")
    }
  }

  return (
    <React.Fragment>
      <div className="row align-items-center">
        <div className="col-12 col-sm-9">
          <SearchBar onFormSubmit={search} />
        </div>
        <div className="col-12 col-sm-3 d-grid d-md-flex justify-content-md-end mt-2 mt-sm-0">
          <Button text="Change Columns" color="info" onClickHandler={updateColumnsAmount} />
        </div>
      </div>
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} columns={columns} setShowModal={setShowModal} />
      <Modal show={showModal} video={selectedVideo} setShowModal={setShowModal} />
    </React.Fragment>
  )
};

export default Dashboard;
