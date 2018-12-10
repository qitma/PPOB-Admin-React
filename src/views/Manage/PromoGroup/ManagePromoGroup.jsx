import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { show } from "redux-modal";
import PromoGroupListContainer from "./_PromoGroupList";
import PromoGroupModal from "./PromoGroupModal";
import { Button } from "reactstrap";

class ManagePromoGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOpen = name => () => {
    this.props.show(name, { message: `This is a ${name} modal` });
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
        <PromoGroupModal />
        <PromoGroupListContainer />
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ show }, dispatch)
)(ManagePromoGroup);
