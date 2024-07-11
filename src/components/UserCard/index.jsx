import React, { useState } from 'react';
import styles from './UserCard.module.css'


function UserCard(props) {
  const { userInfo:{userName, userSurname, userAge, isMale, userPhoto, userTG, userGitHub, userFollowersCount}
  } = props

  const [liked, setLiked] = useState(false);
  const [followers, setFollowers] = useState(userFollowersCount);

  const handleLike = () => {
    if (liked) {
      setFollowers(followers - 1);
    } else {
      setFollowers(followers + 1);
    }
    setLiked(!liked);
  };

  const isMaleColor = {
    color: isMale ? '#33A8D9' : 'pink',
  };

  const ageColor = {
    color: userAge >= 18 ? 'green' : 'red',
  };

  const likeButtonColor = {
    color: liked ? 'red' : 'grey',
  };

  return (
    <article className={styles.userCard}>
      <img className={styles.userPhoto} src={userPhoto} alt="UserPhoto" />
      <h2 className={styles.userNameStyle} style={isMaleColor}>
        {userName} {userSurname}
      </h2>
      <p className={styles.userPosition}>FULL STACK DEVELOPER</p>
      <p className={styles.ageStyle}>
        Age: <span style={ageColor}>{userAge}</span>
      </p>

      <div className={styles.linksCont}>
        <a className={styles.linkTg} href={userTG}>
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a className={styles.linkGit} href={userGitHub}>
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <div className={styles.likeCont}>
        <p>{followers}</p>
        <button
          className={styles.heart}
          style={likeButtonColor}
          onClick={handleLike}
        >
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>
    </article>
  );
}

export default UserCard;