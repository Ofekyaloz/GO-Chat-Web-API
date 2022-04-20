function ChatMsgs({MessageList}) {

    function adding(msg) {
        if (msg.message.type === "photo" || msg.message.type === "video") {
            return (
              <>
                  <li className={"space"}/>
              </>
            );
        }
    }

    return (
        <ul id="chat-msgs" className="Chat">
            {MessageList.map((msg, key) => (
                <>
                    <li className={msg.message.myMsg ? "right-msg" : "left-msg"} key={key}>
                        <div>{msg.message.content} </div>
                        <div className="msg-date">
                            {msg.message.date.getHours()}:{msg.message.date.getMinutes() < 10 ? '0' : ''}{msg.message.date.getMinutes()}
                        </div>
                    </li>
                    <br/><br/><br/>
                    {/*{adding(msg)}*/}
                </>
            ))}
        </ul>
    )
}

export default ChatMsgs