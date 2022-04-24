import { Component } from 'react'

class CardList extends Component {
  render() {
    const { monsters } = this.props
    console.log(monsters)
    return (
      <section>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </section>
    )
  }
}

export default CardList
