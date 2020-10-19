import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import ResultFailPage from './../result-fail-page/result-fail-page';
import LoginPage from './../login-page/login-page';
import GameArtistPage from '../game-artist-page/game-artist-page';
import GameGenrePage from './../game-genre-page/game-genre-page';
import ResultSuccessPage from './../result-success-page/result-success-page';
import WelcomePage from './../welcome-page/welcome-page';
import GamePage from "../game-page/game-page";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomePage
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/dev-artist">
          <GameArtistPage
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <GameGenrePage
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/result">
          <ResultSuccessPage />
        </Route>
        <Route exact path="/lose">
          <ResultFailPage />
        </Route>
        <Route exact path="/game">
          <GamePage
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
