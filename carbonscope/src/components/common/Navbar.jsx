import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex items-center justify-between border-b px-6 lg:px-20 py-4 bg-white">
      <div className="flex items-center gap-2 text-primary">
        <span className="material-symbols-outlined text-3xl">eco</span>
        <h2 className="text-xl font-bold">EcoBlock</h2>
      </div>

      <nav className="hidden md:flex gap-8">
        <a href="#features" className="hover:text-primary text-sm font-medium">
          Features
        </a>

        <a
          href="#how-it-works"
          className="hover:text-primary text-sm font-medium"
        >
          How it Works
        </a>

        <a href="#user-flow" className="hover:text-primary text-sm font-medium">
          User Flow
        </a>
      </nav>

      <div className="flex gap-3">
        <Link to="/register" className="bg-green-500 px-4 py-2 rounded">
          Register
        </Link>

        <Link to="/register" className="bg-gray-600 px-4 py-2 rounded">
          Login
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
