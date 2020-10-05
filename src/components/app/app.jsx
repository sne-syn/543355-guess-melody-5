import React from 'react';
import PropTypes from "prop-types";
import WelcomeScreen from './../welcomeScreen/welcomeScreen';

const App = (props) => {
  const {errorCount} = props;

  return (
    <WelcomeScreen errorCount={errorCount} />
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
