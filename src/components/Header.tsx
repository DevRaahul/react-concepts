import { FC } from "react";
import { CircleUserRound, Component, ShoppingCart } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="w-full flex items-center justify-between h-16 bg-slate-500 opacity-90 p-2 sticky">
      <div className="flex items-center justify-around gap-4">
        <Component />
        <h3>React Concepts</h3>
      </div>
      <nav className="flex items-center justify-around gap-8 px-2">
        <div className="relative">
          <p className="top-0 left-5 absolute p-1 rounded-full border-black bg-red-600 text-xs">0</p>
          <ShoppingCart />
        </div>
        <CircleUserRound />
      </nav>
    </header>
  );
};

export default Header;
