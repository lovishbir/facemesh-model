// 1. Install dependencies 
// 2. Import dependencies 
// 3. Setup webcam and canvas 
// 4. Define references to those 
// 5. Load posenet 
// 6. Detect function 
// 7. Drawing utilities
// 8. Load triangulation
// 9. Setup triangular path
// 10. setup point drawing
// 11. add drawMesh to detect function



import React,{useRef} from 'react'
//import logo from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";

function App(){
  // Setup references
  const webcamRef = useRef(null)
  const canvasRef = useRef(null) 
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
