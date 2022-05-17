import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Chats from "./Chats/Chats"
import defaultImage from "./Pictures/icon-user-default.png"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react';

export const localhost = 'http://localhost:7265/'



function App() {

    const [username, setUsername] = useState({username: "", password: ""});
    const [nickname, setNickname] = useState("");

    async function find(name) {
        const res = await fetch(localhost + 'api/contacts/' + name)
        return res.ok;
    }


    const Logout = () => {
        setUsername({username: '', password: ''});
    }

    return (
        <div className={"center"}>
            <Router>
                <Routes>
                    <Route path={"/Chats"} element={<Chats username={username.username} nickname={nickname} Logout={Logout}/>}/>
                    <Route path={"/"} element={<SignIn setNickname={setNickname} setUsername={setUsername}/>}/>
                    <Route path={"/SignUp"} element={<SignUp setNickname={setNickname} setUsername={setUsername}/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
