import './Chats.css';
import ChatHistory from './ChatHistory.js'
import history from "./history";
import LeftMenu from "./LeftMenu";
import Toolbox from "./Toolbox";
import {useState} from "react";
import NewContactModal from "../Modal/newContactModal";
import {myMap} from "../App";
import Message from "./Message";

function Chats({username, Logout}) {

    const user = myMap.get(username.username);

    let MessagesArray = [{message: new Message("abcd", true, new Date())},
        {message: new Message("acd", true, new Date())}];

    const [MessageList, setMessageList] = useState(MessagesArray);

    const handelAddMessage = (newMessage) => {
        setMessageList((prevMessages) => [
            ...prevMessages, {message: newMessage}
        ]);
    }
    console.log("MessageList=",MessageList, MessageList);

    const HistoryList = (Array.from(user.friends.keys()).reverse()).map((name, key) => {
        // console.log("name=", name)
        const chat = user.friends.get(name);
        // console.log("chat=", chat)
        const friend = myMap.get(name);
        // console.log("friend=", friend)
        if (chat === undefined || chat.length === 0) {
            // console.log("chat empty")
            return <ChatHistory user={user} setMessageList={setMessageList} photo={friend.img} message={" "} date={" "}
                                name={friend.nickname} key={key}/>
        }
        // console.log("chat not empty")
        let last_message = chat.at(chat.length - 1);
        let x = last_message.message.date.getMinutes() < 10 ? '0' : '' + last_message.message.date.getMinutes().toString();
        return <ChatHistory user={user} setMessageList={setMessageList} photo={friend.img}
                            message={last_message.message.content} name={friend.nickname} key={key}
                            date={last_message.message.date.getHours().toString() + ":" + x}/>

    });

    const [ContactsList, setContactsList] = useState(history);

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
                            <NewContactModal setContactsList={setContactsList} user={user} history={history}/>
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

                    <ul id="chat-msgs" className="Chat">
                        {MessageList.map((msg, key) => (
                            <li className={msg.message.myMsg ? "right" : "left"} key={key}>
                                <div>{msg.message.content} </div>
                                <div className="msg-date">
                                    {msg.message.date.getHours()}:{msg.message.date.getMinutes() < 10 ? '0' : ''}
                                    {msg.message.date.getMinutes()}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <Toolbox user={user} MessageList={MessageList} handelAddMessage={handelAddMessage}/>

                </div>
            </div>
        </div>
    );
}

export default Chats;