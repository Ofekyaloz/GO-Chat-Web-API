import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Chats from "./Chats/Chats"

import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Switch} from "react-router-dom";
import {useState} from 'react';

function App() {

    const usersList = [];

    const admin = {
        username: "giligutfeld",
        password: "123456"
    };

    const [user, setUser] = useState({username: "", password: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.username == admin.username && details.password == admin.password) {
            console.log('Logged in');
            setUser({
                username: details.username,
                password: details.password
            });
            return true;
        } else {
            console.log('Details are wrong!');
            return false;
        }
    }
    const Logout = () => {
        console.log("Logout");
        setUser({username: '', password: ''});
    }

    return (
        <Router>
            <Routes>
                <Route path={"/Chats"} element={<Chats/>}></Route>
                <Route path={"/"} element={<SignIn Login={Login} error={error}/>}></Route>
                <Route path={"/SignUp"} element={<SignUp/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
