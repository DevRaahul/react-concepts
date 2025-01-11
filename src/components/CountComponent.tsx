import { Button } from "./ui/button";
import { increment } from "@/redux/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";

const CountComponent = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: any) => state.counter);

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
