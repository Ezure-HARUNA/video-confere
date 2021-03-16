import React, { useEffect, useRef } from 'react'
import Video from './Video';

const VideoRemote = ({ name }) => {
    const videoRef = null;
    

    return (
        <div>
          <Video isLocal={false} name={name} videoRef={videoRef}/>
        </div>
    )
}

export default VideoRemote
