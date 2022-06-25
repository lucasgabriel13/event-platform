import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 md:relative justify-start px-6 md:px-0 w-full py-5 flex items-center z-[51] md:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  )
}