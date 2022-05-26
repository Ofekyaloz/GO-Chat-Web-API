import './Chats.css';
import LeftMenu from "./LeftMenu";
import Toolbox from "./Toolbox";
import {useEffect, useState} from "react";
import NewContactModal from "../Modal/newContactModal";
import {localhost} from "../App";
import ChatMsgs from "./ChatMsgs";
import defaultImage from "../Pictures/icon-user-default.png"
import $ from "jquery";
import {HubConnectionBuilder} from "@microsoft/signalr";
import DisplayChat from "./DisplayChat"

function Chats({username, nickname, photo, token, Logout}) {
    let [Friend, setFriend] = useState({username: '', server: ''});

    const [ContactsList, setContactsList] = useState([]);
    const [MessageList, setMessageList] = useState([]);
    const [connectionId, setConnectionId] = useState('');
    const [newUpdate, setNewUpdate] = useState(0);

    // set the connectionId and get updates
    useEffect(() => {
        (async function () {
            const url = localhost + 'MyHub'
            const connection = new HubConnectionBuilder()
                .withUrl(url)
                .withAutomaticReconnect()
                .build();
            connection.start()
                .then(() => {
                    let tmp = 0
                    connection.on('MessageReceived', () => {
                        tmp = tmp + 1
                        setNewUpdate(tmp)
                    })
                    connection.invoke('GetConnectionId').then(function (connectionId) {
                        setConnectionId(connectionId)
                    })
                })
        })();
    }, [])

    useEffect(() => {
        const url = localhost + 'api/users/Connection'
        $.ajax({
            url: url,
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({"connectionId": connectionId}),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token)
            },
        })
    }, [connectionId])

    // Get contacts
    useEffect(() => {
        (async function () {
            const url = localhost + 'api/Contacts'
            const data = await $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                }
            })
            setContactsList(data);
        })();
    }, [MessageList, newUpdate]);

    // Get messages
    useEffect(() => {
        (async function () {
            if (Friend.username === '') {
                return;
            }
            const url = localhost + 'api/Contacts/' + Friend.username + '/messages'
            const data = await $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
                }
            })
            setMessageList(data);
            document.getElementsByClassName('Chat')[0].scrollTop = document.getElementsByClassName('Chat')[0].scrollHeight
        })();
    }, [Friend.username, newUpdate]);


    const HistoryList =  ContactsList === [] || ContactsList === undefined ? "" :
        (Array.from(ContactsList).reverse()).map((contact, key) => {
        return (
            <button className="list-group-item list-group-item-action" id={contact.id} data-bs-toggle="list"
                    onClick={() => DisplayChat(setFriend, contact.id, " ", contact.name, contact.server)} role="tab"
                    aria-controls="list-home" key={contact.name}>
                <div>
                    <div className="row">
                        <div className="col-3" id={"profile-picture-friend"}>
                            <img className="UserImage" src={contact.photo} srcSet={defaultImage}/>
                        </div>
                        <div className="col-9" id={"friend-details"}>
                            <div className="row">
                                <div className="col-8 d-flex ContactName" id={"nickname-friend"}> {contact.name} </div>
                                <div className="col-4" id={"date-friend"}> {contact.lastdate}</div>
                            </div>
                            <div className="history-message" id={"message-friend"}> {contact.last} </div>
                        </div>
                    </div>
                </div>
            </button>
        )
    });

    // Add the new message to the user and his friend and scroll down the chat.
    const handelAddMessage = async (newMessage) => {
        const url = localhost + 'api/Contacts/' + Friend.username + '/Messages';
        await $.ajax({
            url: url,
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({content: newMessage.content}),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token)
            },
        })

        // transfer
        const url2 = Friend.server.endsWith('/') ? 'https://' + Friend.server + 'api/transfer' : 'https://' + Friend.server + '/api/transfer';
        await $.ajax({
            url: url2, type: 'POST', contentType: "application/json", data: JSON.stringify({
                "from": username, "to": Friend.username, "content": newMessage.content
            }),
        })

        // Get the new messages
        await $.ajax({
            url: url, type: 'GET', contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token)
            },
            success: function (data) {
                setMessageList(data)
            }
        }).then(() => document.getElementsByClassName('Chat')[0].scrollTop = document.getElementsByClassName('Chat')[0].scrollHeight)
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