import './fileterTextbox.styles.css'

const FilterTextBox = ({ onChangeHandler }) => {
  return (
    <input
      type='search'
      className='filterText-box'
      placeholder='Search Monster'
      onChange={onChangeHandler}
    />
  )
}

export default FilterTextBox
