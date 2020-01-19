import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store/store";
import Content from "../Content";
import HeaderButtons from "../../components/HeaderButtons";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <HeaderButtons />
        <Content />
      </Router>
    </Provider>
  );
};

export default App;
