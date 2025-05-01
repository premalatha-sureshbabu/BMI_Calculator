# Ex06 BMI Calculator
## Date:

## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM
### Home.js
```
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the BMI Calculator!</h1>
      <p>Click below to calculate your BMI.</p>
      <Link to="/calculator">Go to Calculator</Link>
    </div>
  );
};

export default Home;
```
### Calculator.js
```
import React, { useState } from 'react';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const bmiValue = weight / (height * height);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>
      <div>
        <label>Height (m):</label>
        <input
          type="number"
          step="0.01"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="result">
          <h2>BMI: {bmi.toFixed(2)}</h2>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
```
### App.css:
```
/* General body styling */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; /* Light gray background */
  background-image: url('https://www.transparenttextures.com/patterns/white-diamond.png'); /* Subtle texture */
  background-size: 100% 100%;
}

/* Container for the main BMI calculator */
.container {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 450px;
  margin: 20px;
  text-align: center;
}

/* Heading styling */
h1 {
  font-size: 2.5rem;
  color: #2d2d2d;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

/* Styling for input fields */
input[type="number"] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input[type="number"]:focus {
  border-color: #4CAF50;
  outline: none;
}

/* Button styling */
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px;
  margin-top: 20px;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

/* Result section styling */
.result {
  text-align: center;
  margin-top: 30px;
}

.result h2 {
  font-size: 2rem;
  color: #333;
}

.result p {
  font-size: 1.2rem;
  color: #555;
}

/* Link styling for navigation */
a {
  color: #007bff;
  text-decoration: none;
  font-size: 1.1rem;
  display: block;
  margin-top: 20px;
}

a:hover {
  text-decoration: underline;
}

/* Styling for the Home page */
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Gradient background */
}

.home-container h1 {
  font-size: 2.5rem;
  color: white;
  text-align: center;
  text-transform: uppercase;
}

/* Styling for the entire application layout */
.app {
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Add a subtle shadow for all the input elements */
input[type="number"],
button {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Make the app background gradient more attractive */
body {
  background: linear-gradient(135deg, #ffb3b3, #cce7ff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10px;
}
```

## OUTPUT
![Screenshot 2025-05-01 203828](https://github.com/user-attachments/assets/68c096cc-41b7-4693-9db8-c63ff58f3b6f)


## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
