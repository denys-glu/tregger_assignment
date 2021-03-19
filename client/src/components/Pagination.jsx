import React, { useState, useEffect } from 'react'

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit, onVideoSelect, columns, setShowModal, loadMore }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  //Scrolling up
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  function goToNextPage() {
    loadMore(undefined, "nextPageToken")
    setCurrentPage((page) => page + 1);
  }
  
  function goToPreviousPage() {
    loadMore(undefined, "prevPageToken")
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    if(currentPage > pageNumber){
      loadMore(undefined, "prevPageToken")
    } else {
      loadMore(undefined, "nextPageToken")
    }
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      {
        data.length > 0 
        ? <h1 className="text-center">{data[0].snippet.channelTitle}</h1>
        :""
      }
      
      <div className="row">
        {data.map((video) => (
          <div key={video.id.videoId} className={`col-sm-6 col-md-${columns} p-1 d-flex justify-content-center`}>
            <RenderComponent
              onVideoSelect={onVideoSelect}
              video={video}
              setShowModal={setShowModal}
            />
          </div>
        ))}
      </div>

      <nav aria-label="navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button disabled={`${currentPage === pages ? 'disabled' : ''}`} className="page-link" aria-label="Previous" onClick={goToPreviousPage}>
              <span aria-hidden="true">Previous Page</span>
            </button>
          </li>
          <li className={`page-item `}>
            <button className="page-link" aria-label="Next" onClick={goToNextPage}>
              <span aria-hidden="true">Next Page</span>
            </button>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Pagination