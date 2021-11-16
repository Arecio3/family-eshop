import { SearchBar } from 'react-native-elements';
import React from 'react';
export default class Searchbar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search Products"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme
        platform={'ios'}
      />
    );
  }
}