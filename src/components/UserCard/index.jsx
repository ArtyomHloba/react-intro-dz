import styles from './UserCard.module.css'


function UserCard(props) {
  const {
    userName, userSurname, userAge, isMale, userPhoto, userTG, userGitHub, userFollowers
  } = props

  const isMaleColor ={
    color: isMale ? '#33A8D9' : 'pink',
  }

  const ageColor ={
    color: userAge >= 18 ? 'green' : 'red',
}

  return (
    <article className={styles.userCard}>
      <img className={styles.userPhoto} src={userPhoto} alt="UserPhoto" />
      <h2 className={styles.userNameStyle} style={isMaleColor}>{userName} {userSurname}</h2>
      <p className={styles.userPosition}>FULL STACK DEVELOPER</p>
      <p className={styles.ageStyle}>Age: <span style={ageColor}>{userAge}</span></p>

      <div className={styles.linksCont}>
          <a className={styles.linkTg} href={userTG}><i className="fa-brands fa-telegram"></i></a>
          <a className={styles.linkGit} href={userGitHub}><i className="fa-brands fa-github"></i></a>
      </div>
      
      <div className={styles.likeCont}>
        <p>{userFollowers}</p>
        <button className={styles.heart}><i className="fa-regular fa-heart"></i></button>
      </div>


    </article>
  )
}

export default UserCard;