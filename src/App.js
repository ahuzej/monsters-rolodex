import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  }

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(val =>
      val.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
      <h1 className="title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    )
  }
}

export default App;
