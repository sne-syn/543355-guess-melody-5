import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import ResultFailPage from './../resultFailPage/resultFailPage';
import LoginPage from './../loginPage/loginPage';
import GameArtistPage from './../gameArtistPage/gameArtistPage';
import GameGenrePage from './../gameGenrePage/gameGenrePage';
import ResultSuccessPage from './../resultSuccessPage/resultSuccessPage';
import WelcomePage from './../welcomePage/welcomePage';

const App = (props) => {
  const {errorCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomePage errorCount={errorCount} /></Route>
        <Route exact path="/lose">
          <ResultFailPage /></Route>
        <Route exact path="/login">
          <LoginPage /></Route>
        <Route exact path="/dev-artist">
          <GameArtistPage /></Route>
        <Route exact path="/dev-genre">
          <GameGenrePage /></Route>
        <Route exact path="/result">
          <ResultSuccessPage /></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
