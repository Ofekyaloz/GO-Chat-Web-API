import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Chats from "./Chats/Chats"
import logo from "./Pictures/logo.png"

import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Switch} from "react-router-dom";
import {useState} from 'react';

function App() {

    const usersList = [{
        username: "giligutfeld",
        password: "123456"
    }, {
        username: "ofekyaloz",
        password: "234567"
    }, {
        username: "leomessi",
        password: "101010"
    }, {
        username: "noakirel",
        password: "111111"
    }, {
        username: "yonitlevi",
        password: "202020"
    }];

    const myMap = new Map();
    myMap.set("giligutfeld", "123456");
    myMap.set("ofekyaloz", "234567");
    myMap.set("leomessi", "101010");
    myMap.set("noakirel", "111111");
    myMap.set("yonitlevi", "202020");

    const [user, setUser] = useState({username: "", password: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (myMap.get(details.username) == details.password) {
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
    const Logout = () => {
        console.log("Logout");
        setUser({username: '', password: ''});
    }

    return (
        <div>
            <Router>
                <Routes>
                    <Route path={"/Chats"} element={<Chats/>}></Route>
                    <Route path={"/"} element={<SignIn Login={Login} error={error}/>}></Route>
                    <Route path={"/SignUp"} element={<SignUp/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
