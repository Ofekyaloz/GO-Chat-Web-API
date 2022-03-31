import './Chats.css';

function Chats() {
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-4"}>
                    <div id={"SearchUser"} className={"input-group flex-nowrap"}>
                        {/*search icon*/}
                        <span className={"input-group-text"} id={"addon-wrapping"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                        <input type="text" className={"form-control"} placeholder="Username" aria-label="Username"
                               aria-describedby="addon-wrapping" maxLength={30}></input>
                    </div>


                    <div className="list-group ChatHistory align-items-center" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action m-1" id="list-home-list"
                           data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
                        <a className="list-group-item list-group-item-action" id="list-profile-list"
                           data-bs-toggle="list" href="#list-profile" role="tab"
                           aria-controls="list-profile">Profile</a>
                        <a className="list-group-item list-group-item-action" id="list-messages-list"
                           data-bs-toggle="list" href="#list-messages" role="tab"
                           aria-controls="list-messages">Messages</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list"
                           data-bs-toggle="list" href="#list-settings" role="tab"
                           aria-controls="list-settings">Settings</a>
                    </div>


                </div>


                <div className={"col-8"} id={"ChatBlock"}>
                    aaaaaa
                </div>
            </div>
        </div>
    );
}

export default Chats;