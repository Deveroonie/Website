import { Link } from "react-router-dom";
export default function Navigation() {
    return (
      <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center  mb-4 md:mb-0" href="/">
        <span className="ml-3 text-xl text-white nav-header">Deveroonie</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-red-400 text-white" to="/">Home Page</Link>
        <Link className="mr-5 hover:text-red-400 text-white" to="/experience">Experience</Link>
        <Link className="mr-5 hover:text-red-400 text-white" to="/projects">Projects</Link>
      </nav>
      <a href="https://github.com/Deveroonie">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">My Github
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </a>
      
    </div>
  </header>
    );
  };