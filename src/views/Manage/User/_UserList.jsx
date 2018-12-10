import React from "react";
import { userOperations } from "../../../state/ducks/user";
import UserList from "./UserList";
import { connect } from "react-redux";
import Page from "../../../utility/page";

class UserListContainer extends React.Component {
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
    this.props.fetchUsers(this.state.page);
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
        this.props.fetchUsers(this.state.page);
      }
    );
  };

  render() {
    return (
      <UserList {...this.props} handleChangePage={this.handleChangePage} />
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    userList: state.userState.fetchUser.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: page => {
      dispatch(userOperations.fetchUsers(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
