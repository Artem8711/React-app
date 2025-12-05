import { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],

      isLoading: false,
      error: null,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`https://randomuser.me/api`)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results, isLoading: false }))
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isLoading: false }));
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
