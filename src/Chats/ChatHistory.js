import {myMap} from "../App";

function ChatHistory({chat, setFriendUsername, setMessageList, user, photo, name, date, message}) {

    const DisplayChat = function () {
        const bar = document.getElementById("ChatBar");
        if (bar.style.display !== "none") {
            bar.style.display = "block";
            document.getElementById("BarImage").src = photo;
            document.getElementById("BarName").innerText = name;
        }
        const toolbox = document.getElementById("toolbox");
        if (toolbox.style.display !== "none") {
            toolbox.style.display = "block";
        }
        const li = document.getElementById("chat-msgs");
        if (li.style.display !== "none") {
            li.style.display = "block";
        }
        setMessageList(chat);
        setFriendUsername(myMap.get(user));
    }

    return (
        <button className="list-group-item list-group-item-action select-friend" id={user} data-bs-toggle="list" onClick={DisplayChat}
                role="tab" aria-controls="list-home">
            <div>
                <div>
                    <div id={"profile-picture-friend"}>
                        <img className="UserImage" src={photo}/>
                    </div>
                    <div id={"friend-details"}>
                        <div id={"friend-name-message"}>
                            <div id={"nickname-friend"}> {name} </div>
                            <div id={"date-friend"}> {date}</div>
                        </div>
                        <div className="history-message" id={"message-friend"}> {message} </div>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default ChatHistory;