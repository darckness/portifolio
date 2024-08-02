import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex">
      <div className="bg-gray-700 w-full md:w-1/2 flex flex-col justify-center items-center p-5 relative">
        <h1 className="text-white font-Bungee text-6xl md:text-8xl mb-8">
          Olá
        </h1>
        <h1 className="text-yellow-500 font-Anton text-3xl md:text-5xl mb-8 transition-transform-color duration-1000 hover:text-white">
          Me chamo João Lopes
        </h1>
        <p className="font-Anton text-lg md:text-3xl leading-normal text-white transition-transform-color duration-1000 hover:text-yellow-500 text-center mb-8">
          Seja bem-vindo!<br />
          Dê uma olhada nos meus projetos<br />
          e descubra como posso contribuir<br />
          para seu próximo desafio.
        </p>
      </div>
      <div className="bg-gray-900 w-0 md:w-1/2 relative flex items-center justify-center"></div>
      <div className="rounded-full h-10 w-10 bg-gray-800 absolute top-3/4 left-1/2 transform -translate-y-1/4 -translate-x-1/2 duration-1000 hover:scale-150 hover:w-56 md:w-10 md:-translate-y-1/2 md:top-1/2 md:transform transition-transform-color border md:duration-1000 md:hover:scale-150 hover:bg-gray-400 md:hover:w-16 md:h-2/4 md:-translate-x-1/2 md:left-2/4"></div>
    </div>
  );
}
