import React from 'react';
import './ImageList.css';

const ImageList = props => {
  const images = props.images.map(({id,urls,discription}) => {
    return <img key={id} src={urls.regular} alt={discription} />;
  });
  return (
    <div className="image-list">
      {images}
    </div>
  );
};
export default ImageList;