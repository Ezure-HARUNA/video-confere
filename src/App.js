import React from 'react';
import { Button }  from '@material-ui/core'

const App = () => {

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
    <Button color="primary" variant="contained">Hello, World!</Button>
  );
}

export default App;
