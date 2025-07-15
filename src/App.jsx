import './App.css'
import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendsList/FriendList.jsx";
import TransactionHistory
  from "./components/TransactionHistory/TransactionHistory.jsx";
import userData from './userData.json'
import friends from "./friends.json";
import transactions from './transactions.json'


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
      <TransactionHistory items={transactions}/>
    </div>
  )
}

export default App
