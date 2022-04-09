function ChatMsgs({msgs}) {
    return (
        <ul id="chat-msgs" className="Chat">
            {msgs.map((details, key) => (
                <li className={details.myMsg ? "right" : "left"} key={key}>
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