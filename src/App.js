import React, { Component, Fragment } from "react";
import "./App.css";
import Membre from "./components/Membre";
import './components/Button.css'

const famille = {
  membre1: {
    nom: "Julien",
    age: 39,
    description: <p>je suis l'aîné.</p>,
  },
  membre2: {
    nom: "Nicolas",
    age: 35,
    description: <p>je suis le cadet.</p>,
  },
  membre3: {
    nom: "Thomas",
    age: 31,
    description: <p>Je suis le benjamin.</p>,
  },
  membre4: {
    nom: "Nesquik",
    age: 4,
    description: (
      <p>
        Je suis un{" "}
        <strong>
          <em>chat</em>
        </strong>
        .
      </p>
    ),
  },
  membre5: {
    nom: "toto",
    age: 22,
    description: (
      <p>
        Je suis un{" "}
        <strong>
          <em>chat</em>
        </strong>
        .
      </p>
    ),
  },
};

class App extends Component {
  state = {
    famille,
    isShow: false,
  };

  handleClick = (num) => {
    const famille = { ...this.state.famille };
    famille.membre2.age += num;
    this.setState({ famille });
  };

  handleChange = event => {
    const famille = { ...this.state.famille }
    const nom = event.target.value;
    // console.log(nom);
    famille.membre1.nom = nom;
    this.setState({ famille });
  };
  
  cacherNom = id => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille });
  };

  handleShowDescription = () => {
    const isShow = !this.state.isShow;
    this.setState({ isShow });
  };

  render() {
    // on peut tout importer en destructuring comme ci-dessous pour un code plus simple et plus lisible
    const { titre } = this.props;
    const { famille, } = this.state;

    const liste = Object.keys(famille)
    .map(membre => (
      <Membre
      cacherNom={() => this.cacherNom(membre)}
      age={famille[membre].age}
      nom={famille[membre].nom}
      />
    ) )

    return (
      // Méthode d'écrire de code = JSX
      <Fragment>
        <div className="App">
          <h1>{titre}</h1>
          <input
            value={famille.membre1.nom}
            onChange={this.handleChange}
            type="text"
          />
          {liste}
          {/* <Membre nom={famille.membre4.nom} age={famille.membre4.age}> 
           {isShow ? description : null}
            <button onClick={this.handleShowDescription}>
              {isShow ? "Cacher" : "Montrer"}
            </button>
          </Membre> */}
          {/* <Button vieillir={() => this.handleClick(2)} /> */}
        </div>
      </Fragment>
      // Autre façon d'écrire le code
      // React.createElement('div', { className: 'App' } , React.createElement('H1', null, 'React App'))
    );
  }
}

export default App;
