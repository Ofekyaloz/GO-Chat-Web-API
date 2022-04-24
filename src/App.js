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
import song from "./Pictures/bb.mp3"

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
    myMap.set("bibinetanyahu", new User("bibinetanyahu", "rakbibi", "bibihamelch.gov.il", "BiBi", bibi));
    myMap.set("edenhason", new User("edenhason", "shemishoyatoroti", "edenh@gmail.com", "Eden", eden));
    myMap.set("omeradam", new User("omeradam", "shigramefoert", "omeradam@walla.com", "Omer", omer));
    myMap.set("leomessi", new User("leomessi", "101010", "leo@gmail.com", "leo", defaultImage));
    myMap.set("noakirel", new User("noakirel", "111111", "noa@gmail.com", "Noa", squirrel));

    const ofekchat = myMap.get("ofekyaloz").friends;
    ofekchat.set("giligutfeld", []);
    ofekchat.get("giligutfeld").push({message: new Message("Hi Ofek!", true, new Date(), "text")});
    ofekchat.get("giligutfeld").push({message: new Message("How are you?", true, new Date(), "text")});
    ofekchat.get("giligutfeld").push({message: new Message("I'm great, Thanks!", false, new Date(), "text")});
    ofekchat.get("giligutfeld").push({message: new Message("And how are you?", false, new Date(), "text")});
    ofekchat.get("giligutfeld").push({message: new Message("Me too", true, new Date(), "text")});
    ofekchat.get("giligutfeld").push({message: new Message("I like this chat, its an amazing website and designed as well", true, new Date(), "text")});
    ofekchat.get("giligutfeld").push({message: new Message("Yep, I think its the best chat I ever used", false, new Date(), "text")});
    ofekchat.get("giligutfeld").push({message: new Message("Its like whatsapp but even better", false, new Date(), "text")});
    ofekchat.get("giligutfeld").push({message: new Message("See my new cat", true, new Date(), "text", "")});
    ofekchat.get("giligutfeld").push({message: new Message(<img src={cat} className={"Chat-Image"}/> , true, new Date(), "photo")});
    ofekchat.get("giligutfeld").push({message: new Message("Wow! he is so cute", false, new Date(), "text")});
    ofekchat.get("giligutfeld").push({message: new Message(":)", true, new Date(), "text")});

    const gilichat = myMap.get("giligutfeld").friends;
    gilichat.set("ofekyaloz", []);

    ofekchat.set("omeradam", []);
    ofekchat.get("omeradam").push({message: new Message("Hi Omer! I want to buy tickets to your show", true, new Date(), "text")});
    ofekchat.get("omeradam").push({message: new Message("Hi Ofek, because I like you, I will do it for you in sale", false, new Date(), "text")});
    ofekchat.get("omeradam").push({message: new Message("You can buy 2 tickets in only 800$", false, new Date(), "text")});
    ofekchat.get("omeradam").push({message: new Message(<audio controls className={"Chat-Audio"}><source src={song}></source></audio>, true, new Date(), "text")});
    ofekchat.get("omeradam").push({message: new Message("Ok, this is so worthy! I'll take it", true, new Date(), "text")});

    const [user, setUser] = useState({username: "", password: ""});
    const [error, setError] = useState("");
    let friendslist;
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

        if (details.image === "") {
            details.image = defaultImage;
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
