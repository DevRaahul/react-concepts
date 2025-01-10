import "./App.css";
import CountComponent from "./components/CountComponent";
import { Button } from "./components/ui/button";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { globalData, updateGlobalContext } = useGlobalContext();

  const changeTest = () => {
    updateGlobalContext({ test: "btn clicked" });
  };

  return (
    <>
      <h2>React App</h2>
      <div className="w-full h-[90vh] flex justify-center items-center gap-4 flex-col">
        <div>
          <h3>{"Global Data: " + globalData.test}</h3>
          <Button onClick={changeTest}>Click me</Button>
        </div>
        <CountComponent />
      </div>
    </>
  );
}

export default App;
