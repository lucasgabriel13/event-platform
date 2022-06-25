import { Heart, Rocket } from "phosphor-react";
import { LogoRocketseat } from "./LogoRocketseat";

export function Footer() {
  return (
    <footer className="bg-gray-900 flex flex-col md:flex-row items-center justify-between p-6 text-gray-300 md:gap-0 gap-3 border-t mx-6 border-gray-500">
      <div className="flex flex-col md:flex-row items-center md:gap-0 gap-3">
        <LogoRocketseat />
        <strong className="mx-2 font-normal "> Developer - Lucas Gonçalves</strong>
      </div>
      <a href="#" className="hover:text-gray-100 transition-colors">
        Políticas de privacidade
      </a>
    </footer>
  )
}