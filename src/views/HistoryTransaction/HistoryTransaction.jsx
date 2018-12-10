import React from "react";
import HistoryTransactionListContainer from "./_HistoryTransactionList";

class HistoryTransactions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HistoryTransactionListContainer />
      </div>
    );
  }
}

export default HistoryTransactions;
