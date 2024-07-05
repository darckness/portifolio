import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
   <div className="bg-gray-900 ">
    <div className="bg-gray-800 w-1/2 h-screen">
    <div className="rounded-full h-2/4 w-10 bg-blue-500 absolute top-1/4 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:scale-150 hover:bg-yellow-500">
      <div className="perfil"></div>
      <div className="perfil"></div>
      <div className="perfil"></div>
      <div className="perfil"></div>
    </div>
    </div>
   </div>
  );
}
