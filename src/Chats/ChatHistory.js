import defaultImage from "../Pictures/icon-user-default.png"

function ChatHistory({setFriend, friendUser, photo, friendNickname, date, message, server, key}) {

    const DisplayChat = function () {
        const bar = document.getElementById("ChatBar");
        if (bar.style.display !== "none") {
            bar.style.display = "block";
            if (photo === " " || photo === "") {
                document.getElementById("BarImage").src = defaultImage;
            } else {
                document.getElementById("BarImage").src = photo;
            }
            document.getElementById("BarName").innerText = friendNickname;
        }

        const toolbox = document.getElementById("toolbox");
        if (toolbox.style.display !== "none") {
            toolbox.style.display = "block";
        }
        const li = document.getElementById("chat-msgs");
        if (li.style.display !== "none") {
            li.style.display = "block";
        }
        setFriend({username: friendUser, server: server});
    }

    return (
        <button className="list-group-item list-group-item-action" id={friendUser} data-bs-toggle="list"
                onClick={DisplayChat} role="tab" aria-controls="list-home" key={key}>
            <div>
                <div className="row">
                    <div className="col-3" id={"profile-picture-friend"}>
                        <img className="UserImage" src={photo} srcSet={defaultImage}/>
                    </div>
                    <div className="col-9" id={"friend-details"}>
                        <div className="row">
                            <div className="col-8 d-flex ContactName" id={"nickname-friend"}> {friendNickname} </div>
                            <div className="col-4" id={"date-friend"}> {date}</div>
                        </div>
                        <div className="history-message" id={"message-friend"}> {message} </div>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default ChatHistory;