import UserList from "./components/UsersList";
import NavUsers from "./components/UsersList/NavUsers";

const users = [
  {
    id: 0,
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    name: "Katherine",
    surname: "Creola",
    age: 32,
    profession: "математик",
    isActive: false,
  },
  {
    id: 1,
    imgSrc:
      "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
    name: "Molina",
    surname: "Mario",
    age: 15,
    profession: "хімік",
    isActive: false,
  },
  {
    id: 2,
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    name: "Abdus",
    surname: "Salam",
    age: 24,
    profession: "фізик",
    isActive: false,
  },
  {
    id: 3,
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    name: "Julian",
    surname: "Percy",
    age: 30,
    profession: "хімік",
    isActive: false,
  },
  {
    id: 4,
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    name: "Subrahmanyan",
    surname: "Subrahmanyan",
    age: 21,
    profession: "астрофізик",
    isActive: false,
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
