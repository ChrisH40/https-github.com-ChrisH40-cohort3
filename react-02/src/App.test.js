import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from "./components/tic-tac-toe/MyGame.js";
import Accounts from "./components/accounts/MyAccounts.js";
import Cities from "./components/cities/MyCities.js";
import LinkedListDisplay from "./components/linked-list/MyLinkedList.js";
import FifoLifoListDisplay from "./components/fifo-lifo-list/MyFifoLifoList.js";
import ChangeSettingsDisplay from './components/settings/settings';

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

it('Accounts renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accounts />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Cities renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cities />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('LinkedList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkedListDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FifoLifoList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FifoLifoListDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ChangeSettingsDisplay renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChangeSettingsDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});

