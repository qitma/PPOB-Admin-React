import React from "react";
import { promoGroupOperations } from "../../../state/ducks/promoGroup";
import PromoGroupList from "./PromoGroupList";
import { connect } from "react-redux";
import Page from "../../../utility/page";

class PromoGroupListContainer extends React.Component {
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
    this.props.fetchPromoGroups(this.state.page);
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
        this.props.fetchPromoGroups(this.state.page);
      }
    );
  };

  render() {
    return (
      <PromoGroupList
        {...this.props}
        handleChangePage={this.handleChangePage}
      />
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    promoGroupList: state.promoGroupState.fetchPromoGroup.promoGroupList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPromoGroups: page => {
      dispatch(promoGroupOperations.fetchPromoGroups(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoGroupListContainer);
