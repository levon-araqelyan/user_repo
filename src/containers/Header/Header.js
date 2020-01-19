import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchInput from "../../components/SearchInput";
import { getUsersRequest } from "../../store/action-creaters/usersActionsCreator";
import { getReposRequest } from "../../store/action-creaters/reposActionCreator";

class Header extends React.Component {
  getItems = (value, page) => {
    const { getUsersRequestActionCreator, getReposRequestActionCreator, flags } = this.props;

    if (flags) {
      getReposRequestActionCreator(value, page);
    } else {
      getUsersRequestActionCreator(value, page);
    }
  };

  render() {
    const { users, repos, flags } = this.props;
    return (
      <React.Fragment>
        <SearchInput searchRequest={this.getItems} flags={flags} users={users} repos={repos} />
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  getUsersRequestActionCreator: PropTypes.func,
  getReposRequestActionCreator: PropTypes.func,
  flags: PropTypes.bool.isRequired,
  users: PropTypes.object.isRequired,
  repos: PropTypes.object.isRequired
};

Header.defaultProps = {
  getUsersRequestActionCreator: () => {},
  getReposRequestActionCreator: () => {}
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsersRequestActionCreator: getUsersRequest,
      getReposRequestActionCreator: getReposRequest
    },
    dispatch
  );
const mapStateToProps = state => ({
  users: state.usersReducer,
  repos: state.reposReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
