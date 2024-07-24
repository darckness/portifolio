import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
   <div className="bg-gray-900 ">
    <div className="bg-gray-700 w-1/2 h-screen">
      <h1 className="flex absolute top-56 left-1/4 -translate-x-56 text-white font-Bungee text-9xl transition-transform-color duration-1000 hover:text-gray-400">Olá</h1>
      <h1 className="flex absolute top-96 left-1/4 -translate-x-56 text-yellow-500 font-Anton text-6xl transition-transform-color duration-1000 hover:text-yellow-400">Me chamo João Lopes</h1>
      <p className="flex absolute  top-3/4 left-1/4 -translate-x-56 font-Anton text-4xl leading-normal text-white transition-transform-color duration-1000 hover:text-yellow-500">
      Seja bem-vindo!<br />
      Dê uma olhada nos meus projetos<br />
      e descubra como posso contribuir<br />
      para seu próximo desafio.
      </p>
    <div className="rounded-full h-2/4 w-10 bg-gray-800 absolute top-1/4 left-1/2 transform -translate-x-1/2 transition-transform-color border duration-1000 hover:scale-150 hover:bg-gray-400 hover:w-16">
    </div>
    </div>
   </div>
  );
}
