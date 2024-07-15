import { useState } from "react";
import NavUsers from "./NavUsers";
import styles from "./UserList.module.css";

function UserList({ usersInfo }) {
  const [navUser, setNavUser] = useState(usersInfo);

  function changeActiveUser(selectedNavUserIndex) {
    const copyNavUser = [...navUser];
    copyNavUser[selectedNavUserIndex].isActive =
      !copyNavUser[selectedNavUserIndex].isActive;
    setNavUser(copyNavUser);
  }

  const mapUserList = (user, index) => {
    return (
      <NavUsers
        key={user.id}
        navUser={user}
        userIndex={index}
        changeActiveUser={changeActiveUser}
      />
    );
  };
  return <div>{navUser.map(mapUserList)}</div>;
}

export default UserList;
