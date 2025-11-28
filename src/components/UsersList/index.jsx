import { Component } from "react";

const usersData = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
  { id: 3, firstName: "Alice", lastName: "Johnson" },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData.map((u) => ({ ...u, selected: false })),
    };
  }

  selectUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);
    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      selected: !newUsers[foundIndex].selected,
    };
    this.setState({ users: newUsers });
  };

  mapUser = (u, i) => {
    const inlineStyle = {
      backgroundColor: u.selected ? "lightblue" : "transparent",
    };

    return (
      <li key={u.id} style={inlineStyle} onClick={() => this.selectUser(u.id)}>
        {u.firstName} {u.lastName}
      </li>
    );
  };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default UsersList;
