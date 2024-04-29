import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className='container-about'>
  <h4>Understanding Autism Spectrum Disorder (ASD)</h4>

  <p>
    Autism Spectrum Disorder (ASD) is a neurodevelopmental disorder characterized by challenges in social interaction, communication, and repetitive behaviors. It is a spectrum, meaning individuals with ASD may exhibit a wide range of symptoms and abilities.
  </p>

 

  <h4>Common Symptoms of ASD</h4>

  <p>
    Autism Spectrum Disorder may present various symptoms, and these can manifest differently in individuals. Common symptoms include:
  </p>

  <ul>
    <li>Difficulty with social interactions and communication</li>
    <li>Repetitive behaviors or unusual interests</li>
    <li>Challenges in understanding and expressing emotions</li>
    <li>Sensitivity to sensory stimuli (e.g., lights, sounds)</li>
    <li>Difficulty with transitions and changes in routine</li>
  </ul>
  <h4>How This Website Works</h4>
<p>
  Our website aims to provide a user-friendly questionnaire to assess the likelihood of ASD in individuals across different age groups. Users can fill out the questionnaire and submit relevant details for analysis.
</p>

      <p><h2>Toddler:</h2></p>
      <table className='custom-table small-table '>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Always</th>
            <th>Usually</th>
            <th>Rarely</th>
            <th>Never</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S/he often notices small sounds when others do not</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>How easy is it for you to get eye contact with your child?</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Does your child point to indicate that s/he wants something? (e.g., a toy that is out of reach)</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Does your child point to share interest with you? (e.g., pointing at an interesting sight)</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Does your child pretend? (e.g., care for dolls, talk on a toy phone)</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Does your child follow where you’re looking?</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g., stroking hair, hugging them)</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          
          <tr>
            <td>Does your child use simple gestures? (e.g., wave goodbye)</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Does your child stare at nothing with no apparent purpose?</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td></td>

          </tr>
          <tr>
            <td>Describe your emotion when you heard your child’s first words as</td>
            <td>Strange: 1</td>
            <td>Confused: 1</td>
            <td>Neutral: 0</td>
            <td>Happy: 0</td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </table>
      <p><h2>Child:</h2></p>
      <table className='custom-table small-table '>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Definitely agree</th>
            <th>Slightly Agree</th>
            <th>Slightly Disagree</th>
            <th>Definitely Disagree</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S/he often notices small sounds when others do not</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>S/he usually concentrates more on the whole picture, rather than the small detail</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>

          </tr>
          <tr>
            <td>In a social group, s/he can easily keep track of several different people s conversations'</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>S/he finds it easy to go back and forth between different activities',</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>'S/he doesnt know how to keep a conversation going with his/her peers'</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>S/he is good at social chit-chat</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>When s/he read a story, s/he finds it difficult to work out the characters intentions or feelings'</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>When s/he was in preschool, s/he used to enjoy playing games involving pretending with other children'</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>S/he finds it easy to work out what someone is thinking or feeling just by looking at their face</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>'S/he finds it hard to make new friends</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </table>
      <p><h2>Adolescent:</h2></p>
      <table className='custom-table small-table '>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Definitely Agree</th>
            <th>Slightly Agree</th>
            <th>Slightly Disagree</th>
            <th>Definitely Disagree</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S/he often notices small sounds when others do not</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>S/he usually concentrates more on the whole picture, rather than the small detail</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>In a social group, s/he can easily keep track of several different people’s conversations</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>S/he finds it easy to go back and forth between different activities</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>S/he doesnt know how to keep a conversation going with his/her peers</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>S/he is good at social chit-chat</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>When s/he was younger, s/he used to enjoy playing games involving pretending with other children</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          
          <tr>
            <td>S/he finds it difficult to imagine what it would be like to be someone else</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>S/he finds social situations easy</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          
          <tr>
            <td>S/he finds it hard to make new friends</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </table>
      <p><h2>Adult:</h2></p>
      <table className='custom-table small-table '>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Definitely agree</th>
            <th>Slightly Agree</th>
            <th>Slightly Disagree</th>
            <th>Definitely Disagree</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S/he notices patterns in things all the time</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>S/he usually concentrates more on the whole picture, rather than the small detail</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>

          </tr>
          <tr>
            <td>S/he find it easy to do more than one thing at once'</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>If there is an interruption, s/he can switch back to what s/he was doing very quickly</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>S/he find it easy to read between the lines when someone is talking to me</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>S/he know how to tell if someone listening to me is getting bored</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>When S/he is reading a story, S/he find it difficult to work out the characters intentions</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>S/he like to collect information about categories of things (e.g., types of car, types of bird, types of train, types of plant, etc.)</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>S/he find it easy to work out what someone is thinking or feeling just by looking at their face</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>S/he find it difficult to work out people's intentions</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>

        </tbody>
      </table>
    

    </div>
  );
};

export default About;
