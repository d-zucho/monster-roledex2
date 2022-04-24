import { Component } from 'react'

class FilterTextBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { addFilterText } = this.props
    console.log('from filterTextBox')
    console.log(this.props)
    return (
      <input
        type='search'
        className='search-box'
        placeholder='Search Monster'
        onChange={addFilterText}
      />
    )
  }
}

export default FilterTextBox
