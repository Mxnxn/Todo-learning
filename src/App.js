import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// linking Layout fil with Appjs on specific path /
import Layout from "./MainTodo/Layout";

const App = (props) => {
      return (
            <BrowserRouter>
                  <Route path="/test" exact render={(props) => <Layout />} />
            </BrowserRouter>
      );
};

// browserRouter for modifing all of the routes or adding some prefixes to routing
// Route is defining a specific route which will call a component
// render has props with some navigation properties

export default App;
