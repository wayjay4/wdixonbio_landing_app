import './App.css';
import logo from './assets/images/wdbio-fav-128x130.png';
import {useState} from "react";

function App({children}) {
    const url = window.location.href;

    const [isActive, setIsActive] = useState(true);

    console.log('url:', url);

    function isActiveLink(name) {
        return true;
    }

  return (
    <>
        <div className="bg-gray-900 homepage-bg-image min-h-screen flex flex-col justify-between">
            <header className="sticky top-0">
                <nav className="container mx-auto flex flex-col space-y-1 lg:space-y-0 lg:flex-row items-center justify-between px-4 py-6">
                    <a href="#">
                        <div className="w-32 flex-none" hidden>logo here</div>
                    </a>
                    <ul className="flex ml-0 lg:ml-16 space-x-8 items-center">
                        <li><a href="/" className={`text-xs hover:text-amber-400 font-bold uppercase `+(isActive ? 'text-amber-400' : '')}>Home</a></li>
                        <li><a href="https://wdixonbio.webtalkerdesigns.com/about" className="text-xs hover:text-amber-400 font-bold uppercase">About Me</a></li>
                        <li><a href="https://wdixonbio.webtalkerdesigns.com/skills" className="text-xs hover:text-amber-400 font-bold uppercase">Experience and Skills</a></li>
                        <li><a href="https://wdixonbio.webtalkerdesigns.com/portfolio" className="text-xs hover:text-amber-400 font-bold uppercase">Portfolio</a></li>
                        <li><div className="border border-gray-200 rounded-md hover:bg-white hover:shadow-outline px-3 py-1 items-center"><a href="https://wdixonbio.webtalkerdesigns.com/vendor/mbr/assets/files/wdixon_resume_web_developer.pdf" target="_blank" className="text-xs hover:text-black uppercase font-bold">Download Resume</a></div></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="container mx-auto">
                    <div className="ml-60">
                        <h1 className="welcome-container text-7xl font-bold text-white">
                            Hi,<br/>
                            I'm Waylon, <br/>
                            full stack web developer.
                        </h1>
                        <div className="skill-container text-3xl mt-6">
                            <span className="italic">Frontend Developer</span> | <span className="italic">Backend Developer</span> | <span className="italic">DevOps</span>
                        </div>
                    </div>
                </div>
                {children}
            </main>
            <footer className="bg-neutral-800 bg-opacity-90">
                <div className="container mx-auto px-4 py-2 flex flex-col items-center justify-center">
                    <div className="w-screen px-40 py-2 flex justify-between items-center">
                        <div><img src={logo} className="w-20"  alt="dragon head"/></div>
                        <div className="flex flex-col items-start justify-items-center">
                            <h3 className="text-xl text-gray-400 font-bold">Lives In:</h3>
                            <div className="text-sm mt-0.5">Phoenix, AZ</div>
                        </div>
                        <div className="flex flex-col items-start justify-items-center">
                            <h3 className="text-xl text-gray-400 font-bold">Email:</h3>
                            <div className="text-sm mt-0.5">dixonw184@gmail.com</div>
                        </div>
                        <div className="flex flex-col items-start justify-items-center items">
                            <h3 className="text-xl text-gray-400 font-bold">Links:</h3>
                            <ul className="text-sm flex space-x-3">
                                <li className="hover:text-amber-400"><a href="https://www.linkedin.com/in/waylon-dixon-332b6958/" target="_blank">LinkedIn</a></li>
                                <li className="hover:text-amber-400"><a href="https://github.com/wayjay4" target="_blank">Github</a></li>
                                <li className="hover:text-amber-400"><a href="https://hub.docker.com/u/rufusmace" target="_blank">DockerHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>
  );
}

export default App;
