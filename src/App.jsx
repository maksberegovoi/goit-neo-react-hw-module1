import './App.css'
import Profile from "./components/Profile/Profile.jsx";
import userData from './userData.json'


function App() {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      ></Profile>
    </div>
  )
}

export default App
