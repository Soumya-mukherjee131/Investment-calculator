import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import Results from './components/Results/Results';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SingIn from './components/Header/SingIn/SingIn.jsx';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  // Define a component that uses useLocation inside Router
  const RenderContent = () => {
    const location = useLocation();

    return (
      <>
        <Header />
        <Routes>
          <Route path="/signup" element={<SingIn />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>

        {/* Conditionally render based on the current path */}
        {location.pathname !== '/signup' && (
          <>
            <UserInput userInput={userInput} onChange={handleChange} />
            {!inputIsValid && (
              <p className="center">
                The duration must be equal to or greater than one, Please give a valid duration.
              </p>
            )}
            {inputIsValid && <Results userInput={userInput} />}
            <Footer />
          </>
        )}
      </>
    );
  };

  return (
    <Router>
      <RenderContent />
    </Router>
  );
}

export default App;
