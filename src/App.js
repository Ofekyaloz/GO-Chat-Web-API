import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Chats from "./Chats/Chats"

import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Switch} from "react-router-dom";
import {useState} from 'react';

export const myMap = new Map();

class User {
    constructor(username, password, email, nickname, img) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.img = img;
    }
}

function App() {

    myMap.set("giligutfeld", new User("giligutfeld", "123456", "gili@gmail.com", "gili", "img.jpg"));
    myMap.set("ofekyaloz", new User("ofekyaloz", "234567", "ofek@gmail.com", "ofek", "img.jpg"));
    myMap.set("leomessi", new User("leomessi", "101010", "leo@gmail.com", "leo", "img.jpg"));
    myMap.set("noakirel", new User("noakirel", "111111", "noa@gmail.com", "noa", "img.jpg"));
    myMap.set("yonitlevi", new User("yonitlevi", "202020", "yonit@gmail.com", "yonit", "img.jpg"));

    const [user, setUser] = useState({username: "", password: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (myMap.get(details.username).password == details.password) {
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
        console.log(details);

        if (myMap.get(details.username)) {
            console.log('The username is already exist!');
            return true;
        } else {
            myMap.set(details.username, new User(details.username, details.password, details.email, details.nickname, details.image));
            return false;
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({username: '', password: ''});
    }

    return (
        <div className={"center"}>
            <Router>
                <Routes>
                    <Route path={"/Chats"} element={<Chats/>}></Route>
                    <Route path={"/"} element={<SignIn Login={Login} error={error}/>}></Route>
                    <Route path={"/SignUp"} element={<SignUp Register={Register}/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
