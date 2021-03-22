import React, { useState } from 'react';

//Components
import SearchBar from 'components/SearchBar';
import VideoItem from 'views/VideoItem';
import Button from 'views/Button';
import Modal from 'views/MyModal';
import Pagination from 'components/Pagination';

//Custom Hooks
import useVideos from 'hooks/useVideos';

const Dashboard = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [columns, setColumns] = useState("3");
  const [showModal, setShowModal] = useState(false);
  
  const [term, setTerm] = useState('Porsche');
  const [data, search] = useVideos(term);
  
  const submitSearch = (lookup = term, action) => {
    search(lookup, action);
    setTerm(lookup);
  }
  
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
          <SearchBar onFormSubmit={submitSearch} />
        </div>
        <div className="col-12 col-sm-3 d-grid d-md-flex justify-content-md-end mt-2 mt-sm-0">
          <Button text="Change Columns" styles="btn-info btn-block" onClickHandler={updateColumnsAmount} />
        </div>

      </div>
      <div className="row mt-2">
      </div>
      {
        data.videos !== undefined 
        ? <Pagination 
            data={data.videos} 
            loadMore={submitSearch}
            RenderComponent={VideoItem} 
            pageLimit={5} 
            dataLimit={12} 
            onVideoSelect={setSelectedVideo} 
            columns={columns} 
            setShowModal={setShowModal}/>
        : <h1>Loading...</h1>
      }
      <Modal show={showModal} video={selectedVideo} setShowModal={setShowModal} />
    </React.Fragment>
  )
};

export default Dashboard;
