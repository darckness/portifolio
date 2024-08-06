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
      <div className="w-0 md:w-1/2 relative flex items-center justify-center bg-[url('2790af45-6f86-44ec-8bb4-06db8cca8d65.jpg')] bg-cover bg-center -scale-x-100"></div>
      <div className="rounded-full h-10 w-10 bg-gray-800 absolute top-3/4 left-1/2 transform -translate-y-1/4 -translate-x-1/2 duration-1000 hover:scale-150 hover:w-56 md:w-10 md:-translate-y-1/2 md:top-1/2 md:transform transition-transform-color border md:duration-1000 md:hover:scale-150 hover:bg-gray-400 md:hover:w-10 md:h-2/4 md:-translate-x-1/2 md:left-2/4">
      <div className=" w-7 h-7 rounded-full absolute md:left-1/2 md:-translate-x-1/2 md:top-20 bg-center bg-no-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271em%27 height=%271em%27 viewBox=%270 0 24 24%27%3E%3Cg fill=%27none%27 stroke=%27%23ffffff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27%3E%3Cpath stroke-dasharray=%2721%27 stroke-dashoffset=%2721%27 d=%27M5 21H19%27%3E%3Canimate fill=%27freeze%27 attributeName=%27stroke-dashoffset%27 dur=%270.4s%27 values=%2721;0%27/%3E%3C/path%3E%3Cpath stroke-dasharray=%2715%27 stroke-dashoffset=%2715%27 d=%27M5 21V8M19 21V8%27%3E%3Canimate fill=%27freeze%27 attributeName=%27stroke-dashoffset%27 begin=%270.4s%27 dur=%270.4s%27 values=%2715;0%27/%3E%3C/path%3E%3Cpath stroke-dasharray=%2726%27 stroke-dashoffset=%2726%27 d=%27M2 10L12 2L22 10%27%3E%3Canimate fill=%27freeze%27 attributeName=%27stroke-dashoffset%27 begin=%271s%27 dur=%270.8s%27 values=%2726;0%27/%3E%3C/path%3E%3C/g%3E%3C/svg%3E')", backgroundSize: "100% 100%" }}></div>
      <div className="w-7 h-7 rounded-full absolute md:left-1/2 md:-translate-x-1/2 md:top-40 bg-center bg-no-repeat" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M12 5C13.66 5 15 6.34 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='1.2s' values='20;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='36' stroke-dashoffset='36' d='M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14z' opacity='0'%3E%3Cset attributeName='opacity' begin='1.5s' to='1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1.5s' dur='1.2s' values='36;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")",backgroundSize: "100% 100%",}}></div>

      </div>
    </div>
  );
}
