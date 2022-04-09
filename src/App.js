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
        this.messages = new Map();
        this.chats = new Array();
    }
}


function App() {

    myMap.set("giligutfeld", new User("giligutfeld", "123456", "gili@gmail.com", "gili", defaultImage));
    myMap.set("ofekyaloz", new User("ofekyaloz", "234567", "ofek@gmail.com", "ofek", defaultImage));
    myMap.set("leomessi", new User("leomessi", "101010", "leo@gmail.com", "leo", "img.jpg"));
    myMap.set("noakirel", new User("noakirel", "111111", "noa@gmail.com", "noa", "img.jpg"));
    myMap.set("yonitlevi", new User("yonitlevi", "202020", "yonit@gmail.com", "yonit", "img.jpg"));

    myMap.get("ofekyaloz").messages.set("giligutfeld", [new Message("abcd", true, new Date()),
        new Message("acd", true, new Date()), new Message("ofek", true, new Date())]);
    myMap.get("ofekyaloz").chats.push("gili");

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
                    <Route path={"/Chats"} element={<Chats username={user} Logout={Logout}/>}></Route>
                    <Route path={"/"} element={<SignIn Login={Login} error={error}/>}></Route>
                    <Route path={"/SignUp"} element={<SignUp Register={Register}/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
