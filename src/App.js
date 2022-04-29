import { useEffect, useState } from 'react'
import CardList from './components/card-list/CardList.component'
import FilterTextBox from './components/filter-textbox/FilterTextBox'
import './App.css'

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [filterText, setFiltertext] = useState('')
  const [filteredMonsters, setFilterMonsters] = useState(monsters)

  //* Event Handler for filter input changes
  const onSearchChange = (e) => {
    const filterTextValue = e.target.value.toLocaleLowerCase()
    setFiltertext(filterTextValue)
  }

  //* Fetch users from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => setMonsters(users))
  }, []) // empty dependency array because we only want this to run one time

  //* -- useEffect to limi filtering only when items related to monsters change
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(filterText)
    )

    setFilterMonsters(newFilteredMonsters)
  }, [monsters, filterText])

  return (
    <div className='App'>
      <h1 className='main-title'>Monster's Rolodex</h1>

      <FilterTextBox
        type='search'
        className='search-box'
        placeholder='Search Monster'
        onChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
