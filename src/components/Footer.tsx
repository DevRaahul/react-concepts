import { Instagram, MessageCircle, Send, AtSign } from "lucide-react";
import { FC } from "react";
import { Separator } from "./ui/separator";

const Footer: FC = () => {
  return (
    <footer className="sm:flex bg-slate-500 opacity-90 p-2 w-full h-16 justify-between flex-col md:flex-row ">
      <div className="flex gap-2 items-center justify-center">
        <h3>Social Link</h3>
        <Separator orientation="vertical" className="bg-black" />
        <Instagram size={16} />
        <MessageCircle size={16} />
        <Send size={16} />
        <AtSign size={16} />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <h4>
          Copyright@2025 India.
          <a href="" className="underline text-blue-950">
            Privacy Policy
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
