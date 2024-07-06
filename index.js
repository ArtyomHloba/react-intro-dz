'use strict'

const roodEl = document.getElementById('root');
const root = ReactDOM.createRoot(roodEl);

root.render(<App/>)

function App(){
    const userName = 'Artyom';
    const userSurname = 'Hloba';
    const userAge = 19;
    const isMale = true;
    const userPhoto = './img/macaca.jpg';
    const userTG = '@ggloba';
    const userGitHub = 'https://github.com/ArtyomHloba?tab=repositories';
    return(
        <UserCard 
        userName={userName} 
        userSurname={userSurname} 
        userAge={userAge} 
        isMale={isMale}
        userPhoto={userPhoto}
        userTG={userTG}
        userGitHub={userGitHub}
        />
    );
}

function UserCard(props){
    const {userName, userSurname, userAge, isMale, userPhoto, userTG, userGitHub} = props

    const ageColor ={
        color: userAge >= 18 ? 'green' : 'red',
    }

    const isMaleColor ={
        color: isMale ? '#33A8D9' : 'pink',
    }
     
    return(
        <article className="userCard">
            <img 
                src={userPhoto} 
                alt={userName}
                className="userImg"
            />
            <div className="content-container">
                <h2 className="userName" style={isMaleColor}>{userName} {userSurname}</h2>
                <p className="position">FULL STACK DEVELOPER</p>
                <p className="userAge">Age: <span style={ageColor}>{userAge}</span></p>
            </div>
            <div className="links">
                <a href={userTG} className="tgLink"><i class="fa-brands fa-telegram"></i></a>
                <a href={userGitHub} className="gitLink"><i class="fa-brands fa-github"></i></a>
            </div>
        </article>
    );
}