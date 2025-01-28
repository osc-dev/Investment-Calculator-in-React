import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInputState, setUserInputState] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  
  const inputIsValid = userInputState.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInputState(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInputState} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results userInput={userInputState} />}
      {/* <Results userInput={userInputState} /> */}
    </>
  );
}

export default App
