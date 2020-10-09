import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import ResultFailPage from './../result-fail-page/result-fail-page';
import LoginPage from './../login-page/login-page';
import GameArtistPage from '../game-artist-page/game-artist-page';
import GameGenrePage from './../game-genre-page/game-genre-page';
import ResultSuccessPage from './../result-success-page/result-success-page';
import WelcomePage from './../welcome-page/welcome-page';

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
