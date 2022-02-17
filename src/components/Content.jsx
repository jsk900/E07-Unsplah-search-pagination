import React from 'react';

const Content = ({ data }) => {
  const imageList = data.results.results.map((image) => (
    <img key={image.id} src={image.urls.thumb} alt='' />
  ));

  return <section>{imageList}</section>;
};

export default Content;
