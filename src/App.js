import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Chats from "./Chats/Chats"
import defaultImage from "./Pictures/icon-user-default.png"
import cat from "./Pictures/cat.jpg"
import panda from "./Pictures/panda.jpg"
import squirrel from "./Pictures/squirrel.jpg"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import Message from "./Chats/Message";
import bibi from "./Pictures/Benjamin Netanyahu.jpg";
import eden from "./Pictures/Eden Hason.jpg";
import omer from "./Pictures/Omer Adam.webp";

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

    myMap.set("giligutfeld", new User("giligutfeld", "123456", "gili@gmail.com", "gili", cat));
    myMap.set("ofekyaloz", new User("ofekyaloz", "234567", "ofek@gmail.com", "Ofek", panda));
    myMap.set("benjaminnetanyahu", new User("benjaminnetanyahu", "rakbibi", "bibihamelch.gov.il", "BiBi", bibi));
    myMap.set("edenhason", new User("edenhason", "shemishoyatoroti", "edenh@gmail.com", "Eden", eden));
    myMap.set("omeradam", new User("omeradam", "shigramefoert", "omeradam@walla.com", "Omer", omer));

    myMap.set("leomessi", new User("leomessi", "101010", "leo@gmail.com", "leo", defaultImage));
    myMap.set("noakirel", new User("noakirel", "111111", "noa@gmail.com", "Noa", squirrel));

    const ofekandgili = myMap.get("ofekyaloz").friends;
    ofekandgili.set("giligutfeld", []);
    ofekandgili.get("giligutfeld").push({message: new Message("aaaa", true, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("bbbb", false, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("cccc", false, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("dddd", true, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("eeee", true, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("eeee", true, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("eeee", true, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("eeee", true, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("1234", false, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("1234", false, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("1234", false, new Date(), "text")});
    ofekandgili.get("giligutfeld").push({message: new Message("1234", false, new Date(), "text")});

    const giliandofek = myMap.get("giligutfeld").friends;
    giliandofek.set("ofekyaloz", []);

    const [user, setUser] = useState({username: "", password: ""});
    const [error, setError] = useState("");
    let friendslist
    let setFriendsList = function (username) {
        friendslist = myMap.get(username).friends.keys();
    }
    const Login = details => {
        console.log(details);

        if (myMap.get(details.username).password === details.password) {
            console.log('Logged in');
            setUser({
                username: details.username,
                password: details.password
            });
            setFriendsList(details.username);
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
                    <Route path={"/Chats"}
                           element={<Chats username={user} friendslist={friendslist} Logout={Logout}/>}/>
                    <Route path={"/"} element={<SignIn Login={Login} error={error}/>}/>
                    <Route path={"/SignUp"} element={<SignUp Register={Register}/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
