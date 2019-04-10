import React from 'react';
import Select from 'react-select';

const options = [
  { value: '1 day', label: '1 day' },
  { value: '7 days', label: '7 days' },
  { value: '15 days', label: '15 days' },
  { value: '1 month', label: '1 month' },
  { value: '3 months', label: '3 months' },
  { value: '6 months', label: '6 months' },
  { value: '1 year', label: '1 year' },
  { value: '2 years', label: '2 years' },
  { value: '3 years', label: '3 years' },
  { value: '5 years', label: '5 years' }
  

];

class DropdownSelect extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedOption: null
    }
  }
  
  handleChange = (selectedOption) => {
    
     this.props.getPlan(selectedOption.value);
    this.setState({ selectedOption });
    //console.log(`Option selected:`, selectedOption);
   
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
         
      />
    );
  }
}

export default DropdownSelect;