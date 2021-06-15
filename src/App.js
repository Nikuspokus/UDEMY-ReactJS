import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './components/Membre'

class App extends Component {
  render() {
    // on peut tout importer en destructuring comme ci-dessous pour un code plus simple et plus lisible
    const { titre, sousTitre } = this.props
    return (
      // Méthode d'écrire de code = JSX
      <Fragment>
        <div className="App">
          <h1>{ titre }</h1>
          <h1>{ sousTitre }</h1>
          <Membre nom ='Nicolas'/>
          <Membre nom ='Thomas'/>
          <Membre nom ='Julien'/>
        </div>
      </Fragment>
      // Autre façon d'écrire le code
      // React.createElement('div', { className: 'App' } , React.createElement('H1', null, 'React App'))
    );
  }
}

export default App;
