import React , {useState} from 'react'

const Percentage = () => {
    const [val, setVal] = useState(0);
    const [grade, setGrade] = useState('-');
  
    return (
      <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
        <h1 className="text-2xl font-bold mb-6 text-center text-white" >Grade Calculator</h1>
        <div className="flex flex-col items-center">
          <input 
            className="border border-gray-600 p-2 mb-4 bg-gray-900 text-white rounded-md w-full max-w-xs text-center" 
            onChange={(e) => setVal(parseInt(e.target.value))} 
            type="text" 
            placeholder="Enter your score"
          />
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mb-6" 
            onClick={() => {
              if (val >= 90) {
                setGrade('A++');
              } else if (val >= 80) {
                setGrade('A+');
              } else if (val >= 70) {
                setGrade('B');
              } else if (val >= 60) {
                setGrade('C');
              } else {
                setGrade('Fail');
              }
            }}
          >
            Calculate Result
          </button>
          <h1 className="text-xl font-bold text-white">
            Your Grade is: <span className="text-yellow-400">{grade}</span>
          </h1>
        </div>
      </div>
    );
  }
  

export default Percentage