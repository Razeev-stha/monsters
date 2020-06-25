import React, { Component } from 'react';
import { CardList } from './Components/card-list.component';
import { SearchBox } from './Components/search-box.component';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchField:''
    };
  }
  handleChange=(event)=> {
    this.setState({ SearchField: event.target.value })
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({monsters:users}));
  }
  render() {
    const { monsters, SearchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
