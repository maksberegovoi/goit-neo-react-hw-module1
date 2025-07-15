import './App.css'
import Profile from "./components/Profile/Profile.jsx";
import userData from './userData.json'
import friends from "./friends.json";
import FriendList from "./components/FriendsList/FriendList.jsx";


function App() {


  return (
    <div style={{display: 'flex', gap: 30}}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      ></Profile>
      <FriendList friends={friends}></FriendList>
    </div>
  )
}

export default App
