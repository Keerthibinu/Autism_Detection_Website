import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleTakeTestClick = () => {
    // Make a prediction when "Take Test" button is clicked
    const postData = {
      data: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 21, 0, 0, 1],
    };

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the prediction result
        if (data.result === 0) {
          console.log("The person doesn't have Autism spectrum disorder");
        } else {
          console.log('The person has Autism spectrum disorder');
        }

        // Navigate to the form page
        navigate('/Form1');
      })
      .catch(error => {
        console.error('Error:', error);

        // Navigate to the form page in case of an error
        navigate('/Form1');
      });
  };

  return (
    <div className="container">
      <div className="hero-section">
        <h1 className="heading">Early Detection for Autism Spectrum Disorder</h1>
        <div className="info">
          <div className="info-left">
            <p className="info-text">
              Autism is a complex developmental condition that affects communication, behavior, and social interaction. Early detection of autism is crucial for timely intervention and support, which can significantly improve outcomes for individuals and families. Our screening assessment involves filling out the AQ-10 questionnaire, which helps identify traits associated with Autism Spectrum Disorder (ASD). Additionally, you can upload facial images, which our system utilizes alongside questionnaire responses to provide a comprehensive assessment.
            </p>
          </div>
          <div className="info-right">
            <br></br>
            <br></br>
            <br></br>
            <button className="btn btn-primary" onClick={handleTakeTestClick}>Take Test</button>
          </div>
        </div>
      </div>
      <div className="sections">
      <div className="info-section">
  <h2 className="section-heading">How It Works</h2>
  <div className="info-grid">
    <div className="info-item">
      <i className="fas fa-user-circle fa-3x"></i>
      <p className="step-title">Fill out the AQ-10 questionnaire</p>
      <p className="step-description">Get started by answering age specific questions to help identify traits associated with Autism Spectrum Disorder.</p>
    </div>
    <div className="info-item">
      <i className="fas fa-image fa-3x"></i>
      <p className="step-title">Upload facial images</p>
      <p className="step-description">Enhance assessment accuracy by providing facial images for analysis of various facial patterns alongside questionnaire responses.</p>
    </div>
    <div className="info-item">
      <i className="fas fa-check-circle fa-3x"></i>
      <p className="step-title">Receive assessment results</p>
      <p className="step-description">Receive comprehensive assessment results based on questionnaire responses and image analysis.</p>
    </div>
  </div>
</div>

        <div className="screening-assessment">
          <h2 className="section-heading">Screening Assessment</h2>
          <p className="info-text">
            Our screening assessment involves filling out the AQ-10 questionnaire, which helps identify traits associated with Autism Spectrum Disorder. <br></br>The 10-item Autism-Spectrum Quotient (AQ10) is a standard self-report questionnaire used in clinical and research settings as a diagnostic screening tool for autism detection.
          </p>
          <p className="info-text">
            Additionally, you can upload facial images, which our system utilizes alongside questionnaire responses to provide a comprehensive assessment.<br></br>Facial images analysis ensure to identify the likelihood of frequent patters associated with ASD.
          </p>
          <div className="navigation-links">
            <Link to="/about" className="link">Learn more about scoring</Link>
            <Link to="/contact" className="link">Contact us for assistance</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
