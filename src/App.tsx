import "./App.css";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { globalData, updateGlobalContext } = useGlobalContext();
  return (
    <>
      <h2>{globalData.test}</h2>
      <h2>React App</h2>
      <button onClick={() => updateGlobalContext({ test: "Dummy test data" })} style={{ border: "1px solid black", padding: "5px" }}>
        {" "}
        Click me daddy
      </button>
    </>
  );
}

export default App;
