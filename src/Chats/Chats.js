import './Chats.css';
import ChatHistory from './ChatHistory.js'
import LeftMenu from "./LeftMenu";
import Toolbox from "./Toolbox";
import {useState} from "react";
import NewContactModal from "../Modal/newContactModal";
import {localhost} from "../App";
import ChatMsgs from "./ChatMsgs";
import {wait} from "@testing-library/user-event/dist/utils";
import axios from "axios";

function Chats({username, nickname, Logout}) {
    let [FriendUser, setFriendUser] = useState('');

    // let chat = user.friends.get(FriendUser.username);
    // if (chat === undefined) {
    //     chat = []
    // }

    const [MessageList, setMessageList] = useState('');



    // useEffect(async () => {
    //     const res = await fetch(localhost + 'api/contacts/' + FriendUser + '/messages')
    //     if (res.ok) {
    //         const data = await res.json()
    //         setMessageList(data);
    //     }
    // }, []);


    // let contacts = user.friends.keys();
    const [ContactsList, setContactsList] = useState(async () => {
        try {
            // const res = await fetch(localhost + 'api/contacts/')
            const res = await fetch(`https://api.randomuser.me/`);
            const data = await res.json()
            console.log("in",res,data.results)
            setContactsList(data.results)
        } catch (e) {
            return [];
        }
    });

    console.log("out",ContactsList);

    axios.get('https://localhost:7265/api/Contacts',
        {withCredentials: true}).then(res =>
        console.log("contactsssssssss",res.data)
    )

    // useEffect(() => {
    //     (async function() {
    //         try {
    //             const response = await fetch(
    //                 `https://localhost:7265/api/Contacts`
    //             );
    //             const json = await response.json();
    //             console.log(json.results[0].name.title)
    //             setContactsList(json);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     })();
    // }, []);

    const HistoryList = (Array.from(ContactsList).reverse()).map( (name, key) => {
        console.log("innnnnn")
        const url1 = localhost + 'api/contacts/' + name + 'messages/'
        const chat =  fetch(url1).then(
            async res => {
                if (res.ok)
                    return await res.json();
                else
                    return undefined;
            })
        const url2 = localhost + 'api/contacts/' + name;
        const friend =  fetch(url2).then(
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
                            setFriendUsername={setFriendUser} message={friend.last} key={key}
                            friendNickname={friend.nickname}
                            date={friend.lastdate}/>


        // let x = last_message.getMinutes() < 10 ? '0' : '';
        // return <ChatHistory setMessageList={setMessageList} photo={friend.img} chat={chat} user={friend.username}
        //                     setFriendUsername={setFriendUser} message={content} key={key} name={friend.nickname}
        //                     date={last_message.date.getHours().toString() + ":" + x + last_message.date.getMinutes().toString()}/>
    });

    // Add the new message to the user and his friend and scroll down the chat.
    const handelAddMessage = (newMessage) => {
        const url = localhost + 'api/contacts' + FriendUser + '/messages/';
        axios.post(url,
            {
                Content: newMessage.content
            })

        const jsonData = {
            Content: newMessage.content
        };

        fetch(url, {  
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(jsonData) 
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
                            {/*<img className="UserImage" src={user.photo}/>*/}
                        </div>
                        <div className="col-8 m-2 ContactName" id="UserName">
                            <span className="m-3"> {nickname} </span>
                            <LeftMenu Logout={Logout}/>
                            <NewContactModal setContactsList={setContactsList} user={username} myiD={username}/>
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