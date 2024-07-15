import { useState } from "react";
import NavUsers from "./NavUsers";

function UserList({ usersInfo }) {
  const [navUser, setNavUser] = useState(usersInfo);

  function changeActiveUser(selectedNavUserIndex) {
    const copyNavUser = [...navUser];
    copyNavUser[selectedNavUserIndex].isActive =
      !copyNavUser[selectedNavUserIndex].isActive;
    setNavUser(copyNavUser);
  }

  function deleteUser(userIndex) {
    const copyNavUser = [...navUser];
    copyNavUser.splice(userIndex, 1);
    setNavUser(copyNavUser);
  }

  const mapUserList = (user, index) => {
    return (
      <NavUsers
        key={user.id}
        navUser={user}
        deleteUser={deleteUser}
        userIndex={index}
        changeActiveUser={changeActiveUser}
      />
    );
  };
  return <div>{navUser.map(mapUserList)}</div>;
}

export default UserList;
