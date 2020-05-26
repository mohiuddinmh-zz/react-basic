import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import Nav from './components/Nav'
import Asma from './components/Asma'
import Yousuf from './components/Yousuf'
import Fatima from './components/Fatima'
import Adder from './components/Adder'
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
     <Articles />
    </div>
  );
}

export default App;
