function ChatMsgs({msgs}) {

    return (
        <ul className="Chat">
            {msgs.map((details, key) => (
                <li key={key}>{details}</li>
            ))}
        </ul>
    )
}

export default ChatMsgs