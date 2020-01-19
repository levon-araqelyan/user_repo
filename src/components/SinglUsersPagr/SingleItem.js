import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getSinglUsersRequest } from "../../store/action-creaters/usersActionsCreator";
import { getSinglReposRequest } from "../../store/action-creaters/reposActionCreator";
import { getParamsFromUrl } from "../../services/getParamsFromUrl";

function SingleItem({ getFromUsers, login, avatarUrl, id, bio, name, getSinglUsersRequestActionCreator, getSinglReposRequestActionCreator }) {
  useEffect(() => {
    const getBy = getParamsFromUrl();

    if (getFromUsers) {
      getSinglUsersRequestActionCreator(getBy);
    } else {
      getSinglReposRequestActionCreator(getBy);
    }
  }, []);

  return (
    <div>
      <img src={avatarUrl} alt="#" />
      <p>{`login : ${login}`}</p>
      <p>{`id: ${id}`}</p>
      {bio && <p>{`bio : ${bio}`}</p>}
      <p>{`name : ${name}`}</p>
    </div>
  );
}

SingleItem.propTypes = {
  login: PropTypes.string,
  getFromUsers: PropTypes.bool,
  avatarUrl: PropTypes.string,
  id: PropTypes.number,
  bio: PropTypes.string,
  name: PropTypes.string,
  getSinglUsersRequestActionCreator: PropTypes.func.isRequired,
  getSinglReposRequestActionCreator: PropTypes.func.isRequired
};
SingleItem.defaultProps = {
  login: "",
  getFromUsers: false,
  avatarUrl: "",
  id: 0,
  bio: "",
  name: ""
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSinglUsersRequestActionCreator: getSinglUsersRequest,
      getSinglReposRequestActionCreator: getSinglReposRequest
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SingleItem);
