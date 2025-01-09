import { dispatch } from "@/redux/Hooks";
import { Button } from "./ui/button";
import { increment } from "@/redux/slices/counterSlice";

const CountComponent = () => {
  return (
    <div>
      dispatch
      <Button onClick={() => dispatch(increment())}>Count Btn</Button>
    </div>
  );
};

export default CountComponent;
