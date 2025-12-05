import { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: `Ivo` },
        { id: 2, name: `Wally` },
      ],

      isLoading: false,
      error: null,
      currentPage: 1,
    };
  }

  render() {
    const { users, isLoading, error } = this.state;

    return (
      <>
        {error && <div>ERROR</div>}
        {isLoading && <div>Loading. Please wait...</div>}

        {!error && !isLoading && (
          <ul>
            {users.map((u) => (
              <li key={u.id}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default UsersLoader;
