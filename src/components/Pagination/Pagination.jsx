import React from "react";
import PropTypes from "prop-types";
import PaginationComponent from "react-reactstrap-pagination";
const CustomPagination = ({ page, handleChangePage }) => {
  const flexRight = {
    display: "flex",
    flexDirection: "row-reverse"
  };
  return (
    <div style={flexRight}>
      <PaginationComponent
        totalItems={page.count}
        pageSize={page.size}
        onSelect={handleChangePage}
      />
    </div>
  );
};

CustomPagination.propTypes = {
  page: PropTypes.shape({
    count: PropTypes.number,
    size: PropTypes.number
  }),
  handleChangePage: PropTypes.func.isRequired
};

export default CustomPagination;
