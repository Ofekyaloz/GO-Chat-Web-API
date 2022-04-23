class Message {

    constructor(content, amISend, date, type, size) {
        this.content = content;
        this.myMsg = amISend;
        this.date = date;
        this.type = type;
        if (size !== "") {
            this.size = size;
        }
    }
}

export default Message;