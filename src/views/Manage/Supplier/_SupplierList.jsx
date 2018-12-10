import React from "react";
import { supplierOperations } from "../../../state/ducks/supplier/";
import SupplierList from "./SupplierList";
import { connect } from "react-redux";
import Page from "../../../utility/page";

class SupplierListContainer extends React.Component {
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
    this.props.fetchSuppliers(this.state.page);
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
        this.props.fetchSuppliers(this.state.page);
      }
    );
  };

  render() {
    return (
      <SupplierList {...this.props} handleChangePage={this.handleChangePage} />
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    supplierList: state.supplierState.fetchSupplier.supplierList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSuppliers: page => {
      dispatch(supplierOperations.fetchSuppliers(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplierListContainer);
