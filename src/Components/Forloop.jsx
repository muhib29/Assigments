import React , {useState} from 'react'

const Forloop = () => {
    const [val, setval] = useState([1, 2, 3]);
    return (
      <>
        <div className="p-6 bg-gray-700 text-white ">
          <div className="text-center">
            <h1 className="text-3xl  font-bold mb-6 text-white">For Loop</h1>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-lg transition-colors duration-300"
              onClick={() => {
                let lst2 = [];
                for (let i = 1; i <= 25; i++) {
                  lst2.push(
                    <h3
                      key={i}
                      className="w-14 h-10 bg-red-500 text-white font-medium flex items-center justify-center rounded-md shadow-md hover:bg-red-600 transition-all duration-300"
                    >
                      Box {i}
                    </h3>
                  );
                }
                setval(lst2);
              }}
            >
              Click
            </button>
          </div>
          <div className="grid grid-cols-10 gap-1 mt-8">{val}</div>
        </div>
      </>
    );
  };
  

export default Forloop