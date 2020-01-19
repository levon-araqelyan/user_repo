import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import styles from "./HeaderButtons.module.css";
import Button from "../Button";
import { navigationService } from "../../services/navigationService";
import { clearListInfo } from "../../store/action-creaters/clearListActionCreator";

class HeaderButtons extends React.Component {
  handleClick = ({ currentTarget: { value } }) => {
    const { clearListInfoActionCreator } = this.props;
    navigationService.navigate(value);
    clearListInfoActionCreator();
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.headerButtonsDiv}>
          <Button className={styles.headerButtons} value="/users" onClick={this.handleClick}>
            Users
          </Button>
          <Button className={styles.headerButtons} value="/repos" onClick={this.handleClick}>
            Repos
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

HeaderButtons.propTypes = {
  clearListInfoActionCreator: PropTypes.func
};

HeaderButtons.defaultProps = {
  clearListInfoActionCreator: () => {}
};

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      clearListInfoActionCreator: clearListInfo
    },
    dispatcher
  );
}

export default connect(null, mapDispatchToProps)(HeaderButtons);
