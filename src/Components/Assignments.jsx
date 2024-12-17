import React, { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LargestNumber from './LargestNumber';
import Percentage from './Percentage';
import Forloop from './Forloop';
import Navbar2 from './Navbar';
import MarkSheet from './MarkSheet';
import QuizApp from './QuizApp';


const Assignments = () => {
    const [handleshow, sethandleshow] = useState(null);

    const hambuger = () => {
      sethandleshow(1);
    };
  
    const handleClick = () => {
      sethandleshow(2);
    };
    return (
      <>
        <Navbar2 handleClick={handleClick} />
        <div className="flex h-screen bg-gradient-to-br from-purple-700 via-purple-900 to-black">
          {/* Sidebar */}
          <div className={`${handleshow === 1 ? 'hidden' : 'block'} ${handleshow === 2 ? 'block' : 'hidden'} p-6 bg-gray-900 bg-opacity-90 shadow-lg border-r scrollable-sidebar  border-purple-800 transition-all duration-300 ease-in-out`} style={{ flex: '2' }}>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold mb-6 text-purple-300"></h1>
              <span onClick={hambuger} className="text-white font-extrabold text-3xl cursor-pointer">
                <i className="fa-solid fa-xmark not-italic"></i>
              </span>
            </div>
            <ul className="space-y-6">
              <li className="cursor-pointer hover:bg-purple-700 hover:text-white transition-colors duration-300 p-4 rounded-lg text-lg font-medium text-gray-300"
                onClick={() => createRoot(document.getElementById('file')).render(<StrictMode><LargestNumber /></StrictMode>)}>
                Assignment 1
              </li>
              <li className="cursor-pointer hover:bg-purple-700 hover:text-white transition-colors duration-300 p-4 rounded-lg text-lg font-medium text-gray-300"
                onClick={() => createRoot(document.getElementById('file')).render(<StrictMode><Percentage /></StrictMode>)}>
                Assignment 2
              </li>
              <li className="cursor-pointer hover:bg-purple-700 hover:text-white transition-colors duration-300 p-4 rounded-lg text-lg font-medium text-gray-300"
                onClick={() => createRoot(document.getElementById('file')).render(<StrictMode><Forloop /></StrictMode>)}>
                Assignment 3
              </li>
              <li className="cursor-pointer hover:bg-purple-700 hover:text-white transition-colors duration-300 p-4 rounded-lg text-lg font-medium text-gray-300"
                onClick={() => createRoot(document.getElementById('file')).render(<StrictMode><MarkSheet /></StrictMode>)}>
                Assignment 4
              </li>
              <li className="cursor-pointer hover:bg-purple-700 hover:text-white transition-colors duration-300 p-4 rounded-lg text-lg font-medium text-gray-300"
                onClick={() => createRoot(document.getElementById('file')).render(<StrictMode><QuizApp /></StrictMode>)}>
                Assignment 5
              </li>
            </ul>
          </div>
  
          {/* Content Area */}
          <div id="file" className="p-10 bg-gray-800 bg-opacity-90 shadow-xl border items-center border-purple-800 rounded-r-lg flex justify-center " style={{ flex: '8' }}>
            <h1 className="text-3xl font-bold text-white">Please select an assignment from the menu</h1>
          </div>
        </div>
      </>
    );
  };
  

export default Assignments