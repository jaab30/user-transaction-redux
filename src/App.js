import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./pages/Main";
import UserDetails from "./pages/UserDetails";



function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Main} />
        <Route exact path="/details" component={UserDetails} />
      </Router>
    </Provider>
  );
}

export default App;
