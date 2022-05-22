import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Chats from "./Chats/Chats"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react';

export const localhost = 'https://localhost:7265/'


function App() {

    const [username, setUsername] = useState({username: "", password: ""});
    const [nickname, setNickname] = useState("");
    const [photo, setPhoto] = useState("");
    const [token, setToken] = useState("");

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
                    <Route path={"/Chats"}
                           element={<Chats username={username.username} nickname={nickname} photo={photo} token={token} Logout={Logout}/>}/>
                    <Route path={"/"}
                           element={<SignIn setNickname={setNickname} setUsername={setUsername} setToken={setToken} setPhoto={setPhoto}/>}/>
                    <Route path={"/SignUp"}
                           element={<SignUp setNickname={setNickname} setUsername={setUsername} setToken={setToken} setPhoto={setPhoto}/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
