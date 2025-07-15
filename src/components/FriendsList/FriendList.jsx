import React from 'react';
import FriendListItem
  from "../FriendListItem/FriendListItem.jsx";

import styles from './FriendList.module.css'


const FriendList = ({friends}) => {

  const {
    ['friend-list']: friendList
  } = styles

  return (
    <ul className={friendList}>
      {friends.map(friend => {
        return <li key={friend.name}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      })}

    </ul>

  );
};

export default FriendList;