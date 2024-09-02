import "../App.css";
import Navigation from "../components/Navigation.js";
import Box from "../components/Box.js";
import Helmet from "react-helmet";
import { FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { CgNpm } from "react-icons/cg";

function Experience() {
  return (
    <div>
            <Helmet>
        <title>Experience | Deveroonie.uk</title>
    </Helmet>
      <Navigation></Navigation>
      <br></br>
      <br></br>
      <br></br>

    <Box desc="This page shows all of the coding languages/frameworks I am able to use."></Box>
    <br></br>
    <div className="container mx-auto p-8 m-10">
    <div className="grid last:md:grid-cols-2 sm:grid-cols-1 gap-4">
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3
        className="text-left hfont text-3xl">
            Frontend Development&nbsp;&nbsp;
            <FaHtml5 className="inline-flex items-baseline" />&nbsp;
            <IoLogoCss3 className="inline-flex items-baseline"/>&nbsp;
            <FaJsSquare className="inline-flex items-baseline" />&nbsp;
            <FaReact className="inline-flex items-baseline" />
        </h3><br />
        <p>
            I do quite a lot of frontend development!
            I use React or NextJS and TailwindCSS for most of my websites, including this one.<br />
            I use EJS for most of my backend website's templating, however I am going to try and use React for that instead.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3
        className="text-left hfont text-3xl">
            Backend Development&nbsp;&nbsp;
            <FaNodeJs className="inline-flex items-baseline" />&nbsp;
            <CgNpm className="inline-flex items-baseline" />
            </h3>
        <br />
        <p>
            I do some backend development, however not as much as I do frontend development.<br />
            I use NodeJS and NPM for this, with the Express package.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3
        className="text-left hfont text-3xl">
            Discord Bot Development&nbsp;&nbsp;
            <FaNodeJs className="inline-flex items-baseline" />&nbsp;
            <CgNpm className="inline-flex items-baseline" />
        </h3>
        <br />
        <p>
            I do some Discord bot development occasionally.<br />
            For this i use the WornOffKeys command handler and Discord.js
        </p>
    </div>
    
</div>
    
    </div>
    </div>
  );

};


export default Experience;

    //<div className="col-start-2 row-start-2 bg-zinc-900 text-white rounded-xl drop-shadow-m">6</div>
    //<div className="col-start-1 row-start-2 bg-zinc-900 text-white rounded-xl drop-shadow-m">7</div>