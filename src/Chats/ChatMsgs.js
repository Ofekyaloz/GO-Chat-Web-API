function ChatMsgs({MessageList}) {

    return (
        <ul id="chat-msgs" className="Chat">
            {MessageList.map((msg, key) => (
                <li className={msg.sent ? "d-flex justify-content-end" : "d-flex justify-content-start"} key={key}>
                    <div key={key}
                         className={msg.sent ? "right-content chat-bubble chat-bubble-right" : "left-content chat-bubble chat-bubble-left"}>
                        <div>
                            {msg.content}
                        </div>
                        <div className="msg-date">
                            {msg.created}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ChatMsgs