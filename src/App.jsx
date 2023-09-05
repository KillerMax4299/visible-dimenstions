import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Initialize state variables to hold window width and height
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Update state when the window is resized
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add a resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h2>Window Dimensions</h2>
      <div>
        {windowWidth} × {windowHeight}
      </div>
    </div>
  );
}

export default App;
