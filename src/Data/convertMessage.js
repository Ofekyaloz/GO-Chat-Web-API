import Message from "../Chats/Message";

function convertMessage({fromUser, toUser, chat}) {
    const tmpChat = toUser.friends;
    tmpChat.set(fromUser.username, []);
    const newChat = tmpChat.get(fromUser.username);
    chat.map((msg, key) => {
        newChat.push({message : new Message(msg.content, !msg.amISend, msg.date)});
    });
}

export default convertMessage;