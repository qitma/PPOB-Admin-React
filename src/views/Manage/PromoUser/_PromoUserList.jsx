import React from "react";
import { promoUserOperations } from "../../../state/ducks/promoUser";
import PromoUserList from "./PromoUserList";
import { connect } from "react-redux";
import Page from "../../../utility/page";

class PromoUserListContainer extends React.Component {
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
    this.props.fetchPromoUsers(this.state.page);
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
        this.props.fetchPromoUsers(this.state.page);
      }
    );
  };

  render() {
    return (
      <PromoUserList {...this.props} handleChangePage={this.handleChangePage} />
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    promoUserList: state.promoUserState.fetchPromoUser.promoUserList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPromoUsers: page => {
      dispatch(promoUserOperations.fetchPromoUsers(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoUserListContainer);
