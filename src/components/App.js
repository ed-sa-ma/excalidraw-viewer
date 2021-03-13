import { useState, useEffect } from "react";
import Excalidraw from "@excalidraw/excalidraw";

import initialData from "../data/diagram.js";

const DIAGRAM_WIDTH = 875;
// Horizontal scroll to show the diagram centered in the screen when loading.
initialData.appState.scrollX = window.innerWidth / 2 - DIAGRAM_WIDTH / 2;

function App() {
  const [dimensions, setDimensions] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    function onResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="App">
      <Excalidraw height={dimensions.height} width={dimensions.width} initialData={initialData} viewModeEnabled={true} />
    </div>
  );
}

export default App;
