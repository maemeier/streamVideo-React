import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/" exact component={PageOne} />
      </BrowserRouter>
    </div>
  );
};
export default App;
