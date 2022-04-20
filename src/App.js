import { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      // if no original data exists, set the object to empty
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          }
        })
      )
    // .then((users) => (users.ma))
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}
export default App
