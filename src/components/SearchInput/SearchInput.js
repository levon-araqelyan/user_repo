import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { navigationService } from "../../services/navigationService";
import Pagination from "../Pagination/Pagination";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      page: 1
    };
  }

  handleChange = ({ currentTarget: { value } }) => {
    this.setState({ value });
  };

  searchItems = (newValue, newPage) => {
    let { value } = this.state;
    const page = 1;
    const { searchRequest, flags } = this.props;
    let path = `=${value}&page=${page}`;
    let pageForeSearch = page;

    if (newPage && typeof newPage === "number") {
      value = newValue;
      pageForeSearch = newPage;
      path = `=${newValue}&page=${pageForeSearch}`;
    }

    this.setState(() => ({
      value,
      page: pageForeSearch
    }));

    searchRequest(value, pageForeSearch);

    if (flags) {
      path = `repos?repoName${path}`;
    } else {
      path = `users?userName${path}`;
    }

    navigationService.navigate(path);
  };

  pageButtons = e => {
    const pages = e.currentTarget.value;
    const { value } = this.state;

    this.setState({ page: +pages });
    this.searchItems(value, +pages);
  };

  componentDidMount() {
    const { search } = navigationService.hisory.location;

    if (search && search.indexOf("currentRepo") === -1 && search.indexOf("currentUser") === -1) {
      const arr = search.split("&");
      const page = arr[1].split("=");
      const value = arr[0].split("=");

      this.searchItems(value[1], +page[1]);
    }
  }

  render() {
    const { value, page } = this.state;
    const { users, repos, flags } = this.props;
    return (
      <div>
        <div>
          <input value={value} onChange={this.handleChange} />
          <Button onClick={this.searchItems}>Search</Button>
        </div>
        <Pagination users={users} repos={repos} flags={flags} pageButtons={this.pageButtons} page={page} />
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchRequest: PropTypes.func.isRequired,
  flags: PropTypes.bool.isRequired,
  users: PropTypes.object.isRequired,
  repos: PropTypes.object.isRequired
};

export default SearchInput;
