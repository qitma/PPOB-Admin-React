import React from "react";
import { connectModal } from "redux-modal";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { Formik, Form, Field } from "formik";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

const PromoGroupModal = ({
  promoGroupData,
  show,
  handleHide,
  createPromoGroup,
  message
}) => {
  const { promoGroup, error, loading } = promoGroupData;
  return (
    <div>
      <BlockUi tag="div" blocking={loading}>
        <Modal
          isOpen={show}
          //toggle={this.toggleSuccess}
          className={"modal-success"}
        >
          <ModalHeader>Modal title</ModalHeader>
          <Formik
            initialValues={promoGroup}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));
              createPromoGroup(values);
              actions.setSubmitting(false);
              handleHide();
            }}
            render={({ isSubmitting, values }) => (
              <Form>
                <ModalBody>
                  <FormGroup>
                    <Label htmlFor="groupName">Group Name</Label>
                    <Input
                      component="input"
                      tag={Field}
                      name="name"
                      type="text"
                      id="groupName"
                      placeholder="Enter your group name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="markup">Markup</Label>
                    <Input
                      tag={Field}
                      component="input"
                      name="markup"
                      type="number"
                      id="markup"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="minimumDeposit">Min.Deposit</Label>
                    <Input
                      component="input"
                      tag={Field}
                      name="minimumDeposit"
                      type="number"
                      id="minimumDeposit"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="minimumTransaction">Min.Transaction</Label>
                    <Input
                      component="input"
                      tag={Field}
                      name="minimumTransaction"
                      type="number"
                      id="minimumTransaction"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="minimumTransfer">Min.Transfer</Label>
                    <Input
                      component="input"
                      tag={Field}
                      name="minimumTransfer"
                      type="number"
                      id="minimumTransfer"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input
                      component="textarea"
                      tag={Field}
                      name="description"
                      id="description"
                      row="4"
                      placeholder="Description..."
                    />
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="success" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>{" "}
                  <Button color="secondary" onClick={handleHide}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            )}
          />
        </Modal>
      </BlockUi>
    </div>
  );
};

export default connectModal({ name: "promoGroupModal" })(PromoGroupModal);
