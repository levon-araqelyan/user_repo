import PropTypes from "prop-types";
import React from "react";

function Pagination(props) {
  const { users, repos, flags, pageButtons, page } = props;
  const butons = [];
  const totalAmount = flags ? Math.ceil(repos.repos.total_count / 20) : Math.ceil(users.users.total_count / 20);

  if (totalAmount >= 7) {
    if (page > 1) {
      butons.push(
        <button onClick={pageButtons} value={1} key={1} type="button">
          {1}
        </button>
      );
    }
    if (page > 3) {
      butons.push(
        <button onClick={pageButtons} value={page - 2} key="...1" type="button">
          ...
        </button>
      );
    }
    if (page >= 3) {
      butons.push(
        <button onClick={pageButtons} value={page - 1} key={page - 1} type="button">
          {page - 1}
        </button>
      );
    }
    butons.push(
      <button onClick={pageButtons} value={page} key={page} style={{ color: "red" }} type="button">
        {page}
      </button>
    );
    if (totalAmount - page >= 1) {
      butons.push(
        <button onClick={pageButtons} key={+page + 1} value={+page + 1} type="button">
          {+page + 1}
        </button>
      );
    }
    if (totalAmount - page > 2) {
      butons.push(
        <button onClick={pageButtons} key="...2" value={+page + 2} type="button">
          ...
        </button>
      );
    }
    if (page < totalAmount - 1) {
      butons.push(
        <button onClick={pageButtons} key={totalAmount} value={totalAmount} type="button">
          {totalAmount}
        </button>
      );
    }
  } else {
    for (let i = 1; i < totalAmount + 1; i++) {
      let styleFlag = {};
      if (i === page) {
        styleFlag = {
          color: "red"
        };
      }
      butons.push(
        <button onClick={pageButtons} key={i} value={i} style={styleFlag} type="button">
          {i}
        </button>
      );
    }
  }

  return (
    <React.Fragment>
      <span>{butons}</span>
    </React.Fragment>
  );
}

Pagination.propTypes = {
  users: PropTypes.object.isRequired,
  repos: PropTypes.object.isRequired,
  flags: PropTypes.bool.isRequired,
  pageButtons: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default Pagination;
