import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Chats from "./Chats/Chats"
import defaultImage from "./Pictures/icon-user-default.png"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react';

export const localhost = 'http://localhost:7265/'

export class User {
    constructor(username, password, email, nickname, img) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.img = img;
        this.friends = new Map();
    }
}

function App() {

    const [username, setUsername] = useState({username: "", password: ""});
    const [nickname, setNickname] = useState('');

    async function find(name) {
        const res = await fetch(localhost + 'api/contacts/' + name)
        return res.ok;
    }

    const Register = details => {

        let errors = document.getElementsByClassName('errors');
        for (let i = 0; i < errors.length; i++) {
            errors[i].style.display = 'none';
        }

        if (details.password !== details.passwordAgain) {
            document.getElementById('errorPasswordAgain').style.display = 'block';
            return true;
        }

        if (!/(?=.{8,})/.test(details.password)) {
            document.getElementById('errorLength').style.display = 'block';
            return true;
        }

        if (!/(?=.*[0-9])/.test(details.password)) {
            document.getElementById('errorPasswordNumbers').style.display = 'block';
            return true;
        }

        if (!/(?=.*[A-Z])/.test(details.password)) {
            document.getElementById('errorPasswordUppercase').style.display = 'block';
            return true;
        }

        if (!/(?=.*[a-z])/.test(details.password)) {
            document.getElementById('errorPasswordLowercase').style.display = 'block';
            return true;
        }

        if (details.image === "") {
            details.image = defaultImage;
        }

        // if (find(details.username)) {
        //     document.getElementById('errorUsername').style.display = 'block';
        //     return true;
        // }

        // myMap.set(details.username, new User(details.username, details.password, details.email, details.nickname, details.image));
        const jsonData = {
            Username: details.username,
            Password: details.password,
            Email: details.email,
            Nickname: details.nickname,
            // Photo: details.image //to string
        };

        fetch(localhost + 'api/Users/register', {  // Enter your IP address here
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
        }).then(res => {
            if (res.ok) {
                setUsername({
                    username: details.username,
                    password: details.password
                });
            } else {
                document.getElementById('errorUsername').style.display = 'block';
                return true;
            }
        })

        // setUser({
        //     username: details.username,
        //     password: details.password
        // });

        return false;
    }

    const Logout = () => {
        setUsername({username: '', password: ''});
    }

    return (
        <div className={"center"}>
            <Router>
                <Routes>
                    <Route path={"/Chats"} element={<Chats username={username} nickname={nickname} Logout={Logout}/>}/>
                    <Route path={"/"} element={<SignIn setNickname={setNickname} setUsername={setUsername}/>}/>
                    <Route path={"/SignUp"} element={<SignUp Register={Register}/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
