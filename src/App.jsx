import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ColorPicker from "./components/ColorPicker";
import { useColors } from "./hooks/useColors";

const App = () => {

  const { color, handleChangeColor, handleSubmitSaveColor } = useColors();

  return (
    <div className="container">
      <ColorPicker
        color={color}
        handleChangeColor={handleChangeColor}
        handleSubmitSaveColor={handleSubmitSaveColor}
      />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
