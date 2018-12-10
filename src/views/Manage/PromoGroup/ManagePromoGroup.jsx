import React from "react";
import PromoGroupListContainer from "./_PromoGroupList";

class ManagePromoGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PromoGroupListContainer />
      </div>
    );
  }
}

export default ManagePromoGroup;
