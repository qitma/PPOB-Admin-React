import React from "react";
import PropTypes from "prop-types";
import Table from "../../../components/Table/CustomTable";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
//import CardHeader from "components/Card/CardHeader.jsx";

const PromoGroupList = ({ promoGroupList, handleChangePage }) => {
  //const { classes } = props;

  const tableHead = [
    "Name",
    "Markup",
    "Min.Deposit",
    "Min.Transaction",
    "Min.Transfer"
  ];
  const tableKey = [
    "name",
    "markup",
    "minimumDeposit",
    "minimumTransaction",
    "minimumTransfer"
  ];
  const { promoGroups, page, loading, error } = promoGroupList;
  console.log(promoGroupList);

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
        {promoGroups && (
          <Table
            tableHeaderColor="primary"
            tableHead={tableHead}
            tableData={promoGroups}
            tableKey={tableKey}
            page={page}
            handleChangePage={handleChangePage}
          />
        )}
      </BlockUi>
    </div>
  );
};

PromoGroupList.propTypes = {
  promoGroupList: PropTypes.shape({
    page: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    promoGroups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  })
};
export default PromoGroupList;
