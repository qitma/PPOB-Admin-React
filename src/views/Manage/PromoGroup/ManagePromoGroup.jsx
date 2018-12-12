import React from "react";
import PromoGroupListContainer from "./_PromoGroupList";
import PromoGroupModalContainer from "./_PromoGroupModal";

class ManagePromoGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PromoGroupModalContainer />
        <PromoGroupListContainer />
      </div>
    );
  }
}

export default ManagePromoGroup;
