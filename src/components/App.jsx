import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import { ProgressBar } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImagesWithQuery } from './services/api';

const App = () => {
  const [formInput, setFormInput] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageId, setPageId] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (formInput == null) {
        return;
      }
      setLoading(true);
      setImages([]);
      setShowLoadMore(false);
      try {
        const apiResponse = await fetchImagesWithQuery(formInput);
        const { hits, totalHits } = apiResponse;

        if (totalHits > hits.length) {
          setShowLoadMore(true);
        }

        if (hits.length === 0) {
          setLoading(false);
          return toast.info('Sorry no images were found per your request..');
        }
        setImages([...hits]);
        setLoading(false);
        setPageId(2);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, [formInput]);

  const loadMore = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetchImagesWithQuery(formInput, pageId);
      const { hits, totalHits } = apiResponse;

      if (totalHits <= pageId * 12) {
        setShowLoadMore(false);
        toast.info(`You've reached the end of the collection!`);
      }

      setImages(prev => [...prev, ...hits]);
      setLoading(false);
      setPageId(prev => prev + 1);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSubmit = input => {
    setFormInput(input);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit}></SearchBar>

      {images.length > 0 && <ImageGallery imagesArr={images}></ImageGallery>}
      {loading && (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{
            display: 'block',
            margin: '0 auto',
          }}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#3f51b5"
        />
      )}
      {showLoadMore && <LoadMoreBtn onloadMore={loadMore}></LoadMoreBtn>}
      <ToastContainer autoClose={4000} theme="colored" />
    </div>
  );
};

export default App;