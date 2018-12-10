import React from "react";
import UserListContainer from "./_UserList";

class ManageUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserListContainer />
      </div>
    );
  }
}

export default ManageUser;
