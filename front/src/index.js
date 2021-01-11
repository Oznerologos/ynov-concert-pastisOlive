import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




/*
import reportWebVitals from './reportWebVitals';

class App extends React.Component {

  prenomInput = React.createRef()

  state = {
    salles:[
      {ville: "Aix-en-Provence"},
      {ville: "Bourges"},
      {ville: "Cannes"},
      {ville: "Dunkerque"},
      {ville: "Echirolles"},     
    ],
    client:[
      {nomClient:""},
      {prenomClient:""},
      {entrepriseClient:""},
      {emailClient:""},
      {telephoneClient:""},
    ],
  }

handleSubmit = (event) => {
  event.preventDefault();

  alert("Message Envoyé. Merci ");
}

handleChange = (event) => {
  const value = event.currentTarget.value;
  this.setState({ prenomClient: value});
}

  render(){

    const title = "CONTACT";
    const salles = this.state.salles.map((salle) => (<option>{salle.ville}</option>))

    return(<div>
      <h1>{title}</h1>
      <form>
      <input type="text" value={this.state.nomClient} onChange={this.handleChange}/>
      <input type="text" value={this.state.prenomClient} onChange={this.handleChange} />
      <input type="text" value={this.state.entrepriseClient} onChange={this.handleChange}/>
      <input type="email" value={this.state.emailClient} onChange={this.handleChange}/>
      <input type="text" value={this.state.telephoneClient} onChange={this.handleChange}/>
      <select>{salles}</select>
      <textarea></textarea>
      <p>Champs obligatoires *</p>
      <button onClick={this.handleSubmit}>VALIDER</button>
      </form>
    </div>);
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement);*/
