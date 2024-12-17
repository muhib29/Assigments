import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MarkSheet = () => {
    const [val, setval] = useState(null);
    const [grade, setgrade] = useState("-");
    const [percentage, setpercentage] = useState(0);
    const [ShowBox, setShowBox] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
  
        const handleClick = () => {
      if (val > 550) {
        toast.error("Obtain Number Should be less than 550");
      } else {
        var per = ((val / 550) * 100).toFixed(2);
        setpercentage(per);
  
        if (per >= 90) {
          setgrade("A++");
        } else if (per >= 80) {
          setgrade("A+");
        } else if (per >= 70) {
          setgrade("B");
        } else if (per >= 60) {
          setgrade("C");
        } else {
          setgrade("Fail");
        }
        setShowBox(true);
      }
    };
  
    const toggleFullScreen = () => {
      setIsFullScreen(!isFullScreen);
    };
  
    return (
      <div
        className={`bg-none text-white p-6 rounded-lg shadow-lg transition-all duration-300 ${isFullScreen ? 'fixed top-0 left-0 w-full h-full z-50 bg-gray-900' : 'max-w-md mx-auto'}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-purple-400">MarkSheet</h2>
          <button
            onClick={toggleFullScreen}
            className="text-purple-500 hover:text-purple-700"
          >
            {isFullScreen ? 'Minimize' : 'Full Screen'}
          </button>
        </div>
        <div className="mb-4">
          <input
            onChange={(e) => setval(e.target.value)}
            type="number"
            placeholder="Enter Obtain numbers"
            className="w-full p-2 mb-2 text-black rounded-md"
          />
          <button
            onClick={handleClick}
            className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600"
          >
            Check Result
          </button>
        </div>
        {ShowBox && (
          <div className="bg-purple-700 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Obtained Marks: {val}</h2>
            <h2 className="text-lg font-semibold">Total Marks: 550</h2>
            <h2 className="text-lg font-semibold">Your Percentage: {percentage}%</h2>
            <h2 className="text-lg font-semibold">Your Grade: {grade}</h2>
          </div>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  };

export default MarkSheet