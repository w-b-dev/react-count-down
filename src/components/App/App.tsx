import React, { useState, useCallback } from "react";
import "./App.css";
import CardsGrid from "../CardsGrid";
import Sidebar from "../Sidebar";
import { mockResponse } from "../../data/mocks";

function App() {
  const [state, setState] = useState(mockResponse);
  const handleClick = useCallback(function (id: string) {
    console.log(`${id} handleClick`);
    const newResponse = mockResponse.map((e) => {
      if (e.id === id) {
        e.selected = !e.selected;
      }
      return e;
    });
    setState(newResponse);
  }, []);
  return (
    <React.Fragment>
      <Sidebar />
      <CardsGrid cards={state} handleClick={handleClick} />
    </React.Fragment>
  );
}

export default App;
