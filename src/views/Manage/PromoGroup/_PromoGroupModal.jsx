import React from "react";
import { promoGroupOperations } from "../../../state/ducks/promoGroup";
import PromoGroupModal from "./PromoGroupModal";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { show } from "redux-modal";
import Page from "../../../utility/page";

class PromoGroupCreateContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOpen = name => () => {
    this.props.showModal(name, { message: `This is a ${name} modal` });
  };

  render() {
    return (
      <div>
        <Button
          color="success"
          onClick={this.handleOpen("promoGroupModal")}
          className="mr-1"
        >
          Success modal
        </Button>
        <PromoGroupModal {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    promoGroupData: state.promoGroupState.createPromoGroup.newPromoGroup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPromoGroup: post => {
      dispatch(promoGroupOperations.createPromoGroup(post));
    },
    showModal: (name, props) => {
      dispatch(show(name, props));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoGroupCreateContainer);
