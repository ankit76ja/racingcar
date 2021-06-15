import logo from './logo.svg';
import './App.css';
import * as handTrack from 'handtrackjs';
import { useEffect } from 'react';

function App() {


  // Load the model.
  useEffect(() => {
    const video = document.getElementById('video');

    handTrack.startVideo(video).then(model=>{
      console.log(model);
      console.log("model loaded")
      model.detect().then(predictions => {
        console.log('Predictions: ', predictions); 
      });
    })
   
  }, [])
  

  return (
    <div className="App">
      <video src="" id="video"/>
    </div>
  );
}

export default App;
