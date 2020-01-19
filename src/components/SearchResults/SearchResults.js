import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { usersSelector } from "../../store/selectors/usersSelector";
import styles from "./SearchResults.module.css";
import { navigationService } from "../../services/navigationService";

class SearchResults extends React.PureComponent {
  singlPage = eachUser => {
    const { flags } = this.props;
    if (flags) {
      navigationService.navigate(`?currentRepo=${eachUser.full_name}`);
    } else {
      navigationService.navigate(`?currentUser=${eachUser.login}`);
    }
  };

  render() {
    const { users, repos, flags } = this.props;
    const list = flags ? repos : users;

    return (
      <div className={styles.wholeContainer}>
        {list.items.map((eachUser, index) => (
          <div tabIndex={index} role="button" key={eachUser.id} className={styles.eachUsr} onClick={() => this.singlPage(eachUser, index)}>
            <img src={flags ? eachUser.owner.avatar_url : eachUser.avatar_url} alt="" />
            <p>{flags ? eachUser.owner.login : eachUser.login}</p>
          </div>
        ))}
      </div>
    );
  }
}

SearchResults.propTypes = {
  users: PropTypes.object.isRequired,
  repos: PropTypes.object.isRequired,
  flags: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  users: usersSelector(state),
  repos: state.reposReducer.repos
});

export default connect(mapStateToProps, null)(SearchResults);
