import './Chats.css';
import ChatHistory from './ChatHistory.js'
import LeftMenu from "./LeftMenu";
import Toolbox from "./Toolbox";
import {useEffect, useState} from "react";
import NewContactModal from "../Modal/newContactModal";
import {myMap} from "../App";
import ChatMsgs from "./ChatMsgs";
import Message from "./Message";
import {wait} from "@testing-library/user-event/dist/utils";

async function Chats({username, Logout}) {
    // const user = myMap.get(username.username);

    ///////////////////// adding
    const user = await fetch('https://localhost:7200/User/username').then(
        async res => await res.json()
    )


    let [FriendUser, setFriendUser] = useState('');

    // let chat = user.friends.get(FriendUser.username);
    // if (chat === undefined) {
    //     chat = []
    // }

    const [MessageList, setMessageList] = useState('');

    useEffect(async () => {
        const res = await fetch('https://localhost:7200/api/contacts/' + FriendUser + '/messages')
        if (res.ok) {
            const data = await res.json()
            setMessageList(data);
        }
    }, []);


    // let contacts = user.friends.keys();
    const [ContactsList, setContactsList] = useState([]);
    useEffect(async () => {
        const res = await fetch('https://localhost:7200/api/contacts/')
        const data = await res.json()
        setContactsList(data)
    })

    const HistoryList = (Array.from(ContactsList).reverse()).map(async (name, key) => {
        // const chat = user.friends.get(name);
        const chat = await fetch('http://localhost:7200/api/contacts/' + name + 'messages/').then(
            async res => {
                if (res.ok)
                    return await res.json();
                else
                    return undefined;
            })

        // const friend = myMap.get(name);
        const friend = await fetch('http://localhost:7200/api/contacts/' + name).then(
            async res => await res.json()
        )

        // if the chat is undefined or has no message.
        if (chat === undefined || chat.length === 0) {
            return <ChatHistory setFriendUsername={setFriendUser} setMessageList={setMessageList}
                                message={" "} date={" "} friendUser={friend.username} photo={" "}
                                friendNickname={friend.nickname} key={key}/>
        }
        // if (chat === undefined || chat.length === 0) {
        //     return <ChatHistory setFriendUsername={setFriendUser} chat={chat} setMessageList={setMessageList}
        //                         photo={friend.img} message={" "} date={" "} user={friend.username}
        //                         name={friend.nickname} frienUserName={friend.username} key={key}/>
        // }

        // get the last message to present it in the history
        // let last_message = chat.at(chat.length - 1).message;

        // let content = last_message.type;
        //
        // // if the message is text presents the content else just the type of the message.
        // if (content === "text") {
        //     content = last_message.content;
        // } else if (content === "photo") {
        //     content = <>
        //         <i className="bi bi-image"/>
        //         <span className="m-3"> photo </span>
        //     </>;
        // } else if (content === "video") {
        //     content = <>
        //         <i className="bi bi-camera-video"/>
        //         <span className="m-3"> video </span>
        //     </>;
        // } else if (content === "audio") {
        //     content = <>
        //         <i className="bi bi-file-earmark-music"/>
        //         <span className="m-3"> audio </span>
        //     </>;
        // }

        return <ChatHistory setMessageList={setMessageList} photo={" "} chat={chat} friendUser={friend.username}
                            setFriendUsername={setFriendUser} message={friend.last} key={key} friendNickname={friend.nickname}
                            date={friend.lastdate}/>


        // let x = last_message.getMinutes() < 10 ? '0' : '';
        // return <ChatHistory setMessageList={setMessageList} photo={friend.img} chat={chat} user={friend.username}
        //                     setFriendUsername={setFriendUser} message={content} key={key} name={friend.nickname}
        //                     date={last_message.date.getHours().toString() + ":" + x + last_message.date.getMinutes().toString()}/>
    });

    // Add the new message to the user and his friend and scroll down the chat.
    const handelAddMessage = (newMessage) => {
        const jsonData = {
            "Message": [{
                "content": newMessage.content
            }]
        };

        fetch('http://localhost:7200/api/contacts' + FriendUser + '/messages/', {  // Enter your IP address here
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
        });

        // chat.push({message: newMessage});
        // setMessageList((chat).filter((msg) => msg));
        // let friendMessage = new Message(newMessage.content, false, newMessage.date, newMessage.type);
        // FriendUser.friends.get(user.username).push({message: friendMessage});
        // setContactsList(user.friends.keys());

        setMessageList(v => v);
        wait(100).then(() => document.getElementsByClassName('Chat')[0].scrollTop = document.getElementsByClassName('Chat')[0].scrollHeight)
    }


    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-4 d-flex LeftSide"}>

                    <div className={"d-flex col-12"} id={"UserInfo"}>
                        <div className="col-2">
                            <img className="UserImage" src={user.photo}/>
                        </div>
                        <div className="col-8 m-2 ContactName" id="UserName">
                            <span className="m-3"> {user.nickname} </span>
                            <LeftMenu Logout={Logout}/>
                            <NewContactModal setContactsList={setContactsList} user={user} myiD={username}/>
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