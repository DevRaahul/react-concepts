import { FC } from "react";
import { Component } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="w-full flex items-center justify-between h-16 bg-slate-500 opacity-90 p-2 sticky">
      <div className="flex items-center justify-around gap-4">
        <Component />
        <h3>React Concepts</h3>
      </div>
      <nav className="flex items-center justify-around gap-4">
        <h3>Sign In</h3>
        <h3>Profile</h3>
      </nav>
    </header>
  );
};

export default Header;
