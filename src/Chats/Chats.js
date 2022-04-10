import './Chats.css';
import img1 from '../Pictures/img1.jpg'
import ChatHistory from './ChatHistory.js'
import history from "./history";
import LeftMenu from "./LeftMenu";
import Toolbox from "./Toolbox";
import {useState} from "react";
import msgs from "./msgs";
import ChatMsgs from "./ChatMsgs";
import NewContactModal from "../Modal/newContactModal";
import {myMap} from "../App";

function Chats({username, Logout}) {

    const user = myMap.get(username.username);

    const HistoryList = (Array.from(user.friends.keys())).map((name, key) => {
        console.log("name=", name)
        const chat = user.friends.get(name);
        console.log("chat=", chat)
        const tmpuser = myMap.get(name);
        console.log("tmpuser=", tmpuser)

        if (chat === undefined || chat.length === 0) {
            console.log("chat empty")
            return <ChatHistory photo={tmpuser.img} message={""} date={""} name={tmpuser.nickname} key={key}/>
        } else {
            console.log("chat not empty")
            let last_message = chat.at(chat.length - 1);
            let x = last_message.date.getMinutes() < 10 ? '0' : '';
            return <ChatHistory photo={tmpuser.img} message={last_message.content} name={tmpuser.nickname} key={key}
                                date={last_message.date.getHours().toString() + ":" + x + last_message.date.getMinutes().toString()}/>
        }
    });

    const [ContactsList, setContactsList] = useState(history);

    const [MessageList, setMessageList] = useState(msgs);

    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-4 d-flex LeftSide"}>

                    <div className={"d-flex col-12"} id={"UserInfo"}>
                        <div className="col-2">
                            <img className="UserImage" src={user.img}/>
                        </div>
                        <div className="col-7 m-2 ContactName" id="UserName">
                            <span className="m-3"> {user.nickname} </span>
                            <LeftMenu Logout={Logout}/>
                            <NewContactModal setContactsList={setContactsList} user={user}/>
                        </div>

                    </div>

                    <div className="list-group ChatHistory" id="list-tab" role="tablist">
                        {HistoryList}
                    </div>
                </div>

                <div className={"col-8 d-flex"} id={"ChatBlock"}>

                    <div id="ChatBar">
                        <div className="m-1">
                            <img className="UserImage" id="BarImage"/>
                            <span className="ContactName" id={"BarName"}/>
                        </div>
                    </div>

                    <ChatMsgs msgs={MessageList}/>

                    <Toolbox user={user} msgs={MessageList} setMessageList={setMessageList}/>

                </div>
            </div>
        </div>
    );
}

export default Chats;