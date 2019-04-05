import React from 'react';
import './App.css';

import { SelectCard } from '../Container Components/SelectCard';
import { SelectedCard } from '../Container Components/SelectedCard';

export const App = () => {
    return (
      <div className="App">
        <SelectedCard/>
        <SelectCard/>
      </div>);
  }