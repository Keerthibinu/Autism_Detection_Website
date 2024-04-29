import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Quest.css';

const QuestionnaireMRI = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ageGroup } = location.state || {};

  const questionnaireData = useMemo(() => ({
    toddler: {
      questionnaire: [
      {
        question: 'Does your child look at you when you call his/her name?',
        options: {' ':-1,'Always': 0, 'Usually': 0, 'Rarely': 1, 'Never': 1, },
      },
      {
        question: 'How easy is it for you to get eye contact with your child?',
        options: {' ':-1,'Always': 0, 'Usually': 0, 'Rarely': 1, 'Never': 1, },
      },
      {
        question:'Does your child point to indicate that s/he wants something? (e.g., a toy that is out of reach)',
        options: {' ':-1,'Always': 0, 'Usually': 0, 'Rarely': 1, 'Never': 1, },
      },
      {
        question: 'Does your child point to share interest with you? (e.g., pointing at an interesting sight)',
        options: {' ':-1,'Always': 0, 'Usually': 0, 'Rarely': 1, 'Never': 1, },
      },
      {
        question: 'Does your child pretend? (e.g., care for dolls, talk on a toy phone)',
        options: {' ':-1,'Always': 0, 'Usually': 0, 'Rarely': 1, 'Never': 1, },
      },
      {
        question: 'Does your child follow where you’re looking?',
        options: {' ':-1,'Always': 0, 'Usually': 0, 'Rarely': 1, 'Never': 1, },
      },
      {
        question:'If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g., stroking hair, hugging them)',
        options: {' ':-1,'Always': 0, 'Usually': 0, 'Rarely': 1, 'Never': 1, },
      },
      {
        question:'Describe your emotion when you heard your child’s first words as.',
        options: {' ':-1,'Strange(Non-Verbal)': 1, 'Confused': 1, 'Neutral': 0, 'Happy': 0,},
      },
      {
        question: 'Does your child use simple gestures? (e.g., wave goodbye)',
        options: {' ':-1,'Always': 0, 'Usually': 0, 'Rarely': 1, 'Never': 1, },
      },
      {
        question: 'Does your child stare at nothing with no apparent purpose?',
        options: {' ':-1,'Always': 1, 'Usually': 1, 'Rarely': 0, 'Never': 0, },
      },      
      ],
    },
    child: {
      questionnaire: [
        {
          question: 'S/he often notices small sounds when others do not',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
        {
          question: 'S/he usually concentrates more on the whole picture, rather than the small detail',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'In a social group, s/he can easily keep track of several different people’s conversations',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he finds it easy to go back and forth between different activities',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he doesnt know how to keep a conversation going with his/her peers',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
        {
          question: 'S/he is good at social chit-chat',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'When s/he read a story, s/he finds it difficult to work out the characters intentions or feelings',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
        {
          question: 'When s/he was in preschool, s/he used to enjoy playing games involving pretending with other children',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he finds it easy to work out what someone is thinking or feeling just by looking at their face',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he finds it hard to make new friends',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
      ],
    },
    adolescent: {
      questionnaire: [
        {
          question: 'S/he often notices small sounds when others do not',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
        {
          question: 'S/he usually concentrates more on the whole picture, rather than the small detail',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'In a social group, s/he can easily keep track of several different people’s conversations',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he finds it easy to go back and forth between different activities',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he doesnt know how to keep a conversation going with his/her peers',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
        {
          question: 'S/he is good at social chit-chat',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'When s/he was younger, s/he used to enjoy playing games involving pretending with other children',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he finds it difficult to imagine what it would be like to be someone else',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
        {
          question: 'S/he finds social situations easy',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he finds it hard to make new friends',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
      ],
    },
    
    adult: {
      questionnaire: [
        {
          question: 'S/he notices patterns in things all the time',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
        {
          question: 'S/he usually concentrates more on the whole picture, rather than the small detail',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he find it easy to do more than one thing at once',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'If there is an interruption, s/he can switch back to what s/he was doing very quickly',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he find it easy to read between the lines when someone is talking to me',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he know how to tell if someone listening to me is getting bored',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'When S/he is reading a story, S/he find it difficult to work out the characters intentions',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
        {
          question: 'S/he like to collect information about categories of things (e.g., types of car, types of bird, types of train, types of plant, etc.)',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
        {
          question: 'S/he find it easy to work out what someone is thinking or feeling just by looking at their face',
          options: {' ':-1,'Definitely Agree': 0, 'Slightly Agree': 0, 'Slightly Disagree': 1, 'Definitely Disagree': 1, },
        },
        {
          question: 'S/he find it difficult to work out people’s intentions',
          options: {' ':-1,'Definitely Agree': 1, 'Slightly Agree': 1, 'Slightly Disagree': 0, 'Definitely Disagree': 0, },
        },
      ],
    },
  }), []);
  
  const [answers, setAnswers] = useState({
    age: '',
    gender: '',
    jaundice: '',
    relation: '',
    questionnaire: {}, 
    facialImage: null,
  });

  const [result, setResult] = useState('')

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      questionnaire: {
        ...prevAnswers.questionnaire,
        [question]: answer,
      },
    }));
  };

  const handleFileUpload = (event, fileType) => {
    const file = event.target.files[0];
    console.log(`Uploaded ${fileType} File:`, file);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [fileType]: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Calculate the sum of option values for each question
    const scores = questionnaireData[ageGroup]?.questionnaire.map((questionData) => {
        const selectedOption = answers.questionnaire[questionData.question];
        const optionValue = questionData.options[selectedOption];
        return optionValue;
    });
    console.log('Scores:', scores);
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    let finalScore;
    if (ageGroup >= 4) {
        finalScore = totalScore >= 7 ? 1 : 0;
    } else {
        finalScore = totalScore >= 4 ? 1 : 0;
    }
    console.log('Final Score:', finalScore);

    const jsonData = {
        score: finalScore,
        age: answers.age,
        gender: answers.gender,
        jaundice: answers.jaundice,
        relation: answers.relation
    };

    const formData = new FormData();
    formData.append("jsonData", JSON.stringify(jsonData));
    formData.append("facial_image", answers.facialImage);

    const requestOptions = {
        method: 'POST',
        body: formData 
    };

    fetch('http://localhost:8000/predict', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log('Prediction:', data.combined_prediction);
      setResult(data.combined_prediction);

      // Move navigation logic here
      navigate('/Result',{
        state: {
          result : data.combined_prediction,
        },
      });
    })
    .catch(err => console.error('Error:', err));
    
};



  return (
    <div className="container-quest">
      <h2 className="Heading">Fill in the details</h2>
      <p>Age Group: {ageGroup.toUpperCase()}</p>

      <form onSubmit={handleSubmit}>
        <ul className="list-unstyled">
          {questionnaireData[ageGroup]?.questionnaire.map((questionData, index) => (
          <li key={index} className="mb-3">
            {questionData.question}
            <select
              className="form-select mt-2"
              onChange={(e) => handleAnswerChange(questionData.question, e.target.value)}
              value={answers.questionnaire[questionData.question]}
              required
            >
             {Object.entries(questionData.options).map(([option, value]) => (
              <option key={option} value={option}>
                {option}
              </option>
              ))}
            </select>
          </li>
        ))}


        </ul>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={answers.age}
            onChange={(e) => setAnswers((prevAnswers) => ({ ...prevAnswers, age: e.target.value }))}
            required
          />

          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select
            className="form-select"
            id="gender"
            value={answers.gender}
            onChange={(e) => setAnswers((prevAnswers) => ({ ...prevAnswers, gender: parseInt(e.target.value, 10) }))}
            required
          >
            <option value=""> </option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>

          <label htmlFor="jaundice" className="form-label">
            Born with Jaundice:
          </label>
          <select
            className="form-select"
            id="jaundice"
            value={answers.jaundice}
            onChange={(e) => setAnswers((prevAnswers) => ({ ...prevAnswers, jaundice: parseInt(e.target.value, 10) }))}
            required
          >
            <option value=""> </option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>

          <label htmlFor="relation" className="form-label">
            Relation:
          </label>
          <select
            className="form-select"
            id="relation"
            value={answers.relation}
            onChange={(e) => setAnswers((prevAnswers) => ({ ...prevAnswers, relation: parseInt(e.target.value, 10) }))}
            required
          >
            <option value=""> </option>
            <option value="1">Self</option>
            <option value="1">Parent</option>
            <option value="0">Relative</option>
            <option value="1">Healthcare Professional</option>
            <option value="0">Others</option>
          </select>
        </div>

        <div className="mt-4">
          <label>
            Upload Facial Image:
            <input type="file" onChange={(e) => handleFileUpload(e, 'facialImage')}  />
          </label>
        </div>
        
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
        {result && <div style={{'color': 'white'}}> {result}</div>}
      </form>
    </div>
  );
};

export default QuestionnaireMRI;