import React from 'react'
import './result.css';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  console.log(location);
  const { result } = location.state || {};
  console.log(result);
  return (
      <div className="result-container">
      <h1>Autism Spectrum Disorder Screening Results</h1>
      <p>Your prediction is: <b>{result}</b></p>
      <p>
        Scores of 4 or above for toddlers and 7 or above for other agegroups may indicate Autism Spectrum Disorder. However, this
        webpage should not be used as a diagnostic tool. Please seek professional
        help from a qualified healthcare provider if you have any concerns.
      </p>
      <h2>Score Interpretation</h2>
      <p>
        Autism spectrum disorder (ASD) is a developmental disability that can
        cause significant social, communication, and behavioral challenges. People
        with ASD may experience difficulty with social interaction, repetitive
        behaviors, speech and nonverbal communication, and sensory sensitivities.
      </p>
      <h2>Next Steps</h2>
      <p>
        If you are concerned that you or your child may have ASD, please seek
        professional help. Early intervention is important for improving
        outcomes for people with ASD. You can start by talking to your doctor or
        pediatrician about your concerns.
      </p>
      <h2>Resources</h2>
      <p>Here are some resources that you may find helpful:</p>
      <ul>
        <li>
          <a href="https://www.autismspeaks.org/">Autism Speaks</a>
        </li>
        <li>
          <a href="https://www.autism.org.uk/">National Autistic Society</a>
        </li>
        <li>
          <a href="https://www.cdc.gov/ncbddd/asd/index.html">
            Centers for Disease Control and Prevention
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Result

