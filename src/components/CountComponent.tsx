import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { increment } from "@/redux/slices/counterSlice";

const CountComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.counter);
  console.log(data);

  const incrementCount = () => {
    dispatch(increment());
  };
  return (
    <div>
      <h3>{"Data from Redux: " + data.count}</h3>
      <Button onClick={incrementCount}>Count Increment</Button>
    </div>
  );
};

export default CountComponent;
