import React from "react";
import PropTypes from "prop-types";
import Table from "../../../components/Table/CustomTable";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
//import CardHeader from "components/Card/CardHeader.jsx";

const UserList = ({ userList, handleChangePage }) => {
  //const { classes } = props;

  const tableHead = ["Name", "PhoneNumber", "City", "Deposit"];
  const tableKey = ["name", "phoneNumber", "city", "deposit"];
  const { users, page, loading, error } = userList;
  console.log(userList);

  // if (loading)
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  if (error)
    return (
      <div>
        <h3>Error : {error.message}</h3>
      </div>
    );
  // eslint-disable-next-line no-console
  return (
    <div>
      <BlockUi tag="div" blocking={loading}>
        {users && (
          <Table
            tableHeaderColor="primary"
            tableHead={tableHead}
            tableData={users}
            tableKey={tableKey}
            page={page}
            handleChangePage={handleChangePage}
          />
        )}
      </BlockUi>
    </div>
  );
};

UserList.propTypes = {
  userList: PropTypes.shape({
    page: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  })
};
export default UserList;
