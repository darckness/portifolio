import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
   <div className="bg-gray-900 ">
    <div className="bg-gray-700 w-1/2 h-screen">
    <div className="rounded-full border h-2/4 w-10 bg-gray-800 absolute top-1/4 left-1/2 transform -translate-x-1/2 transition-transform-color-border duration-1000 hover:scale-150 hover:bg-gray-400">
    </div>
    </div>
   </div>
  );
}
