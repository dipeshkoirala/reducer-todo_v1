import React, { useReducer } from "react";

import TodoItems from "./components/TodoItems";
import { useDarkMode } from "./components/MyMode";
import { is, TitleReducer } from "./reducer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [state, dispatch] = useReducer(TitleReducer, is);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <p className="myP bg-danger p-3 m-2">
        {state.length}:
        {state.map((item) => {
          return <span>{item.item}</span>;
        })}
      </p>
      <h1 className="header bg-primary m-3 p-3">
        Reducer TODO
        <span className="dark-mode__toggle bg-info float-right">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </span>
      </h1>
      <TodoItems />
    </div>
  );
}

export default App;
