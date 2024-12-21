// Exercice1.js
import React from 'react';
import BoutonClique from './BoutonClique';
import BoutonBascule from './BoutonBascule';
import AppSuivi from './AppSuivi';
import Compteur from './Compteur';

const Exercice1 = () => {
  return (
    <div>
      <div>
        <h2>Click Button</h2>
        <BoutonClique />
      </div>
      <div>
        <h2>Toggle Button</h2>
        <BoutonBascule />
      </div>
      <div>
        <h2>Click Tracker</h2>
        <AppSuivi />
      </div>
      <div>
        <h2>Counter</h2>
        <Compteur />
      </div>
    </div>
  );
};

export default Exercice1;
