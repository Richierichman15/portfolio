import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from './pics/IMG_4669.jpg'

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  // const toggleDarkMode = () => {
  //     setDarkMode(!isDarkMode);
  // };
    return(
            <header className="bg-gray-800 p-4">
              <div className="flex items-center">
                <h1 className="w-10 h-10 rounded-full text-white" >Gitonga Nyaga</h1>
                {/* <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
                  <button onClick={toggleDarkMode}>Dark Mode</button>
                </div> */}

                <div className="ml-auto space-x-4">
                  <Link to='/' className="text-white hover:text-gray-400">Home</Link>
                  <Link to='/education' className="text-white hover:text-gray-400">Education</Link>
                  <Link to='/projects' className="text-white hover:text-gray-400">Projects</Link>
                  {/* <Link to='/resume' className="text-white hover:text-gray-400">Resume</Link> */}
                  <a href="https://maroon-mada-66.tiiny.site" target="_blank" rel="noopener noreferrer">
                    <button className='text-white hover:text-gray-400'>Resume</button>
                  </a>
                </div>
              </div>
            </header>
          );
        };
        
    
export default Header;