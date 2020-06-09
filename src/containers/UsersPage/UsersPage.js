import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../Header";
import SearchResults from "../../components/SearchResults/SearchResults";
import SingleItem from "../../components/SinglUsersPagr/SingleItem";
import { singleUserSelector } from "../../store/selectors/usersSelector";

const UsersPage = ({ singleUser }) => {
  const resultsFlag = window.location.search.includes("currentUser");

  return (
    <div >
      {resultsFlag ? (
        <SingleItem getFromUsers login={singleUser.login} avatarUrl={singleUser.avatar_url} id={singleUser.id} bio={singleUser.bio} name={singleUser.name} />
      ) : (
        <React.Fragment>
          <Header flags={false} />
          <SearchResults flags={false} />
        </React.Fragment>
      )}
    </div>
  );
};
UsersPage.propTypes = {
  singleUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  singleUser: singleUserSelector(state)
});

export default connect(mapStateToProps, null)(UsersPage);
