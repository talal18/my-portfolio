// Navbar.tsx
export default function Navbar() {
  return (
    <nav className="md:hidden fixed top-0 w-full bg-black text-white px-6 py-4 z-50">
      <ul className="flex justify-between text-sm">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
