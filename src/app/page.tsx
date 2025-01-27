import Image from "next/image";
import './globals.css';
import Menu from "./components/Menu";

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
      <div className="w-0 md:w-1/2 relative flex items-center justify-center bg-[url('2790af45-6f86-44ec-8bb4-06db8cca8d65.jpg')] bg-cover bg-center -scale-x-100"></div>
      <Menu />
    </div>
  );
}
