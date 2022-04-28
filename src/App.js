import { Component } from 'react'
import CardList from './components/card-list/CardList.component'
import FilterTextBox from './components/filter-textbox/FilterTextBox'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      // if no original data exists, set the object to empty
      monsters: [],
      filterText: '',
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) =>
        this.setState(() => {
          return {
            ...this.state,
            monsters: users,
          }
        })
      )
  }

  // event listener method for text input in search field
  addFilterText = (e) => {
    this.setState(() => {
      return {
        ...this.state,
        filterText: e.target.value,
      }
    })
  }

  render() {
    console.log('render')
    const { monsters, filterText } = this.state

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(filterText.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>Monster's Rolodex</h1>

        <FilterTextBox
          type='search'
          className='search-box'
          placeholder='Search Monster'
          onChangeHandler={this.addFilterText}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
export default App
