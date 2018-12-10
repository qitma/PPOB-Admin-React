import React from "react";
import PropTypes from "prop-types";
import Table from "../../components/Table/CustomTable";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
//import CardHeader from "components/Card/CardHeader.jsx";

const HistoryTransactionList = ({
  historyTransactionList,
  handleChangePage
}) => {
  //const { classes } = props;

  const tableHead = ["Name", "Type", "Transaction Number", "Amount", "Date"];
  const tableKey = [
    "name",
    "type",
    "transactionNumber",
    "transactionAmount",
    "transactionDate"
  ];
  const { historyTransactions, page, loading, error } = historyTransactionList;
  console.log(historyTransactionList);

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
        {historyTransactions && (
          <Table
            tableHeaderColor="primary"
            tableHead={tableHead}
            tableData={historyTransactions}
            tableKey={tableKey}
            page={page}
            handleChangePage={handleChangePage}
          />
        )}
      </BlockUi>
    </div>
  );
};

HistoryTransactionList.propTypes = {
  historyTransactionList: PropTypes.shape({
    page: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    historyTransactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  })
};
export default HistoryTransactionList;
