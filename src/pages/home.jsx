import { useState, useEffect } from "react";
import "../App.css";
import glowinZeroWall from "../assets/glowinZeroWall.jpg";
import glowinZeroGif from "../assets/glowinZerogif.gif";

function App() {
  const [enterButtonVisible, setEnterButtonVisible] = useState(true);
  const [showGlowinZeroLogo, setShowGlowinZeroLogo] = useState(false);
  const [showGif, setShowGif] = useState(true);

  function glowinZeroLogoShow() {
    if (enterButtonVisible) {
      setShowGlowinZeroLogo(true);
    }
  }

  useEffect(() => {
    if (enterButtonVisible) return;
    const gifDuration = 3000;
    const timer = setTimeout(() => {
      setShowGif(false);
    }, gifDuration);

    return () => clearTimeout(timer);
  }, [enterButtonVisible]);

  return (
    <div className="landingPage">
      {enterButtonVisible && (
        <button
          onClick={() => {
            setEnterButtonVisible(false);
            glowinZeroLogoShow();
          }}
        >
          <p>Enter</p>
        </button>
      )}
      {!enterButtonVisible && (
        <div className="mainPageComponents">
          <div className="glowinZeroLogo">
            <img src={showGif ? glowinZeroGif : glowinZeroWall} alt="Logo" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
