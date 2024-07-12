
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

import Website from './components/Website';
import Webc from './components/Webc';
import Webad from './components/Webad';

import Application from './components/Application';
import Appc from './components/Appc';
import Appad from './components/Appad';

function App() {
  return (
   <>
   
      <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/website" exact element={<Website/>} />
        <Route path="/webc" exact element={<Webc/>} />
        <Route path="/webad" exact element={<Webad/>} />
        
        <Route path="/application" exact element={<Application/>} />
        <Route path="/appc" exact element={<Appc/>} />
        <Route path="/appad" exact element={<Appad/>} />
        
        
      </Routes>
    </Router>
		
			
	
    
   </>

   
  );
}

export default App;


//test inital


// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [features, setFeatures] = useState(Array(5).fill(''));
//     const [prediction, setPrediction] = useState('');

//     const handleChange = (index, value) => {
//         const newFeatures = [...features];
//         newFeatures[index] = value;
//         setFeatures(newFeatures);
//     };

//     const handleClick = async () => {
//         const data = { features };
//         try {
//             const response = await axios.post('http://localhost:5000/predict', data);
//             setPrediction(response.data.prediction);
//         } catch (error) {
//             console.error('Error:', error.message);
//         }
//     };

//     return (
//         <div>
//             {features.map((value, index) => (
//                 <input
//                     key={index}
//                     type="number"
//                     value={value}
//                     onChange={(e) => handleChange(index, e.target.value)}
//                 />
//             ))}
//             <button onClick={handleClick}>Predict</button>
//             <p>Prediction: {prediction}</p>
//         </div>
//     );
// }

// export default App;



//test current 

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [features, setFeatures] = useState(Array(5).fill(''));
//     const [prediction, setPrediction] = useState('');

//     const handleChange = (index, value) => {
//         const newFeatures = [...features];
//         newFeatures[index] = value;
//         setFeatures(newFeatures);
//     };

//     const handleClick = async () => {
//         const data = { features };
//         try {
//             const response = await axios.post('http://localhost:5000/predict', data);
//             setPrediction(response.data.prediction);
//         } catch (error) {
//             console.error('Error:', error.message);
//         }
//     };

//     return (
//         <div>
//             {features.map((value, index) => (
//                 <input
//                     key={index}
//                     type="number"
//                     value={value}
//                     onChange={(e) => handleChange(index, e.target.value)}
//                 />
//             ))}
//             <button onClick={handleClick}>Predict</button>
//             <p>Prediction: {prediction}</p>
//         </div>
//     );
// }

// export default App;

//test after
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [features, setFeatures] = useState(Array(5).fill(''));
//     const [prediction, setPrediction] = useState('');

//     const handleChange = (index, value) => {
//         const newFeatures = [...features];
//         newFeatures[index] = value;
//         setFeatures(newFeatures);
//     };

//     const handleClick = async () => {
//         const data = { features };
//         try {
//             const response = await axios.post('http://localhost:5000/predict', data);
//             setPrediction(response.data.prediction);
//         } catch (error) {
//             console.error('Error:', error.message);
//         }
//     };

//     return (
//         <div>
//             {features.map((value, index) => (
//                 <input
//                     key={index}
//                     type="number"
//                     value={value}
//                     onChange={(e) => handleChange(index, e.target.value)}
//                 />
//             ))}
//             <button onClick={handleClick}>Predict</button>
//             <p>Prediction: {prediction}</p>
//         </div>
//     );
// }

// export default App;
