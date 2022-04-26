import { Component } from 'react'
import './fileterTextbox.styles.css'

class FilterTextBox extends Component {
  render() {
    console.log('from filterTextBox')
    console.log(this.props)
    return (
      <input
        type='search'
        className='filterText-box'
        placeholder='Search Monster'
        onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default FilterTextBox
