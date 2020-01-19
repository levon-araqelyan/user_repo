import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { navigationService } from "../../services/navigationService";
import UsersPage from "../UsersPage";
import ReposPage from "../ReposPage/ReposPage";

const Content = ({ history }) => {
  navigationService.setHistory({ ...history });

  return (
    <Switch>
      <Route path="/(|users)/" component={UsersPage} />
      <Route path="/repos" component={ReposPage} />
    </Switch>
  );
};

Content.propTypes = {
  history: PropTypes.object
};

Content.defaultProps = {
  history: {}
};

export default withRouter(Content);
