// code for VideoListItem largely taken from CS52 SA4 tutorial

import React from 'react';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => props.onVideoSelect(props.video)}>
      <img src={imgUrl} alt="video" />
      <div>{props.video.snippet.title}</div>
    </li>
    );
};

export default VideoListItem;
