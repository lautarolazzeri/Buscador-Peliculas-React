import React, { Component } from 'react';
import './App.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import 'bulma/css/bulma.css';



class App extends Component {
    state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  }


  render(){
      return (
    <div className="App">
      <Title>Search Movies with React</Title>
      <div className='SearchForm-wrapper'>
        <SearchForm onResults={this._handleResults} />
      </div>
      {this.state.results.length === 0
        ? <p> No Results </p>
        : <p> Con resultados </p>
      }
    </div>
  );
  }

}

export default App;
