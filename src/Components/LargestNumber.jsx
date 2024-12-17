import React , {useState} from 'react'

const LargestNumber = () => {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [val3, setVal3] = useState(0);
    const [result, setResult] = useState(null); 
  
    const checkResult = () => {
      if (val1 >= val2 && val1 >= val3) {
        setResult(val1);
      } else if (val2 >= val1 && val2 >= val3) {
        setResult(val2);
      } else if (val3 >= val1 && val3 >= val2) {
        setResult(val3);
      }
    };
  
    return (
      <div className='p-6 bg-gray-800 rounded-lg shadow-lg text-white'>
        <h1 className='text-2xl font-bold mb-6 text-center text-white'>Find Largest Number</h1>
        <div className='flex flex-col items-center'>
          <input
            className='border border-gray-600 p-2 mb-4 bg-gray-900 text-white rounded-md w-full max-w-xs text-center' 
            onChange={(e) => setVal1(parseInt(e.target.value) || 0)}
            type="number"
            placeholder="Enter number 1"
          />
          <input
            className='border border-gray-600 p-2 mb-4 bg-gray-900 text-white rounded-md w-full max-w-xs text-center' 
            onChange={(e) => setVal2(parseInt(e.target.value) || 0)}
            type="number"
            placeholder="Enter number 2"
          />
          <input
            className='border border-gray-600 p-2 mb-4 bg-gray-900 text-white rounded-md w-full max-w-xs text-center' 
            onChange={(e) => setVal3(parseInt(e.target.value) || 0)}
            type="number"
            placeholder="Enter number 3"
          />
          <button 
            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mb-6' 
            onClick={checkResult}
          >
            Check Result
          </button>
          <h2 className='text-xl font-bold'>
            Result is: <span className='text-yellow-400'>{result !== null ? result : 'No result yet'}</span>
          </h2>
        </div>
      </div>
    );
  };
  

export default LargestNumber