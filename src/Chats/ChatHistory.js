function ChatHistory({user, setMessageList, photo, name, date, message}) {

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
            let msgs = user.friends.get(name);

            console.log(user.friends.get(name), " in ChatHistory")
        }
    }

    return (
        <button className="list-group-item list-group-item-action" data-bs-toggle="list" onClick={DisplayChat}
           role="tab" aria-controls="list-home">
            <div>
                <div className="row">
                    <div className="col-3">
                        <img className="UserImage" src={photo}/>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-8 d-flex ContactName"> {name} </div>
                            <div className="col-4"> {date}</div>
                        </div>
                        <div className="history-message"> {message} </div>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default ChatHistory;