import React, { Component, Fragment } from "react";
import "./App.css";
import Membre from "./components/Membre";
import Button from "./components/Button";

const famille = {
  membre1: {
    nom: "Nicolas",
    age: 35,
  },
  membre2: {
    nom: "Thomas",
    age: 31,
  },
  membre3: {
    nom: "Julien",
    age: 39,
  },
  membre4: {
    nom: "Nesquik",
    age: 4,
  },
};

class App extends Component {
  state = {
    famille,
  };

  handleClick = (num) => {
    const famille = { ...this.state.famille };
    famille.membre1.age += num;
    this.setState({ famille });
  };

  handleChange = event => {
    const famille = { ...this.state.famille };
    const nom = event.target.value
    // console.log(nom);
    famille.membre1.nom = nom
    this.setState({ famille });
  };

  render() {
    // on peut tout importer en destructuring comme ci-dessous pour un code plus simple et plus lisible
    const { titre } = this.props;
    const { famille } = this.state;
    return (
      // Méthode d'écrire de code = JSX
      <Fragment>
        <div className="App">
          <h1>{titre}</h1>
          <input value={famille.membre1.nom} onChange={this.handleChange} type="text" />
          <Membre nom={famille.membre1.nom} age={famille.membre1.age} />
          <Membre nom={famille.membre2.nom} age={famille.membre2.age} />
          <Membre nom={famille.membre3.nom} age={famille.membre3.age} />
          <Membre nom={famille.membre4.nom} age={famille.membre4.age}>
            {/* le contenu de la balise Membre est considéré comme un 'Children' 
              c'est à dire un autre style de 'props' */}
            Je suis un{" "}
            <strong>
              <em>chat</em>
            </strong>
          </Membre>
          <Button vieillir={() => this.handleClick(2)} />
        </div>
      </Fragment>
      // Autre façon d'écrire le code
      // React.createElement('div', { className: 'App' } , React.createElement('H1', null, 'React App'))
    );
  }
}

export default App;
