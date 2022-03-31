import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Chats from "./Chats"

import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<SignIn/>}></Route>
                <Route path={"/SignUp"} element={<SignUp/>}></Route>
                <Route path={"/Chats"} element={<Chats/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
