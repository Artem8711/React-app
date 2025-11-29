function UsersListItem(props) {
  const {
    selectUser,
    user: { id, selected, firstName, lastName },
  } = props;

  const inlineStyle = {
    backgroundColor: selected ? "lightblue" : "transparent",
  };

  return (
    <li style={inlineStyle} onClick={() => selectUser(id)}>
      {firstName} {lastName}
    </li>
  );
}

export default UsersListItem;
