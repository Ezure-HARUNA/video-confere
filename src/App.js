import React from 'react';

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
    <div className="App">
      <div>Hello, React!</div>
    </div>
  );
}

export default App;
