import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

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
          console.log('The person doesn\'t have Autism spectrum disorder');
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
    <div className="container-main">
      <div className="row content">
        <div className="col-md-6">
          <h1 className='heading'>Welcome to ASD Detection Site</h1>
          <p className='text'>
            where cutting-edge technology meets compassion in the pursuit of early
            identification and support for Autism Spectrum Disorder (ASD). ASD is a neurodevelopmental condition that affects
            individuals in unique ways, making early detection crucial for timely intervention and support. Our platform leverages
            state-of-the-art tools and assessments, guided by the latest research in autism detection, to provide a comprehensive
            and user-friendly experience. Whether you are a concerned parent, caregiver, or healthcare professional, our mission is
            to empower you with accurate information and resources for a better understanding of ASD. Together, let's navigate the
            journey of ASD detection with empathy, accuracy, and the shared goal of improving lives.
          </p>
        </div>
        <div className="col-md-6 text-md-center button">
          <button className="btn btn-primary" onClick={handleTakeTestClick}>Take Test</button>
        </div>
      </div>
    </div>
  );
}

export default Home;