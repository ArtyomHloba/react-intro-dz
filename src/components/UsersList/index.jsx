import styles from "./UserList.module.css";

function UserList({ usersInfo }) {
  return (
    <div className={styles.userList}>
      {usersInfo.map((user) => (
        <div key={user.id} className={styles.userCard}>
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
      ))}
    </div>
  );
}

export default UserList;
