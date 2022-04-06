import Conversation from "./Conversation";

function ChatResults({msgs}) {

    // const conversation = ;
    return (
        <ul className="Chat">
            {msgs.map((details, key) => (
                <li key={key}>{details}</li>
                ))}
        </ul>
    )
}

export default ChatResults