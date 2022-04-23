function ChatMsgs({MessageList}) {

    function setSize(size) {
        if (size === "50px") {
            return "260px";
        }
        return size;
    }


    return (
        <ul id="chat-msgs" className="Chat">
            {MessageList.map((msg, key) => (
                <li className={msg.message.myMsg ? "right-msg" : "left-msg"} key={key}
                    style={msg.message.type === "photo" || msg.message.type === "video" ? {height: setSize(msg.message.size)} : {height: "auto"}}>
                    {console.log(msg)}
                    <div className={msg.message.myMsg ? "right-content" : "left-content"} key={key}>
                        <div>
                            {msg.message.content}
                        </div>
                        <div className="msg-date">
                            {msg.message.date.getHours()}:{msg.message.date.getMinutes() < 10 ? '0' : ''}{msg.message.date.getMinutes()}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ChatMsgs