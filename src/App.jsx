import UserList from "./components/UsersList";

const users = [
  {
    id: 0,
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    name: "Katherine",
    surname: "Creola",
    age: 32,
    profession: "математик",
  },
  {
    id: 1,
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    name: "Molina",
    surname: "Mario",
    age: 15,
    profession: "хімік",
  },
  {
    id: 2,
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    name: "Abdus",
    surname: "Salam",
    age: 24,
    profession: "фізик",
  },
  {
    id: 3,
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    name: "Julian",
    surname: "Percy",
    age: 30,
    profession: "хімік",
  },
  {
    id: 4,
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    name: "Subrahmanyan",
    surname: "Subrahmanyan",
    age: 21,
    profession: "астрофізик",
  },
];

function App() {
  return (
    <>
      <UserList usersInfo={users} />
    </>
  );
}

export default App;
