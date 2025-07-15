import React from 'react';
import styles from './Profile.module.css'


const Profile = ({
  username,
  tag,
  location,
  avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats
}) => {

  const {
    ['card']: card,
    ['card-main']: cardMain,
    ['card-stats']: cardStats,
    ['card-stats-item']: cardStatsItem,
    ['card-avatar']: cardAvatar,
    ['accent']: accent
  } = styles

  return (
    <div className={card}>
      <div className={cardMain}>
        <img
          className={cardAvatar}
          src={avatar}
          alt="User avatar"
        />
        <p className={accent}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={cardStats}>
        <li className={cardStatsItem}>
          <span>Followers</span>
          <span className={accent}>{stats.followers}</span>
        </li>
        <li className={cardStatsItem}>
          <span>Views</span>
          <span className={accent}>{stats.views}</span>
        </li>
        <li className={cardStatsItem}>
          <span>Likes</span>
          <span className={accent}>{stats.likes}</span>
        </li>
      </ul>
    </div>

  );
};

export default Profile;