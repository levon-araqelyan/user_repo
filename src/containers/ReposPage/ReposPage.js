import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../Header";
import SearchResults from "../../components/SearchResults/SearchResults";
import SingleItem from "../../components/SinglUsersPagr/SingleItem";
import { singleRepoSelector } from "../../store/selectors/reposSelector";

function ReposPage({ singleRepo }) {
  const resultsFlag = window.location.search.includes("currentRepo");
  const owner = singleRepo.owner || {};

  return (
    <React.Fragment>
      {resultsFlag ? (
        <SingleItem getFromUsers={false} login={owner.login} avatarUrl={owner.avatar_url} id={owner.id} bio={owner.bio} name={singleRepo.full_name} />
      ) : (
        <React.Fragment>
          <Header flags />
          <SearchResults flags />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

ReposPage.propTypes = {
  singleRepo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  singleRepo: singleRepoSelector(state)
});

export default connect(mapStateToProps, null)(ReposPage);
