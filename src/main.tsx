import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import GlobalContext from "./context/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <GlobalContext>
    <Provider store={store}>
      <App />
    </Provider>
  </GlobalContext>
);
