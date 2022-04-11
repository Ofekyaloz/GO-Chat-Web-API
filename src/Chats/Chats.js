import './Chats.css';
import ChatHistory from './ChatHistory.js'
import LeftMenu from "./LeftMenu";
import Toolbox from "./Toolbox";
import {useState} from "react";
import NewContactModal from "../Modal/newContactModal";
import {myMap} from "../App";
import ChatMsgs from "./ChatMsgs";

function Chats({username, Logout}) {

    const user = myMap.get(username.username);
    let [FriendUser, setFriendUser] = useState('');

    const [MessageList, setMessageList] = useState([]);

    const handelAddMessage = (newMessage) => {
        user.friends.get(FriendUser.username).push({message : newMessage});
        setMessageList((prevMessages) => [
            ...prevMessages, {message: newMessage}
        ]);
        // let friendMessage = new Message(newMessage.content, false, newMessage.date);
        // console.log(FriendUser.friends.get(username))
        // console.log(myMap);
        // FriendUser.friends.get(username).push({messages : friendMessage});
    }
    // console.log("MessageList=", MessageList);

    const [ContactsList, setContactsList] = useState([]);
    // setContactsList(user.friends.keys());

    const HistoryList = (Array.from(user.friends.keys()).reverse()).map((name, key) => {
        const chat = user.friends.get(name);
        const friend = myMap.get(name);
        if (chat === undefined || chat.length === 0) {
            return <ChatHistory setFriendUsername={setFriendUser} chat={chat} setMessageList={setMessageList}
                                photo={friend.img} message={" "} date={" "} user={friend.username}
                                name={friend.nickname} frienUserName={friend.username} key={key}/>
        }
        let last_message = chat.at(chat.length - 1);
        let x = last_message.message.date.getMinutes() < 10 ? '0' : ''+last_message.message.date.getMinutes().toString();
        return <ChatHistory setMessageList={setMessageList} photo={friend.img} chat={chat} user={friend.username}
                            setFriendUsername={setFriendUser} message={last_message.message.content} key={key}
                            name={friend.nickname} date={last_message.message.date.getHours().toString() + ":" + x}/>
    });

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

                    <ChatMsgs MessageList={MessageList} />

                    <Toolbox user={user} MessageList={MessageList} handelAddMessage={handelAddMessage}/>

                </div>
            </div>
        </div>
    );
}

export default Chats;