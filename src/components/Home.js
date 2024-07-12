
import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
export default function Home() {

  return (
   <>
      <Navbar/>
      <div className=' bg-dark '>


      <div className="bg-dark text-secondary px-4 py-5 text-center">
       <div className="py-5">
      <h1 className="display-5 fw-bold text-white mt-3">Software Management Tool</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">Maximize  software's success, quality, and performance with  comprehensive Software Management Tool. Streamline development workflows, boost productivity, and achieve exceptional outcomes.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/website"><button type="button" className="btn btn-outline-primary btn-lg px-4 me-sm-3 fw-bold">Website</button></Link>
        <Link to="/application" ><button type="button" className="btn btn-outline-primary btn-lg px-4 me-sm-3 fw-bold">Apps</button></Link>
        </div>
        </div>
       </div>
     </div>


     <div className="container bg-dark text-secondary text-center px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Guide</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          
        </div>
        <h3 className="fs-2  text-white">Initial</h3>
        <p>The initial stage for predicting software success involves identifying key project characteristics and metrics that can influence the outcome.</p>
        <a href="/" className="icon-link">
          Open
          
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        
        </div>
        <h3 className="fs-2 text-white">Current/Working</h3>
        <p>The current stage for predicting software quality entails identifying critical factors and metrics, such as code quality, complexity, defect found, and responsiveness</p>
        <a href="/" className="icon-link">
          Open
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
         
        </div>
        <h3 className="fs-2  text-white">After Deployment</h3>
        <p>After deployment, predicting software performance involves identifying key operational characteristics and metrics that can influence the outcome.</p>
        <a href="/" className="icon-link">
          Open
         
        </a>
      </div>
    </div>
  </div>


</div>
</>
  )
}