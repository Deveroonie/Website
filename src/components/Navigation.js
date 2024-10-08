import { Link } from "react-router-dom";
export default function Navigation() {
    return (
      <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link className="flex title-font font-medium items-center  mb-4 md:mb-0" to="/">
        <span className="ml-3 text-xl text-white nav-header sm:text-center">Deveroonie</span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-violet-400 text-white" to="/">Home Page</Link>
        <Link className="mr-5 hover:text-violet-400 text-white" to="/experience">Experience</Link>
        <Link className="mr-5 hover:text-violet-400 text-white" to="/projects">Projects</Link>
        <Link className="mr-5 hover:text-violet-400 text-white" to="/domains">My Domains</Link>
      </nav>
    </div>
  </header>
    );
  };