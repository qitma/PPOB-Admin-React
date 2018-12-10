import React from "react";
import PromoUserListContainer from "./_PromoUserList";

class ManagePromoUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PromoUserListContainer />
      </div>
    );
  }
}

export default ManagePromoUser;
