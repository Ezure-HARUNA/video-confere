import React from 'react';

const Video = ({ isLocal, name, videoRef }) => {
    return (
        <div>
           <video autoPlay={true} muted={isLocal} ref={videoRef} />
           <div>{name}</div>
        </div>
    )
}

export default Video;
