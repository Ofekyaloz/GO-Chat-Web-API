function ChatMsgs({MessageList}) {

    return (
        <ul id="chat-msgs" className="Chat">
            { MessageList.map((msg, key) => (
                <>
                    <li className={"d-flex justify-content-end right-msg"}
                        key={key}>
                        <div
                            className={"right-content chat-bubble chat-bubble-right"}
                            key={key}>
                            <div>
                                {msg.content}
                            </div>
                            <div className="msg-date">
                                {msg.created}
                                {/*{msg.message.date.getHours()}:{msg.message.date.getMinutes() < 10 ? '0' : ''}{msg.message.date.getMinutes()}*/}
                            </div>
                        </div>
                    </li>
                </>
            ))}
        </ul>
    )
}

export default ChatMsgs