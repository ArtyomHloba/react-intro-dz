import styles from "./UserList.module.css";
import classNames from "classnames";

function NavUsers({ navUser: user, changeActiveUser, userIndex }) {
  const linkClassName = classNames(styles.userCard, {
    [styles.activeUserList]: user.isActive,
  });

  const userClickHandler = () => {
    changeActiveUser(userIndex);
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
    </div>
  );
}

export default NavUsers;
