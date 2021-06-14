import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './components/Membre'

class App extends Component {
  render() {
    return (
      // Méthode d'écrire de code = JSX
      <Fragment>
        <div className="App">
          <h1>React App</h1>
          <p className="test">bla</p>
          <input type="text" />
          <button>OK</button>
          <Membre/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor
            ullam voluptatum ad, dolores autem sunt culpa enim, nostrum itaque
            odit sed illum asperiores, iure reiciendis magni dignissimos! Porro,
            quasi.
          </p>
        </div>
      </Fragment>
      // Autre façon d'écrire le code
      // React.createElement('div', { className: 'App' } , React.createElement('H1', null, 'React App'))
    );
  }
}

export default App;
