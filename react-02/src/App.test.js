import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from "./components/tic-tac-toe/MyGame.js";
import Accounts from "./components/accounts/MyAccounts.js";

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Tic-Tac-Toe renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Accounts without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accounts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
