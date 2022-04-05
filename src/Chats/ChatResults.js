import Conversation from "./Conversation";

function ChatResults({msgs}) {

    const conversation = msgs.map(((datails, key) => {
        return <Conversation {...datails} key={key} />
    }));

    return(
        <div className="Chat">
            {conversation}
        </div>
    )
}

export default ChatResults