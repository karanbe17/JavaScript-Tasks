import { useState, useEffect, useContext, useRef, useReducer, createContext } from "react";
import State from './state.jsx';
import Timer from './effect.jsx';
import UserViewer from './UserViewer.jsx';
import ThemedBox from './context.jsx';
import WindowWidth from './classfnc.jsx';

function App() {
  return (
    <div>
      <State />
      <Timer />
      <UserViewer />
      <ThemedBox />
      <WindowWidth />
    </div>
  );
}

export default App;