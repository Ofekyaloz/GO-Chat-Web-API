function ChatHistory({photo, name, date , message}) {
    return(
        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href=""
           role="tab" aria-controls="list-home">
            <div>
                <div className="row">
                    <div className="col-3">
                        <img className="UserImage" src={photo}/>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-8 d-flex ContactName"> {name} </div>
                            <div className="col-4"> {date}</div>
                        </div>
                        <div> {message}</div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ChatHistory;