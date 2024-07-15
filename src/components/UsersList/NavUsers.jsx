import styles from "./UserList.module.css";
import classNames from "classnames";
import { CiTrash } from "react-icons/ci";

function NavUsers({ navUser: user, changeActiveUser, userIndex, deleteUser }) {
  const linkClassName = classNames(styles.userCard, {
    [styles.activeUserList]: user.isActive,
  });

  const userClickHandler = () => {
    changeActiveUser(userIndex);
  };

  const deleteUserHandler = (e) => {
    e.stopPropagation();
    deleteUser(userIndex);
  };

  return (
    <div key={user.id} className={linkClassName} onClick={userClickHandler}>
      <img
        className={styles.userPhoto}
        src={user.imgSrc}
        alt={`${user.name} ${user.surname}`}
      />
      <h2>
        {user.name} {user.surname}
      </h2>
      <p>Вік: {user.age}</p>
      <p>Професія: {user.profession}</p>
      <CiTrash className={styles.trashBtn} onClick={deleteUserHandler} />
    </div>
  );
}

export default NavUsers;
