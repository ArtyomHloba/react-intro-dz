import UserCard from "./components/UserCard"

const user = {
  userName: 'John',
  userSurname: 'Doe',
  userAge: 20,
  isMale: true,
  userPhoto: 'https://www.matthewdevaney.com/wp-content/uploads/2021/08/powerapps-userphoto-featured-1.jpg',
  userTG: '@ggloba',
  userGitHub: 'https://github.com/ArtyomHloba?tab=repositories',
  userFollowers: 200,
}

function App() {
  return (
    <>
      <UserCard
        userName={user.userName} 
        userSurname={user.userSurname}
        userAge={user.userAge}
        isMale={user.isMale}
        userPhoto={user.userPhoto}
        userTG={user.userTG}
        userGitHub={user.userGitHub}
        userFollowers={user.userFollowers}
      />
    </>
  )
}

export default App
