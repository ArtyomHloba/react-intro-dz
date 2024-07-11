import UserCard from "./components/UserCard"

const user = {
  userName: 'John',
  userSurname: 'Doe',
  userAge: 20,
  isMale: true,
  userPhoto: 'https://www.matthewdevaney.com/wp-content/uploads/2021/08/powerapps-userphoto-featured-1.jpg',
  userTG: '@ggloba',
  userGitHub: 'https://github.com/ArtyomHloba?tab=repositories',
  userFollowersCount: 200,
}

function App() {
  return (
    <>
      <UserCard
        userInfo={user}
      />
    </>
  )
}

export default App
