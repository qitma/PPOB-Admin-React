import React from "react";
import PropTypes from "prop-types";
import Table from "../../../components/Table/CustomTable";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
//import CardHeader from "components/Card/CardHeader.jsx";

const PromoUserList = ({ promoUserList, handleChangePage }) => {
  //const { classes } = props;

  const tableHead = [
    "Name",
    "Group",
    "Group Recomendation",
    "Deposit",
    "Transactions"
  ];
  const tableKey = [
    "name",
    "group",
    "groupRecomendation",
    "deposit",
    "numberOfTransaction"
  ];
  const { promoUsers, page, loading, error } = promoUserList;
  console.log(promoUserList);

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
        {promoUsers && (
          <Table
            tableHeaderColor="primary"
            tableHead={tableHead}
            tableData={promoUsers}
            tableKey={tableKey}
            page={page}
            handleChangePage={handleChangePage}
          />
        )}
      </BlockUi>
    </div>
  );
};

PromoUserList.propTypes = {
  promoUserList: PropTypes.shape({
    page: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    promoUsers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  })
};
export default PromoUserList;
