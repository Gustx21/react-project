import React from 'react';

function Video() {
  const youtubeID = '6IuQUgeDPg0';

  return (
    <iframe
      className='video'
      title='Youtube player'
      sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
      width={'100%'}
      height={'450px'}
      src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
    ></iframe>
  );
}

export default Video;