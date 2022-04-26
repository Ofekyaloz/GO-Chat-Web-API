function ChatMsgs({MessageList}) {

    return (
        <ul id="chat-msgs" className="Chat">
            {MessageList.map((msg, key) => (
                <li className={msg.message.myMsg ? "d-flex justify-content-end right-msg" : "d-flex justify-content-start"}
                    key={key}>
                    <div className={msg.message.myMsg ? "right-content chat-bubble chat-bubble-right" : "left-content chat-bubble chat-bubble-left"} key={key}>
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