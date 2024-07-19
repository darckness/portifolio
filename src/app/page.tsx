import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
   <div className="bg-gray-900 ">
    <div className="bg-gray-700 w-1/2 h-screen">
      <h1 className="flex absolute top-1/3 left-1/4 -translate-x-1/2">Olá mundo</h1>
    <div className="rounded-full h-2/4 w-10 bg-gray-800 absolute top-1/4 left-1/2 transform -translate-x-1/2 transition-transform-color border duration-1000 hover:scale-150 hover:bg-gray-400 hover:w-20">
    </div>
    </div>
   </div>
  );
}
