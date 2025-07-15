import React, {useState} from 'react';
import styles from './FriendListItem.module.css'


const FriendListItem = ({avatar, name, isOnline}) => {

  const {
    ['list-item']: listItem
  } = styles

  return (
    <div className={listItem}>
      <img
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p>{name}</p>
      <p style={{color: isOnline ? 'green' : 'red'}}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>

  );
};

export default FriendListItem;