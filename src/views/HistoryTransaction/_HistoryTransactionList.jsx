import React from "react";
import { historyTransactionOperations } from "../../state/ducks/historyTransaction/";
import HistoryTransactionList from "./HistoryTransactionList";
import { connect } from "react-redux";
import Page from "../../utility/page";

class HistoryTransactionListContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      page: {
        ...Page
      }
    };
  }
  componentDidMount() {
    console.log(this.state.page);
    // eslint-disable-next-line react/prop-types
    this.props.fetchHistoryTransactions(this.state.page);
  }

  setPage = page => {
    this.setState({ page: page });
  };

  handleChangePage = selectedPage => {
    //console.log(activePage);
    this.setState(
      prevState => ({
        ...prevState,
        page: {
          ...prevState.page,
          page: selectedPage
        }
      }),
      () => {
        this.props.fetchHistoryTransactions(this.state.page);
      }
    );
  };

  render() {
    return (
      <HistoryTransactionList
        {...this.props}
        handleChangePage={this.handleChangePage}
      />
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    historyTransactionList:
      state.historyTransactionState.fetchHistoryTransaction
        .historyTransactionList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHistoryTransactions: page => {
      dispatch(historyTransactionOperations.fetchHistoryTransactions(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryTransactionListContainer);
