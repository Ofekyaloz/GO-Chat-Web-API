import './Chats.css';
import ChatHistory from './ChatHistory.js'
import LeftMenu from "./LeftMenu";
import Toolbox from "./Toolbox";
import {useEffect, useState} from "react";
import NewContactModal from "../Modal/newContactModal";
import {localhost} from "../App";
import ChatMsgs from "./ChatMsgs";
import {wait} from "@testing-library/user-event/dist/utils";
import axios from "axios";
import defaultImage from "../Pictures/icon-user-default.png"

function Chats({username, nickname, photo, Logout}) {
    let [Friend, setFriend] = useState({username: '', server: ''});

    const [MessageList, setMessageList] = useState([]);

    // useEffect(async () => {
    //     const res = await fetch(localhost + 'api/contacts/' + Friend + '/messages')
    //     if (res.ok) {
    //         const data = await res.json()
    //         setMessageList(data);
    //     }
    // }, []);


    useEffect(() => {
        (async function () {
            try {
                const url = 'https://localhost:7265/api/Contacts/' + Friend.username + '/messages'
                console.log("url=", url)
                axios.get(url, {withCredentials: true}
                ).then(res => {
                    console.log("msgssssss", res.data); //
                    setMessageList(res.data);
                })
            } catch (e) {
                console.error(e);
            }
        })();
    }, [Friend.username]);


    const [ContactsList, setContactsList] = useState([]);

    useEffect(() => {
        (async function () {
            try {
                axios.get('https://localhost:7265/api/Contacts', {withCredentials: true}
                ).then(res => {
                    console.log("contactsssssssss", res.data); // {withCredentials: true}
                    setContactsList(res.data);
                })
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);


    const HistoryList = (Array.from(ContactsList).reverse()).map((contact, key) => {
        const last = contact.last;

        // if the chat is undefined or has no message.
        if (last === undefined || last === '') {
            return <ChatHistory setFriend={setFriend} server={contact.server}
                                message={" "} date={" "} friendUser={contact.id} photo={" "}
                                friendNickname={contact.name}/>
        }


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

        return <ChatHistory photo={" "} friendUser={contact.id} server={contact.server}
                            setFriend={setFriend} message={contact.last}
                            friendNickname={contact.name} date={contact.lastdate}/>
    });

    // Add the new message to the user and his friend and scroll down the chat.
    const handelAddMessage = (newMessage) => {
        const url = localhost + 'api/Contacts/' + Friend.username + '/Messages';
        axios.post(url,
            {
                content: newMessage.content
            }).then(axios.get(url).then(async res => setMessageList(await res.data)))

        // transfer
        const url2 = Friend.server.endsWith('/') ? Friend.server + 'api/transfer' : Friend.server + '/api/transfer';
        axios.post(url2,
            {from: username, to: Friend.username, content: newMessage.content})

        wait(100).then(() => document.getElementsByClassName('Chat')[0].scrollTop = document.getElementsByClassName('Chat')[0].scrollHeight)
    }


    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-4 d-flex LeftSide"}>

                    <div className={"d-flex col-12"} id={"UserInfo"}>
                        <div className="col-2">
                            <img className="UserImage" src={photo} srcSet={defaultImage}/>
                        </div>
                        <div className="col-8 m-2 ContactName" id="UserName">
                            <span className="m-3"> {nickname} </span>
                            <LeftMenu Logout={Logout}/>
                            <NewContactModal setContactsList={setContactsList} thisUser={username}/>
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