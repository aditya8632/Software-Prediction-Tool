import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function Website() {
    const [features, setFeatures] = useState(Array(5).fill(''));
    const [prediction, setPrediction] = useState('');

    const handleChange = (index, value) => {
        const newFeatures = [...features];
        newFeatures[index] = value;
        setFeatures(newFeatures);
    };

    const handleClick = async () => {
        const data = { features };
        try {
            const response = await axios.post('http://localhost:5000/predict_model1', data);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <>
            <Navbar/>
            <div className='bg-dark p-4'>
                <div className='container'>
                    <h3 className='text-white text-center mt-5'>Web Initial </h3>
                    

                </div>
                <div className="container my-2">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb p-3 bg-body-dark rounded-3">
      <li className="breadcrumb-item active text-white" aria-current="page">Inital</li>
      <li className="breadcrumb-item"><a href="/webc" className="text-decoration-none">Current/(Working)</a></li>
      <li className="breadcrumb-item"><a href="/webad" className="text-decoration-none">After Deployment</a></li>
      
    </ol>
  </nav>
</div>

<div className="container">
    <div className="form-floating mb-3">
        <input
            type="number"
            value={features[0]}
            onChange={(e) => handleChange(0, e.target.value)}
            className="form-control"
            id="projectScope"
            placeholder="Project Scope (1-10)"
        />
        <label htmlFor="projectScope">Project Scope (1-10)</label>
    </div>
    <div className="form-floating mb-3">
        <input
            type="number"
            value={features[1]}
            onChange={(e) => handleChange(1, e.target.value)}
            className="form-control"
            id="teamExperience"
            placeholder="Team Experience (1-10)"
        />
        <label htmlFor="teamExperience">Team Experience (1-10)</label>
    </div>
    <div className="form-floating mb-3">
        <input
            type="number"
            value={features[2]}
            onChange={(e) => handleChange(2, e.target.value)}
            className="form-control"
            id="resourceAllocation"
            placeholder="Resource Allocation (1-10)"
        />
        <label htmlFor="resourceAllocation">Resource Allocation (1-10)</label>
    </div>
    <div className="form-floating mb-3">
        <input
            type="number"
            value={features[3]}
            onChange={(e) => handleChange(3, e.target.value)}
            className="form-control"
            id="riskAssessment"
            placeholder="Risk Assessment (1-10)"
        />
        <label htmlFor="riskAssessment">Risk Assessment (1-10)</label>
    </div>
    <div className="form-floating mb-3">
        <input
            type="number"
            value={features[4]}
            onChange={(e) => handleChange(4, e.target.value)}
            className="form-control"
            id="stakeholderEngagement"
            placeholder="Stakeholder Engagement (1-10)"
        />
        <label htmlFor="stakeholderEngagement">Stakeholder Engagement (1-10)</label>
    </div>

    <div className="text-center"> {/* Centered content */}
        <button onClick={handleClick} className="btn btn-primary">Predict</button>
        <h5 className='text-white my-4'>Prediction: {prediction}</h5>
    </div>
</div>


<div className="container px-4 py-5 " id="hanging-icons">
    
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 border-top">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
        </div>
        <div>
          <h3 className=" text-white">React.js</h3>
          <p className="text-secondary">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="/" className="btn btn-primary">
          Open
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#cpu-fill"></use></svg> */}
        </div>
        <div>
          <h3 className=" text-white">Vue.js</h3>
          <p className="text-secondary">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="/" className="btn btn-primary">
          Open
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#tools"></use></svg> */}
        </div>
        <div>
          <h3 className="text-white">Angular</h3>
          <p className="text-secondary">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="/" className="btn btn-primary">
            Open
          </a>
        </div>
      </div>
    </div>


    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
        </div>
        <div>
          <h3 className=" text-white">Node.js</h3>
          <p className="text-secondary">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="/" className="btn btn-primary">
           Open
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#cpu-fill"></use></svg> */}
        </div>
        <div>
          <h3 className=" text-white">GraphQL</h3>
          <p className="text-secondary">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="/" className="btn btn-primary">
           Open
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#tools"></use></svg> */}
        </div>
        <div>
          <h3 className="text-white">Jamstack</h3>
          <p className="text-secondary">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="/" className="btn btn-primary">
           Open
          </a>
        </div>
      </div>
    </div>
    
  </div>

  

            </div>
        </>
    );
}

export default Website;
