import React, { useState } from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';

const App = () => {

  const [ localPeerName, setLocalPeerName ] = useState('');
  const [ remotePeerName, setRemotePeerName ] = useState('');

  const getMedia =  async (state) => {
    const constraints = { audio: true, video: true };
  
    try {
      return await navigator.mediaDevices.getUserMedia(constraints);
      /* ストリームを使用 */
    } catch(err) {
      /* エラーを処理 */
      console.log(err);
    }
  }
  getMedia();
  return (
    <>
      <InputFormLocal
        localPeerName={localPeerName}
        setLocalPeerName={setLocalPeerName}
      />
      <InputFormRemote
        remotePeerName={remotePeerName}
        setRemotePeerName={setRemotePeerName}
      />
   </>
  );
}

export default App;
