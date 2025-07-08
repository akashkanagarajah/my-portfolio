import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-950 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-400">Akash</h1>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href} className="text-white hover:text-emerald-400 transition">
              {label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-2">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href} className="block text-white hover:text-emerald-400 transition">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;