import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import css from './App.module.css'
import { ErrorMessage } from 'formik';
import ImageGallery from '../ImageGallery/ImageGallery';
function App() {
  const [images, setImages] = useState([]);
  const [topicName, setTopicName] = useState("");
  const [page, setPage] = useState(0);
  const [imageModalWindow, setImageModalWindow] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleSearch = async (newTopicName) => {
    setImages([]);
    setPage(1);
    setTopicName(newTopicName);
  }

  const handleImageModalWindow = (modalData) => {
    setImageModalWindow(!imageModalWindow);
    setModalData(modalData);
  }
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} openModalWindow={handleImageModalWindow}/>
      )}
      
    </div>
  )
}
/*{error && <ErrorMessage/>}*/
export default App
