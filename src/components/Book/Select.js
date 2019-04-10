import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Ahmedabad', label: 'Ahmedabad' },
  { value: 'Amritsar', label: 'Amritsar' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Dubai', label: 'Dubai' },
  { value: 'Gurugram', label: 'Gurugram' },
  { value: 'Hong Kong', label: 'Hong Kong' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Jaipur', label: 'Jaipur' },
  { value: 'Kochi', label: 'Kochi' },
  { value: 'Kolkata', label: 'Kolkata' },
  { value: 'London', label: 'London' },
  { value: 'Lucknow', label: 'Lucknow' },
  { value: 'Moscow', label: 'Moscow' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Munich', label: 'Munich' },
  { value: 'New York', label: 'New York' },
  { value: 'Paris', label: 'Paris' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Sydney', label: 'Sydney' },
  { value: 'Tokyo', label: 'Tokyo' },
  { value: 'Toronto', label: 'Toronto' },
  { value: 'Vienna', label: 'Vienna' }

];

class DropdownSelect extends React.Component {
  
constructor(props){
  super(props);
  this.state = {
    selectedOption: null,
  };
}
  
  handleChange = (selectedOption) => {
    this.props.getLocation(selectedOption.value);
    this.setState({ selectedOption });
    //console.log(`Option selected:`, selectedOption);

  };
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