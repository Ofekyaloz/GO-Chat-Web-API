function ChatMsgs({MessageList}) {

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
                    <br></br>
                    <br></br>
                    <br></br>
                </>
            ))}
        </ul>
    )
}

export default ChatMsgs