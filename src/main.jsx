import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./core/redux/store.js";
import "./index.css";
import Album from "./components/Album.jsx";
import Photos from "./components/Photos.jsx";
import Comments from "./components/Comments.jsx";
import Todos from "./components/Todos.jsx";
import Users from "./components/Users.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Users />
    </Provider>
  </React.StrictMode>
);
