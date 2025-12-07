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

  loadUsers = () => {
    const { currentPage } = this.state;

    this.setState({ isLoading: true });

    fetch(
      `https://randomuser.me/api/?results=5&seed=pe2022&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results, isLoading: false }))
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;

    if (currentPage !== prevState.currentPage) {
      this.loadUsers();
    }
  }

  prevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  nextPage = () => {
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));
  };

  render() {
    const { users, isLoading, error } = this.state;

    return (
      <>
        <button onClick={this.prevPage}>{`<`}</button>
        <button onClick={this.nextPage}>{`>`}</button>

        {error && <div>ERROR</div>}
        {isLoading && <div>Loading. Please wait...</div>}

        {!error && !isLoading && (
          <ul>
            {users.map((u) => (
              <li key={u.login.uuid}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default UsersLoader;
