function ChatMsgs({msgs}) {
    return (
        <ul id="chat-msgs" className="Chat">
            {msgs.map((details, key) => (
                <li key={key}>
                    <div>{details.content} </div>
                    <div className="msg-date">
                        {details.date.getHours()}:{details.date.getMinutes() < 10? '0': ''}{details.date.getMinutes()}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ChatMsgs