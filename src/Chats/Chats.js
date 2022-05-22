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
import $ from "jquery";

function Chats({username, nickname, photo, token, Logout}) {
    let [Friend, setFriend] = useState({username: '', server: ''});

    const [ContactsList, setContactsList] = useState([]);

    useEffect(() => {
        (async function () {

            const data = await $.ajax({
                url: 'https://localhost:7265/api/Contacts',
                type: 'GET',
                contentType: "application/json",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                }
            })
            setContactsList(data);
        })();
    }, []);

    const [MessageList, setMessageList] = useState([]);

    useEffect(() => {
        (async function () {
            if (Friend.username === '') {
                return;
            }
            const url = 'https://localhost:7265/api/Contacts/' + Friend.username + '/messages'
            const data = await $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                }
            })
            setMessageList(data);
        })();
    }, [Friend.username]);

    const HistoryList = (Array.from(ContactsList).reverse()).map((contact, key) => {
        const last = contact.last;
        // if the chat is undefined or has no message.
        if (last === undefined || last === '') {
            return <ChatHistory setFriend={setFriend} server={contact.server} message={" "} date={" "} key={key}
                                friendUser={contact.id} photo={" "} friendNickname={contact.name}/>
        }

        return <ChatHistory photo={" "} friendUser={contact.id} server={contact.server} setFriend={setFriend} key={key}
                            message={contact.last} friendNickname={contact.name} date={contact.lastdate}/>
    });

    // Add the new message to the user and his friend and scroll down the chat.
    const handelAddMessage = (newMessage) => {
        const url = localhost + 'api/Contacts/' + Friend.username + '/Messages';
        console.log("content =", newMessage.content);
        $.ajax({
            url: url,
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({content: newMessage.content}),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token)
            },
            success: function () {
                $.ajax({
                    url: url, type: 'GET', contentType: "application/json",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                    },
                    success: async function (data) {
                        console.log(data)
                        setMessageList(await data)
                    }
                })
            },
            error: function (e) {
                console.log(e)
            }
        })

        // transfer
        const url2 = Friend.server.endsWith('/') ? Friend.server + 'api/transfer' : Friend.server + '/api/transfer';
        $.ajax({
            url: url2, type: 'POST', contentType: "application/json", dataType: JSON.stringify({
                from: username, to: Friend.username, content: newMessage.content
            }),
        })

        wait(
            100).then(() => document.getElementsByClassName('Chat')[0].scrollTop = document.getElementsByClassName('Chat')[0].scrollHeight)
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
                            <NewContactModal setContactsList={setContactsList} thisUser={username} token={token}/>
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