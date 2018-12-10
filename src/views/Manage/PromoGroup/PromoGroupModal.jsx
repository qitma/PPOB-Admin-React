import React from "react";
import { connectModal } from "redux-modal";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class PromoGroupModal extends React.Component {
  render() {
    const { show, handleHide, message } = this.props;
    return (
      <Modal
        isOpen={show}
        toggle={this.toggleSuccess}
        className={"modal-success " + this.props.className}
      >
        <ModalHeader toggle={this.toggleSuccess}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleHide}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={handleHide}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default connectModal({ name: "promoGroupModal" })(PromoGroupModal);
