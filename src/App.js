import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Chats from "./Chats/Chats"
import defaultImage from "./Pictures/icon-user-default.png"

import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import Message from "./Chats/Message";

export const myMap = new Map();

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

    myMap.set("giligutfeld", new User("giligutfeld", "123456", "gili@gmail.com", "gili", defaultImage));
    myMap.set("ofekyaloz", new User("ofekyaloz", "234567", "ofek@gmail.com", "ofek", defaultImage));
    myMap.set("leomessi", new User("leomessi", "101010", "leo@gmail.com", "leo", "img.jpg"));
    myMap.set("noakirel", new User("noakirel", "111111", "noa@gmail.com", "noa", defaultImage));
    myMap.set("yonitlevi", new User("yonitlevi", "202020", "yonit@gmail.com", "yonit", "img.jpg"));

    const ofekandgili = myMap.get("ofekyaloz").friends;
    ofekandgili.set("giligutfeld", []);
    ofekandgili.get("giligutfeld").push(new Message("abcd", true, new Date()));
    ofekandgili.get("giligutfeld").push(new Message("1234", true, new Date()));

    const [user, setUser] = useState({username: "", password: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (myMap.get(details.username).password === details.password) {
            console.log('Logged in');
            setUser({
                username: details.username,
                password: details.password
            });
            return true;
        } else {
            return false;
        }
    }

    const Register = details => {

        let errors = document.getElementsByClassName('errors');
        for (let i = 0; i < errors.length; i++) {
            errors[i].style.display = 'none';
        }

        if (myMap.get(details.username)) {
            document.getElementById('errorUsername').style.display = 'block';
            return true;
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

        myMap.set(details.username, new User(details.username, details.password, details.email, details.nickname, details.image));
        return false;

    }

    const Logout = () => {
        console.log("Logout");
        setUser({username: '', password: ''});

    }

    return (
        <div className={"center"}>
            <Router>
                <Routes>
                    <Route path={"/Chats"} element={<Chats username={user} Logout={Logout}/>}></Route>
                    <Route path={"/"} element={<SignIn Login={Login} error={error}/>}></Route>
                    <Route path={"/SignUp"} element={<SignUp Register={Register}/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
