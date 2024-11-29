import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./app/index.css";
import { Provider } from "react-redux";
import store from "./app/redux/store.js";
import { BrowserRouter } from "react-router-dom";
import "./i18n/i18n.js"
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
