import React from 'react';
import imageInSrc from './imgs/imageInSrc.jpg';
import "./style.css";

function App() {
  return (
    <div>
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        <h1 className="title red">Amani Ouertani</h1>
        <br />
        <img src={imageInSrc} className="pic" alt="img in src"/>
        <br />
        <img src="/img/imageInPublic.jpg" className="pic" alt="img in public" />
      </div>
      <video className="vid"  controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
