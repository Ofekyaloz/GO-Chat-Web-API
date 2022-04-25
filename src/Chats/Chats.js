import './Chats.css';
import ChatHistory from './ChatHistory.js'
import LeftMenu from "./LeftMenu";
import Toolbox from "./Toolbox";
import {useState} from "react";
import NewContactModal from "../Modal/newContactModal";
import {myMap} from "../App";
import ChatMsgs from "./ChatMsgs";
import Message from "./Message";
import {wait} from "@testing-library/user-event/dist/utils";

function Chats({username, Logout}) {
    const user = myMap.get(username.username);
    let [FriendUser, setFriendUser] = useState('');
    let chat = user.friends.get(FriendUser.username);
    if (chat === undefined) {
        chat = []
    }
    const [MessageList, setMessageList] = useState(chat);

    let contacts = user.friends.keys();
    const [ContactsList, setContactsList] = useState(contacts);

    const HistoryList = (Array.from(contacts).reverse()).map((name, key) => {
        const chat = user.friends.get(name);
        const friend = myMap.get(name);
        // if the chat is undefined or has no message.
        if (chat === undefined || chat.length === 0) {
            return <ChatHistory setFriendUsername={setFriendUser} chat={chat} setMessageList={setMessageList}
                                photo={friend.img} message={" "} date={" "} user={friend.username}
                                name={friend.nickname} frienUserName={friend.username} key={key}/>
        }
        // get the last message to present it in the history
        let last_message = chat.at(chat.length - 1).message;
        let content = last_message.type;

        // if the message is text presents the content else just the type of the message.
        if (content === "text") {
            content = last_message.content;
        } else if (content === "photo") {
            content = <>
                <i className="bi bi-image"/>
                <span className="m-3"> photo </span>
            </>;
        } else if (content === "video") {
            content = <>
                <i className="bi bi-camera-video"/>
                <span className="m-3"> video </span>
            </>;
        } else if (content === "audio") {
            content = <>
                <i className="bi bi-file-earmark-music"/>
                <span className="m-3"> audio </span>
            </>;
        }
        let x = last_message.date.getMinutes() < 10 ? '0' : '';
        return <ChatHistory setMessageList={setMessageList} photo={friend.img} chat={chat} user={friend.username}
                            setFriendUsername={setFriendUser} message={content} key={key} name={friend.nickname}
                            date={last_message.date.getHours().toString() + ":" + x + last_message.date.getMinutes().toString()}/>
    });

    // Add the new message to the user and his friend and scroll down the chat.
    const handelAddMessage = (newMessage) => {
        chat.push({message: newMessage});
        setMessageList((chat).filter((msg) => msg));
        let friendMessage = new Message(newMessage.content, false, newMessage.date, newMessage.type);
        FriendUser.friends.get(user.username).push({message: friendMessage});
        setContactsList(user.friends.keys());
        wait(100).then(() =>  document.getElementsByClassName('Chat')[0].scrollTop = document.getElementsByClassName('Chat')[0].scrollHeight)
    }


    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-4 d-flex LeftSide"}>

                    <div className={"d-flex col-12"} id={"UserInfo"}>
                        <div className="col-2">
                            <img className="UserImage" src={user.img}/>
                        </div>
                        <div className="col-8 m-2 ContactName" id="UserName">
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

                    <ChatMsgs MessageList={MessageList}/>

                    <Toolbox handelAddMessage={handelAddMessage}/>

                </div>
            </div>
        </div>
    );
}

export default Chats;