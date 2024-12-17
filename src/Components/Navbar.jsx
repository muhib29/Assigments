import React from 'react';

const Navbar2 = ({ handleClick }) => {
  return (
    <nav className="bg-gray-900 bg-opacity-90 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-purple-400">Assignments</a>
        <div>
          <span onClick={handleClick} className="text-purple-400 hover:text-white font-extrabold text-3xl cursor-pointer">
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;